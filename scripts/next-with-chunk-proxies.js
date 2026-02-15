#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function getNextBin() {
  const binName = process.platform === 'win32' ? 'next.cmd' : 'next';
  return path.join(process.cwd(), 'node_modules', '.bin', binName);
}

function syncServerChunkProxies() {
  try {
    const serverDir = path.join(process.cwd(), '.next', 'server');
    const chunksDir = path.join(serverDir, 'chunks');
    if (!fs.existsSync(chunksDir)) return;

    const entries = fs.readdirSync(chunksDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!/^\d+\.js$/.test(entry.name)) continue;

      const proxyPath = path.join(serverDir, entry.name);
      const target = `./chunks/${entry.name}`;
      const content = `// Auto-generated to fix Next.js server chunk resolution.\nmodule.exports = require(${JSON.stringify(
        target
      )});\n`;

      try {
        if (fs.existsSync(proxyPath)) continue;
        fs.writeFileSync(proxyPath, content);
      } catch {
        // ignore
      }
    }
  } catch {
    // ignore
  }
}

function run() {
  const mode = process.argv[2] || 'dev';
  const nextArgs = process.argv.slice(3);

  // Run once before starting Next (useful for `next start`).
  syncServerChunkProxies();

  const nextBin = getNextBin();
  const child = spawn(nextBin, [mode, ...nextArgs], {
    stdio: 'inherit',
    env: process.env,
  });

  const interval =
    mode === 'dev' ? setInterval(syncServerChunkProxies, 350) : null;

  // Run once shortly after to cover fast rebuilds (dev) / race conditions.
  setTimeout(syncServerChunkProxies, 750);

  const cleanup = () => {
    if (interval) clearInterval(interval);
  };

  child.on('exit', (code, signal) => {
    cleanup();
    if (signal) process.kill(process.pid, signal);
    process.exit(typeof code === 'number' ? code : 0);
  });

  const forward = (sig) => {
    try {
      child.kill(sig);
    } catch {
      // ignore
    }
  };

  process.on('SIGINT', () => forward('SIGINT'));
  process.on('SIGTERM', () => forward('SIGTERM'));
}

run();

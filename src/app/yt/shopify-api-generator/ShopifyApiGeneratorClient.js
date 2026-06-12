'use client';

import { useMemo, useState } from 'react';

const REDIRECT_URI = 'http://localhost/';

function normalizeShopDomain(value) {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return '';
  }

  const withoutProtocol = trimmed
    .replace(/^https?:\/\//, '')
    .replace(/^admin\.shopify\.com\/store\//, '');
  const host = withoutProtocol.split(/[/?#]/)[0];

  if (/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(host)) {
    return host;
  }

  if (/^[a-z0-9][a-z0-9-]*$/.test(host)) {
    return `${host}.myshopify.com`;
  }

  return '';
}

function createStateValue() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return Math.random().toString(36).slice(2);
}

function buildAuthorizationUrl(shopDomain, clientId, stateValue) {
  if (!shopDomain || !clientId.trim()) {
    return '';
  }

  const params = new URLSearchParams({
    client_id: clientId.trim(),
    redirect_uri: REDIRECT_URI,
    state: stateValue,
  });

  return `https://${shopDomain}/admin/oauth/authorize?${params.toString()}`;
}

function extractCodeFromCallback(value) {
  const compactValue = value.replace(/\\[rn]/g, '').replace(/\s+/g, '').trim();

  if (!compactValue) {
    return '';
  }

  const queryStart = compactValue.includes('?')
    ? compactValue.slice(compactValue.indexOf('?') + 1)
    : compactValue.replace(/^\?/, '');
  const params = new URLSearchParams(queryStart);

  return params.get('code') || '';
}

export default function ShopifyApiGeneratorClient() {
  const [shopInput, setShopInput] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [callbackUrl, setCallbackUrl] = useState('');
  const [stateValue, setStateValue] = useState(() => createStateValue());
  const [error, setError] = useState('');
  const [exchangeError, setExchangeError] = useState('');
  const [exchangeStatus, setExchangeStatus] = useState('');
  const [tokenResult, setTokenResult] = useState(null);
  const [copiedTarget, setCopiedTarget] = useState('');

  const shopDomain = useMemo(() => normalizeShopDomain(shopInput), [shopInput]);
  const authorizationUrl = useMemo(
    () => buildAuthorizationUrl(shopDomain, clientId, stateValue),
    [shopDomain, clientId, stateValue],
  );
  const postmanCode = useMemo(() => extractCodeFromCallback(callbackUrl), [callbackUrl]);

  const showCopiedState = (target) => {
    setCopiedTarget(target);
    window.setTimeout(() => setCopiedTarget(''), 1600);
  };

  const copyText = async (text, target) => {
    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      showCopiedState(target);
    } catch (copyError) {
      setError('Copy failed. Select the text and copy it manually.');
    }
  };

  const handleGetCode = (event) => {
    event.preventDefault();
    setError('');

    if (!shopDomain) {
      setError('Enter a valid Shopify domain.');
      return;
    }

    if (!clientId.trim()) {
      setError('Enter a client_id.');
      return;
    }

    const nextState = createStateValue();
    const nextUrl = buildAuthorizationUrl(shopDomain, clientId, nextState);
    setStateValue(nextState);
    window.open(nextUrl, '_blank', 'noopener,noreferrer');
  };

  const handleExchangeToken = async (event) => {
    event.preventDefault();
    setExchangeError('');
    setTokenResult(null);

    if (!shopDomain) {
      setExchangeError('Enter a valid Shopify domain.');
      return;
    }

    if (!clientId.trim() || !clientSecret.trim() || !postmanCode) {
      setExchangeError('client_id, client_secret and code are required.');
      return;
    }

    setExchangeStatus('loading');

    try {
      const response = await fetch('/api/shopify/oauth-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shop: shopDomain,
          clientId,
          clientSecret,
          code: postmanCode,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Shopify token exchange failed.');
      }

      setTokenResult(data);
    } catch (requestError) {
      setExchangeError(requestError.message || 'Shopify token exchange failed.');
    } finally {
      setExchangeStatus('');
    }
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl text-left">
      <div className="rounded-[3px] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:p-8">
        <form onSubmit={handleGetCode}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field
              label="Shopify domain"
              name="shop-domain"
              value={shopInput}
              onChange={(event) => setShopInput(event.target.value)}
              placeholder="your-store.myshopify.com"
              autoComplete="url"
              required
            />
            <Field
              label="client_id"
              name="client-id"
              value={clientId}
              onChange={(event) => setClientId(event.target.value)}
              placeholder="shpua_..."
              autoComplete="off"
              required
            />
          </div>

          {error && (
            <div className="mt-5 rounded-[3px] border border-black/20 bg-white px-4 py-3 text-sm font-semibold text-black">
              {error}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90 sm:w-auto"
            >
              Get code
            </button>
            <p className="text-xs leading-5 text-black/45">
              Redirect URI: <span className="font-mono text-black/70">{REDIRECT_URI}</span>
            </p>
          </div>
        </form>

        {authorizationUrl && (
          <div className="mt-6 rounded-[3px] border border-black/10 bg-black/[0.025] p-4">
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="!font-sans text-sm font-semibold text-black">
                Generated URL
              </h2>
              <button
                type="button"
                onClick={() => copyText(authorizationUrl, 'url')}
                className="inline-flex h-9 items-center justify-center rounded-[3px] border border-black/15 bg-white px-3 text-xs font-semibold text-black transition-colors hover:border-black"
              >
                {copiedTarget === 'url' ? 'Copied' : 'Copy URL'}
              </button>
            </div>
            <p className="break-all font-mono text-xs leading-5 text-black/62">
              {authorizationUrl}
            </p>
          </div>
        )}

        <div className="mt-8 border-t border-black/10 pt-6">
          <label htmlFor="callback-url" className="mb-2 block text-sm font-semibold text-black">
            Paste callback URL
          </label>
          <textarea
            id="callback-url"
            name="callback-url"
            value={callbackUrl}
            onChange={(event) => setCallbackUrl(event.target.value)}
            rows={5}
            className="w-full resize-y rounded-[3px] border border-black/15 bg-white px-4 py-3 font-mono text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-black"
            placeholder="http://localhost/?code=...&hmac=..."
          />
        </div>

        <div className="mt-6 rounded-[3px] border border-black/10 bg-white p-4">
          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="!font-sans text-sm font-semibold text-black">
              Your code
            </h2>
            <button
              type="button"
              onClick={() => copyText(postmanCode, 'code')}
              className="inline-flex h-9 items-center justify-center rounded-[3px] border border-black/15 bg-white px-3 text-xs font-semibold text-black transition-colors hover:border-black disabled:cursor-not-allowed disabled:text-black/35"
              disabled={!postmanCode}
            >
              {copiedTarget === 'code' ? 'Copied' : 'Copy code'}
            </button>
          </div>
          <p className="min-h-6 break-all font-mono text-sm leading-6 text-black/70">
            {postmanCode || 'Paste a callback URL with a code parameter.'}
          </p>
        </div>

        <form onSubmit={handleExchangeToken} className="mt-6 border-t border-black/10 pt-6">
          <Field
            label="client_secret"
            type="password"
            name="client-secret"
            value={clientSecret}
            onChange={(event) => setClientSecret(event.target.value)}
            placeholder="shpss_..."
            autoComplete="off"
            required
          />

          {exchangeError && (
            <div className="mt-5 rounded-[3px] border border-black/20 bg-white px-4 py-3 text-sm font-semibold text-black">
              {exchangeError}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={exchangeStatus === 'loading'}
              className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/50 sm:w-auto"
            >
              {exchangeStatus === 'loading' ? 'Getting token...' : 'Get access token'}
            </button>
            <p className="text-xs leading-5 text-black/45">
              Server-side request to Shopify.
            </p>
          </div>
        </form>

        {tokenResult && (
          <div className="mt-6 rounded-[3px] border border-black bg-black p-4 text-white">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="!font-sans text-sm font-semibold text-white">
                {tokenResult.token_type === 'offline_non_expiring'
                  ? 'Permanent access token'
                  : 'Access token'}
              </h2>
              <button
                type="button"
                onClick={() => copyText(tokenResult.access_token, 'token')}
                className="inline-flex h-9 items-center justify-center rounded-[3px] border border-white/20 bg-white px-3 text-xs font-semibold text-black transition-colors hover:bg-white/90"
              >
                {copiedTarget === 'token' ? 'Copied' : 'Copy token'}
              </button>
            </div>
            <p className="break-all font-mono text-xs leading-5 text-white/78">
              {tokenResult.access_token}
            </p>

            {tokenResult.scope && (
              <div className="mt-4 border-t border-white/12 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Scope
                </p>
                <p className="mt-2 break-all font-mono text-xs leading-5 text-white/70">
                  {tokenResult.scope}
                </p>
              </div>
            )}

            {tokenResult.expires_in ? (
              <p className="mt-4 text-xs leading-5 text-white/55">
                Expires in {tokenResult.expires_in} seconds.
              </p>
            ) : (
              <p className="mt-4 text-xs leading-5 text-white/55">
                Non-expiring offline token returned by Shopify.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  type = 'text',
  required = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-black">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-[3px] border border-black/15 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-black"
      />
    </div>
  );
}

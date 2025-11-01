'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function BulkSSLChecker() {
  const [domains, setDomains] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <LockClosedIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk SSL Checker</h1>
          <p className="text-xl text-gray-600">Check SSL certificates bulk. HTTPS validator voor meerdere domeinen.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={domains} onChange={(e) => setDomains(e.target.value)} placeholder="domain1.com&#10;domain2.com" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-green-600 text-white py-3 rounded">Check SSL Certificates</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">SSL Certificates: HTTPS Mandatory voor Modern SEO</h2>
          <div className="prose max-w-none space-y-4">
            <p>SSL certificates encrypt data between browser and server—HTTPS vs HTTP. Google made HTTPS ranking factor in 2014, and browsers now flag HTTP sites as "Not Secure". Bulk SSL checker validates certificates for multiple domains simultaneously—essential for agencies managing client portfolios or companies with multiple properties. Checks certificate validity, expiration dates, issuer trust, and configuration issues. Expired or misconfigured SSL causes browser warnings, user distrust, and ranking penalties.</p>

            <p>Why SSL matters beyond security: Chrome shows "Not Secure" warning on HTTP sites—users immediately distrust and leave. Forms on HTTP sites trigger security warnings. Google prioritizes HTTPS in rankings (minor factor but every bit helps). Referral data from HTTPS to HTTP gets stripped (shows as "direct" traffic, losing attribution). Mixed content warnings (HTTPS page loading HTTP resources) break functionality. SSL is non-negotiable baseline—all sites must have valid certificates. Bulk checking ensures no certificates lapse unnoticed.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Certificate Expiration Monitoring</h3>
            
            <p>SSL certificates expire—typically annual renewal. Lapsed certificate causes: browser warnings blocking access, lost traffic, potential de-indexing if prolonged, brand damage. For businesses with 10+ domains (main site, subdomains, subsidiary brands), tracking individual expirations is complex. Bulk SSL checker centralizes monitoring: shows expiry dates for all domains, flags certificates expiring within 30 days. Setup quarterly bulk checks + 30-day expiry alerts to never miss renewal.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Let's Encrypt vs Commercial Certificates</h4>
            <p>Let's Encrypt provides free SSL certificates—perfect for most sites. Auto-renewal via Certbot means never manual renewals. Commercial certificates (Digicert, Comodo) offer: extended validation (EV) showing company name in browser, wildcard support (*.example.com), longer validity periods, and insurance. For typical business site, Let's Encrypt sufficient. For e-commerce or high-trust industries (finance, healthcare), consider EV certificates for added credibility signal. Bulk checker identifies certificate issuer and type.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Common SSL Configuration Errors</h4>
            <p>Certificate valid but misconfigured: Missing intermediate certificates (browser shows "incomplete chain"), wrong domain (certificate for example.com used on example.net), expired root certificates, weak cipher suites, old TLS versions. These cause browser warnings despite valid certificate. Bulk checker with detailed SSL analysis catches configuration issues. Use additional tools like SSL Labs for deep diving specific problematic certificates.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">HTTPS Migration Validation</h3>
            
            <p>Migrating HTTP to HTTPS? Bulk SSL checking verifies: all pages accessible via HTTPS, certificates valid for all subdomains, no mixed content warnings, HTTP versions redirect to HTTPS. Check every section of site—easy to miss subdomain or staging environment without SSL. Post-migration, continue bulk checks monthly for first 6 months ensuring no regressions or certificate lapses during critical migration stabilization period.</p>

            <p>Use with <Link href="/tools/bulk-redirect-checker" className="text-blue-600 hover:underline">redirect validation</Link> and <Link href="/tools/ttfb-checker" className="text-blue-600 hover:underline">performance testing</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">SSL Certificate Management Best Practices</h2>
          <div className="prose max-w-none space-y-4">
            <p>Proactive management prevents SSL disasters. Maintain certificate inventory: spreadsheet with all domains, issuers, expiry dates, renewal methods. Set calendar reminders 60 and 30 days before expiry. For Let's Encrypt with auto-renewal, still monitor—occasionally auto-renewal fails (configuration errors, domain changes). Bulk checking provides automated backup: even if manual tracking fails, quarterly bulk audits catch soon-to-expire certificates.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Wildcard Certificates for Subdomains</h3>
            
            <p>Sites with many subdomains (blog.example.com, shop.example.com, support.example.com) benefit from wildcard certificate (*.example.com covers all). Simpler management—one certificate for unlimited subdomains. Bulk checker validates wildcard coverage: ensure all subdomains properly secured under wildcard, no subdomains using separate expiring certificates accidentally. For dynamic subdomain creation (user-generated subdomains), wildcard is only practical option.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Multi-Domain Certificates</h4>
            <p>One certificate can cover multiple unrelated domains (SAN certificates). Useful for agencies managing clients or companies owning multiple brands. Consolidates renewal management. But risk: if certificate compromised, all domains affected. Trade-off between convenience and isolation. Bulk checker shows which domains share certificates—helps assess risk concentration. For mission-critical domains, dedicated certificates provide isolation.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">SSL and Performance</h4>
            <p>SSL/TLS handshake adds latency (~100ms). HTTP/2 mitigates this significantly. Ensure servers support HTTP/2 with HTTPS—faster than HTTP/1.1 with HTTPS, even competitive with plain HTTP. Modern best practice: HTTPS + HTTP/2 + certificate caching + session resumption = minimal performance impact. Bulk checker identifying old TLS versions (1.0, 1.1) flags upgrade needs—TLS 1.2+ required for security and performance.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Is gratis SSL certificate even goed als betaalde?</h3>
              <p>For encryption: yes, identical. Let's Encrypt provides same security as paid certificates. Difference: paid certificates offer EV (company name in browser bar), extended warranties, support. For most sites, free SSL perfectly adequate. Only high-stakes e-commerce or regulated industries benefit from paid EV certificates.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat gebeurt als certificate expires?</h3>
              <p>Browsers show full-screen warning blocking access. Users can bypass but most won't—looks very suspicious. Search engines can still crawl but might deprioritize. Traffic drops dramatically (50-90%) immediately. Rankings decline if expired for extended period. Always renew before expiry—buffer of 7+ days recommended.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet elk subdomain apart SSL hebben?</h3>
              <p>Can use wildcard certificate covering all subdomains, or separate certificates per subdomain. Wildcard simpler—one cert, one renewal. Separate certs give isolation (if one compromised, others unaffected). For typical use, wildcard recommended. For high-security environments, separate certificates per critical subdomain.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Check ik SSL certificates van external links?</h3>
              <p>Not necessary—SSL status of sites you link to doesn't affect your SEO directly. But for user trust, avoid linking to HTTP sites (looks unprofessional). If important external resource only available HTTP, consider finding HTTPS alternative. Your own domains/subdomains: critical to bulk check. External links: low priority unless brand/trust concern.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

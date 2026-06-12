import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function normalizeShopDomain(value) {
  const trimmed = String(value || '').trim().toLowerCase();

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

function json(data, init) {
  const response = NextResponse.json(data, init);
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const shop = normalizeShopDomain(body.shop);
    const clientId = typeof body.clientId === 'string' ? body.clientId.trim() : '';
    const clientSecret = typeof body.clientSecret === 'string' ? body.clientSecret.trim() : '';
    const code = typeof body.code === 'string' ? body.code.trim() : '';

    if (!shop) {
      return json({ success: false, error: 'Valid Shopify domain is required.' }, { status: 400 });
    }

    if (!clientId || !clientSecret || !code) {
      return json(
        { success: false, error: 'client_id, client_secret and code are required.' },
        { status: 400 },
      );
    }

    const response = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        expiring: '0',
      }),
    });

    const responseText = await response.text();
    let shopifyData = {};

    try {
      shopifyData = responseText ? JSON.parse(responseText) : {};
    } catch {
      shopifyData = { error: responseText || 'Shopify returned an invalid response.' };
    }

    if (!response.ok) {
      return json(
        {
          success: false,
          error: shopifyData.error_description || shopifyData.error || 'Shopify token exchange failed.',
          status: response.status,
        },
        { status: response.status },
      );
    }

    return json({
      success: true,
      access_token: shopifyData.access_token || '',
      scope: shopifyData.scope || '',
      expires_in: shopifyData.expires_in || null,
      token_type: shopifyData.expires_in ? 'expiring' : 'offline_non_expiring',
      refresh_token: shopifyData.refresh_token || '',
      refresh_token_expires_in: shopifyData.refresh_token_expires_in || null,
    });
  } catch (error) {
    console.error('Shopify token exchange failed:', error?.message || error);
    return json({ success: false, error: 'Unable to exchange code for access token.' }, { status: 500 });
  }
}

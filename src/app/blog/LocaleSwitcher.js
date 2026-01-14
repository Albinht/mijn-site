'use client'

const COOKIE_NAME = 'niblah-locale'
const DEFAULT_LOCALE = 'en'

const LOCALES = [
  { value: 'en', label: 'English' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fr', label: 'Français' },
  { value: 'it', label: 'Italiano' },
  { value: 'sv', label: 'Svenska' },
  { value: 'da', label: 'Dansk' },
]

function normalizeLocale(value) {
  if (!value) return null
  const normalized = value.toLowerCase().replace('_', '-')
  const base = normalized.split('-')[0]
  const supported = new Set(LOCALES.map((entry) => entry.value))
  if (supported.has(normalized)) return normalized
  if (supported.has(base)) return base
  return null
}

function setCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 365
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`
}

export default function LocaleSwitcher({ locale, variant = 'light' }) {
  const currentLocale = normalizeLocale(locale) || DEFAULT_LOCALE

  const classes =
    variant === 'dark'
      ? 'bg-white/10 text-white border border-white/20'
      : 'bg-white text-gray-900 border border-gray-300'

  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="locale-switcher">
        Language
      </label>
      <select
        id="locale-switcher"
        value={currentLocale}
        onChange={(event) => {
          const nextLocale = normalizeLocale(event.target.value) || DEFAULT_LOCALE
          setCookie(COOKIE_NAME, nextLocale)
          window.location.reload()
        }}
        className={`px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 ${classes}`}
      >
        {LOCALES.map((entry) => (
          <option key={entry.value} value={entry.value}>
            {entry.label}
          </option>
        ))}
      </select>
    </div>
  )
}


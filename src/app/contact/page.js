import ContactForm from '../../components/ContactForm'
import { getServerLocale } from '@/lib/locale'
import { getContactPageCopy } from '@/i18n/contact-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getContactPageCopy(locale)
  return copy.metadata
}

export default async function ContactPage() {
  const locale = await getServerLocale()
  const copy = getContactPageCopy(locale)

  return (
    <main className="min-h-screen">
      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left: Company Info */}
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{copy.heading}</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">{copy.labels.address}</h3>
                  <p className="text-gray-900">
                    Raadhuisplein 17<br />
                    3771ER Barneveld
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">{copy.labels.phone}</h3>
                  <a href="tel:+31648728828" className="text-gray-900 hover:text-[#8C2891] transition-colors">
                    +316 487 288 28
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">{copy.labels.email}</h3>
                  <a href="mailto:albin@niblah.com" className="text-gray-900 hover:text-[#8C2891] transition-colors">
                    albin@niblah.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium text-white text-sm px-5 py-3 rounded-[9px] bg-[#1795FF] hover:bg-[#0f7dd4] transition-shadow duration-200 shadow-[0_10px_20px_rgba(23,149,255,0.35)] border border-[#0D94D1] w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
                </svg>
                {copy.whatsappButton}
              </a>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {copy.alternateHeading}
          </h2>
          <a
            href="https://wa.link/zhg1bl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-[#25D366] transition-all group inline-block w-full max-w-md"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.whatsappCardTitle}</h3>
            <p className="text-gray-600">
              {copy.whatsappCardText}
            </p>
          </a>
        </div>
      </section>
    </main>
  )
}

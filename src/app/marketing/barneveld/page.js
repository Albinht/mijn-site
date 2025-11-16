import LocationPageTemplate from '../../../templates/LocationPageTemplate'
import barneveldData from '../../../data/locations/barneveld'

export const metadata = {
  title: barneveldData.seo.title,
  description: barneveldData.seo.description,
  keywords: barneveldData.seo.keywords,
  alternates: {
    canonical: barneveldData.seo.canonical,
  },
}

export default function MarketingBarneveld() {
  return <LocationPageTemplate {...barneveldData} />
}

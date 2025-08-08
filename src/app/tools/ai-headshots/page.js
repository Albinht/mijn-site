'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../../../components/Button'

// Professional headshot examples
const headshots = [
  { id: 1, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', alt: 'Professional businessman in navy suit' },
  { id: 2, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', alt: 'Executive in charcoal suit' },
  { id: 3, url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face', alt: 'Professional woman in blazer' },
  { id: 4, url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face', alt: 'Business professional headshot' },
  { id: 5, url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face', alt: 'Corporate headshot woman' },
  { id: 6, url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', alt: 'Professional male executive' },
  { id: 7, url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face', alt: 'Business woman in suit' },
  { id: 8, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face', alt: 'Professional headshot man' },
  { id: 9, url: 'https://images.unsplash.com/photo-1494790108755-2616c22d5e9d?w=300&h=300&fit=crop&crop=face', alt: 'Corporate professional woman' },
  { id: 10, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', alt: 'Business executive headshot' }
]

const testimonials = [
  {
    name: 'G Rose',
    review: 'Professional pictures that are polished, but still looks like me',
    details: 'I am so happy with these head shots. I wanted something professional that looked good, but still like myself. I received dozens of samples and they were all so...',
    rating: 5,
    date: 'August 7, 2025'
  },
  {
    name: 'Richard K.',
    review: 'Really surprised at how nicely these...',
    details: 'Really surprised at how nicely these turned out. Much faster than making an appointment and waiting for traditional edits.',
    rating: 5,
    date: 'August 6, 2025'
  },
  {
    name: 'Ella',
    review: 'I\'m convinced.',
    details: 'Being able to describe myself without being self-conscious, then review and make selections on my own time, without having to worry about a photographer\'s...',
    rating: 5,
    date: 'August 5, 2025'
  },
  {
    name: 'Angela Farmer',
    review: 'These headshots were great',
    details: 'These headshots were great. They were not like other sites where they turn out not looking like you. I used these for my professional headshot, website and...',
    rating: 5,
    date: 'August 4, 2025'
  }
]

export default function AIHeadshotGenerator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [currency, setCurrency] = useState('EUR')
  const [plans, setPlans] = useState([])
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)

  // Load plans on component mount
  useEffect(() => {
    fetchPlans()
  }, [currency])

  const fetchPlans = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/headshots/plans?currency=${currency}`)
      const data = await response.json()
      
      if (data.success) {
        setPlans(data.plans)
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    setCurrentStep(2)
  }

  const handleGetStarted = async () => {
    if (selectedPlan && userEmail) {
      try {
        // Create job via API
        const response = await fetch('/api/headshots/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            planId: selectedPlan.id,
            userEmail,
            userName,
            currency
          })
        })

        const data = await response.json()

        if (data.success) {
          // Redirect to upload page with job details
          const params = new URLSearchParams({
            jobId: data.job.id,
            plan: selectedPlan.id,
            email: userEmail
          })
          
          window.location.href = `/tools/ai-headshots/upload?${params.toString()}`
        } else {
          console.error('Failed to create job:', data.error)
          alert('Failed to create job. Please try again.')
        }
      } catch (error) {
        console.error('Error creating job:', error)
        alert('Something went wrong. Please try again.')
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Trustpilot Badge */}
      <div className="text-center pt-8 mb-8">
        <div className="flex items-center justify-center mb-2">
          <div className="flex text-green-500 mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-700">Rated <strong>4.8</strong> out of 5 with <strong>2,824</strong> reviews on</span>
          <span className="ml-1 font-bold text-green-600">Trustpilot</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-4 md:py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Professional business <span className="bg-[#F7D8FA] px-2 rounded italic">headshots</span><br />
            in <span className="text-orange-600">1 hour</span> - faster than anyone else
          </h1>
          <p className="text-lg text-gray-600 mb-4">The Fastest AI Headshot Generator - Market-Leading 1 Hour Delivery</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Get professional business headshots in just 1 hour with our AI headshot generator. Upload photos, pick your styles & receive 10-150+ headshots. <strong>Perfect for urgent LinkedIn updates, job interviews, and last-minute presentations.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="text-lg px-8 py-4">
              Create your headshots now →
            </Button>
            <span className="text-gray-600">OR</span>
            <Link href="#teams" className="text-blue-600 hover:text-blue-800 font-medium">
              Team Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Headshot Examples Gallery */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {headshots.map((headshot) => (
              <div key={headshot.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                <img 
                  src={headshot.url} 
                  alt={headshot.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 left-2">
                  <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700 font-medium">
              <strong>18M</strong> headshots created for <strong>102,207+</strong> happy customers!
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-6 opacity-60">
              <span className="text-gray-500 font-medium">New York Post</span>
              <span className="text-gray-500 font-medium">CNN</span>
              <span className="text-gray-500 font-medium">Financial Times</span>
              <span className="text-gray-500 font-medium">Stripe</span>
              <span className="text-gray-500 font-medium">The Verge</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1:</h3>
              <h4 className="font-semibold mb-2">Upload a few selfies</h4>
              <p className="text-gray-600 text-sm">
                Use your favorite existing photos or take fresh selfies on the spot.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2:</h3>
              <h4 className="font-semibold mb-2">Our AI goes to work</h4>
              <p className="text-gray-600 text-sm">
                Our AI will pull your most photogenic qualities from the photos you uploaded.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3:</h3>
              <h4 className="font-semibold mb-2">Download your headshots</h4>
              <p className="text-gray-600 text-sm">
                That was easy! Download your keepers and enjoy your new professional photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Pricing Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All photoshoots include:</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>⚡ Done in 1 hour</strong> - fastest in the market</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">8× cheaper than a photographer</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Hundreds of results to choose from</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-orange-600 font-bold mb-1">FASTEST PLAN</div>
              <div className="text-6xl font-bold text-gray-900 mb-2">€10</div>
              <div className="text-2xl font-bold text-orange-600">1 <span className="text-lg font-normal">hour<br />done</span></div>
              <div className="text-sm text-gray-600 mt-2">10 professional headshots</div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Every package includes:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Indistinguishable from real photos</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Business expense-ready invoice</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Discounts up to 60% for teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium mb-2">Reviews & examples</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              <span className="text-teal-500">17,943,292</span> AI headshots created<br />
              for <span className="text-yellow-500">102,207</span> happy customers!
            </h2>
          </div>

          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 opacity-60">
            <span className="text-gray-500 font-medium">HubSpot</span>
            <span className="text-gray-500 font-medium">Shopify</span>
            <span className="text-gray-500 font-medium">eBay</span>
            <span className="text-gray-500 font-medium">Dell</span>
            <span className="text-gray-500 font-medium">Box</span>
            <span className="text-gray-500 font-medium">Stack Overflow</span>
          </div>

          {/* Before/After Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Danny Postma, Founder at HeadshotPro</h3>
              <p className="text-gray-600 mb-4">"All it takes is just a few selfies"</p>
              
              {/* Before photos - casual selfies */}
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507081323647-4d250478b919?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
              </div>
              
              {/* Professional AI generated photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
                </div>
                <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Amelia, Professional model</h3>
              
              {/* Before photos - casual selfies */}
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616c22d5e9d?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=50&h=50&fit=crop&crop=face" alt="Casual selfie" className="w-full h-full object-cover"/>
                </div>
              </div>
              
              {/* Professional AI generated photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
                </div>
                <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mb-12">These photos are not real. They were all created using our AI headshot generator.</p>

          {/* More examples grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=250&h=250&fit=crop&crop=face" alt="AI generated professional headshot" className="w-full h-full object-cover"/>
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded">AI GENERATED</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1520810000000 + index * 1000000}?w=32&h=32&fit=crop&crop=face`} alt={testimonial.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="flex text-green-500 text-xs">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-green-500 font-bold text-xs">Trustpilot</span>
                </div>
                <h4 className="font-bold text-sm mb-2">{testimonial.review}</h4>
                <p className="text-gray-600 text-xs mb-2">{testimonial.details}</p>
                <p className="text-gray-400 text-xs">Date of experience: {testimonial.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-yellow-100 text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-yellow-200 transition-colors">
                View all reviews and examples
              </button>
              <Button className="px-8 py-3">
                Create your headshots now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Plan Selection */}
      {currentStep === 1 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional headshots for <span className="bg-[#F7D8FA] px-2 rounded italic">8× less</span><br />
                than a physical photo shoot
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The average cost of professional headshots in the United States is <strong>$232.50*</strong>.<br />
                Our packages start from just <strong>€10</strong> with 1-hour delivery.
              </p>
              <p className="text-sm text-gray-500 mb-8">18M headshots created for 102,207+ happy customers</p>

              {/* Currency Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-lg p-1">
                  <div className="flex">
                    <button className="px-4 py-2 text-sm font-medium text-gray-600">Individual</button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-400">Teams</button>
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        currency === 'USD' 
                          ? 'bg-white text-gray-900 shadow-sm ring-1 ring-blue-500' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      onClick={() => setCurrency('EUR')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        currency === 'EUR' 
                          ? 'bg-white text-gray-900 shadow-sm ring-1 ring-blue-500' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Euro (€)
                    </button>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee Badge */}
              <div className="mb-8">
                <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  100% MONEY BACK GUARANTEE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-xl border-2 transition-all ${
                    plan.popular 
                      ? 'border-teal-500 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  {plan.badge && plan.badge === 'FASTEST' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        ⚡ FASTEST
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {currency === 'EUR' ? '€' : '$'}{plan.price}
                      </div>
                      <p className="text-gray-600 text-sm mb-6">
                        Get {plan.headshot_count} headshots with {plan.combo_count} unique backdrops and outfits.
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{plan.headshot_count} headshots</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{plan.combo_count} backdrop and outfit combos</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Hundreds of styles to choose from</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{plan.eta_hours} hours turn-around time</span>
                      </div>
                      {plan.edit_credits > 0 && (
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{plan.edit_credits} edit credits</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Premium resolution</span>
                      </div>
                      {plan.resolution === '4k' && (
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Print ready 4K resolution</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                        plan.badge === 'FASTEST'
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : plan.popular
                            ? 'bg-teal-500 text-white hover:bg-teal-600'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.badge === 'FASTEST' ? '⚡ Get ' : 'Get '}
                      {plan.headshot_count} headshots in {plan.eta_hours} hour{plan.eta_hours > 1 ? 's' : ''}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Contact Info */}
      {currentStep === 2 && selectedPlan && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Almost There!</h2>
              <p className="text-gray-600 mb-6">
                You selected the <strong>{selectedPlan.name}</strong> package for{' '}
                <strong>€{selectedPlan.price}</strong>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll send your headshots and updates to this email
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Helps us personalize your experience
                </p>
              </div>

              <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                    Upload 15-20 selfies (5 minutes)
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                    Choose outfits & backdrops
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                    AI creates your headshots (1-3 hours)
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</span>
                    Download your professional headshots
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Plans
                </button>
                <Button
                  onClick={handleGetStarted}
                  disabled={!userEmail}
                  className={`flex-1 py-3 px-6 ${
                    !userEmail ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Continue to Upload
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Privacy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="mr-2">🇳🇱</span>
              <span className="text-gray-600">Founded in Holland. We respect your privacy.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Professional AI with <span className="bg-[#F7D8FA] px-2 rounded italic">1-Hour</span> Delivery Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Headshots You Can Actually Use</h3>
              <p className="text-gray-600">
                If you don't get a single profile-worthy headshot that you're happy with, we'll refund your entire purchase, no questions asked.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Own Your AI Headshots</h3>
              <p className="text-gray-600">
                We are an independently owned company that takes privacy seriously. We never sell your photos. You have full commercial rights and ownership of your photos - use them however you want.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your details are deleted in 30 days or less</h3>
              <p className="text-gray-600">
                All input photos are deleted after 7 days. All AI headshots are deleted after 30 days. Delete your data faster, anytime you want, with the click of a button in your account settings.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="px-8 py-4 text-lg">
              Choose your headshot package
            </Button>
          </div>

          {/* Final testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1520810000000 + index * 1000000}?w=32&h=32&fit=crop&crop=face`} alt={testimonial.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="flex text-green-500 text-xs">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-green-500 font-bold text-xs">Trustpilot</span>
                </div>
                <h4 className="font-bold text-sm mb-2">{testimonial.review}</h4>
                <p className="text-gray-600 text-xs mb-2">{testimonial.details}</p>
                <p className="text-gray-400 text-xs">Date of experience: {testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#F7D8FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need help or have <span className="bg-white px-2 rounded italic">questions</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team is here to help you get the perfect professional headshots for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work-with-me"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Plan Free Consultation
            </Link>
            <a 
              href="tel:+31648728828"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Call Direct: +31 6 48728828
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const CurriculumSection = () => {
  const curriculumData = [
    {
      chapter: "1. Foundation & Philosophy",
      duration: "06:45",
      description: "Why this course exists and how it flips the traditional SEO playbook on its head.",
      lessons: [
        {
          number: "1.1",
          title: "The Origin Story",
          duration: "03:12",
          description: "Learn how a casual joke became a 6-figure SEO engine, and how personal frustration led to this no-BS course."
        },
        {
          number: "1.2",
          title: "A New Philosophy",
          duration: "01:58",
          description: "Why I believe SEO isn't just traffic — it's customer psychology, demand research, and cashflow strategy."
        },
        {
          number: "1.3",
          title: "The Future of SEO & AI",
          duration: "01:35",
          badge: "Free",
          description: "Why SEO is your only weapon to inject your brand into the AI-generated world — before your competitors do."
        }
      ]
    },
    {
      chapter: "2. Finding Your Market",
      duration: "08:30",
      description: "Learn how to spot high-value, low-competition niches and validate buyer intent before writing a single word.",
      lessons: [
        {
          number: "2.1",
          title: "Search as Demand",
          duration: "02:15",
          description: "Learn how Google search queries are real-time reflections of what people want — and how to map them to your offer."
        },
        {
          number: "2.2",
          title: "Zero-Authority Keyword Strategy",
          duration: "03:02",
          description: "Discover how to pick keywords you can rank for even without links or a big site."
        },
        {
          number: "2.3",
          title: "Niche Validation",
          duration: "03:13",
          description: "See how to validate a niche using search data, competition depth, and commercial intent indicators."
        }
      ]
    },
    {
      chapter: "3. Building the SEO Engine",
      duration: "07:40",
      description: "Lay the foundations of your site with a structure Google loves and users trust.",
      lessons: [
        {
          number: "3.1",
          title: "Site Structure & Page Hierarchy",
          duration: "02:30",
          description: "Craft a logical site structure that builds topical authority from day one."
        },
        {
          number: "3.2",
          title: "Internal Linking That Ranks",
          duration: "02:20",
          description: "Learn how to connect pages so Google understands your site depth and users stay longer."
        },
        {
          number: "3.3",
          title: "Tracking & KPIs",
          duration: "02:50",
          description: "Set up the metrics that matter: not just rankings, but revenue."
        }
      ]
    },
    {
      chapter: "4. Writing Content That Ranks & Converts",
      duration: "09:15",
      description: "Stop creating content to fill space. Start writing content that dominates Google and drives buyers.",
      lessons: [
        {
          number: "4.1",
          title: "Intent-Driven Content Strategy",
          duration: "02:45",
          description: "How to match content with searcher psychology — and why most blogs fail."
        },
        {
          number: "4.2",
          title: "The Content Blueprint",
          duration: "03:10",
          description: "My exact framework to plan, structure and optimize any page for fast rankings."
        },
        {
          number: "4.3",
          title: "Prompt Engineering for SEO",
          duration: "03:20",
          description: "Use AI tools the right way — not to replace you, but to accelerate you."
        }
      ]
    },
    {
      chapter: "5. Getting Traffic Without Backlinks",
      duration: "05:55",
      description: "Outrank bigger sites without outreach or begging for links.",
      lessons: [
        {
          number: "5.1",
          title: "Why Links Are Overrated",
          duration: "02:05",
          description: "A brutal breakdown of the backlink industry — and why you can skip it (at first)."
        },
        {
          number: "5.2",
          title: "The Content-First Ranking Approach",
          duration: "03:50",
          description: "How I ranked #1 without backlinks using depth, structure, and UX."
        }
      ]
    },
    {
      chapter: "6. Monetizing SEO Traffic",
      duration: "06:30",
      description: "Traffic is useless if it doesn't pay. Here's how to turn SEO into revenue.",
      lessons: [
        {
          number: "6.1",
          title: "From Clicks to Cash",
          duration: "03:00",
          description: "How to build offers into your content so readers convert without hard sells."
        },
        {
          number: "6.2",
          title: "Email Capture & Funnels",
          duration: "03:30",
          description: "Learn how to turn visitors into subscribers and subscribers into customers."
        }
      ]
    },
    {
      chapter: "7. Scaling & Staying Ahead",
      duration: "06:45",
      description: "You ranked. Now what? Here's how to scale and defend your position.",
      lessons: [
        {
          number: "7.1",
          title: "Scaling Content Operations",
          duration: "03:15",
          description: "Build a lean SEO content machine without losing quality."
        },
        {
          number: "7.2",
          title: "Defensive SEO & Updates",
          duration: "03:30",
          description: "Learn how to future-proof your rankings and adapt to Google updates fast."
        }
      ]
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="w-full md:max-w-6xl md:mx-auto px- md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            What you&apos;ll learn
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">What you&apos;ll learn</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I will take you from start to finish. From keyword research, content creation, backlink building and more.
          </p>
        </div>

        {/* Curriculum Content */}
        <div className="space-y-6">
          {curriculumData.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="bg-gray-50 rounded-lg p-6">
              {/* Chapter Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">{chapter.chapter}</h3>
                <span className="text-sm text-gray-500">{chapter.duration}</span>
              </div>
              <p className="text-gray-600 mb-6">{chapter.description}</p>

              {/* Lessons */}
              <div className="space-y-4">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700">{lesson.number}</span>
                        <h4 className="font-semibold text-gray-900">{lesson.title}</h4>
                        {lesson.badge && (
                          <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                            {lesson.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{lesson.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <div className="inline-block">
            <Button 
              as={Link} 
              href="https://buy.stripe.com/dRmdR8djPa1NcZbcetdQQ00"
              className="text-xl px-0 py-0 min-w-[300px] font-bold"
            >
              Get started today <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

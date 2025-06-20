'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Loader } from "lucide-react"
import Loadertxt from '@/components/loadertxt'
export default function Home() {
  return (
    <div className="min-h-screen page-transition">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-128 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold">hey, dimuth is here!</h1>

              {/* Custom words passed to Loader */}
              <Loadertxt words={['Designer', 'Developer', 'Researcher']} />

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm a software engineer with a design-first mindset. I work at{' '}
                  <Link href="https://www.epictechnology.lk/" className="text-foreground hover:underline">
                    Epic Lanka
                  </Link>
                  . I specialize in UX/UI Designs, User Researches, Product Engineeirng, and Serverless tech stacks. My career has been focused on
                  developing SaaS products in the FinTech and E-commerce industries.
                </p>
                <p>
                  With a strong JavaScript background, I’ve built dynamic, end-to-end web apps. If you'd like to hear
                  more about my journey,{' '}
                  <Link href="/about" className="text-foreground hover:underline">
                    click here
                  </Link>
                  .
                </p>
                <p>
                  Outside of work, I enjoy photography and traveling. I occasionally write about technical topics,
                  sharing insights, experiences, and solutions I’ve discovered. Check out my{' '}
                  <Link href="/work" className="text-foreground hover:underline">
                    work here
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/work">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right-side image column */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Dimuth Nilanjana"
                width={200}
                height={200}
                className="rounded-xl w-full"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Work setup"
                width={200}
                height={120}
                className="rounded-xl w-full"
              />
            </div>
            <div className="bg-blue-500/10 p-6 rounded-xl flex items-center justify-center">
              <div className="text-blue-500">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="..." />
                </svg>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=120&width=200"
                alt="Aviation hobby"
                width={200}
                height={120}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Loadertxt from '@/components/loadertxt'

export default function Home() {
  return (
    <section className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20">
      {/* Left margin column */}
      <div className="hidden lg:block" />

      {/* Middle content: centered with max width */}
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">hey, dimuth is here!</h1>

          <Loadertxt words={['Developer', 'Designer', 'Researcher']} />

          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              I'm a UX Engineer with a user-first mindset. I work at{' '}
              <Link href="https://www.epictechnology.lk/" className="text-foreground hover:underline">
                Epic Lanka
              </Link>
              . I specialize in UX/UI Designs, User Research, Product Engineering, and Serverless tech stacks.
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
              Outside of work, I enjoy photography and traveling. I occasionally write about technical topics.
              Check out my{' '}
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

      {/* Right margin column */}
      <div className="hidden lg:block" />
    </section>
  )
}

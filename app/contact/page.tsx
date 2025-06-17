"use client"

import { useState } from "react"
import { Copy, Check, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "dimuth.nilanjana@example.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="min-h-screen page-transition">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-128 py-16">
        <div className="space-y-12">
          {/* Header - smaller like reference */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              I'm always interested in hearing about new opportunities and interesting projects. Let's connect and
              discuss how we can work together.
            </p>
          </div>

          {/* Rest of the contact content remains the same */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Me</h3>
                    <p className="text-sm text-muted-foreground">Send me a message directly</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-mono text-sm">{email}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={copyEmail} variant="outline" size="sm" className="flex-1">
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Email
                        </>
                      )}
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href={`mailto:${email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Card */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">Book a time that works for you</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Available for 30-minute calls to discuss projects, opportunities, or just to chat about technology
                    and development.
                  </p>

                  <Button asChild size="sm" className="w-full">
                    <a href="https://cal.com/dimuth" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="space-y-3">
              <h2 className="text-lg font-medium">Let's Build Something Amazing</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

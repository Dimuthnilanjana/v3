import Image from "next/image"
import { TechStack } from "@/components/tech-stack"

export default function About() {
  const experiences = [
    {
      company: "TechCorp",
      position: "Senior Software Engineer",
      period: "2022 - Present",
      current: true,
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      current: false,
    },
    {
      company: "WebAgency",
      position: "Frontend Developer",
      period: "2018 - 2020",
      current: false,
    },
  ]

  return (
    <div className="min-h-screen page-transition">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header - smaller like reference */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">about</h1>
          </div>

          {/* Photo Grid - match reference layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Photography 1"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Photography 2"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Photography 3"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Photography 4"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Experience */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I've been working as a software engineer, specializing in full-stack development and design, for 4+
                  years now.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Node, AWS, Serverless, web development, UI/UX, and product design. But I'm
                  always learning new things. Here are the places I've worked and technologies I've explored.
                </p>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-2 h-2 rounded-full mt-2 ${exp.current ? "bg-green-500" : "bg-muted"}`} />
                      {index < experiences.length - 1 && <div className="w-px h-12 bg-border mt-1" />}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-sm">{exp.company}</h3>
                        {exp.current && (
                          <span className="text-xs bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded-full">●</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{exp.position}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Tech Stack with gradient border */}
            <div className="space-y-6">
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <TechStack />
                </div>
              </div>
            </div>
          </div>

          {/* Throwbacks Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Throwbacks...</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Throwback 1"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">University days, LK</p>
                  <p className="text-xs text-muted-foreground">#dreamteam #coastalbeauty #tropical</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Throwback 2"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Graduation Ceremony</p>
                  <p className="text-xs text-muted-foreground">#graduation #achievement #milestone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

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
    <section className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20">
      {/* Left gutter */}
      <div className="hidden lg:block" />

      {/* Main content */}
      <div className="w-full max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">about</h1>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-square rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=150&width=150`}
                alt={`Photography ${n}`}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I've been working as a software engineer, specializing in full-stack development and design, for 4+ years now.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Node, AWS, Serverless, web development, UI/UX, and product design. But I'm always learning new things. Here are the places I've worked and technologies I've explored.
              </p>
            </div>

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

          {/* Tech Stack */}
          <div className="space-y-6">
            <div className="gradient-border">
              <div className="gradient-border-inner">
                <TechStack />
              </div>
            </div>
          </div>
        </div>

        {/* Throwbacks */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium">Throwbacks...</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <div key={n} className="space-y-3">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Throwback ${n}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    {n === 1 ? "University days, LK" : "Graduation Ceremony"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {n === 1 ? "#dreamteam #coastalbeauty #tropical" : "#graduation #achievement #milestone"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right gutter */}
      <div className="hidden lg:block" />
    </section>
  )
}

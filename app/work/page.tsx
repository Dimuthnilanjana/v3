import { ProjectCard } from "@/components/project-card"

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Vue.js", "Express", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 py-20">
      {/* Left margin */}
      <div className="hidden lg:block" />

      {/* Middle content */}
      <div className="w-full max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Works</h1>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Right margin */}
      <div className="hidden lg:block" />
    </section>
  )
}

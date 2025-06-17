import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const getProject = (id: string) => {
  const projects = {
    "1": {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
      longDescription: `This comprehensive e-commerce platform was built to handle high-traffic scenarios while maintaining excellent user experience. The project includes a customer-facing storefront, an admin dashboard for inventory management, and a robust backend API.

Key features include:
- Real-time inventory tracking
- Secure payment processing with Stripe
- Advanced search and filtering
- Order management system
- Customer reviews and ratings
- Mobile-responsive design
- SEO optimization

The platform was built with scalability in mind, utilizing Next.js for server-side rendering and optimal performance. The backend leverages PostgreSQL for data persistence and Redis for caching frequently accessed data.`,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      challenges: [
        "Implementing real-time inventory updates across multiple users",
        "Optimizing database queries for large product catalogs",
        "Ensuring secure payment processing and PCI compliance",
        "Building a responsive design that works across all devices",
      ],
      learnings: [
        "Advanced Next.js patterns for e-commerce applications",
        "Database optimization techniques for high-traffic applications",
        "Payment gateway integration best practices",
        "Performance optimization strategies",
      ],
    },
    // Add more projects as needed
  }

  return projects[id as keyof typeof projects] || null
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/work">Back to Work</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen page-transition">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>

          {/* Rest of the content with smaller headings */}
          {/* Main Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Project Overview</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div className="space-y-3">
              <h2 className="text-lg font-medium">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Screenshot ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Learnings */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-lg font-medium">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-medium">Key Learnings</h2>
              <ul className="space-y-2">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                    • {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

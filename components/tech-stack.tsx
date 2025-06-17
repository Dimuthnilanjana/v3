export function TechStack() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "GraphQL", icon: "◉" },
    { name: "Tailwind", icon: "💨" },
    { name: "Figma", icon: "🎨" },
    { name: "Git", icon: "📝" },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground">Technologies & Tools</h3>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="text-lg">{tech.icon}</div>
            <span className="text-xs text-center font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

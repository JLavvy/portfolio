import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for online retailers with real-time analytics and inventory management",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demo: "#",
    repo: "#",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"]
  },
  {
    id: 2,
    title: "Content Platform",
    description: "A modern content management system with a focus on performance and user experience",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    demo: "#",
    repo: "#",
    tech: ["Next.js", "GraphQL", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    demo: "#",
    repo: "#",
    tech: ["React", "Firebase", "Styled Components"]
  },
  {
    id: 4,
    title: "Financial Analytics Tool",
    description: "A data visualization platform providing insights into financial metrics and performance",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    demo: "#",
    repo: "#",
    tech: ["React", "D3.js", "Material UI", "REST API"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="h-1 w-20 gradient-bg mx-auto mt-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            A showcase of my recent work, personal projects, and contributions to web development
          </p>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl border border-muted bg-muted/20"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                  <div className="my-2 flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-background/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-200 mt-2 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="gap-2 bg-primary hover:bg-primary/80">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-2 border-muted">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
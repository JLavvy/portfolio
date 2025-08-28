import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Import images from public folder
import laara from "/laara.jpeg";
import compass from "/compass.png";
import crafty from "/Crafty.png";
import wellverse from "/Wellverse.png";

const projects = [
   {
    id: 1,
    title: "WellVerse Tech",
    description: "An innovation-driven company focused on building intelligent tech solutions that transform business operation",
    image: wellverse, 
    demo: "https://wellverse-ai.netlify.app/",
    repo: "https://github.com/JLavvy/Wellverse",
    tech: ["React", "Tailwind", "Netlify"]
  },
  {
    id: 2,
    title: "Laara Group",
    description: "A hospitality platform connecting travelers with exceptional accommodations across the country.",
    image: laara,
    demo: "https://www.laaragroup.com/",
    repo: "#",
    tech: ["React","Tailwind"]
  },
  {
    id: 3,
    title: "Compass Track Mentors",
    description: "A modern content management system with a focus on performance and user experience",
    image: compass, 
    demo: "https://compasstrackmentors.com/",
    repo: "https://github.com/JoseMbilwa/CT-Mentors",
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    id: 4,
    title: "Crafty Artisan Market",
    description: "A sample Crafts Website",
    image: crafty,
    demo: "https://craftyartisanmarket.web.app/",
    repo: "https://github.com/JLavvy/Handcrafts",
    tech: ["React", "Firebase (Hosting)", "Tailwind"]
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
};
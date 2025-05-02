
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg animate-fade-in",
        isDark && "glass-card hover:shadow-primary/20"
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" variant="default" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="High-Speed Pothole Detection System"
            description="A real-time road safety solution to detect potholes at high speeds using LiDAR and sensor fusion, reducing inspection time by 70%."
            tags={["ML", "Computer Vision", "LiDAR", "Embedded Systems"]}
            imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
            githubUrl="#"
            delay={0}
          />
          <ProjectCard
            title="Pesticide Detection for Crop Diseases"
            description="Developed a real-time system for identifying crop diseases and pesticide requirements using edge computing on Jetson Nano."
            tags={["Deep Learning", "TensorFlow", "Edge Computing", "Python"]}
            imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            githubUrl="#"
            delay={1}
          />
          <ProjectCard
            title="Enhanced Attendance Management"
            description="Integrated Azure IoT Edge and face recognition systems for automated attendance tracking with 95% recognition accuracy."
            tags={["Azure IoT Edge", "Face Recognition", "CNN", "Python"]}
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            githubUrl="#"
            delay={2}
          />
          <ProjectCard
            title="AI Chatbot with NLP"
            description="Designed and implemented an AI chatbot with NLP features to enhance user experience and automate customer service."
            tags={["NLP", "AI", "Machine Learning", "ReactJS"]}
            imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            githubUrl="#"
            delay={3}
          />
          <ProjectCard
            title="React-based Dashboard"
            description="Built a responsive dashboard for data visualization with real-time updates and intuitive user interface."
            tags={["React", "Node.js", "RESTful API", "MongoDB"]}
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            githubUrl="#"
            delay={4}
          />
          <ProjectCard
            title="Edge Computing for IoT"
            description="Implemented edge computing solutions for IoT devices to improve performance and reduce latency in data processing."
            tags={["IoT", "Edge Computing", "AWS", "Python"]}
            imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            githubUrl="#"
            delay={5}
          />
        </div>
      </div>
    </section>
  );
}


import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, UserCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Krishnansh Vasaniya</span> 
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              AI & ML Engineer
            </h2>
            <p className="text-lg max-w-2xl">
              Specialized in AI development, machine learning, and edge computing solutions. 
              Building intelligent systems that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View my work</a>
              </Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:krishnansh.official@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute inset-4 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <UserCircle className="w-40 h-40 text-primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

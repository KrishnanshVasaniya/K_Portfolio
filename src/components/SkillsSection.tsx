
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "HTML/CSS", level: 80, category: "Languages" },
  { name: "TensorFlow", level: 85, category: "Libraries" },
  { name: "OpenCV", level: 80, category: "Libraries" },
  { name: "React.js", level: 85, category: "Frameworks" },
  { name: "Node.js", level: 80, category: "Frameworks" },
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "MongoDB", level: 70, category: "Databases" },
  { name: "MySQL", level: 75, category: "Databases" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Machine Learning", level: 90, category: "Concepts" },
  { name: "Deep Learning", level: 85, category: "Concepts" },
  { name: "Computer Vision", level: 80, category: "Concepts" },
  { name: "Edge Computing", level: 90, category: "Concepts" },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const SkillGroup = ({ title, skills }: SkillGroupProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <Card className={cn("mb-8 animate-fade-in", isDark && "glass-card")}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <SkillGroup 
              key={category}
              title={category}
              skills={skills.filter(skill => skill.category === category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

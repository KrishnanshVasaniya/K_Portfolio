
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description?: string[];
}

const TimelineItem = ({ title, organization, duration, location, description }: TimelineItemProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <h4 className="text-lg text-muted-foreground">{organization}</h4>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
            {duration}
          </span>
          {location && (
            <span className="ml-2 text-sm text-muted-foreground">
              {location}
            </span>
          )}
        </div>
      </div>
      {description && (
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function ResumeSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="resume" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Resume
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <Button className="animate-fade-in">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>

          <Card className={cn("mb-10", isDark && "glass-card")}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 border-b pb-2">
                Experience
              </h3>
              <TimelineItem
                title="Full-stack Developer"
                organization="TechArtisan 3D Solutions LLP"
                duration="Dec 2024 - Apr 2025"
                location="Pune, Maharashtra"
                description={[
                  "Built and deployed full-stack web apps using React.js and Node.js, reducing response time by 20%",
                  "Integrated OAuth-based authentication, reducing login-related support tickets by 40%",
                  "Deployed applications on AWS and collaborated using Git & Agile methodologies"
                ]}
              />
              <TimelineItem
                title="Developer - IIIT Hyderabad Fellowship"
                organization="iHub-Data, IIIT Hyderabad"
                duration="August 2024 - Present"
                location="Online"
                description={[
                  "Built a LiDAR-based pothole detection system with 90%+ accuracy",
                  "Designed real-time detection models for quick response",
                  "Processed 15K+ sensor readings per second, boosting accuracy by 12%"
                ]}
              />
              <TimelineItem
                title="AI Developer Intern"
                organization="Microstop Tech Pvt Ltd"
                duration="June - August 2024"
                location="Nashik, Maharashtra"
                description={[
                  "Designed and implemented an AI chatbot with NLP features to enhance user experience",
                  "Developed and integrated REST APIs to improve software automation, enhancing performance by 30%",
                  "Engineered scalable interfaces with React.js and integrated ML models for real-time automation"
                ]}
              />
            </CardContent>
          </Card>

          <Card className={cn("mb-10", isDark && "glass-card")}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 border-b pb-2">
                Education
              </h3>
              <TimelineItem
                title="Bachelor of Technology in Computer Science and Engineering"
                organization="MIT Art, Design and Technology University"
                duration="2021-25"
                location="Pune"
                description={["Specialized in AI and Edge Computing", "CGPA: 7.11"]}
              />
              <TimelineItem
                title="Senior Secondary (Class XII)"
                organization="St. Paul's Senior Secondary School"
                duration="2021"
                location="Banswara, Rajasthan"
                description={["CBSE Board", "Percentage: 78%"]}
              />
            </CardContent>
          </Card>

          <Card className={cn("mb-10", isDark && "glass-card")}>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 border-b pb-2">
                Certifications
              </h3>
              <TimelineItem
                title="Google AI-ML Virtual Internship"
                organization="AICTE-Eduskills, Google"
                duration="April - June 2024"
              />
              <TimelineItem
                title="Google Generative AI Virtual Internship"
                organization="AICTE-Eduskills, Google"
                duration="July - Sept 2024"
              />
              <TimelineItem
                title="Getting Started with AI on Jetson Nano"
                organization="NVIDIA Deep Learning Institute"
                duration="Nov 2024"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

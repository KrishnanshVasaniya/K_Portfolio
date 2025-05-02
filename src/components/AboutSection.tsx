
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "./ThemeProvider";

export function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="grid gap-8">
            <Card className={`overflow-hidden ${isDark ? "glass-card" : ""}`}>
              <CardContent className="p-6 md:p-8">
                <p className="text-lg mb-4">
                  I am Krishnansh Vasaniya, a <strong>Bachelor of Technology</strong> graduate from MIT Art, Design and Technology University, Pune, specialized in AI and Edge Computing. With a strong foundation, I've developed expertise in building intelligent systems and webapps.
                </p>
                <p className="text-lg mb-4">
                  My professional journey includes roles as a <strong>Full-stack Developer</strong> at TechArtisan 3D Solutions LLP, where I built and deployed web applications using React.js and Node.js, and as a <strong>Developer</strong> at IIIT Hyderabad Fellowship, where I contributed to LiDAR-based pothole detection systems.
                </p>
                <p className="text-lg">
                  I'm passionate about combining AI, ML, and edge computing to create solutions that make a meaningful impact. My technical expertise spans Python, JavaScript, TensorFlow, React, and cloud technologies.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className={`${isDark ? "glass-card" : ""} animate-fade-in`} style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">Education</h3>
                  <p>B.Tech in Computer Science and Engineering (AI and Edge Computing)</p>
                </CardContent>
              </Card>
              <Card className={`${isDark ? "glass-card" : ""} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">Experience</h3>
                  <p>Full-stack Developer, AI Developer, LiDAR & ML Specialist</p>
                </CardContent>
              </Card>
              <Card className={`${isDark ? "glass-card" : ""} animate-fade-in`} style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">Interests</h3>
                  <p>AI, Machine Learning, Edge Computing, Web Development/p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

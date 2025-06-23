
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, Download, Eye, MessageCircle, Code, Database, Globe, Cpu, Award, GraduationCap, FileText, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const skills = {
    "Programming Languages": ["Python", "Java (Basics)"],
    "Web Technologies": ["HTML", "CSS", "JavaScript"],
    "Frameworks": ["Django", "Flask", "Bootstrap"],
    "Database": ["SQL", "MySQL"],
    "Tools": ["Git", "GitHub", "MS Office", "Power BI"]
  };

  const projects = [
    {
      title: "Smart Street Lighting System",
      description: "Arduino + Sensors based IoT solution that reduced power consumption through intelligent lighting control",
      technologies: ["Arduino", "IoT", "Sensors"],
      type: "IoT Project",
      highlight: "Energy-efficient model"
    },
    {
      title: "Weather App",
      description: "Real-time weather display application using OpenWeatherMap API with responsive design",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      type: "Web Application",
      highlight: "Real-time data"
    },
    {
      title: "CRM Web App",
      description: "Full-stack customer relationship management system with user authentication and CRUD operations",
      technologies: ["Django", "MySQL", "Python"],
      type: "Full Stack",
      highlight: "Complete CRUD functionality"
    }
  ];

  const education = [
    {
      degree: "B.Tech in ECE",
      institution: "AITS Tirupati",
      period: "2022–2025",
      percentage: "80%"
    },
    {
      degree: "Diploma in ECE",
      institution: "MJR College Piler",
      period: "2019–2022",
      percentage: "83%"
    },
    {
      degree: "SSC",
      institution: "Z.P. High School, KC Palli",
      period: "Completed",
      percentage: "85%"
    }
  ];

  const certifications = [
    "Python Essentials 1 & 2 – Cisco",
    "Python for Data Science – IBM",
    "Cloud Computing – NPTEL",
    "Full Stack Web Development Internship – 2024"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sakki Reddigari Mahesh
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              Full Stack Developer | IoT Innovator | Python & Django Enthusiast
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a tech enthusiast passionate about building real-world solutions using Python, Django, and IoT systems. 
              With a strong foundation in ECE, I blend hardware logic with software innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('projects')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-gray-400 text-gray-700 hover:bg-gray-50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Code className="mr-2 h-6 w-6" />
                  Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  I'm an adaptable professional with strong programming skills in Python and Java, 
                  experienced with HTML, CSS, Django, SQL, and GitHub.
                </p>
                <p className="text-gray-600">
                  I focus on building innovative, sustainable tech solutions, such as smart lighting systems using IoT technology.
                </p>
                <p className="text-gray-600">
                  Currently exploring data science and full-stack web development to expand my technical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Cpu className="mr-2 h-6 w-6" />
                  Technical Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">IoT Systems</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Hardware Integration</Badge>
                </div>
                <p className="text-gray-600">
                  Passionate about creating solutions that bridge the gap between hardware and software, 
                  bringing innovative ideas to life through technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 flex items-center">
                    {category === "Programming Languages" && <Code className="mr-2 h-5 w-5" />}
                    {category === "Web Technologies" && <Globe className="mr-2 h-5 w-5" />}
                    {category === "Frameworks" && <Cpu className="mr-2 h-5 w-5" />}
                    {category === "Database" && <Database className="mr-2 h-5 w-5" />}
                    {category === "Tools" && <FileText className="mr-2 h-5 w-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{project.type}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <Award className="mr-1 h-4 w-4" />
                      {project.highlight}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                      <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{edu.period}</p>
                      <Badge variant="secondary" className="mt-1">{edu.percentage}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Award className="mr-3 h-5 w-5 text-blue-600" />
                    <p className="text-gray-700">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-600" />
                  <span>+91 9381817790</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-blue-600" />
                  <span>s.maheshmahi1234@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="mr-3 h-5 w-5 text-blue-600" />
                  <a 
                    href="https://github.com/sakkireddigarimahesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-3 h-5 w-5 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Sakki Reddigari Mahesh. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with passion for technology and innovation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

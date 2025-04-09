import React, { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, Mail, Phone, MapPin, Award, BookOpen, CheckCircle, Code, Briefcase, Shield, Building, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Education Data
  const educationCourses = {
    inProgress: [
      "Computer and Network Security",
      "Data Science Ethics",
      "Software Quality Engineering",
      "Industry specialization in software and data engineering",
      "Data communication",
      "Software Project Management",
      "Analysis and decision making",
      "Web development environment",
      "Preparing for a software project"
    ],
    completed: [
      "Artificial Intelligence (95) - Reinforcement Learning, Deep RL, Bayesian Networks",
      "Machine Learning (89) - Neural Networks, Ensemble Methods, SVM",
      "Operating Systems (95) - Process Management, Virtual Memory, Multi-threading",
      "Object Oriented Programming (94) - Design Patterns, SOLID Principles",
      "Analysis and Design of Software Systems (88) - Architecture, UML, OCL",
      "Data Structures",
      "Algorithms",
      "Databases",
      "Introduction to Computer Science"
    ]
  };

  // Skills Data
  const skills = {
    "Languages": ["Python (Primary)", "Java", "C/C++", "Go", "C#"],
    "Frontend Development": ["JavaScript", "HTML", "CSS", "Chrome Extensions API"],
    "Backend Development": ["REST APIs", "Flask", "Error handling", "Logging"],
    "Cloud & DevOps": ["GCP", "App Engine", "Git", "GitHub", "Docker"],
    "Security": ["Cryptography", "Authentication", "Malware Detection", "Network Security"],
    "Data & Databases": ["PostgreSQL", "Pandas", "SQL", "Data Processing"],
    "AI & ML": ["Neural Networks", "Reinforcement Learning", "LangChain", "RAG"],
    "Scientific Programming": ["NumPy", "Pandas", "Algorithm Development"],
    "Testing": ["Unit Testing", "Integration Testing", "PyTest", "Selenium", "TDD"]
  };

  // Projects Data
  const projects = [
    {
      title: "AI Documentation Helper",
      description: "Developing an intelligent search system using LangChain and RAG architecture. Implementing vector similarity algorithms and creating contextual retrieval from large documentation sets.",
      tech: ["LangChain", "RAG", "Python", "NumPy", "Pinecone", "FAISS"],
      github: "#",
      inProgress: true
    },
    {
      title: "Chrome Keyboard Fixer",
      description: "Chrome extension with Python Flask backend on GCP. Implements RESTful API with comprehensive error handling, concurrency management, and security best practices including input validation and IP-based rate limiting.",
      tech: ["JavaScript", "Python", "Flask", "GCP", "REST API"],
      github: "#"
    },
    {
      title: "Task Management System",
      description: "Task management system using Go and Docker. Features RESTful API, Goroutines for concurrency, sync.Cond for task synchronization, and CLI client interface.",
      tech: ["Go", "Docker", "REST API", "CLI"],
      github: "#"
    },
    {
      title: "Grandmother Website Project",
      description: "A personal website dedicated to Grandma Sara, built as part of a Web Development Environments course at Ben-Gurion University.",
      tech: ["HTML5", "CSS3", "jQuery", "Facebook SDK"],
      github: "https://github.com/sahareitam/318283116",
      demo: "https://wed-2023.github.io/318283116/"
    },
    {
      title: "LeetCode Solutions",
      description: "A public repository containing algorithmic solutions to problems from LeetCode, written in Python and organized by category and difficulty.",
      tech: ["Python", "Algorithms", "Data Structures"],
      github: "https://github.com/sahareitam/LeetCode"
    }
  ];

  // Professional skills
  const additionalSkills = [
    "Problem analysis and solution design",
    "Collaborative project implementation",
    "Systematic requirements gathering",
    "User-focused thinking",
    "Rapid self-learning capabilities",
    "Strong analytical skills",
    "Leadership and operational management",
    "Project planning and optimization"
  ];

  // Form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    // Would handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="bg-[#f5f1e6] min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">SE</div>
            
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  className={`capitalize font-medium ${
                    activeSection === section ? "text-gray-900" : "text-gray-600"
                  }`}
                  onClick={() => scrollTo(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/97b479_image.png"
              alt="Sahar Eitam"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Sahar Eitam
          </h1>
          <h2 className="text-xl text-gray-700 mb-6">
            Software Engineering Student
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
            Dedicated 3rd year Software & Information Systems Engineering student at Ben Gurion University 
            with a strong foundation in Full Stack development, machine learning, and software architecture. 
            Experienced with Frontend/Backend development, RESTful APIs, SQL databases, and cloud technologies. 
            Enthusiastic about algorithm development and scientific computing.
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/sahareitam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <GithubIcon className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/sahar-eitam-73b732228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          
          <div className="space-y-10">
            {/* Education */}
            <Card className="shadow-sm overflow-hidden">
              <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                <Award className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-lg font-medium">B.Sc in Software & Information Systems Engineering</p>
                  <p className="text-gray-600">Ben-Gurion University</p>
                  <p className="text-gray-600">Currently in third year with 3 semesters remaining</p>
                  <p className="text-gray-600">GPA: 86.33 | Last semester: 90.6</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      Courses In Progress
                    </h4>
                    <ul className="space-y-2">
                      {educationCourses.inProgress.map((course, index) => (
                        <li key={index} className="text-gray-600 text-sm">{course}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Completed Courses
                    </h4>
                    <ul className="space-y-2">
                      {educationCourses.completed.map((course, index) => (
                        <li key={index} className="text-gray-600 text-sm">{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-sm overflow-hidden">
              <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-medium mb-3 text-gray-800">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-[#f0ebe0] text-gray-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work & Military */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold">Work Experience</h3>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-medium">Site Supervisor & Quantity Surveyor</h4>
                  <p className="text-gray-600 mb-2">Eitam Liad Construction Company</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Oversaw construction projects (budgeting, quality, timelines)</li>
                    <li>• Supervised on-site teams and coordinated with contractors</li>
                    <li>• Transitioned to part-time role focusing on quantity surveying</li>
                    <li>• Available to work 3+ days per week</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm overflow-hidden">
                <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold">Military Service</h3>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-medium">Combat Soldier and Commander</h4>
                  <p className="text-gray-600 mb-2">Sayeret Givati Unit</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Led complex operations and managed team training</li>
                    <li>• Emphasized leadership and collaboration</li>
                    <li>• Demonstrated high level of personal responsibility</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Skills & Volunteering */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold">Professional Attributes</h3>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {additionalSkills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-[#f0ebe0] text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm overflow-hidden">
                <div className="bg-gray-50 py-3 px-6 border-b flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold">Volunteering</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Mathematics Tutor</h4>
                      <p className="text-gray-600">"Perach Mathematics" Project - Tutoring high school students in 5-unit math</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Community Support Volunteer</h4>
                      <p className="text-gray-600">Community Anchor Youth Village - Supporting at-risk youth in enrichment programs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    {project.inProgress && (
                      <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-[#f0ebe0] text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block mb-1 font-medium">Name</label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 font-medium">Email</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-1 font-medium">Message</label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <a href="mailto:sahar283@gmail.com" className="text-gray-600 hover:text-gray-900">
                        sahar283@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <a href="tel:+972527245733" className="text-gray-600 hover:text-gray-900">
                        +972-52-7245733
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600">Israel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Sahar Eitam. All rights reserved.</p>
      </footer>
    </div>
  );
}
import React from "react";
import { GithubIcon, LinkedinIcon, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Sahar Eitam
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Junior Software Engineer | Software Engineering Student at Ben-Gurion University
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Motivated Software & Information Systems Engineering student passionate about full-stack development, 
          AI, and cloud technologies. Experienced in backend systems, ML projects, and LangChain-based LLM apps. 
          Fast learner with strong academic foundation.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/sahareitam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sahar-eitam-73b732228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>

        <Button
          onClick={scrollToProjects}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          See my work
          <ArrowDown className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
import { Database, Cpu, Cloud, BarChart, Zap, Lock } from "lucide-react";

const BackendSection = () => {
  const techFeatures = [
    {
      icon: Database,
      title: "Data Ingestion",
      description: "API integrations with cameras, drones, and site management tools",
      tech: "RESTful APIs, WebSocket connections"
    },
    {
      icon: Cpu,
      title: "ML Models",
      description: "Trained on construction defect datasets, fine-tuned for accuracy",
      tech: "Computer Vision, Deep Learning"
    },
    {
      icon: Zap,
      title: "Automation Layer",
      description: "Real-time notifications, automated QA workflows, and audit-ready logs",
      tech: "Event-driven architecture"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable backend for image processing and data storage",
      tech: "Microservices, Auto-scaling"
    },
    {
      icon: BarChart,
      title: "Analytics Engine",
      description: "Predictive insights on defect trends across multiple projects",
      tech: "Data pipelines, ML inference"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
      tech: "Encryption, SOC 2, GDPR"
    }
  ];

  return (
    <section id="backend" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our backend demonstrates cutting-edge software engineering combined with advanced 
            data science for real-world deployment readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-lg mb-4 group-hover:bg-primary-glow transition-colors">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {feature.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Full-Stack Architecture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Frontend</h4>
              <p className="text-muted-foreground">React, TypeScript, Real-time dashboards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⚙️</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Backend</h4>
              <p className="text-muted-foreground">Python, FastAPI, ML model serving</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🧠</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">AI/ML</h4>
              <p className="text-muted-foreground">TensorFlow, Computer Vision, MLOps</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-card/50 border border-border rounded-lg">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-primary">This backend demonstrates</span> comprehensive 
              software engineering and data science expertise: designing scalable APIs, training ML models, 
              and ensuring <span className="font-semibold text-accent">enterprise-ready deployment</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;
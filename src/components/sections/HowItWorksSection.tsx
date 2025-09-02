import { Upload, Brain, AlertCircle, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Capture Data",
      description: "Upload site images, drone footage, or sensor data from the field.",
      example: "Site photos, thermal imaging, 360° documentation"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our ML model scans for cracks, surface inconsistencies, alignment errors, and material defects.",
      example: "Computer vision identifies structural anomalies"
    },
    {
      icon: AlertCircle,
      title: "Real-time Alerts",
      description: "Flagged issues appear instantly on the dashboard with severity levels.",
      example: "High/Medium/Low priority notifications"
    },
    {
      icon: CheckCircle,
      title: "Action & Tracking",
      description: "Project managers assign corrective action, track resolution, and maintain compliance logs.",
      example: "Complete audit trail and documentation"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process transforms construction quality control with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-lg p-6 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="text-sm text-primary font-medium">{step.example}</div>
              </div>
              
              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        {/* Example Case Study */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Real-World Example</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <span className="font-semibold text-primary">Instead of waiting for post-construction inspections</span>, 
            your team can identify concrete cracks during pouring, preventing structural delays and 
            <span className="font-semibold text-accent"> saving thousands in repair costs</span>. 
            Early detection means immediate correction, keeping projects on schedule and within budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
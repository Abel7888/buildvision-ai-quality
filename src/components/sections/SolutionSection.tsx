import { Shield, FileText, DollarSign, TrendingUp, Users } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Defect Detection",
      description: "AI-powered analysis of site images for comprehensive quality control",
      benefit: "95% accuracy rate"
    },
    {
      icon: FileText,
      title: "Automated QA Reports",
      description: "Generate compliance-ready documentation automatically",
      benefit: "Save 80% documentation time"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Minimize rework and delays through early detection",
      benefit: "Average 60% cost savings"
    },
    {
      icon: TrendingUp,
      title: "Improved Safety",
      description: "Spot potential hazards before they escalate",
      benefit: "Proactive risk management"
    },
    {
      icon: Users,
      title: "Scalable Platform",
      description: "Works for both small contractors and enterprise-level builders",
      benefit: "Flexible deployment options"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our MVP is designed to prove the value of AI in construction quality control, 
            delivering measurable results from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="text-sm font-semibold text-accent">{solution.benefit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Transform Your Construction Process
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Stop reactive fixes. Start predictive quality control. Our AI solution 
                integrates seamlessly with your existing workflow while providing 
                unprecedented insight into project quality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-primary">ROI</div>
                <div className="text-muted-foreground">Average 3x return on investment within 6 months</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm text-muted-foreground">Faster Issue Detection</div>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-warning">50+</div>
                <div className="text-sm text-muted-foreground">Defect Types Detected</div>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">100k+</div>
                <div className="text-sm text-muted-foreground">Images Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
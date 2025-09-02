const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About <span className="text-primary">BuildVision AI</span>
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              At BuildVision AI, we believe quality in construction should never be left to chance. 
              Our platform combines software engineering, data science, and machine learning to empower 
              construction teams with automated defect detection, quality control, and real-time monitoring.
            </p>
            
            <p>
              With construction projects getting larger and more complex, manual inspections are often 
              slow, expensive, and inconsistent. Our solution solves this by analyzing site images, 
              sensor data, and documentation to detect early-stage issues before they become costly problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Precision</h3>
              <p className="text-muted-foreground">AI-powered analysis with 95% accuracy in defect detection</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Speed</h3>
              <p className="text-muted-foreground">Real-time analysis and instant alerts for immediate action</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Intelligence</h3>
              <p className="text-muted-foreground">Advanced ML models trained on extensive construction datasets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
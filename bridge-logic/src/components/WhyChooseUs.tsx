import { CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Integrated Services",
      description: "Unique combination of consulting expertise and logistics operations under one roof"
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "International experience with local market knowledge across diverse industries"
    },
    {
      icon: TrendingUp,
      title: "Cost & Efficiency Optimization",
      description: "Proven track record of reducing operational costs while improving performance"
    },
    {
      icon: Shield,
      title: "Trusted by Enterprises",
      description: "Reliable partner for Fortune 500 companies and growing businesses alike"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver measurable results through integrated solutions and deep industry expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-corporate transition-smooth">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Shield className="w-4 h-4" />
            Trusted by 500+ companies worldwide
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
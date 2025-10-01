import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Laptop, 
  Truck, 
  Settings, 
  TrendingUp, 
  Shield, 
  Network, 
  Code,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const industrialServices = [
    {
      title: "Operations Optimization",
      description: "Streamline manufacturing processes and improve operational efficiency through lean methodologies and data-driven insights.",
      features: ["Process Analysis", "Lean Manufacturing", "Workflow Optimization", "Performance Metrics"]
    },
    {
      title: "Asset Management",
      description: "Maximize equipment lifecycle and minimize downtime through predictive maintenance and strategic asset planning.",
      features: ["Predictive Maintenance", "Asset Tracking", "Lifecycle Management", "Cost Optimization"]
    },
    {
      title: "Engineering Solutions",
      description: "Custom engineering solutions for complex industrial challenges, from design to implementation.",
      features: ["System Design", "Process Engineering", "Quality Control", "Compliance Management"]
    }
  ];

  const itServices = [
    {
      title: "Network & Systems Integration",
      description: "Design and implement robust IT infrastructure that scales with your business needs and ensures seamless connectivity.",
      features: ["Network Architecture", "Cloud Integration", "Security Implementation", "System Migration"]
    },
    {
      title: "Automation & Software",
      description: "Custom software development and automation solutions to digitize processes and improve efficiency.",
      features: ["Custom Software", "Process Automation", "API Development", "Digital Transformation"]
    },
    {
      title: "Cybersecurity & IT Support",
      description: "Comprehensive cybersecurity services and ongoing IT support to protect and maintain your technology infrastructure.",
      features: ["Security Audits", "Threat Protection", "24/7 Monitoring", "Technical Support"]
    }
  ];

  const logisticsServices = [
    {
      title: "Cross-Docking Operations",
      description: "Efficient cross-docking services that reduce inventory costs and accelerate product movement through the supply chain.",
      features: ["Rapid Processing", "Inventory Reduction", "Cost Savings", "Supply Chain Optimization"]
    },
    {
      title: "Assembly Warehouse",
      description: "Value-added assembly services within our warehouse facilities to reduce your operational complexity.",
      features: ["Product Assembly", "Quality Control", "Packaging Services", "Inventory Management"]
    },
    {
      title: "Last-Mile Delivery Solutions",
      description: "Reliable last-mile delivery solutions that ensure your products reach customers quickly and safely.",
      features: ["Route Optimization", "Real-time Tracking", "Flexible Delivery", "Customer Communication"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Comprehensive solutions across industrial consulting, IT services, and logistics operations 
              to transform your business and drive sustainable growth.
            </p>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Trusted by 500+ companies worldwide
            </Badge>
          </div>
        </div>
      </section>

      {/* Industrial Consulting */}
      <section id="industrial" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Factory className="w-12 h-12 text-primary mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-foreground">Industrial Consulting</h2>
              <p className="text-xl text-muted-foreground mt-2">
                Engineering excellence and operational optimization
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industrialServices.map((service, index) => (
              <Card key={service.title} className="shadow-soft border-0 bg-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IT Consulting */}
      <section id="it" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Laptop className="w-12 h-12 text-accent mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-foreground">IT Consulting</h2>
              <p className="text-xl text-muted-foreground mt-2">
                Digital transformation and technology solutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Card key={service.title} className="shadow-soft border-0 bg-background hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Warehousing Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Truck className="w-12 h-12 text-energy mr-4" />
            <div>
              <h2 className="text-4xl font-bold text-foreground">Logistics & Warehousing</h2>
              <p className="text-xl text-muted-foreground mt-2">
                Supply chain optimization and distribution excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {logisticsServices.map((service, index) => (
              <Card key={service.title} className="shadow-soft border-0 bg-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-energy mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="energy" size="lg" asChild>
              <Link to="/logistics">
                Learn More About Our Logistics Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how our integrated solutions can drive efficiency, reduce costs, 
            and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-corporate" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
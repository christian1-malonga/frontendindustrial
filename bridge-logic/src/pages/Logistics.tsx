import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Package, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield
} from "lucide-react";

const Logistics = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by up to 30% through optimized processes and efficient resource utilization"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Accelerate delivery times with streamlined cross-docking and direct distribution methods"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Flexible solutions that grow with your business needs and adapt to market demands"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "99.8% uptime guarantee with robust systems and comprehensive contingency planning"
    }
  ];

  const processes = [
    {
      step: "1",
      title: "Inbound Processing",
      description: "Goods arrive and are immediately sorted and processed for outbound distribution"
    },
    {
      step: "2", 
      title: "Cross-Docking",
      description: "Products move directly from inbound to outbound without long-term storage"
    },
    {
      step: "3",
      title: "Quality Control", 
      description: "Every item undergoes quality checks and assembly services if required"
    },
    {
      step: "4",
      title: "Distribution",
      description: "Optimized routing ensures fastest delivery to final destinations"
    }
  ];

  const services = [
    {
      title: "Cross-Docking Excellence",
      description: "Our state-of-the-art cross-docking facilities eliminate the need for traditional warehousing, reducing costs and accelerating delivery times.",
      features: ["24-hour processing", "Real-time tracking", "Multi-modal transportation", "Temperature-controlled zones"],
      icon: Truck
    },
    {
      title: "Assembly Warehouse",
      description: "Value-added assembly services performed within our warehouse facilities, reducing your operational complexity and overhead costs.",
      features: ["Product assembly", "Custom packaging", "Quality assurance", "Inventory management"],
      icon: Package
    },
    {
      title: "Last-Mile Solutions",
      description: "Comprehensive last-mile delivery solutions that ensure your products reach customers quickly, safely, and cost-effectively.",
      features: ["Route optimization", "Real-time updates", "Flexible delivery windows", "Customer notifications"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Elite Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-semibold shadow-soft glass-effect text-white border-white/30">
              Elite Logistics Division
            </Badge>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-10 text-white text-balance">
              Next-Generation 
              <span className="block mt-4 text-gradient-innovation bg-clip-text text-transparent">
                Smart Logistics
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed font-light max-w-4xl mx-auto text-balance">
              Revolutionary cross-docking and assembly warehouse solutions engineered to 
              <span className="font-semibold text-energy-light"> transform your supply chain</span>, 
              delivering unprecedented efficiency and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="glass" size="xl" className="hover-lift shadow-premium group" asChild>
                <Link to="/contact">
                  <Zap className="mr-3 h-6 w-6 group-hover:text-energy transition-smooth" />
                  Get Elite Consultation
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button variant="outline-corporate" size="xl" className="border-2 border-white/40 text-white hover:bg-white hover:text-primary hover-lift">
                <Package className="mr-3 h-6 w-6" />
                Watch Process Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Elite Key Benefits */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-energy/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-8">
              <TrendingUp className="w-8 h-8 text-primary mr-3" />
              <Badge variant="secondary" className="px-6 py-2 font-semibold">
                Proven Excellence
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 text-foreground text-balance">
              Elite Business 
              <span className="text-gradient-primary"> Advantages</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Transform your supply chain with measurable, industry-leading improvements 
              that deliver competitive advantage and exceptional ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center professional-card hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-elegant"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-energy/20 via-energy/10 to-accent/10 flex items-center justify-center group-hover:shadow-energy transition-elegant group-hover:scale-110">
                    <benefit.icon className="w-10 h-10 text-energy group-hover:text-energy-light transition-smooth" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth mb-4">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Docking Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Cross-Docking Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined operations that eliminate traditional warehousing bottlenecks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full corporate-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-corporate">
                    {process.step}
                  </div>
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Diagram Placeholder */}
          <div className="mt-16">
            <Card className="shadow-elegant border-0 bg-background">
              <CardContent className="p-12">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Cross-Docking Flow Diagram
                  </h3>
                  <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Process Flow Diagram</p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Visualizing the efficient flow from inbound to outbound with minimal handling
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Logistics Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions covering every aspect of your supply chain needs
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="w-10 h-10 text-energy mr-4" />
                    <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-energy mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-innovation" size="lg">
                    Learn More About This Service
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-full h-80 bg-muted rounded-xl shadow-soft flex items-center justify-center">
                    <p className="text-muted-foreground">{service.title} Visual</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-energy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Proven Results in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifiable success that demonstrates our logistics excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="text-6xl font-black mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  50M+
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity">
                  50M+
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 border border-white/20">
                Square Feet Managed
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="text-6xl font-black mb-2 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  24hr
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity">
                  24hr
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 border border-white/20">
                Average Processing Time
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="text-6xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  99.8%
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity">
                  99.8%
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 border border-white/20">
                Uptime Guarantee
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="text-6xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  30%
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent opacity-20 blur-lg group-hover:opacity-40 transition-opacity">
                  30%
                </div>
              </div>
              <div className="text-lg font-semibold text-foreground bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 border border-white/20">
                Average Cost Reduction
              </div>
            </div>
          </div>

          {/* Additional Context */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic">
              These numbers represent real achievements across our global logistics network
            </p>
          </div>
        </div>
      </section>

      {/* Elite CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 premium-gradient"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Zap className="w-8 h-8 text-energy-light mr-3" />
              <Badge variant="secondary" className="px-6 py-2 text-white bg-white/20 border-white/30 font-semibold">
                Transform Your Business Today
              </Badge>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 text-white text-balance">
              Ready to Revolutionize Your 
              <span className="block mt-4 text-energy-light">Supply Chain?</span>
            </h2>
            <p className="text-2xl mb-12 text-white/90 max-w-4xl mx-auto font-light leading-relaxed text-balance">
              Partner with industry leaders to unlock unprecedented efficiency, 
              reduce operational costs by up to 30%, and accelerate your business growth 
              with our cutting-edge logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="glass" size="xl" className="hover-lift shadow-premium group" asChild>
                <Link to="/contact">
                  <Shield className="mr-3 h-6 w-6 group-hover:text-energy transition-smooth" />
                  Schedule Elite Consultation
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button variant="outline-corporate" size="xl" className="border-2 border-white/40 text-white hover:bg-white hover:text-primary hover-lift" asChild>
                <Link to="/services">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Explore All Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
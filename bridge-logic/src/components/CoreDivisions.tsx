import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import industrialIcon from "@/assets/icon-industrial.jpg";
import itIcon from "@/assets/icon-it.jpg";
import logisticsIcon from "@/assets/icon-logistics.jpg";

const CoreDivisions = () => {
  const divisions = [
    {
      icon: industrialIcon,
      title: "Industrial Consulting",
      description: "Process optimization, engineering solutions, and operations management for manufacturing excellence.",
      features: ["Process Optimization", "Engineering Solutions", "Operations Management"],
      link: "/services#industrial",
      color: "primary"
    },
    {
      icon: itIcon,
      title: "IT Consulting",
      description: "Software development, networking, automation, and comprehensive IT solutions for digital transformation.",
      features: ["Software Development", "Network Integration", "IT Automation"],
      link: "/services#it",
      color: "accent"
    },
    {
      icon: logisticsIcon,
      title: "Logistics & Warehousing",
      description: "Cross-docking operations, assembly services, and distribution solutions for supply chain optimization.",
      features: ["Cross-Docking", "Assembly Services", "Distribution"],
      link: "/logistics",
      color: "energy"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Core Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions across industrial consulting, IT services, and logistics operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <Card 
              key={division.title} 
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 border-0 shadow-soft bg-background"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden shadow-soft">
                  <img
                    src={division.icon}
                    alt={`${division.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {division.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {division.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {division.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline-corporate" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground" 
                  asChild
                >
                  <Link to={division.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDivisions;
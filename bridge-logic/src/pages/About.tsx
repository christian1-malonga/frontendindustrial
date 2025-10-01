import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that transform industries and drive technological advancement."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining the highest standards of ethics and transparency in all our business relationships."
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Delivering optimal results through streamlined processes and continuous improvement methodologies."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships based on trust, collaboration, and mutual success."
    }
  ];

  const team = [
    {
      role: "Industrial Engineers",
      description: "Experts in process optimization, lean manufacturing, and operational excellence with decades of combined experience."
    },
    {
      role: "IT Specialists",
      description: "Certified professionals in network architecture, software development, and automation technologies."
    },
    {
      role: "Logistics Managers",
      description: "Supply chain veterans specializing in warehousing, distribution, and cross-docking operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              About DuikEnterprises
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We are a forward-thinking consulting and logistics company dedicated to transforming 
              businesses through innovative solutions and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between traditional consulting and modern logistics, 
                  DuikEnterprises emerged from the recognition that businesses need integrated solutions to thrive 
                  in today's complex marketplace.
                </p>
                <p>
                  Our unique approach combines deep industry expertise in industrial engineering, cutting-edge 
                  IT solutions, and world-class logistics operations under one roof. This integration allows 
                  us to deliver comprehensive solutions that drive real, measurable results for our clients.
                </p>
                <p>
                  Over the years, we have evolved into a trusted partner for businesses ranging from emerging 
                  startups to Fortune 500 companies, helping them optimize operations, reduce costs, and 
                  accelerate growth through innovative technology and strategic consulting.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-xl shadow-elegant flex items-center justify-center">
                {/* Replace this with a real picture of the company story */}
                <p className="text-muted-foreground">Real picture of the company story</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-soft border-0 bg-background">
              <CardHeader className="text-center pb-4">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl font-bold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses with integrated consulting and logistics solutions that drive 
                  operational excellence, technological advancement, and sustainable growth in an 
                  ever-evolving global marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-background">
              <CardHeader className="text-center pb-4">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-3xl font-bold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the global leader in integrated business solutions, known for innovation, 
                  reliability, and transformative impact on our clients' success across all industries 
                  and markets we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Team Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team of specialists bringing together decades of experience across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.role} className="text-center shadow-soft border-0 bg-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {member.role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-corporate transition-smooth">
                  <value.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
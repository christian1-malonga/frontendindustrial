import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Factory,
  Laptop,
  Truck
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");

  const updateSubject = (currentCompany: string, currentDepartment: string) => {
    let newSubject = "";
    if (currentCompany && currentDepartment) {
      newSubject = `${currentCompany} - ${currentDepartment}`;
    } else if (currentCompany) {
      newSubject = currentCompany;
    } else if (currentDepartment) {
      newSubject = currentDepartment;
    }
    setFormData(prev => ({
      ...prev,
      subject: newSubject
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setCompany("");
        setDepartment("");
      } else {
        const errorData = await response.json();
        console.error("Error sending message:", errorData);
        toast({
          title: "Failed to Send Message",
          description: errorData.detail || "An unexpected error occurred. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please check your connection.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);
    updateSubject(company, value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCompany(value);
    updateSubject(value, department);
  };

  const departments = [
    { value: "industrial", label: "Industrial Consulting", icon: Factory },
    { value: "it", label: "IT Consulting", icon: Laptop },
    { value: "logistics", label: "Logistics & Warehousing", icon: Truck },
    { value: "general", label: "General Inquiry", icon: Mail }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri 8:00 AM - 6:00 PM EST"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@DuikEnterprises.com", "We respond within 24 hours"]
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Gonyeli", "Nicosia, Cyprus"]
    }
  ];

  const departmentContacts = [
    {
      department: "Industrial Consulting",
      email: "industrial@DuikEnterprises.com",
      phone: "+1 (555) 123-4001",
      description: "Process optimization and engineering solutions"
    },
    {
      department: "IT Consulting", 
      email: "it@DuikEnterprises.com",
      phone: "+1 (555) 123-4002",
      description: "Software development and system integration"
    },
    {
      department: "Logistics & Warehousing",
      email: "logistics@DuikEnterprises.com", 
      phone: "+1 (555) 123-4003",
      description: "Supply chain and distribution solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Ready to transform your business? Contact our experts for a free consultation 
              and discover how we can optimize your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={company}
                        onChange={handleCompanyChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department of Interest</Label>
                      <Select value={department} onValueChange={handleDepartmentChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              <div className="flex items-center">
                                <dept.icon className="w-4 h-4 mr-2" />
                                {dept.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project and how we can help..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="corporate" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <Card key={contact.title} className="shadow-soft border-0 bg-card">
                      <CardContent className="flex items-start p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                          {contact.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Direct Department Contacts
                </h3>
                <div className="space-y-4">
                  {departmentContacts.map((dept, index) => (
                    <Card key={dept.department} className="shadow-soft border-0 bg-card">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{dept.department}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Mail className="w-3 h-3 mr-2" />
                            {dept.email}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Phone className="w-3 h-3 mr-2" />
                            {dept.phone}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="shadow-soft border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      For urgent matters outside business hours, please use our emergency contact line: 
                      <span className="font-medium text-primary"> +1 (555) 123-URGENT</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Location
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit our headquarters in the heart of Gonyeli
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Headquarters Info Card */}
            <div className="flex">
              <Card className="shadow-elegant border-0 bg-background w-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    DuikEnterprises Headquarters
                  </h3>
                  <div className="space-y-4 text-muted-foreground flex-grow">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">123 Gonyeli</p>
                        <p>Suite 400</p>
                        <p>Nicosia, Cyprus</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm">
                        <strong>Nearby Landmarks:</strong><br />
                        • 2 blocks from Penn Station<br />
                        • Walking distance to Madison Square Garden<br />
                        • Multiple subway lines accessible
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm">
                        <strong>Parking:</strong> Visitor parking available in the building garage. 
                        Street parking and nearby public parking garages also available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="flex">
              <Card className="shadow-elegant border-0 bg-background w-full">
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full min-h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.895425892229!2d33.28593631524501!3d35.2094139803191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1a415a5e1a89%3A0x8b0c7a4d7e4a4b6e!2sG%C3%B6nyeli!5e0!3m2!1sen!2s!4v1620056789591!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      title="Google Map of Gonyeli, Nicosia, Cyprus"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
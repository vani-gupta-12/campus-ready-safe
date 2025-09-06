import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GamepadIcon, 
  MapPin, 
  Siren, 
  Users, 
  BarChart3, 
  Smartphone,
  BookOpen,
  Shield,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <GamepadIcon className="w-8 h-8" />,
      title: "Gamified Learning",
      description: "Interactive modules that make disaster education engaging through games, quizzes, and simulations.",
      color: "bg-success/10 text-success",
      category: "Learning"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Region-Specific Alerts",
      description: "Localized disaster information and preparedness guidelines based on geographical vulnerabilities.",
      color: "bg-warning/10 text-warning",
      category: "Alerts"
    },
    {
      icon: <Siren className="w-8 h-8" />,
      title: "Virtual Emergency Drills",
      description: "Simulated disaster scenarios to practice emergency responses without physical risks.",
      color: "bg-emergency/10 text-emergency",
      category: "Training"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Stakeholder Platform",
      description: "Dedicated interfaces for students, teachers, administrators, and emergency responders.",
      color: "bg-primary/10 text-primary",
      category: "Platform"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Preparedness Dashboard",
      description: "Real-time analytics and reporting for institutional disaster readiness assessment.",
      color: "bg-accent/10 text-accent",
      category: "Analytics"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Emergency Communication",
      description: "Instant messaging and alert systems for crisis communication and coordination.",
      color: "bg-secondary/10 text-secondary",
      category: "Communication"
    }
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curriculum Integration",
      description: "Seamlessly fits into existing educational frameworks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Life-Saving Skills",
      description: "Practical knowledge that can prevent casualties"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Updates",
      description: "Real-time alerts and emergency information"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Disaster Preparedness Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete digital ecosystem designed to transform how Indian educational institutions 
            approach disaster management and emergency preparedness.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                  {feature.category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Disaster Education Matters
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every year, natural disasters affect millions of students across India. 
              Proper education and preparation can save lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
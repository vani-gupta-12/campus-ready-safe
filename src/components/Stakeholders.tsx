import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Shield, 
  Heart,
  Building,
  CheckCircle
} from "lucide-react";

const Stakeholders = () => {
  const stakeholders = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Students",
      subtitle: "K-12 & Higher Education",
      description: "Interactive learning modules, gamified experiences, and practical disaster response training.",
      features: [
        "Age-appropriate disaster education content",
        "Virtual reality emergency simulations",
        "Peer learning and group challenges",
        "Achievement badges and progress tracking"
      ],
      color: "bg-success text-success-foreground",
      bgGradient: "bg-gradient-to-br from-success/10 to-success/5"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teachers & Staff",
      subtitle: "Educators & Administrators",
      description: "Comprehensive tools for delivering disaster education and managing emergency preparedness.",
      features: [
        "Lesson plans and teaching resources",
        "Student progress monitoring",
        "Emergency response protocols",
        "Professional development modules"
      ],
      color: "bg-primary text-primary-foreground",
      bgGradient: "bg-gradient-to-br from-primary/10 to-primary/5"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Emergency Teams",
      subtitle: "First Responders & Officials",
      description: "Real-time coordination tools and institutional preparedness assessment capabilities.",
      features: [
        "Institutional readiness dashboards",
        "Emergency communication systems",
        "Resource allocation planning",
        "Multi-agency coordination tools"
      ],
      color: "bg-emergency text-emergency-foreground",
      bgGradient: "bg-gradient-to-br from-emergency/10 to-emergency/5"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Parents & Guardians",
      subtitle: "Family Support Network",
      description: "Stay informed about your child's safety education and emergency preparedness.",
      features: [
        "Child's learning progress updates",
        "Emergency contact systems",
        "Home preparedness resources",
        "School safety notifications"
      ],
      color: "bg-accent text-accent-foreground",
      bgGradient: "bg-gradient-to-br from-accent/10 to-accent/5"
    }
  ];

  const institutions = [
    { name: "Schools (K-12)", count: "15,000+", icon: <Building className="w-5 h-5" /> },
    { name: "Colleges & Universities", count: "3,500+", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Government Departments", count: "29 States", icon: <Shield className="w-5 h-5" /> },
    { name: "NGOs & Partners", count: "200+", icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform serves the diverse needs of everyone involved in 
            educational disaster preparedness across India.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {stakeholders.map((stakeholder, index) => (
            <Card key={index} className={`${stakeholder.bgGradient} border-border/50 hover:shadow-soft transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl ${stakeholder.color} flex items-center justify-center`}>
                    {stakeholder.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground">{stakeholder.title}</CardTitle>
                    <CardDescription className="text-muted-foreground font-medium">
                      {stakeholder.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{stakeholder.description}</p>
                
                <div className="space-y-2">
                  {stakeholder.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institutional Coverage */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Nationwide Institutional Coverage
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partnering with educational institutions and government bodies across India 
              to create a comprehensive disaster preparedness network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((institution, index) => (
              <div key={index} className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-3">
                  {institution.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{institution.count}</div>
                <div className="text-sm text-muted-foreground">{institution.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
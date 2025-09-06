import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Clock,
  Award,
  Target,
  ArrowRight
} from "lucide-react";

const Impact = () => {
  const statistics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1.2M+",
      label: "Students at High Risk",
      description: "Across disaster-prone regions in India",
      color: "text-emergency"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: "68%",
      label: "Schools Unprepared",
      description: "Lack adequate disaster management protocols",
      color: "text-warning"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "< 3min",
      label: "Critical Response Time",
      description: "During earthquakes for effective evacuation",
      color: "text-emergency"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "85%",
      label: "Improved Preparedness",
      description: "With proper disaster education programs",
      color: "text-success"
    }
  ];

  const outcomes = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reduced Response Time",
      description: "40% faster evacuation during drills",
      metric: "40%"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Increased Awareness",
      description: "Students can identify disaster risks",
      metric: "92%"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teacher Confidence",
      description: "Feel prepared to handle emergencies",
      metric: "78%"
    }
  ];

  const supportingData = [
    {
      source: "National Disaster Management Authority (NDMA)",
      finding: "Low awareness levels in schools despite India's high disaster vulnerability index"
    },
    {
      source: "UN Office for Disaster Risk Reduction (UNDRR)",
      finding: "Recommends integrating disaster risk reduction in education policies"
    },
    {
      source: "Ministry of Education, India",
      finding: "Identified need for structured disaster management curriculum"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Critical Need for Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Data-driven insights reveal the urgent necessity for comprehensive 
            disaster preparedness education in Indian institutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all duration-300 border-border/50">
              <CardHeader className="pb-2">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-muted/30 flex items-center justify-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">{stat.value}</CardTitle>
                <CardDescription className="font-semibold text-foreground">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expected Outcomes */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Expected Outcomes with Our Platform
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in disaster preparedness and emergency response capabilities 
              across educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-success text-success-foreground rounded-xl flex items-center justify-center">
                    {outcome.icon}
                  </div>
                  <div className="text-2xl font-bold text-success">{outcome.metric}</div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{outcome.title}</h4>
                <p className="text-muted-foreground text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Data */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Evidence-Based Approach
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is built on extensive research and recommendations from 
              leading disaster management and education authorities.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {supportingData.map((data, index) => (
              <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-xl">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground mb-1">{data.source}</div>
                  <div className="text-muted-foreground text-sm">{data.finding}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              Join the Movement
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
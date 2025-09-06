import { Button } from "@/components/ui/button";
import { Shield, Users, BookOpen, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-disaster-prep.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emergency/10 text-emergency px-4 py-2 rounded-full text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Critical Need for Disaster Preparedness
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Preparing India's Future Through
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Disaster Education</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Empowering schools and colleges with interactive disaster management education, 
              virtual drills, and real-time emergency preparedness training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Shield className="w-5 h-5" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5" />
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Students at Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">29</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src={heroImage} 
                alt="Students learning disaster preparedness" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground p-3 rounded-xl shadow-soft animate-pulse-soft">
              <Users className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-warning text-warning-foreground p-3 rounded-xl shadow-soft animate-pulse-soft">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
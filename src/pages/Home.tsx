
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Trophy, Target, Users, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Master cybersecurity through hands-on modules and real-world scenarios"
    },
    {
      icon: Target,
      title: "Practical Challenges",
      description: "Test your skills with vulnerable machines and CTF-style challenges"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Earn badges, certificates, and climb the leaderboard"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a community of cybersecurity enthusiasts and experts"
    }
  ];

  const testimonials = [
    {
      name: "Akmal Karimov",
      role: "Security Analyst",
      content: "CyberAcademy helped me transition into cybersecurity. The practical approach is outstanding!",
      rating: 5
    },
    {
      name: "Dilnoza Uzbekova",
      role: "Penetration Tester", 
      content: "The challenges are realistic and well-designed. Perfect for skill development.",
      rating: 5
    },
    {
      name: "Sardor Tashkentov",
      role: "IT Student",
      content: "Amazing platform combining traditional learning with modern techniques.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-primary mr-4" />
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  CyberAcademy
                </h1>
                <p className="text-xl text-muted-foreground">Uzbekistan Security Institute</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Master Cybersecurity with
              <span className="text-primary block">Interactive Learning</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience cutting-edge cybersecurity education combining traditional Uzbek values 
              of knowledge excellence with modern security practices and hands-on challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto cyber-glow text-lg px-8 py-3">
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/challenges">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
                  View Challenges
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Uzbek Pattern Overlay */}
        <div className="absolute inset-0 uzbek-pattern opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose CyberAcademy?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines theoretical knowledge with practical experience in a gamified learning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modules Section */}
      <section className="py-16 bg-card/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Learning Modules</h3>
            <p className="text-muted-foreground text-lg">
              Structured learning paths from beginner to advanced levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur suzani-accent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  Network Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Learn network protocols, firewalls, and intrusion detection</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">12 lessons • 75% complete</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur suzani-accent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-accent mr-2" />
                  Penetration Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Hands-on ethical hacking and vulnerability assessment</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">18 lessons • 45% complete</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur suzani-accent">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  Digital Forensics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Investigate security incidents and analyze digital evidence</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">15 lessons • 20% complete</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Students Say</h3>
            <p className="text-muted-foreground text-lg">
              Join thousands of satisfied learners who advanced their cybersecurity careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join CyberAcademy today and become part of Uzbekistan's next generation of cybersecurity professionals
          </p>
          <Link to="/login">
            <Button size="lg" className="cyber-glow text-lg px-8 py-3">
              Join CyberAcademy Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

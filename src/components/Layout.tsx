import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, BookOpen, Trophy, Settings, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BookOpen },
    { name: 'Courses', href: '/courses', icon: Shield },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 animate-pulse-glow">
                  <Shield className="h-8 w-8 text-accent opacity-50" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">CyberAcademy</span>
                <span className="text-xs text-muted-foreground">Uzbek Security Institute</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary suzani-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* User Menu & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>John Doe</span>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 bg-card/50 backdrop-blur">
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary border-r-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-border/40">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    John Doe
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">CyberAcademy Uzbekistan</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Leading cybersecurity education platform combining modern security practices 
                with traditional Uzbek values of knowledge and excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Learning</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
                <li><Link to="/achievements" className="hover:text-primary transition-colors">Certifications</Link></li>
                <li><Link to="/practice" className="hover:text-primary transition-colors">Practice Labs</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CyberAcademy Uzbekistan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

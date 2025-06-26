
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, BookOpen, Trophy, User, Menu, X, Target, LogOut, TrendingUp, ChevronDown, Settings, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, [location]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: BookOpen, public: false },
    { name: 'Modules', href: '/modules', icon: BookOpen, public: false },
    { name: 'Challenges', href: '/challenges', icon: Target, public: false },
    { name: 'Rating', href: '/rating', icon: TrendingUp, public: false },
    { name: 'Achievements', href: '/achievements', icon: Trophy, public: false },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of CyberAcademy.",
    });
    navigate('/');
  };

  const getUserDisplayName = () => {
    const email = localStorage.getItem('userEmail');
    return email ? email.split('@')[0] : 'User';
  };

  // Don't show layout wrapper on login page
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-background relative">
        <ParticleBackground />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-3">
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
              {!isAuthenticated && (
                <Link
                  to="/"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/')
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <span>Home</span>
                </Link>
              )}
              {navigation
                .filter(item => item.public || isAuthenticated)
                .map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
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
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{getUserDisplayName()}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/access')}>
                      <Wifi className="h-4 w-4 mr-2" />
                      Access
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/manage-account')}>
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Account
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button size="sm" className="hidden md:flex">
                    Sign In
                  </Button>
                </Link>
              )}
              
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
                {!isAuthenticated && (
                  <Link
                    to="/"
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
                      isActive('/')
                        ? 'bg-primary/10 text-primary border-r-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Home</span>
                  </Link>
                )}
                {navigation
                  .filter(item => item.public || isAuthenticated)
                  .map((item) => (
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
                  {isAuthenticated ? (
                    <>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start mb-2"
                        onClick={() => {
                          navigate('/profile');
                          setMobileMenuOpen(false);
                        }}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start mb-2"
                        onClick={() => {
                          navigate('/access');
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Wifi className="h-4 w-4 mr-2" />
                        Access
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start mb-2"
                        onClick={() => {
                          navigate('/manage-account');
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Manage Account
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-muted-foreground"
                        onClick={() => {
                          handleLogout();
                          setMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full">Sign In</Button>
                    </Link>
                  )}
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

      {/* Footer - Only show on home page */}
      {isHomePage && (
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
                  <li><Link to="/modules" className="hover:text-primary transition-colors">All Modules</Link></li>
                  <li><Link to="/challenges" className="hover:text-primary transition-colors">Challenges</Link></li>
                  <li><Link to="/achievements" className="hover:text-primary transition-colors">Certifications</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/rating" className="hover:text-primary transition-colors">Leaderboard</Link></li>
                  <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 CyberAcademy Uzbekistan. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;

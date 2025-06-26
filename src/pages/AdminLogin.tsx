
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate admin authentication
    setTimeout(() => {
      if (email === 'admin@cyberacademy.com' && password === 'admin123') {
        localStorage.setItem('isAdminAuthenticated', 'true');
        localStorage.setItem('adminEmail', email);
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the CyberAcademy Admin Panel",
        });
        navigate('/admin');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 relative flex items-center justify-center">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-md p-6">
        <Card className="bg-card/30 backdrop-blur-md border border-border/30 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative">
                <Shield className="h-12 w-12 text-primary" />
                <Lock className="h-6 w-6 text-accent absolute -bottom-1 -right-1 bg-background rounded-full p-1" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">Admin Portal</CardTitle>
              <CardDescription className="text-muted-foreground">
                Access the CyberAcademy management dashboard
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Admin Email
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@cyberacademy.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Demo credentials: admin@cyberacademy.com / admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;

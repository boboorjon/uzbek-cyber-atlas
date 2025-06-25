
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Phone, 
  Edit3, 
  Save, 
  X,
  Clock,
  BookOpen,
  Trophy,
  Target,
  TrendingUp
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+998 90 123 45 67',
    location: 'Tashkent, Uzbekistan',
    bio: 'Passionate cybersecurity enthusiast with focus on web application security and penetration testing.',
    company: 'TechCorp Solutions',
    position: 'Security Analyst'
  });

  const userStats = {
    totalCourses: 24,
    completedCourses: 8,
    totalHours: 156,
    certificates: 3,
    achievements: 12,
    currentStreak: 15,
    joinDate: '2023-09-15',
    lastActive: '2024-01-20'
  };

  const learningHistory = [
    {
      id: 1,
      course: 'Web Application Security Fundamentals',
      completedDate: '2024-01-15',
      grade: 'A',
      timeSpent: '8 hours',
      category: 'Web Security'
    },
    {
      id: 2,
      course: 'Network Security Essentials',
      completedDate: '2024-01-10',
      grade: 'A-',
      timeSpent: '12 hours',
      category: 'Network Security'
    },
    {
      id: 3,
      course: 'Ethical Hacking Basics',
      completedDate: '2023-12-20',
      grade: 'B+',
      timeSpent: '15 hours',
      category: 'Penetration Testing'
    },
    {
      id: 4,
      course: 'Cryptography Fundamentals',
      completedDate: '2023-12-01',
      grade: 'A',
      timeSpent: '10 hours',
      category: 'Cryptography'
    }
  ];

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 suzani-accent">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-primary/30">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback className="text-2xl bg-primary/20 text-primary">
                {formData.firstName[0]}{formData.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {formData.firstName} {formData.lastName}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">{formData.bio}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {formData.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Joined {new Date(userStats.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Last active {new Date(userStats.lastActive).toLocaleDateString()}
                </div>
              </div>
            </div>
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "destructive" : "outline"}
              size="sm"
            >
              {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-primary/20 text-center">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{userStats.completedCourses}</div>
            <div className="text-sm text-muted-foreground">Courses Completed</div>
          </CardContent>
        </Card>
        <Card className="border-accent/20 text-center">
          <CardContent className="p-4">
            <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">{userStats.totalHours}</div>
            <div className="text-sm text-muted-foreground">Hours Learned</div>
          </CardContent>
        </Card>
        <Card className="border-primary/20 text-center">
          <CardContent className="p-4">
            <Trophy className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">{userStats.certificates}</div>
            <div className="text-sm text-muted-foreground">Certificates</div>
          </CardContent>
        </Card>
        <Card className="border-accent/20 text-center">
          <CardContent className="p-4">
            <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">{userStats.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Content */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="learning">Learning History</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Manage your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  {isEditing ? (
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  ) : (
                    <div className="mt-2 text-sm text-foreground">{formData.firstName}</div>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  {isEditing ? (
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  ) : (
                    <div className="mt-2 text-sm text-foreground">{formData.lastName}</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  ) : (
                    <div className="mt-2 text-sm text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {formData.email}
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  ) : (
                    <div className="mt-2 text-sm text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {formData.phone}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                {isEditing ? (
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                ) : (
                  <div className="mt-2 text-sm text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {formData.location}
                  </div>
                )}
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning History</CardTitle>
              <CardDescription>
                Your completed courses and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.course}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Completed: {new Date(item.completedDate).toLocaleDateString()}</span>
                        <span>Time: {item.timeSpent}</span>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">{item.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Preferences</CardTitle>
              <CardDescription>
                Customize your learning experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Preference settings will be implemented with backend integration.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;

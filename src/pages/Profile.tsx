
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
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
  TrendingUp,
  Shield,
  Code,
  Network,
  Lock,
  Zap,
  Award,
  Star,
  CheckCircle2
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

  const skillMatrix = [
    { name: 'Web Security', level: 85, color: 'bg-blue-500' },
    { name: 'Network Security', level: 72, color: 'bg-green-500' },
    { name: 'Cryptography', level: 68, color: 'bg-purple-500' },
    { name: 'Penetration Testing', level: 90, color: 'bg-red-500' },
    { name: 'Malware Analysis', level: 55, color: 'bg-yellow-500' },
    { name: 'Digital Forensics', level: 48, color: 'bg-pink-500' }
  ];

  const completedCourses = [
    {
      id: 1,
      title: 'Web Application Security Fundamentals',
      completedDate: '2024-01-15',
      grade: 'A',
      progress: 100,
      category: 'Web Security'
    },
    {
      id: 2,
      title: 'Network Security Essentials',
      completedDate: '2024-01-10',
      grade: 'A-',
      progress: 100,
      category: 'Network Security'
    },
    {
      id: 3,
      title: 'Ethical Hacking Basics',
      completedDate: '2023-12-20',
      grade: 'B+',
      progress: 100,
      category: 'Penetration Testing'
    }
  ];

  const badges = [
    { name: 'First Steps', icon: '🎯', rarity: 'Common', description: 'Complete your first course' },
    { name: 'Web Warrior', icon: '🛡️', rarity: 'Rare', description: 'Master web security fundamentals' },
    { name: 'Streak Master', icon: '🔥', rarity: 'Epic', description: '15-day learning streak' },
    { name: 'Code Breaker', icon: '💻', rarity: 'Legendary', description: 'Complete advanced cryptography' }
  ];

  const trophies = [
    { name: 'Monthly Champion', icon: '🏆', date: '2024-01-01', description: 'Top performer in January' },
    { name: 'CTF Winner', icon: '🥇', date: '2023-12-15', description: 'Won December CTF competition' }
  ];

  // Generate activity data for the last 365 days
  const generateActivityData = () => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const activity = Math.floor(Math.random() * 5); // 0-4 activity levels
      data.push({
        date: date.toISOString().split('T')[0],
        activity: activity
      });
    }
    return data;
  };

  const activityData = generateActivityData();

  const getActivityColor = (level: number) => {
    const colors = ['bg-gray-800', 'bg-primary/30', 'bg-primary/50', 'bg-primary/70', 'bg-primary'];
    return colors[level] || colors[0];
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-gray-500';
      case 'Rare': return 'border-blue-500';
      case 'Epic': return 'border-purple-500';
      case 'Legendary': return 'border-yellow-500';
      default: return 'border-gray-500';
    }
  };

  const handleSave = () => {
    console.log('Saving profile data:', formData);
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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-card to-background p-8 border border-border/50">
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
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Completed Web Security Course</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                  <Trophy className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Earned "Streak Master" badge</p>
                    <p className="text-sm text-muted-foreground">1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recent Trophies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trophies.map((trophy, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="text-2xl">{trophy.icon}</div>
                    <div>
                      <p className="font-medium">{trophy.name}</p>
                      <p className="text-sm text-muted-foreground">{trophy.description}</p>
                      <p className="text-xs text-muted-foreground">{new Date(trophy.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Skill Matrix
              </CardTitle>
              <CardDescription>
                Your expertise across different cybersecurity domains
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillMatrix.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Yearly Activity
              </CardTitle>
              <CardDescription>
                Your learning activity over the past year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-53 gap-1 mb-4">
                {activityData.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getActivityColor(day.activity)}`}
                    title={`${day.date}: ${day.activity} activities`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div key={level} className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Courses</CardTitle>
              <CardDescription>
                Your learning journey and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {completedCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{course.title}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Completed: {new Date(course.completedDate).toLocaleDateString()}</span>
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">{course.grade}</div>
                      <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Earned Badges
              </CardTitle>
              <CardDescription>
                Achievements and milestones you've unlocked
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className={`p-4 border-2 ${getRarityColor(badge.rarity)} rounded-lg bg-card/50`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-3xl">{badge.icon}</div>
                      <div>
                        <h4 className="font-medium">{badge.name}</h4>
                        <Badge variant="outline" className={`text-xs ${getRarityColor(badge.rarity)}`}>
                          {badge.rarity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
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
                  <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;

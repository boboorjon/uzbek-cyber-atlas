
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  BookOpen, 
  Trophy, 
  Target, 
  Clock, 
  Users, 
  TrendingUp,
  PlayCircle,
  CheckCircle2,
  Star,
  Search,
  Filter,
  Globe,
  Wifi,
  Lock,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAllCourses, setShowAllCourses] = useState(false);

  const userStats = {
    coursesCompleted: 8,
    totalCourses: 24,
    hoursLearned: 156,
    certificatesEarned: 3,
    currentStreak: 12
  };

  const featuredCourses = [
    {
      id: 1,
      title: "Web Application Security Fundamentals",
      description: "Master the basics of web security, including OWASP Top 10 vulnerabilities",
      progress: 65,
      duration: "8 hours",
      level: "Beginner",
      enrolled: 1247,
      rating: 4.8,
      thumbnail: "photo-1461749280684-dccba630e2f6",
      category: "Web Security"
    },
    {
      id: 2,
      title: "Network Security & Penetration Testing",
      description: "Advanced techniques for network analysis and ethical hacking",
      progress: 23,
      duration: "12 hours", 
      level: "Advanced",
      enrolled: 856,
      rating: 4.9,
      thumbnail: "photo-1518770660439-4636190af475",
      category: "Network Security"
    },
    {
      id: 3,
      title: "Cryptography & Data Protection",
      description: "Understanding encryption, hashing, and secure communication protocols",
      progress: 0,
      duration: "10 hours",
      level: "Intermediate",
      enrolled: 923,
      rating: 4.7,
      thumbnail: "photo-1488590528505-98d2b5aba04b",
      category: "Cryptography"
    }
  ];

  const allCourses = [
    ...featuredCourses,
    {
      id: 4,
      title: "Secure Code Review & SAST",
      description: "Learn to identify vulnerabilities in source code and implement secure coding practices.",
      progress: 0,
      duration: "14 hours",
      level: "Advanced",
      enrolled: 445,
      rating: 4.8,
      thumbnail: "photo-1531297484001-80022131f5a1",
      category: "Secure Coding"
    },
    {
      id: 5,
      title: "Mobile Application Security",
      description: "Security testing and secure development practices for iOS and Android applications.",
      progress: 0,
      duration: "11 hours",
      level: "Intermediate",
      enrolled: 678,
      rating: 4.5,
      thumbnail: "photo-1605810230434-7631ac76ec81",
      category: "Web Security"
    }
  ];

  const categories = [
    { name: 'All', icon: BookOpen, count: 24 },
    { name: 'Web Security', icon: Globe, count: 8 },
    { name: 'Network Security', icon: Wifi, count: 6 },
    { name: 'Cryptography', icon: Lock, count: 4 },
    { name: 'Secure Coding', icon: Code, count: 3 }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentAchievements = [
    { name: "First Steps", description: "Completed your first course", icon: "🎯", date: "2 days ago" },
    { name: "Web Warrior", description: "Mastered web security basics", icon: "🛡️", date: "1 week ago" },
    { name: "Streak Master", description: "10-day learning streak", icon: "🔥", date: "2 weeks ago" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-card to-background p-8 border border-border/50">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Continue your cybersecurity journey with expert-led courses and hands-on practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="cyber-glow">
              <PlayCircle className="mr-2 h-5 w-5" />
              Continue Learning
            </Button>
            <Button variant="outline" size="lg" onClick={() => setShowAllCourses(!showAllCourses)}>
              <BookOpen className="mr-2 h-5 w-5" />
              {showAllCourses ? 'Show Featured' : 'Browse All Courses'}
            </Button>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-20">
          <Shield className="h-32 w-32 text-primary animate-float" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="cyber-glow border-accent/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{userStats.coursesCompleted}</div>
            <p className="text-xs text-muted-foreground">
              of {userStats.totalCourses} total courses
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{userStats.hoursLearned}</div>
            <p className="text-xs text-muted-foreground">
              This month: +28 hours
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{userStats.certificatesEarned}</div>
            <p className="text-xs text-muted-foreground">
              2 more to unlock Gold tier
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{userStats.currentStreak}</div>
            <p className="text-xs text-muted-foreground">
              days in a row 🔥
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">#247</div>
            <p className="text-xs text-muted-foreground">
              Top 5% of learners
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Courses Section */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {showAllCourses ? 'All Courses' : 'Continue Learning'}
            </h2>
            <p className="text-muted-foreground">
              {showAllCourses ? 'Explore our complete cybersecurity curriculum' : 'Pick up where you left off or start something new'}
            </p>
          </div>

          {/* Search and Filters - Only show when browsing all courses */}
          {showAllCourses && (
            <div className="space-y-4 mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="lg:w-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {(showAllCourses ? filteredCourses : featuredCourses).map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-32 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img 
                      src={`https://images.unsplash.com/${course.thumbnail}?w=300&h=200&fit=crop`}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{course.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                      </div>
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Advanced' ? 'destructive' : 'default'}>
                        {course.level}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrolled.toLocaleString()} enrolled
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        {course.rating}
                      </div>
                    </div>

                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    <Button className="w-full md:w-auto" size="sm">
                      {course.progress > 0 ? 'Continue' : 'Start Course'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Achievements */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Learning Path Progress */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Learning Path: Web Security
              </CardTitle>
              <CardDescription>
                Master web application security from basics to advanced
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Security Fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm">OWASP Top 10</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-primary bg-primary/20" />
                  <span className="text-sm text-primary font-medium">Secure Coding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-muted" />
                  <span className="text-sm text-muted-foreground">Advanced Pentesting</span>
                </div>
              </div>
              <Progress value={60} className="h-2" />
              <p className="text-sm text-muted-foreground">3 of 5 modules completed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

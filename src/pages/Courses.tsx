
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  BookOpen,
  Shield,
  Lock,
  Globe,
  Zap,
  Code,
  Database,
  Wifi
} from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen, count: 24 },
    { name: 'Web Security', icon: Globe, count: 8 },
    { name: 'Network Security', icon: Wifi, count: 6 },
    { name: 'Cryptography', icon: Lock, count: 4 },
    { name: 'Ethical Hacking', icon: Shield, count: 3 },
    { name: 'Secure Coding', icon: Code, count: 3 }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: "Web Application Security Fundamentals",
      description: "Master the basics of web security, including OWASP Top 10 vulnerabilities and common attack vectors.",
      category: "Web Security",
      level: "Beginner",
      duration: "8 hours",
      modules: 12,
      enrolled: 1247,
      rating: 4.8,
      reviews: 156,
      price: "Free",
      thumbnail: "photo-1461749280684-dccba630e2f6",
      instructor: "Dr. Sarah Ahmed",
      featured: true
    },
    {
      id: 2,
      title: "Advanced Penetration Testing",
      description: "Professional-level penetration testing techniques, tools, and methodologies for ethical hackers.",
      category: "Ethical Hacking",
      level: "Advanced",
      duration: "16 hours",
      modules: 20,
      enrolled: 856,
      rating: 4.9,
      reviews: 89,
      price: "$299",
      thumbnail: "photo-1518770660439-4636190af475",
      instructor: "Muhammad Karimov",
      featured: true
    },
    {
      id: 3,
      title: "Network Security Essentials",
      description: "Comprehensive guide to securing network infrastructure, firewalls, and intrusion detection systems.",
      category: "Network Security",
      level: "Intermediate",
      duration: "12 hours",
      modules: 15,
      enrolled: 923,
      rating: 4.7,
      reviews: 124,
      price: "$199",
      thumbnail: "photo-1488590528505-98d2b5aba04b",
      instructor: "Aziza Tashkent",
      featured: false
    },
    {
      id: 4,
      title: "Cryptography and Data Protection",
      description: "Understanding encryption algorithms, key management, and secure communication protocols.",
      category: "Cryptography",
      level: "Intermediate",
      duration: "10 hours",
      modules: 14,
      enrolled: 567,
      rating: 4.6,
      reviews: 78,
      price: "$249",
      thumbnail: "photo-1487058792275-0ad4aaf24ca7",
      instructor: "Prof. Jamshid Bukhara",
      featured: false
    },
    {
      id: 5,
      title: "Secure Code Review & SAST",
      description: "Learn to identify vulnerabilities in source code and implement secure coding practices.",
      category: "Secure Coding",
      level: "Advanced",
      duration: "14 hours",
      modules: 18,
      enrolled: 445,
      rating: 4.8,
      reviews: 67,
      price: "$329",
      thumbnail: "photo-1531297484001-80022131f5a1",
      instructor: "Dilnoza Samarkand",
      featured: false
    },
    {
      id: 6,
      title: "Mobile Application Security",
      description: "Security testing and secure development practices for iOS and Android applications.",
      category: "Web Security",
      level: "Intermediate",
      duration: "11 hours",
      modules: 16,
      enrolled: 678,
      rating: 4.5,
      reviews: 91,
      price: "$199",
      thumbnail: "photo-1605810230434-7631ac76ec81",
      instructor: "Bobur Uzbek",
      featured: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Cybersecurity Courses
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master cybersecurity with expert-led courses designed for professionals and enthusiasts
        </p>
      </div>

      {/* Featured Courses */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 cyber-glow">
              <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20">
                <img 
                  src={`https://images.unsplash.com/${course.thumbnail}?w=600&h=300&fit=crop`}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
                <Badge 
                  variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Advanced' ? 'destructive' : 'default'}
                  className="absolute top-4 right-4"
                >
                  {course.level}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.modules} modules
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.enrolled.toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="suzani-accent">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6">
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
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Categories</h3>
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

        {/* Level Filter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Difficulty Level</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            All Courses ({filteredCourses.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <div className="aspect-video relative bg-gradient-to-br from-secondary/50 to-accent/20">
                <img 
                  src={`https://images.unsplash.com/${course.thumbnail}?w=400&h=225&fit=crop`}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <Badge 
                  variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Advanced' ? 'destructive' : 'default'}
                  className="absolute top-3 right-3"
                >
                  {course.level}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.modules} modules
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({course.reviews})</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{course.enrolled.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{course.price}</span>
                  <Button size="sm" className="suzani-accent">
                    View Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen,
  CheckCircle2,
  Lock,
  FileText,
  Video,
  Code,
  Award,
  Download,
  Share2
} from 'lucide-react';

const CourseDetail = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([0, 1, 2]);

  const course = {
    id: 1,
    title: "Web Application Security Fundamentals",
    description: "Master the basics of web security, including OWASP Top 10 vulnerabilities and common attack vectors. This comprehensive course will teach you how to identify, exploit, and remediate security vulnerabilities in web applications.",
    instructor: "Dr. Sarah Ahmed",
    duration: "8 hours",
    modules: 12,
    lessons: 45,
    enrolled: 1247,
    rating: 4.8,
    reviews: 156,
    level: "Beginner",
    category: "Web Security",
    price: "Free",
    thumbnail: "photo-1461749280684-dccba630e2f6",
    progress: 65
  };

  const modules = [
    {
      title: "Introduction to Web Security",
      lessons: [
        { title: "What is Web Application Security?", type: "video", duration: "12:30", completed: true },
        { title: "Common Attack Vectors", type: "video", duration: "15:45", completed: true },
        { title: "Security Mindset", type: "reading", duration: "8:00", completed: true },
        { title: "Lab Setup", type: "hands-on", duration: "20:00", completed: false }
      ]
    },
    {
      title: "OWASP Top 10 - Part 1",
      lessons: [
        { title: "Injection Attacks", type: "video", duration: "18:20", completed: false },
        { title: "SQL Injection Lab", type: "hands-on", duration: "25:00", completed: false },
        { title: "Broken Authentication", type: "video", duration: "16:10", completed: false },
        { title: "Authentication Lab", type: "hands-on", duration: "30:00", completed: false }
      ]
    },
    {
      title: "OWASP Top 10 - Part 2",
      lessons: [
        { title: "Sensitive Data Exposure", type: "video", duration: "14:35", completed: false },
        { title: "XML External Entities (XXE)", type: "video", duration: "12:20", completed: false },
        { title: "Broken Access Control", type: "video", duration: "19:15", completed: false },
        { title: "Access Control Lab", type: "hands-on", duration: "35:00", completed: false }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'reading': return <FileText className="h-4 w-4" />;
      case 'hands-on': return <Code className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'text-blue-400';
      case 'reading': return 'text-green-400';
      case 'hands-on': return 'text-purple-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Course Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>Courses</span>
            <span>/</span>
            <span>{course.category}</span>
            <span>/</span>
            <span className="text-foreground">{course.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{course.enrolled.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-sm text-muted-foreground">({course.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="cyber-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Continue Learning
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Resources
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 suzani-accent">
                <img 
                  src={`https://images.unsplash.com/${course.thumbnail}?w=400&h=225&fit=crop`}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Instructor: {course.instructor}
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Course Completion</span>
                <span className="font-medium text-primary">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-3" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{completedLessons.length}</div>
                  <div className="text-sm text-muted-foreground">Completed Lessons</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{course.lessons - completedLessons.length}</div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5.2</div>
                  <div className="text-sm text-muted-foreground">Hours Left</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            {modules.map((module, moduleIndex) => (
              <Card key={moduleIndex} className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <span>Module {moduleIndex + 1}: {module.title}</span>
                    <Badge variant="outline">
                      {module.lessons.filter(l => l.completed).length}/{module.lessons.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lessonIndex}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                          lesson.completed 
                            ? 'bg-green-500/10 border-green-500/20' 
                            : 'hover:bg-secondary/50 border-border/50'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className={`h-5 w-5 ${getTypeColor(lesson.type)}`}>
                              {getTypeIcon(lesson.type)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{lesson.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="capitalize">{lesson.type}</span>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                        {!lesson.completed && (
                          <Button size="sm" variant="ghost">
                            Start
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What you'll learn</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Understanding common web vulnerabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      OWASP Top 10 security risks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Hands-on security testing techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Secure coding best practices
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Prerequisites</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Basic understanding of web technologies (HTML, HTTP)</li>
                    <li>• Familiarity with command line operations</li>
                    <li>• No prior security experience required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reviews section coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">SA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{course.instructor}</h4>
                    <p className="text-muted-foreground mb-2">Senior Security Researcher & Educator</p>
                    <p className="text-sm text-muted-foreground">
                      Dr. Sarah Ahmed has over 10 years of experience in cybersecurity research and education. 
                      She holds a PhD in Computer Security and has published numerous papers on web application security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Course Actions */}
        <Card className="border-primary/20 cyber-glow">
          <CardHeader>
            <CardTitle className="text-center">{course.price}</CardTitle>
            <CardDescription className="text-center">Full lifetime access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button size="lg" className="w-full">
              <Play className="mr-2 h-5 w-5" />
              Continue Learning
            </Button>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
            </div>
          </CardContent>
        </Card>

        {/* Course Info */}
        <Card>
          <CardHeader>
            <CardTitle>Course Includes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-muted-foreground" />
              <span>{course.duration} of video content</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span>Downloadable resources</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span>Hands-on labs</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span>Certificate of completion</span>
            </div>
          </CardContent>
        </Card>

        {/* Related Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Related Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-gradient-to-br from-accent/20 to-primary/20 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Advanced Web Security</h4>
                  <p className="text-xs text-muted-foreground">16 hours • Advanced</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Network Security</h4>
                  <p className="text-xs text-muted-foreground">12 hours • Intermediate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;

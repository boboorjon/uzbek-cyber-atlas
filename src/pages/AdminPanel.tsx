import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  BookOpen, 
  Users, 
  Award, 
  Plus, 
  Edit3, 
  Trash2, 
  Save,
  Eye,
  Settings,
  BarChart3,
  FileText,
  Video,
  Image,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Course Management State
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Web Application Security Fundamentals',
      description: 'Comprehensive introduction to web security concepts and practices',
      difficulty: 'Beginner',
      estimatedTime: '8 hours',
      tags: ['Web Security', 'OWASP', 'Fundamentals'],
      status: 'Published',
      enrollments: 1247
    },
    {
      id: 2,
      title: 'Advanced Network Penetration Testing',
      description: 'Deep dive into network security testing methodologies',
      difficulty: 'Advanced',
      estimatedTime: '12 hours',
      tags: ['Network Security', 'Penetration Testing', 'Advanced'],
      status: 'Draft',
      enrollments: 0
    }
  ]);

  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    difficulty: 'Beginner',
    estimatedTime: '',
    tags: '',
    status: 'Draft'
  });

  const [isCreatingCourse, setIsCreatingCourse] = useState(false);

  useEffect(() => {
    const adminAuth = localStorage.getItem('isAdminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    localStorage.removeItem('adminEmail');
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of the admin panel.",
    });
    navigate('/admin/login');
  };

  const handleCreateCourse = () => {
    if (!newCourse.title || !newCourse.description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const course = {
      id: Date.now(),
      ...newCourse,
      tags: newCourse.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      enrollments: 0
    };

    setCourses([...courses, course]);
    setNewCourse({
      title: '',
      description: '',
      difficulty: 'Beginner',
      estimatedTime: '',
      tags: '',
      status: 'Draft'
    });
    setIsCreatingCourse(false);

    toast({
      title: "Course Created",
      description: `Course "${course.title}" has been created successfully.`,
    });
  };

  const handleDeleteCourse = (courseId: number) => {
    setCourses(courses.filter(course => course.id !== courseId));
    toast({
      title: "Course Deleted",
      description: "Course has been removed successfully.",
    });
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-sm" />
      
      <div className="relative z-10">
        {/* Admin Header */}
        <div className="border-b border-border/40 bg-card/30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
                  <p className="text-xs text-muted-foreground">CyberAcademy Management</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card/30 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                    <p className="text-2xl font-bold text-primary">{courses.length}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                    <p className="text-2xl font-bold text-accent">2,847</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Certificates Issued</p>
                    <p className="text-2xl font-bold text-primary">421</p>
                  </div>
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-md border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                    <p className="text-2xl font-bold text-accent">78%</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Admin Tabs */}
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-card/30 backdrop-blur-sm">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            {/* Course Management */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">Course Management</h2>
                <Button onClick={() => setIsCreatingCourse(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Course
                </Button>
              </div>

              {/* Create Course Form */}
              {isCreatingCourse && (
                <Card className="bg-card/30 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle>Create New Course</CardTitle>
                    <CardDescription>Add a new course to the platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="courseTitle">Course Title</Label>
                        <Input
                          id="courseTitle"
                          value={newCourse.title}
                          onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                          placeholder="Enter course title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="estimatedTime">Estimated Time</Label>
                        <Input
                          id="estimatedTime"
                          value={newCourse.estimatedTime}
                          onChange={(e) => setNewCourse({...newCourse, estimatedTime: e.target.value})}
                          placeholder="e.g., 8 hours"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="courseDescription">Description</Label>
                      <Textarea
                        id="courseDescription"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                        placeholder="Enter course description"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="difficulty">Difficulty Level</Label>
                        <select
                          id="difficulty"
                          value={newCourse.difficulty}
                          onChange={(e) => setNewCourse({...newCourse, difficulty: e.target.value})}
                          className="w-full p-2 border border-border rounded-md bg-background"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="tags">Tags (comma-separated)</Label>
                        <Input
                          id="tags"
                          value={newCourse.tags}
                          onChange={(e) => setNewCourse({...newCourse, tags: e.target.value})}
                          placeholder="Web Security, OWASP, Fundamentals"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleCreateCourse}>
                        <Save className="h-4 w-4 mr-2" />
                        Create Course
                      </Button>
                      <Button onClick={() => setIsCreatingCourse(false)} variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Courses List */}
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="bg-card/30 backdrop-blur-md border-border/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                            <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>
                              {course.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{course.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {course.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Difficulty: {course.difficulty}</span>
                            <span>Duration: {course.estimatedTime}</span>
                            <span>Enrollments: {course.enrollments}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleDeleteCourse(course.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs content placeholder */}
            <TabsContent value="modules">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle>Module Management</CardTitle>
                  <CardDescription>Manage course modules and their content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Module management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lessons">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle>Lesson Management</CardTitle>
                  <CardDescription>Create and edit individual lessons with rich content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Rich lesson editor with Markdown support coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle>Certificate Management</CardTitle>
                  <CardDescription>Manage certificate templates and issuance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Certificate management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">User management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

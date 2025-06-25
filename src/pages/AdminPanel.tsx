import React, { useState, useEffect, createContext, useContext } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Shield,
    Plus,
    Edit,
    Trash2,
    Users,
    BookOpen,
    Target,
    Eye,
    EyeOff,
    LogOut,
    Settings,
    BarChart3,
    FileText,
    Award,
    Lock,
    Save,
    X,
    Search,
    Filter,
    Calendar,
    Clock,
    User,
    Mail,
    Key
} from 'lucide-react';

// Authentication Context
const AuthContext = createContext({
    user: null,
    login: (username, password) => {},
    logout: () => {},
    isAdmin: false
});

// Main App Component
const AdminCyberSecurityApp = () => {
    // Authentication State
    const [user, setUser] = useState(null);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    // Admin Panel State
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [modalType, setModalType] = useState('');

    // Content State
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Web Application Security Fundamentals",
            description: "Master the basics of web security, including OWASP Top 10 vulnerabilities",
            category: "Web Security",
            level: "Beginner",
            duration: "8 hours",
            modules: 12,
            enrolled: 1247,
            rating: 4.8,
            status: "Published",
            createdAt: "2024-01-15",
            instructor: "Dr. Sarah Ahmed"
        },
        {
            id: 2,
            title: "Advanced Penetration Testing",
            description: "Professional-level penetration testing techniques and methodologies",
            category: "Ethical Hacking",
            level: "Advanced",
            duration: "16 hours",
            modules: 20,
            enrolled: 856,
            rating: 4.9,
            status: "Published",
            createdAt: "2024-02-01",
            instructor: "Muhammad Karimov"
        }
    ]);

    const [challenges, setChallenges] = useState([
        {
            id: 1,
            name: 'Web Application Security',
            description: 'Exploit common web vulnerabilities including SQL injection, XSS, and CSRF attacks.',
            difficulty: 'Easy',
            topic: 'Web',
            points: 100,
            estimatedTime: '2-3 hours',
            status: 'Active',
            createdAt: '2024-01-10'
        },
        {
            id: 2,
            name: 'Buffer Overflow Exploitation',
            description: 'Master stack-based buffer overflows and bypass modern protections.',
            difficulty: 'Hard',
            topic: 'Binary',
            points: 300,
            estimatedTime: '4-6 hours',
            status: 'Draft',
            createdAt: '2024-01-20'
        }
    ]);

    const [achievements, setAchievements] = useState([
        {
            id: 1,
            name: "First Steps",
            description: "Complete your first cybersecurity course",
            category: "Getting Started",
            points: 50,
            rarity: "Common",
            status: "Active",
            createdAt: "2024-01-15"
        },
        {
            id: 2,
            name: "Web Security Master",
            description: "Complete all Web Application Security courses",
            category: "Web Security",
            points: 200,
            rarity: "Rare",
            status: "Active",
            createdAt: "2024-02-20"
        }
    ]);

    // Authentication Functions
    const login = (username, password) => {
        // Simple authentication - in real app, this would be API call
        if (username === 'admin' && password === 'admin123') {
            const adminUser = {
                id: 1,
                username: 'admin',
                email: 'admin@cybersec.com',
                role: 'Admin',
                isAdmin: true
            };
            setUser(adminUser);
            return true;
        } else if (username === 'demo' && password === 'demo123') {
            const demoUser = {
                id: 2,
                username: 'demo',
                email: 'demo@cybersec.com',
                role: 'Student',
                isAdmin: false
            };
            setUser(demoUser);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setLoginData({ username: '', password: '' });
        setActiveTab('dashboard'); // Reset tab when logging out
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const success = login(loginData.username, loginData.password);
        if (!success) {
            alert('Invalid credentials! Try: admin/admin123 or demo/demo123');
            // Input'larni tozalamaymiz, faqat xato bo'lganda
        }
    };

    const handleInputChange = (field, value) => {
        // Bu function olib tashlandi - LoginForm ichida local state ishlatiladi
    };

    // CRUD Operations
    const addItem = (type, item) => {
        const newItem = {
            ...item,
            id: Date.now(),
            createdAt: new Date().toISOString().split('T')[0],
            status: item.status || 'Draft'
        };

        switch (type) {
            case 'course':
                setCourses([...courses, newItem]);
                break;
            case 'challenge':
                setChallenges([...challenges, newItem]);
                break;
            case 'achievement':
                setAchievements([...achievements, newItem]);
                break;
        }
        setShowModal(false);
        setEditingItem(null);
    };

    const updateItem = (type, id, updatedItem) => {
        switch (type) {
            case 'course':
                setCourses(courses.map(item => item.id === id ? { ...item, ...updatedItem } : item));
                break;
            case 'challenge':
                setChallenges(challenges.map(item => item.id === id ? { ...item, ...updatedItem } : item));
                break;
            case 'achievement':
                setAchievements(achievements.map(item => item.id === id ? { ...item, ...updatedItem } : item));
                break;
        }
        setShowModal(false);
        setEditingItem(null);
    };

    const deleteItem = (type, id) => {
        if (confirm('Are you sure you want to delete this item?')) {
            switch (type) {
                case 'course':
                    setCourses(courses.filter(item => item.id !== id));
                    break;
                case 'challenge':
                    setChallenges(challenges.filter(item => item.id !== id));
                    break;
                case 'achievement':
                    setAchievements(achievements.filter(item => item.id !== id));
                    break;
            }
        }
    };

    // Login Form Component
    const LoginForm = () => {
        // Local state for inputs to prevent re-render issues
        const [localUsername, setLocalUsername] = useState('');
        const [localPassword, setLocalPassword] = useState('');

        const handleFormSubmit = (e) => {
            e.preventDefault();
            const success = login(localUsername, localPassword);
            if (!success) {
                alert('Invalid credentials! Try: admin/admin123 or demo/demo123');
            }
        };

        return (
            <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'transparent' }}>
                <div className="w-full max-w-md">
                    <Card className="shadow-2xl border border-gray-200/50 bg-white/95 backdrop-blur-lg">
                        <CardHeader className="text-center space-y-4 pb-8">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-bold text-gray-900">CyberSec Admin</CardTitle>
                                <CardDescription className="text-gray-600 mt-2">
                                    Sign in to manage your cybersecurity platform
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Username</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            type="text"
                                            placeholder="Enter username"
                                            value={localUsername}
                                            onChange={(e) => setLocalUsername(e.target.value)}
                                            className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                            required
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={localPassword}
                                            onChange={(e) => setLocalPassword(e.target.value)}
                                            className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                            required
                                            autoComplete="current-password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium">
                                    Sign In
                                </Button>
                            </form>
                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-500">Demo Credentials:</p>
                                <div className="text-xs space-y-1 text-gray-400">
                                    <p>Admin: admin / admin123</p>
                                    <p>Student: demo / demo123</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    };

    // Admin Dashboard Component
    const AdminDashboard = () => (
        <div className="min-h-screen" style={{ background: 'transparent' }}>
            {/* Header */}
            <header className="bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <h1 className="text-xl font-semibold text-gray-900">CyberSec Admin</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge variant={user?.isAdmin ? "default" : "secondary"}>
                                {user?.role}
                            </Badge>
                            <span className="text-sm text-gray-600">Welcome, {user?.username}</span>
                            <Button variant="outline" size="sm" onClick={logout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {user?.isAdmin ? (
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4 bg-white/90 backdrop-blur-lg p-1 rounded-lg shadow-sm border border-gray-200/50">
                            <TabsTrigger value="dashboard" className="flex items-center gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Dashboard
                            </TabsTrigger>
                            <TabsTrigger value="courses" className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Courses
                            </TabsTrigger>
                            <TabsTrigger value="challenges" className="flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                Challenges
                            </TabsTrigger>
                            <TabsTrigger value="achievements" className="flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                Achievements
                            </TabsTrigger>
                        </TabsList>

                        {/* Dashboard Tab */}
                        <TabsContent value="dashboard" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card>
                                    <CardContent className="p-6 bg-white/90 backdrop-blur-lg border border-gray-200/50">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                                                <p className="text-3xl font-bold text-blue-600">{courses.length}</p>
                                            </div>
                                            <BookOpen className="h-8 w-8 text-blue-500" />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6 bg-white/90 backdrop-blur-lg border border-gray-200/50">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Active Challenges</p>
                                                <p className="text-3xl font-bold text-green-600">{challenges.filter(c => c.status === 'Active').length}</p>
                                            </div>
                                            <Target className="h-8 w-8 text-green-500" />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Achievements</p>
                                                <p className="text-3xl font-bold text-yellow-600">{achievements.length}</p>
                                            </div>
                                            <Award className="h-8 w-8 text-yellow-500" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Courses Tab */}
                        <TabsContent value="courses" className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-gray-900">Manage Courses</h2>
                                <Button onClick={() => {setModalType('course'); setEditingItem(null); setShowModal(true);}}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Course
                                </Button>
                            </div>

                            <div className="grid gap-4">
                                {courses.map((course) => (
                                    <Card key={course.id} className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                                                        <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>
                                                            {course.status}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-gray-600 mb-3">{course.description}</p>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>{course.category}</span>
                                                        <span>{course.level}</span>
                                                        <span>{course.duration}</span>
                                                        <span>{course.enrolled} enrolled</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {setModalType('course'); setEditingItem(course); setShowModal(true);}}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => deleteItem('course', course.id)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Challenges Tab */}
                        <TabsContent value="challenges" className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-gray-900">Manage Challenges</h2>
                                <Button onClick={() => {setModalType('challenge'); setEditingItem(null); setShowModal(true);}}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Challenge
                                </Button>
                            </div>

                            <div className="grid gap-4">
                                {challenges.map((challenge) => (
                                    <Card key={challenge.id} className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900">{challenge.name}</h3>
                                                        <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Hard' ? 'destructive' : 'default'}>
                                                            {challenge.difficulty}
                                                        </Badge>
                                                        <Badge variant={challenge.status === 'Active' ? 'default' : 'secondary'}>
                                                            {challenge.status}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>{challenge.topic}</span>
                                                        <span>{challenge.points} points</span>
                                                        <span>{challenge.estimatedTime}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {setModalType('challenge'); setEditingItem(challenge); setShowModal(true);}}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => deleteItem('challenge', challenge.id)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Achievements Tab */}
                        <TabsContent value="achievements" className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-gray-900">Manage Achievements</h2>
                                <Button onClick={() => {setModalType('achievement'); setEditingItem(null); setShowModal(true);}}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Achievement
                                </Button>
                            </div>

                            <div className="grid gap-4">
                                {achievements.map((achievement) => (
                                    <Card key={achievement.id} className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900">{achievement.name}</h3>
                                                        <Badge variant={achievement.rarity === 'Common' ? 'secondary' : achievement.rarity === 'Legendary' ? 'destructive' : 'default'}>
                                                            {achievement.rarity}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-gray-600 mb-3">{achievement.description}</p>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>{achievement.category}</span>
                                                        <span>{achievement.points} points</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {setModalType('achievement'); setEditingItem(achievement); setShowModal(true);}}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => deleteItem('achievement', achievement.id)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Users Tab olib tashlandi */}
                    </Tabs>
                ) : (
                    <StudentDashboard />
                )}
            </div>

            {/* Modal for Add/Edit */}
            {showModal && <ContentModal />}
        </div>
    );

    // Student Dashboard Component
    const StudentDashboard = () => (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Dashboard</h2>
                <p className="text-gray-600">Welcome to your learning dashboard</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            Available Courses
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-blue-600">{courses.length}</p>
                        <p className="text-sm text-gray-500">courses to explore</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-green-500" />
                            Active Challenges
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-green-600">{challenges.filter(c => c.status === 'Active').length}</p>
                        <p className="text-sm text-gray-500">challenges available</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            Achievements
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-yellow-600">{achievements.length}</p>
                        <p className="text-sm text-gray-500">achievements to unlock</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Courses</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {courses.slice(0, 3).map((course) => (
                            <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                    <h4 className="font-medium">{course.title}</h4>
                                    <p className="text-sm text-gray-500">{course.category} • {course.level}</p>
                                </div>
                                <Button size="sm">View</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Latest Challenges</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {challenges.filter(c => c.status === 'Active').slice(0, 3).map((challenge) => (
                            <div key={challenge.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                    <h4 className="font-medium">{challenge.name}</h4>
                                    <p className="text-sm text-gray-500">{challenge.topic} • {challenge.difficulty}</p>
                                </div>
                                <Button size="sm">Start</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );

    // Content Modal Component
    const ContentModal = () => {
        const [formData, setFormData] = useState(editingItem || {});

        const handleSubmit = (e) => {
            e.preventDefault();
            if (editingItem) {
                updateItem(modalType, editingItem.id, formData);
            } else {
                addItem(modalType, formData);
            }
        };

        const renderForm = () => {
            switch (modalType) {
                case 'course':
                    return (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Title</label>
                                    <Input
                                        value={formData.title || ''}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        placeholder="Course title"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        value={formData.category || ''}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Web Security">Web Security</option>
                                        <option value="Network Security">Network Security</option>
                                        <option value="Cryptography">Cryptography</option>
                                        <option value="Ethical Hacking">Ethical Hacking</option>
                                        <option value="Secure Coding">Secure Coding</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="Course description"
                                    rows={3}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Level</label>
                                    <select
                                        value={formData.level || ''}
                                        onChange={(e) => setFormData({...formData, level: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    >
                                        <option value="">Select Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Duration</label>
                                    <Input
                                        value={formData.duration || ''}
                                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                                        placeholder="e.g., 8 hours"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Modules</label>
                                    <Input
                                        type="number"
                                        value={formData.modules || ''}
                                        onChange={(e) => setFormData({...formData, modules: parseInt(e.target.value)})}
                                        placeholder="Number of modules"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Instructor</label>
                                    <Input
                                        value={formData.instructor || ''}
                                        onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                                        placeholder="Instructor name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        value={formData.status || 'Draft'}
                                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="Draft">Draft</option>
                                        <option value="Published">Published</option>
                                        <option value="Archived">Archived</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    <Save className="h-4 w-4 mr-2" />
                                    {editingItem ? 'Update' : 'Create'} Course
                                </Button>
                            </div>
                        </form>
                    );

                case 'challenge':
                    return (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <Input
                                        value={formData.name || ''}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Challenge name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Topic</label>
                                    <select
                                        value={formData.topic || ''}
                                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    >
                                        <option value="">Select Topic</option>
                                        <option value="Web">Web</option>
                                        <option value="Binary">Binary</option>
                                        <option value="Crypto">Crypto</option>
                                        <option value="Network">Network</option>
                                        <option value="Reverse">Reverse</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="Challenge description"
                                    rows={3}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Difficulty</label>
                                    <select
                                        value={formData.difficulty || ''}
                                        onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    >
                                        <option value="">Select Difficulty</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Points</label>
                                    <Input
                                        type="number"
                                        value={formData.points || ''}
                                        onChange={(e) => setFormData({...formData, points: parseInt(e.target.value)})}
                                        placeholder="Points reward"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Estimated Time</label>
                                    <Input
                                        value={formData.estimatedTime || ''}
                                        onChange={(e) => setFormData({...formData, estimatedTime: e.target.value})}
                                        placeholder="e.g., 2-3 hours"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Status</label>
                                <select
                                    value={formData.status || 'Draft'}
                                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    <Save className="h-4 w-4 mr-2" />
                                    {editingItem ? 'Update' : 'Create'} Challenge
                                </Button>
                            </div>
                        </form>
                    );

                case 'achievement':
                    return (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Name</label>
                                    <Input
                                        value={formData.name || ''}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Achievement name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <Input
                                        value={formData.category || ''}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        placeholder="Achievement category"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="Achievement description"
                                    rows={3}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Points</label>
                                    <Input
                                        type="number"
                                        value={formData.points || ''}
                                        onChange={(e) => setFormData({...formData, points: parseInt(e.target.value)})}
                                        placeholder="Points reward"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Rarity</label>
                                    <select
                                        value={formData.rarity || ''}
                                        onChange={(e) => setFormData({...formData, rarity: e.target.value})}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    >
                                        <option value="">Select Rarity</option>
                                        <option value="Common">Common</option>
                                        <option value="Uncommon">Uncommon</option>
                                        <option value="Rare">Rare</option>
                                        <option value="Epic">Epic</option>
                                        <option value="Legendary">Legendary</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Status</label>
                                <select
                                    value={formData.status || 'Active'}
                                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">
                                    <Save className="h-4 w-4 mr-2" />
                                    {editingItem ? 'Update' : 'Create'} Achievement
                                </Button>
                            </div>
                        </form>
                    );

                case 'user':
                    // User qismi olib tashlandi
                    return null;

                default:
                    return null;
            }
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {editingItem ? 'Edit' : 'Add'} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => setShowModal(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="p-6">
                        {renderForm()}
                    </div>
                </div>
            </div>
        );
    };

    // Main render
    if (!user) {
        return <LoginForm />;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.isAdmin }}>
            <AdminDashboard />
        </AuthContext.Provider>
    );
};

export default AdminCyberSecurityApp;
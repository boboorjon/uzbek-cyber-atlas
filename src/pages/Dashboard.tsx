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
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
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
      title: "Web Ilova Xavfsizligi Asoslari",
      description: "OWASP Top 10 zaifliklarini o'z ichiga olgan web xavfsizligining asoslarini egallang",
      progress: 65,
      duration: "8 soat",
      level: "Boshlang'ich",
      enrolled: 1247,
      rating: 4.8,
      thumbnail: "photo-1461749280684-dccba630e2f6",
      category: "Web Xavfsizlik"
    },
    {
      id: 2,
      title: "Tarmoq Xavfsizligi va Penetratsiya Testi",
      description: "Tarmoq tahlili va axloqiy hacking uchun ilg'or texnikalar",
      progress: 23,
      duration: "12 soat",
      level: "Ilg'or",
      enrolled: 856,
      rating: 4.9,
      thumbnail: "photo-1518770660439-4636190af475",
      category: "Tarmoq Xavfsizligi"
    },
    {
      id: 3,
      title: "Kriptografiya va Ma'lumotlarni Himoyalash",
      description: "Shifrlash, heshlash va xavfsiz aloqa protokollarini tushunish",
      progress: 0,
      duration: "10 soat",
      level: "O'rta",
      enrolled: 923,
      rating: 4.7,
      thumbnail: "photo-1488590528505-98d2b5aba04b",
      category: "Kriptografiya"
    }
  ];

  const allCourses = [
    ...featuredCourses,
    {
      id: 4,
      title: "Xavfsiz Kod Ko'rib Chiqish va SAST",
      description: "Manba kodidagi zaifliklarni aniqlash va xavfsiz kodlash amaliyotlarini amalga oshirish.",
      progress: 0,
      duration: "14 soat",
      level: "Ilg'or",
      enrolled: 445,
      rating: 4.8,
      thumbnail: "photo-1531297484001-80022131f5a1",
      category: "Xavfsiz Kodlash"
    },
    {
      id: 5,
      title: "Mobil Ilova Xavfsizligi",
      description: "iOS va Android ilovalari uchun xavfsizlik testlari va xavfsiz ishlab chiqish amaliyotlari.",
      progress: 0,
      duration: "11 soat",
      level: "O'rta",
      enrolled: 678,
      rating: 4.5,
      thumbnail: "photo-1605810230434-7631ac76ec81",
      category: "Web Xavfsizlik"
    }
  ];

  const categories = [
    { name: 'Barchasi', icon: BookOpen, count: 24 },
    { name: 'Web Xavfsizlik', icon: Globe, count: 8 },
    { name: 'Tarmoq Xavfsizligi', icon: Wifi, count: 6 },
    { name: 'Kriptografiya', icon: Lock, count: 4 },
    { name: 'Xavfsiz Kodlash', icon: Code, count: 3 }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentAchievements = [
    { name: "Birinchi Qadamlar", description: "Birinchi kursingizni yakunladingiz", icon: "🎯", date: "2 kun oldin" },
    { name: "Web Jangchisi", description: "Web xavfsizligi asoslarini egallang", icon: "🛡️", date: "1 hafta oldin" },
    { name: "Izchillik Ustasi", description: "10 kunlik o'qish izchilligi", icon: "🔥", date: "2 hafta oldin" }
  ];

  return (
      <div className="space-y-8">
        {/* Xush Kelibsiz Bo'limi */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-card to-background p-8 border border-border/50">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Xush kelibsiz, Foydalanuvchi! 👋
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Ekspert yetakchiligidagi kurslar va amaliy mashq bilan kiberxavfsizlik sayohatingizni davom ettiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cyber-glow">
                <PlayCircle className="mr-2 h-5 w-5" />
                O'qishni Davom Ettirish
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowAllCourses(!showAllCourses)}>
                <BookOpen className="mr-2 h-5 w-5" />
                {showAllCourses ? 'Tavsiya Etilganlarni Ko\'rsatish' : 'Barcha Kurslarni Ko\'rish'}
              </Button>
            </div>
          </div>
          <div className="absolute top-4 right-4 opacity-20">
            <Shield className="h-32 w-32 text-primary animate-float" />
          </div>
        </div>

        {/* Statistika Ko'rinishi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="cyber-glow border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yakunlangan Kurslar</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{userStats.coursesCompleted}</div>
              <p className="text-xs text-muted-foreground">
                {userStats.totalCourses} ta jami kursdan
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">O'qilgan Soatlar</CardTitle>
              <Clock className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{userStats.hoursLearned}</div>
              <p className="text-xs text-muted-foreground">
                Bu oy: +28 soat
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sertifikatlar</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{userStats.certificatesEarned}</div>
              <p className="text-xs text-muted-foreground">
                Oltin darajani ochish uchun yana 2 ta
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Joriy Izchillik</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{userStats.currentStreak}</div>
              <p className="text-xs text-muted-foreground">
                kun ketma-ket 🔥
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Global Reyting</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">#247</div>
              <p className="text-xs text-muted-foreground">
                O'quvchilarning eng yaxshi 5%ida
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kurslar Bo'limi */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {showAllCourses ? 'Barcha Kurslar' : 'O\'qishni Davom Ettirish'}
              </h2>
              <p className="text-muted-foreground">
                {showAllCourses ? 'Bizning to\'liq kiberxavfsizlik dasturimizni o\'rganing' : 'Qolgan joydan davom eting yoki yangi narsani boshlang'}
              </p>
            </div>

            {/* Qidiruv va Filtrlar - Faqat barcha kurslarni ko'rayotganda ko'rsatish */}
            {showAllCourses && (
                <div className="space-y-4 mb-6">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                          placeholder="Kurslarni qidiring..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                      />
                    </div>
                    <Button variant="outline" className="lg:w-auto">
                      <Filter className="mr-2 h-4 w-4" />
                      Ko'proq Filtrlar
                    </Button>
                  </div>

                  {/* Kategoriya Filtri */}
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
                          <Badge variant={course.level === 'Boshlang\'ich' ? 'secondary' : course.level === 'Ilg\'or' ? 'destructive' : 'default'}>
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
                            {course.enrolled.toLocaleString()} ro'yxatdan o'tgan
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            {course.rating}
                          </div>
                        </div>

                        {course.progress > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Jarayon</span>
                                <span className="text-primary font-medium">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                        )}

                        <Button className="w-full md:w-auto" size="sm">
                          {course.progress > 0 ? 'Davom Etish' : 'Kursni Boshlash'}
                        </Button>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>

          {/* Yon Panel */}
          <div className="space-y-6">
            {/* So'nggi Yutuqlar */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  So'nggi Yutuqlar
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

            {/* O'quv Yo'li Jarayoni */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  O'quv Yo'li: Web Xavfsizlik
                </CardTitle>
                <CardDescription>
                  Web ilova xavfsizligini asoslardan ilg'or darajagacha egallang
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Xavfsizlik Asoslari</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-sm">OWASP Top 10</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-primary/20" />
                    <span className="text-sm text-primary font-medium">Xavfsiz Kodlash</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full border-2 border-muted" />
                    <span className="text-sm text-muted-foreground">Ilg'or Pentesting</span>
                  </div>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-sm text-muted-foreground">5 ta moduldan 3 tasi yakunlangan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
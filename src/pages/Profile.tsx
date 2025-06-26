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
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Ahmad',
    lastName: 'Karimov',
    email: 'ahmad.karimov@example.com',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston',
    bio: 'Web ilova xavfsizligi va penetratsiya testiga ixtisoslashgan ishtiyoqli kiberxavfsizlik ishqibozi.',
    company: 'TechCorp Solutions',
    position: 'Xavfsizlik Tahlilchisi'
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

  // Ko'nikmalar uchun Radar Grafik Ma'lumotlari
  const skillsData = {
    labels: [
      'Web Xavfsizlik',
      'Tarmoq Xavfsizligi',
      'Kriptografiya',
      'OSINT',
      'Raqamli Kriminalistika',
      'Teskari Muhandislik',
      'Penetratsiya Testi',
      'Zararli Dastur Tahlili'
    ],
    datasets: [
      {
        label: 'Ko\'nikma Darajasi',
        data: [85, 72, 68, 45, 58, 38, 90, 55],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgba(156, 163, 175, 0.8)',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.3)'
        },
        angleLines: {
          color: 'rgba(156, 163, 175, 0.3)'
        },
        pointLabels: {
          color: 'rgba(243, 244, 246, 0.9)',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      }
    }
  };

  const completedCourses = [
    {
      id: 1,
      title: 'Web Ilova Xavfsizligi Asoslari',
      completedDate: '2024-01-15',
      grade: 'A',
      progress: 100,
      category: 'Web Xavfsizlik'
    },
    {
      id: 2,
      title: 'Tarmoq Xavfsizligi Asoslari',
      completedDate: '2024-01-10',
      grade: 'A-',
      progress: 100,
      category: 'Tarmoq Xavfsizligi'
    },
    {
      id: 3,
      title: 'Axloqiy Hacking Asoslari',
      completedDate: '2023-12-20',
      grade: 'B+',
      progress: 100,
      category: 'Penetratsiya Testi'
    }
  ];

  const badges = [
    { name: 'Birinchi Qadamlar', icon: '🎯', rarity: 'Oddiy', description: 'Birinchi kursingizni yakunlang' },
    { name: 'Web Jangchisi', icon: '🛡️', rarity: 'Noyob', description: 'Web xavfsizligi asoslarini egallang' },
    { name: 'Izchillik Ustasi', icon: '🔥', rarity: 'Epik', description: '15 kunlik o\'qish izchilligi' },
    { name: 'Kod Buzuvchi', icon: '💻', rarity: 'Afsonaviy', description: 'Ilg\'or kriptografiyani yakunlang' }
  ];

  const trophies = [
    { name: 'Oylik Chempion', icon: '🏆', date: '2024-01-01', description: 'Yanvar oyidagi eng yaxshi natija' },
    { name: 'CTF G\'olibi', icon: '🥇', date: '2023-12-15', description: 'Dekabr CTF musobaqasida g\'alaba' }
  ];

  // GitHub uslubidagi faollik ma'lumotlarini yaratish
  const generateGitHubStyleActivity = () => {
    const weeks = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364); // 52 hafta orqaga

    for (let week = 0; week < 52; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + day);

        if (currentDate <= today) {
          const activity = Math.floor(Math.random() * 5); // 0-4 faollik darajalari
          weekData.push({
            date: currentDate.toISOString().split('T')[0],
            activity: activity,
            day: currentDate.getDay()
          });
        }
      }
      weeks.push(weekData);
    }
    return weeks;
  };

  const activityWeeks = generateGitHubStyleActivity();

  const getActivityColor = (level) => {
    const colors = [
      'bg-gray-800',
      'bg-green-900',
      'bg-green-700',
      'bg-green-500',
      'bg-green-300'
    ];
    return colors[level] || colors[0];
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Oddiy': return 'border-gray-500';
      case 'Noyob': return 'border-blue-500';
      case 'Epik': return 'border-purple-500';
      case 'Afsonaviy': return 'border-yellow-500';
      default: return 'border-gray-500';
    }
  };

  const handleSave = () => {
    console.log('Profil ma\'lumotlarini saqlash:', formData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
        {/* Glassmorphism qoplama */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-sm" />

        <div className="relative z-10 space-y-8 p-4">
          {/* Profil Sarlavhasi */}
          <div className="relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-md border border-border/30 p-8">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-primary/30">
                  <AvatarImage src="/placeholder.svg" alt="Profil" />
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
                      Qo'shilgan {new Date(userStats.joinDate).toLocaleDateString('uz-UZ')}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Oxirgi faollik {new Date(userStats.lastActive).toLocaleDateString('uz-UZ')}
                    </div>
                  </div>
                </div>
                <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "destructive" : "outline"}
                    size="sm"
                >
                  {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                  {isEditing ? 'Bekor Qilish' : 'Profilni Tahrirlash'}
                </Button>
              </div>
            </div>
          </div>

          {/* Statistika Kartlari */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-primary/20 text-center bg-card/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{userStats.completedCourses}</div>
                <div className="text-sm text-muted-foreground">Yakunlangan Kurslar</div>
              </CardContent>
            </Card>
            <Card className="border-accent/20 text-center bg-card/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{userStats.totalHours}</div>
                <div className="text-sm text-muted-foreground">O'qilgan Soatlar</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 text-center bg-card/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <Trophy className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{userStats.certificates}</div>
                <div className="text-sm text-muted-foreground">Sertifikatlar</div>
              </CardContent>
            </Card>
            <Card className="border-accent/20 text-center bg-card/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{userStats.currentStreak}</div>
                <div className="text-sm text-muted-foreground">Kunlik Izchillik</div>
              </CardContent>
            </Card>
          </div>

          {/* Profil Kontenti */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 bg-card/30 backdrop-blur-sm">
              <TabsTrigger value="overview">Umumiy</TabsTrigger>
              <TabsTrigger value="skills">Ko'nikmalar</TabsTrigger>
              <TabsTrigger value="activity">Faollik</TabsTrigger>
              <TabsTrigger value="courses">Kurslar</TabsTrigger>
              <TabsTrigger value="badges">Nishonlar</TabsTrigger>
              <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-card/30 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      So'nggi Faollik
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Web Xavfsizlik Kursini Yakunladi</p>
                        <p className="text-sm text-muted-foreground">2 kun oldin</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <Trophy className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">"Izchillik Ustasi" nishonini oldi</p>
                        <p className="text-sm text-muted-foreground">1 hafta oldin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      So'nggi Kuboklar
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {trophies.map((trophy, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                          <div className="text-2xl">{trophy.icon}</div>
                          <div>
                            <p className="font-medium">{trophy.name}</p>
                            <p className="text-sm text-muted-foreground">{trophy.description}</p>
                            <p className="text-xs text-muted-foreground">{new Date(trophy.date).toLocaleDateString('uz-UZ')}</p>
                          </div>
                        </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Kiberxavfsizlik Ko'nikmalar Matritsasi
                  </CardTitle>
                  <CardDescription>
                    Turli kiberxavfsizlik sohalaridagi tajribangizni ko'rsatuvchi interaktiv radar grafigi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 flex items-center justify-center">
                    <div className="w-full max-w-lg">
                      <Radar data={skillsData} options={radarOptions} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Yillik Faollik
                  </CardTitle>
                  <CardDescription>
                    O'tgan yil davomidagi o'quv faolligingizni ko'rsatuvchi GitHub uslubidagi hissa grafigi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="flex gap-1 mb-4 min-w-max">
                      {activityWeeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`w-3 h-3 rounded-sm ${getActivityColor(day.activity)} transition-all hover:scale-110 cursor-pointer`}
                                    title={`${day.date}: ${day.activity} faollik`}
                                />
                            ))}
                          </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Kam</span>
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4].map((level) => (
                            <div key={level} className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`} />
                        ))}
                      </div>
                      <span>Ko'p</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle>Yakunlangan Kurslar</CardTitle>
                  <CardDescription>
                    Sizning o'quv sayohatingiz va yutuqlaringiz
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {completedCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-secondary/20">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{course.title}</h4>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Yakunlandi: {new Date(course.completedDate).toLocaleDateString('uz-UZ')}</span>
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
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Qo'lga Kiritilgan Nishonlar
                  </CardTitle>
                  <CardDescription>
                    Sizning ochgan yutuqlar va muhim bosqichlaringiz
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {badges.map((badge, index) => (
                        <div key={index} className={`p-4 border-2 ${getRarityColor(badge.rarity)} rounded-lg bg-card/50 hover:bg-card/70 transition-all`}>
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
              <Card className="bg-card/30 backdrop-blur-md border-border/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Shaxsiy Ma'lumotlar
                  </CardTitle>
                  <CardDescription>
                    Shaxsiy ma'lumotlaringiz va aloqa ma'lumotlarini boshqaring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Ism</Label>
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
                      <Label htmlFor="lastName">Familiya</Label>
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
                      <Label htmlFor="phone">Telefon</Label>
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
                    <Label htmlFor="location">Joylashuv</Label>
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
                          O'zgarishlarni Saqlash
                        </Button>
                        <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
                          Bekor Qilish
                        </Button>
                      </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
  );
};

export default Profile;
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
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedLevel, setSelectedLevel] = useState('Barchasi');

  const categories = [
    { name: 'Barchasi', icon: BookOpen, count: 24 },
    { name: 'Web Xavfsizlik', icon: Globe, count: 8 },
    { name: 'Tarmoq Xavfsizligi', icon: Wifi, count: 6 },
    { name: 'Kriptografiya', icon: Lock, count: 4 },
    { name: 'Axloqiy Hacking', icon: Shield, count: 3 },
    { name: 'Xavfsiz Kodlash', icon: Code, count: 3 }
  ];

  const levels = ['Barchasi', 'Boshlang\'ich', 'O\'rta', 'Ilg\'or'];

  const courses = [
    {
      id: 1,
      title: "Web Ilova Xavfsizligi Asoslari",
      description: "Web xavfsizligining asoslarini, OWASP Top 10 zaifliklarini va umumiy hujum vektorlarini egallang.",
      category: "Web Xavfsizlik",
      level: "Boshlang'ich",
      duration: "8 soat",
      modules: 12,
      enrolled: 1247,
      rating: 4.8,
      reviews: 156,
      price: "Bepul",
      thumbnail: "photo-1461749280684-dccba630e2f6",
      instructor: "Dr. Saira Ahmad",
      featured: true
    },
    {
      id: 2,
      title: "Ilg'or Penetratsiya Testi",
      description: "Axloqiy hakerlar uchun professional darajadagi penetratsiya test texnikalari, vositalari va metodologiyalari.",
      category: "Axloqiy Hacking",
      level: "Ilg'or",
      duration: "16 soat",
      modules: 20,
      enrolled: 856,
      rating: 4.9,
      reviews: 89,
      price: "299$",
      thumbnail: "photo-1518770660439-4636190af475",
      instructor: "Muhammad Karimov",
      featured: true
    },
    {
      id: 3,
      title: "Tarmoq Xavfsizligi Asoslari",
      description: "Tarmoq infratuzilmasini, xavfsizlik devorlarini va kirishni aniqlash tizimlarini himoyalash bo'yicha to'liq qo'llanma.",
      category: "Tarmoq Xavfsizligi",
      level: "O'rta",
      duration: "12 soat",
      modules: 15,
      enrolled: 923,
      rating: 4.7,
      reviews: 124,
      price: "199$",
      thumbnail: "photo-1488590528505-98d2b5aba04b",
      instructor: "Aziza Toshkent",
      featured: false
    },
    {
      id: 4,
      title: "Kriptografiya va Ma'lumotlarni Himoyalash",
      description: "Shifrlash algoritmlarini, kalit boshqaruvini va xavfsiz aloqa protokollarini tushunish.",
      category: "Kriptografiya",
      level: "O'rta",
      duration: "10 soat",
      modules: 14,
      enrolled: 567,
      rating: 4.6,
      reviews: 78,
      price: "249$",
      thumbnail: "photo-1487058792275-0ad4aaf24ca7",
      instructor: "Prof. Jamshid Buxoro",
      featured: false
    },
    {
      id: 5,
      title: "Xavfsiz Kod Ko'rib Chiqish va SAST",
      description: "Manba kodidagi zaifliklarni aniqlashni va xavfsiz kodlash amaliyotlarini amalga oshirishni o'rganing.",
      category: "Xavfsiz Kodlash",
      level: "Ilg'or",
      duration: "14 soat",
      modules: 18,
      enrolled: 445,
      rating: 4.8,
      reviews: 67,
      price: "329$",
      thumbnail: "photo-1531297484001-80022131f5a1",
      instructor: "Dilnoza Samarqand",
      featured: false
    },
    {
      id: 6,
      title: "Mobil Ilova Xavfsizligi",
      description: "iOS va Android ilovalari uchun xavfsizlik testlari va xavfsiz ishlab chiqish amaliyotlari.",
      category: "Web Xavfsizlik",
      level: "O'rta",
      duration: "11 soat",
      modules: 16,
      enrolled: 678,
      rating: 4.5,
      reviews: 91,
      price: "199$",
      thumbnail: "photo-1605810230434-7631ac76ec81",
      instructor: "Bobur O'zbek",
      featured: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Barchasi' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredCourses = courses.filter(course => course.featured);

  return (
      <div className="space-y-8">
        {/* Sarlavha */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Kiberxavfsizlik Kurslari
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mutaxassislar va ishqibozlar uchun mo'ljallangan ekspert yetakchiligidagi kurslar bilan kiberxavfsizlikni egallang
          </p>
        </div>

        {/* Tavsiya Etilgan Kurslar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Tavsiya Etilgan Kurslar</h2>
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
                      Tavsiya Etilgan
                    </Badge>
                    <Badge
                        variant={course.level === 'Boshlang\'ich' ? 'secondary' : course.level === 'Ilg\'or' ? 'destructive' : 'default'}
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
                        {course.modules} modul
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
                        Ro'yxatdan O'tish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        {/* Qidiruv va Filtrlar */}
        <div className="space-y-6">
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
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kategoriyalar</h3>
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

          {/* Daraja Filtri */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Qiyinlik Darajasi</h3>
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

        {/* Kurslar Jadvali */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              Barcha Kurslar ({filteredCourses.length})
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
                        variant={course.level === 'Boshlang\'ich' ? 'secondary' : course.level === 'Ilg\'or' ? 'destructive' : 'default'}
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
                    <p className="text-sm text-muted-foreground">Muallif: {course.instructor}</p>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modul
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({course.reviews})</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{course.enrolled.toLocaleString()} talaba</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{course.price}</span>
                      <Button size="sm" className="suzani-accent">
                        Kursni Ko'rish
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
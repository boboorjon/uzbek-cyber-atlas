import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Search,
  Filter,
  Clock,
  BookOpen,
  Shield,
  Lock,
  Globe,
  Code,
  Database,
  Wifi,
  Play,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Modules = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedLevel, setSelectedLevel] = useState('Barchasi');

  const categories = [
    { name: 'Barchasi', icon: BookOpen, count: 18 },
    { name: 'Web Xavfsizlik', icon: Globe, count: 6 },
    { name: 'Tarmoq Xavfsizligi', icon: Wifi, count: 4 },
    { name: 'Kriptografiya', icon: Lock, count: 3 },
    { name: 'Axloqiy Hacking', icon: Shield, count: 3 },
    { name: 'Xavfsiz Kodlash', icon: Code, count: 2 }
  ];

  const levels = ['Barchasi', 'Boshlang\'ich', 'O\'rta', 'Ilg\'or'];

  const modules = [
    {
      id: 1,
      title: "Web Ilova Xavfsizligiga Kirish",
      description: "Web xavfsizligining asoslari, umumiy zaifliklar va asosiy himoya mexanizmlarini o'rganing.",
      category: "Web Xavfsizlik",
      level: "Boshlang'ich",
      duration: "2 soat",
      lessons: 8,
      progress: 75,
      completed: false,
      thumbnail: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 2,
      title: "SQL Injection Hujumlari",
      description: "SQL injection zaifliklarini, ekspluatatsiya texnikalarini va oldini olish strategiyalarini chuqur o'rganing.",
      category: "Web Xavfsizlik",
      level: "O'rta",
      duration: "3 soat",
      lessons: 12,
      progress: 45,
      completed: false,
      thumbnail: "photo-1518770660439-4636190af475"
    },
    {
      id: 3,
      title: "Cross-Site Scripting (XSS)",
      description: "XSS hujumlarini, payload yaratishni va samarali himoya mexanizmlarini amalga oshirishni tushunish.",
      category: "Web Xavfsizlik",
      level: "O'rta",
      duration: "2.5 soat",
      lessons: 10,
      progress: 100,
      completed: true,
      thumbnail: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 4,
      title: "Tarmoq Protokollari",
      description: "Tarmoq protokollarini tahlil qilish, zaifliklarni aniqlash va trafik naqshlarini tushunishni o'rganing.",
      category: "Tarmoq Xavfsizligi",
      level: "Ilg'or",
      duration: "4 soat",
      lessons: 15,
      progress: 20,
      completed: false,
      thumbnail: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 5,
      title: "Kriptografiya Asoslari",
      description: "Simmetrik shifrlash algoritmlarini, kalit boshqaruvini va amaliy amalga oshirishni o'rganing.",
      category: "Kriptografiya",
      level: "Boshlang'ich",
      duration: "2.5 soat",
      lessons: 9,
      progress: 0,
      completed: false,
      thumbnail: "photo-1531297484001-80022131f5a1"
    },
    {
      id: 6,
      title: "Axloqiy xakerlik metodologiyasi",
      description: "Razvedkadan hisobot berishgacha penetratsiya testiga tizimli yondashuv.",
      category: "Axloqiy Hacking",
      level: "Ilg'or",
      duration: "5 soat",
      lessons: 18,
      progress: 60,
      completed: false,
      thumbnail: "photo-1605810230434-7631ac76ec81"
    }
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || module.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Barchasi' || module.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
      <div className="space-y-8">
        {/* Sarlavha */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            O'quv Modullari
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kiberxavfsizlik tushunchalarini bosqichma-bosqich egallash uchun tuzilgan o'quv yo'llari
          </p>
        </div>

        {/* Qidiruv va Filtrlar */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                  placeholder="Modullarni qidiring..."
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

        {/* Modullar Jadvali */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              Mavjud Modullar ({filteredModules.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module) => (
                <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <div className="aspect-video relative bg-gradient-to-br from-secondary/50 to-accent/20">
                    <img
                        src={`https://images.unsplash.com/${module.thumbnail}?w=400&h=225&fit=crop`}
                        alt={module.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                    <Badge
                        variant={module.level === 'Boshlang\'ich' ? 'secondary' : module.level === 'Ilg\'or' ? 'destructive' : 'default'}
                        className="absolute top-3 right-3"
                    >
                      {module.level}
                    </Badge>
                    {module.completed && (
                        <div className="absolute top-3 left-3">
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{module.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{module.description}</CardDescription>
                    <Badge variant="outline" className="w-fit">
                      {module.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {module.lessons} dars
                      </div>
                    </div>

                    {/* Jarayon */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Jarayon</span>
                        <span className="font-medium text-primary">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/lesson/${module.id}`} className="flex-1">
                        <Button size="sm" className="w-full suzani-accent">
                          <Play className="h-4 w-4 mr-2" />
                          {module.progress > 0 ? 'Davom Etish' : 'Boshlash'}
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline">
                        Tafsilotlar
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

export default Modules;
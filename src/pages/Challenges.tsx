import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Search, Filter, ExternalLink, Play, Lock, CheckCircle, Clock } from 'lucide-react';

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');

  const challenges = [
    {
      id: 1,
      name: 'Web Ilova Xavfsizligi',
      description: 'SQL injection, XSS va CSRF hujumlar kabi umumiy web zaifliklarini ishlatish.',
      difficulty: 'Oson',
      topic: 'Web',
      progress: 75,
      status: 'jarayonda',
      points: 100,
      estimatedTime: '2-3 soat',
      vpnRequired: true,
    },
    {
      id: 2,
      name: 'Buffer Overflow Eksploitatsiyasi',
      description: 'Stack asosidagi buffer overflow-larni egallash va zamonaviy himoyalarni chetlab o\'tish.',
      difficulty: 'Qiyin',
      topic: 'Binary',
      progress: 0,
      status: 'qulflangan',
      points: 300,
      estimatedTime: '4-6 soat',
      vpnRequired: true,
    },
    {
      id: 3,
      name: 'Kriptografik Zaifliklar',
      description: 'Zaif shifrlash amalga oshirishlarini va kriptografik protokollarni buzish.',
      difficulty: 'O\'rta',
      topic: 'Kripto',
      progress: 100,
      status: 'yakunlangan',
      points: 200,
      estimatedTime: '3-4 soat',
      vpnRequired: false,
    },
    {
      id: 4,
      name: 'Tarmoq Penetratsiya Testi',
      description: 'Tarmoq xizmatlarini razvedka, ro\'yxatlash va ekspluatatsiya qilish.',
      difficulty: 'O\'rta',
      topic: 'Tarmoq',
      progress: 30,
      status: 'jarayonda',
      points: 250,
      estimatedTime: '3-5 soat',
      vpnRequired: true,
    },
    {
      id: 5,
      name: 'Teskari Muhandislik Vazifasi',
      description: 'Yashirin flaglarni chiqarish uchun tuzilgan binarlarni tahlil qilish va teskari muhandislik.',
      difficulty: 'Qiyin',
      topic: 'Teskari',
      progress: 0,
      status: 'mavjud',
      points: 350,
      estimatedTime: '5-7 soat',
      vpnRequired: false,
    },
    {
      id: 6,
      name: 'Mobil Ilova Xavfsizligi',
      description: 'Android ilovalarida zaifliklarni topish va xavfsizlik nazoratlarini chetlab o\'tish.',
      difficulty: 'O\'rta',
      topic: 'Mobil',
      progress: 60,
      status: 'jarayonda',
      points: 220,
      estimatedTime: '2-4 soat',
      vpnRequired: false,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'oson':
        return 'bg-green-500/20 text-green-400 border-green-400';
      case 'o\'rta':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400';
      case 'qiyin':
        return 'bg-red-500/20 text-red-400 border-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'yakunlangan':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'jarayonda':
        return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'qulflangan':
        return <Lock className="h-4 w-4 text-gray-400" />;
      default:
        return <Play className="h-4 w-4 text-blue-400" />;
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' ||
        challenge.difficulty.toLowerCase() === difficultyFilter;
    const matchesTopic = topicFilter === 'all' ||
        challenge.topic.toLowerCase() === topicFilter;

    return matchesSearch && matchesDifficulty && matchesTopic;
  });

  return (
      <div className="space-y-8">
        {/* Sarlavha */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Topshiriqlar</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amaliy vazifalar bilan kiberxavfsizlik ko'nikmalaringizni sinab ko'ring. Zaif mashinalarda
            va real dunyodagi stsenariylarda amaliyot qilib, penetratsiya test texnikalarini egallang.
          </p>
        </div>

        {/* Filtrlar va Qidiruv */}
        <Card className="cyber-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Vazifalarni Filtrlash</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                      placeholder="Vazifalarni qidirish..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                  />
                </div>
              </div>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Qiyinlik" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha Qiyinliklar</SelectItem>
                  <SelectItem value="oson">Oson</SelectItem>
                  <SelectItem value="o'rta">O'rta</SelectItem>
                  <SelectItem value="qiyin">Qiyin</SelectItem>
                </SelectContent>
              </Select>
              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Mavzu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha Mavzular</SelectItem>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="binary">Binary</SelectItem>
                  <SelectItem value="kripto">Kripto</SelectItem>
                  <SelectItem value="tarmoq">Tarmoq</SelectItem>
                  <SelectItem value="teskari">Teskari</SelectItem>
                  <SelectItem value="mobil">Mobil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Statistika */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{challenges.length}</div>
              <p className="text-sm text-muted-foreground">Jami Vazifalar</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-400">
                {challenges.filter(c => c.status === 'yakunlangan').length}
              </div>
              <p className="text-sm text-muted-foreground">Yakunlangan</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-400">
                {challenges.filter(c => c.status === 'jarayonda').length}
              </div>
              <p className="text-sm text-muted-foreground">Jarayonda</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">
                {challenges.reduce((sum, c) => sum + (c.status === 'yakunlangan' ? c.points : 0), 0)}
              </div>
              <p className="text-sm text-muted-foreground">Olingan Ballar</p>
            </CardContent>
          </Card>
        </div>

        {/* Vazifalar Jadvali */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-shadow duration-200 uzbek-pattern">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(challenge.status)}
                      <CardTitle className="text-lg">{challenge.name}</CardTitle>
                    </div>
                    <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Jarayon Chizig'i */}
                  {challenge.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Jarayon</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                      </div>
                  )}

                  {/* Vazifa Ma'lumotlari */}
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Mavzu: {challenge.topic}</span>
                    <span>{challenge.points} ball</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Vaqt: {challenge.estimatedTime}</span>
                    {challenge.vpnRequired && (
                        <Badge variant="secondary" className="text-xs">
                          VPN Kerak
                        </Badge>
                    )}
                  </div>

                  {/* Harakat Tugmalari */}
                  <div className="flex space-x-2">
                    <Button
                        className="flex-1"
                        disabled={challenge.status === 'qulflangan'}
                        variant={challenge.status === 'yakunlangan' ? 'secondary' : 'default'}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {challenge.status === 'yakunlangan' ? 'Ko\'rib chiqish' :
                          challenge.status === 'qulflangan' ? 'Qulflangan' : 'Boshlash'}
                    </Button>
                    {challenge.vpnRequired && (
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vazifalar topilmadi</h3>
                <p className="text-muted-foreground">
                  Ko'proq vazifalarni topish uchun qidiruv yoki filtr sozlamalarini o'zgartirib ko'ring.
                </p>
              </CardContent>
            </Card>
        )}
      </div>
  );
};

export default Challenges;
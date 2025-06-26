import React, { useState } from 'react';
import { Trophy, Medal, Award, Crown, Star, TrendingUp, Swords, Zap, Shield as ShieldIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Rating = () => {
  // Yangilangan daraja tuzilishi bilan liderlar taxtasi ma'lumotlari
  const [users] = useState([
    {
      id: 1,
      username: "Kiber_UZ",
      email: "kiber@kiberakademiya.uz",
      points: 1247,
      rank: "Afsonaviy",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 23,
      coursesFinished: 8
    },
    {
      id: 2,
      username: "KiberNinja",
      email: "ninja@example.com",
      points: 956,
      rank: "Guru",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 18,
      coursesFinished: 6
    },
    {
      id: 3,
      username: "AxloqiyHaker_T",
      email: "haker@example.com",
      points: 743,
      rank: "Haker",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 15,
      coursesFinished: 5
    },
    {
      id: 4,
      username: "PenTesteri2024",
      email: "testchi@example.com",
      points: 589,
      rank: "Grandmaster",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 12,
      coursesFinished: 4
    },
    {
      id: 5,
      username: "InfoXavfPro",
      email: "pro@example.com",
      points: 432,
      rank: "Master",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 9,
      coursesFinished: 3
    },
    {
      id: 6,
      username: "Crypt3r",
      email: "kripto@example.com",
      points: 378,
      rank: "Master",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 8,
      coursesFinished: 3
    },
    {
      id: 7,
      username: "WebXavfsizlik_UZ",
      email: "web@example.com",
      points: 289,
      rank: "Master",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 6,
      coursesFinished: 2
    },
    {
      id: 8,
      username: "Crym1n4l",
      email: "kriminalistika@example.com",
      points: 234,
      rank: "Master",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 5,
      coursesFinished: 2
    },
    {
      id: 9,
      username: "netw0rkD3f3nd3r",
      email: "tarmoq@example.com",
      points: 167,
      rank: "Yangi Boshlovchi",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 3,
      coursesFinished: 1
    },
    {
      id: 10,
      username: "XavfsizlikYangi",
      email: "yangi@example.com",
      points: 89,
      rank: "Yangi Boshlovchi",
      country: "🇺🇿",
      avatar: "/placeholder.svg",
      challengesCompleted: 2,
      coursesFinished: 1
    }
  ]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case "Afsonaviy":
        return <Crown className="h-4 w-4" />;
      case "Guru":
        return <Zap className="h-4 w-4" />;
      case "Haker":
        return <Swords className="h-4 w-4" />;
      case "Grandmaster":
        return <ShieldIcon className="h-4 w-4" />;
      case "Master":
        return <Award className="h-4 w-4" />;
      case "Yangi Boshlovchi":
        return <Medal className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case "Afsonaviy":
        return "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg";
      case "Guru":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg";
      case "Haker":
        return "bg-gradient-to-r from-green-400 to-cyan-500 text-black shadow-lg";
      case "Grandmaster":
        return "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg";
      case "Master":
        return "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg";
      case "Yangi Boshlovchi":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getRankRequirements = (rank) => {
    switch (rank) {
      case "Afsonaviy":
        return "1000+ ball";
      case "Guru":
        return "750-999 ball";
      case "Haker":
        return "500-749 ball";
      case "Grandmaster":
        return "350-499 ball";
      case "Master":
        return "200-349 ball";
      case "Yangi Boshlovchi":
        return "0-199 ball";
      default:
        return "Noma'lum";
    }
  };

  const getPositionIcon = (position) => {
    switch (position) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-600" />;
      default:
        return <span className="text-muted-foreground font-semibold">#{position}</span>;
    }
  };

  const rankTiers = [
    { name: "Afsonaviy", color: "from-purple-500 via-pink-500 to-red-500", icon: Crown, requirement: "1000+" },
    { name: "Guru", color: "from-yellow-400 to-orange-500", icon: Zap, requirement: "750-999" },
    { name: "Haker", color: "from-green-400 to-cyan-500", icon: Swords, requirement: "500-749" },
    { name: "Grandmaster", color: "from-indigo-500 to-purple-600", icon: ShieldIcon, requirement: "350-499" },
    { name: "Master", color: "from-blue-400 to-purple-500", icon: Award, requirement: "200-349" },
    { name: "Yangi Boshlovchi", color: "from-gray-400 to-gray-600", icon: Medal, requirement: "0-199" }
  ];

  return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Liderlar Taxtasi</h1>
            <p className="text-muted-foreground">KiberAkademiya O'zbekistondagi eng yaxshi natijalar</p>
          </div>
        </div>

        {/* Daraja Kartalar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {rankTiers.map((tier) => (
              <Card key={tier.name} className={`bg-gradient-to-r ${tier.color}/10 border-2 border-transparent bg-clip-padding backdrop-blur-sm`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{tier.name}</CardTitle>
                  <tier.icon className="h-4 w-4" style={{ color: `rgb(${tier.color.includes('yellow') ? '234, 179, 8' : tier.color.includes('purple') ? '147, 51, 234' : tier.color.includes('green') ? '34, 197, 94' : tier.color.includes('blue') ? '59, 130, 246' : tier.color.includes('gray') ? '107, 114, 128' : '147, 51, 234'})` }} />
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">{tier.requirement} ball</div>
                </CardContent>
              </Card>
          ))}
        </div>

        {/* Liderlar Taxtasi Jadvali */}
        <Card className="bg-card/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Reyting</span>
            </CardTitle>
            <CardDescription>
              Reytinglar kurs yakunlash va vazifa yechimlari asosida real vaqtda yangilanadi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">O'rin</TableHead>
                  <TableHead>Foydalanuvchi</TableHead>
                  <TableHead>Mamlakat</TableHead>
                  <TableHead>Ballar</TableHead>
                  <TableHead>Daraja</TableHead>
                  <TableHead>Jarayon</TableHead>
                  <TableHead className="text-right">Yakunlash</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                    <TableRow key={user.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {getPositionIcon(index + 1)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.username}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-2xl">{user.country}</span>
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-primary">{user.points}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getRankColor(user.rank)} font-semibold`}>
                          <span className="mr-1">{getRankIcon(user.rank)}</span>
                          {user.rank}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Vazifalar:</span> {user.challengesCompleted}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Kurslar:</span> {user.coursesFinished}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${Math.min((user.points / 1000) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                        {Math.round((user.points / 1000) * 100)}%
                      </span>
                        </div>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  );
};

export default Rating;
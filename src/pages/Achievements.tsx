
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Star, Shield, Target, Zap, Crown, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first cybersecurity course",
      icon: Target,
      earned: true,
      earnedDate: "2024-01-15",
      category: "Getting Started",
      points: 50,
      rarity: "Common"
    },
    {
      id: 2,
      name: "Web Security Master",
      description: "Complete all Web Application Security courses",
      icon: Shield,
      earned: true,
      earnedDate: "2024-02-20",
      category: "Web Security",
      points: 200,
      rarity: "Rare"
    },
    {
      id: 3,
      name: "Penetration Tester",
      description: "Successfully complete 5 penetration testing labs",
      icon: Zap,
      earned: false,
      progress: 60,
      category: "Practical Skills",
      points: 300,
      rarity: "Epic"
    },
    {
      id: 4,
      name: "Knowledge Seeker",
      description: "Complete 10 courses in different categories",
      icon: Trophy,
      earned: false,
      progress: 70,
      category: "Learning",
      points: 250,
      rarity: "Rare"
    },
    {
      id: 5,
      name: "Streak Master",
      description: "Maintain a 30-day learning streak",
      icon: Crown,
      earned: true,
      earnedDate: "2024-03-01",
      category: "Dedication",
      points: 150,
      rarity: "Uncommon"
    },
    {
      id: 6,
      name: "Cryptography Expert",
      description: "Master all cryptography and encryption courses",
      icon: Award,
      earned: false,
      progress: 25,
      category: "Cryptography",
      points: 400,
      rarity: "Legendary"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Web Application Security Fundamentals",
      issueDate: "2024-02-15",
      credentialId: "CYB-WEB-2024-001",
      status: "Active"
    },
    {
      id: 2,
      name: "Network Security Essentials",
      issueDate: "2024-03-10",
      credentialId: "CYB-NET-2024-002",
      status: "Active"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-500';
      case 'Uncommon': return 'bg-green-500';
      case 'Rare': return 'bg-blue-500';
      case 'Epic': return 'bg-purple-500';
      case 'Legendary': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);
  const earnedCount = achievements.filter(a => a.earned).length;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 suzani-accent">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            Achievements & Certifications
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Track your learning milestones and showcase your cybersecurity expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{earnedCount}</div>
              <div className="text-sm text-muted-foreground">Achievements Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{totalPoints}</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{certificates.length}</div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-20">
          <Medal className="h-32 w-32 text-primary animate-float" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Achievements Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-foreground mb-6">Achievements</h2>
          <div className="grid gap-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={achievement.id} 
                  className={`border-border/50 transition-all duration-300 ${
                    achievement.earned 
                      ? 'cyber-glow border-primary/30' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        achievement.earned ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getRarityColor(achievement.rarity)} text-white text-xs`}>
                              {achievement.rarity}
                            </Badge>
                            <div className="text-sm text-muted-foreground">{achievement.points} pts</div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{achievement.category}</Badge>
                          {achievement.earned ? (
                            <div className="text-xs text-green-500">
                              Earned {new Date(achievement.earnedDate!).toLocaleDateString()}
                            </div>
                          ) : achievement.progress ? (
                            <div className="flex items-center gap-2 text-sm">
                              <Progress value={achievement.progress} className="w-20 h-2" />
                              <span className="text-muted-foreground">{achievement.progress}%</span>
                            </div>
                          ) : (
                            <div className="text-xs text-muted-foreground">Not started</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Certificates</h2>
          <div className="space-y-4">
            {certificates.map((cert) => (
              <Card key={cert.id} className="border-accent/20 gold-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {cert.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>
                    Issued: {new Date(cert.issueDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-3">
                    Credential ID: {cert.credentialId}
                  </div>
                  <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg py-2 px-4 text-sm transition-colors">
                    Download Certificate
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Progress Summary */}
          <Card className="mt-6 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Progress Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Achievement Progress</span>
                  <span className="text-primary">{Math.round((earnedCount / achievements.length) * 100)}%</span>
                </div>
                <Progress value={(earnedCount / achievements.length) * 100} className="h-2" />
              </div>
              <div className="text-xs text-muted-foreground">
                {achievements.length - earnedCount} achievements remaining
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

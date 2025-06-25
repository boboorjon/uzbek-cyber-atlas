
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
      name: 'Web Application Security',
      description: 'Exploit common web vulnerabilities including SQL injection, XSS, and CSRF attacks.',
      difficulty: 'Easy',
      topic: 'Web',
      progress: 75,
      status: 'in-progress',
      points: 100,
      estimatedTime: '2-3 hours',
      vpnRequired: true,
    },
    {
      id: 2,
      name: 'Buffer Overflow Exploitation',
      description: 'Master stack-based buffer overflows and bypass modern protections.',
      difficulty: 'Hard',
      topic: 'Binary',
      progress: 0,
      status: 'locked',
      points: 300,
      estimatedTime: '4-6 hours',
      vpnRequired: true,
    },
    {
      id: 3,
      name: 'Cryptographic Weaknesses',
      description: 'Break weak encryption implementations and cryptographic protocols.',
      difficulty: 'Medium',
      topic: 'Crypto',
      progress: 100,
      status: 'completed',
      points: 200,
      estimatedTime: '3-4 hours',
      vpnRequired: false,
    },
    {
      id: 4,
      name: 'Network Penetration Testing',
      description: 'Perform reconnaissance, enumeration, and exploitation of network services.',
      difficulty: 'Medium',
      topic: 'Network',
      progress: 30,
      status: 'in-progress',
      points: 250,
      estimatedTime: '3-5 hours',
      vpnRequired: true,
    },
    {
      id: 5,
      name: 'Reverse Engineering Challenge',
      description: 'Analyze and reverse engineer compiled binaries to extract hidden flags.',
      difficulty: 'Hard',
      topic: 'Reverse',
      progress: 0,
      status: 'available',
      points: 350,
      estimatedTime: '5-7 hours',
      vpnRequired: false,
    },
    {
      id: 6,
      name: 'Mobile App Security',
      description: 'Discover vulnerabilities in Android applications and bypass security controls.',
      difficulty: 'Medium',
      topic: 'Mobile',
      progress: 60,
      status: 'in-progress',
      points: 220,
      estimatedTime: '2-4 hours',
      vpnRequired: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-500/20 text-green-400 border-green-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400';
      case 'hard':
        return 'bg-red-500/20 text-red-400 border-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'locked':
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
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Shield className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Cyber Challenges</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Test your cybersecurity skills with hands-on challenges. Practice on vulnerable machines 
          and real-world scenarios to master penetration testing techniques.
        </p>
      </div>

      {/* Filters and Search */}
      <Card className="cyber-glow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filter Challenges</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search challenges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={topicFilter} onValueChange={setTopicFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="web">Web</SelectItem>
                <SelectItem value="binary">Binary</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
                <SelectItem value="network">Network</SelectItem>
                <SelectItem value="reverse">Reverse</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary">{challenges.length}</div>
            <p className="text-sm text-muted-foreground">Total Challenges</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-400">
              {challenges.filter(c => c.status === 'completed').length}
            </div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-400">
              {challenges.filter(c => c.status === 'in-progress').length}
            </div>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary">
              {challenges.reduce((sum, c) => sum + (c.status === 'completed' ? c.points : 0), 0)}
            </div>
            <p className="text-sm text-muted-foreground">Points Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Challenge Grid */}
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
              {/* Progress Bar */}
              {challenge.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
              )}

              {/* Challenge Info */}
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Topic: {challenge.topic}</span>
                <span>{challenge.points} pts</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Time: {challenge.estimatedTime}</span>
                {challenge.vpnRequired && (
                  <Badge variant="secondary" className="text-xs">
                    VPN Required
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button 
                  className="flex-1" 
                  disabled={challenge.status === 'locked'}
                  variant={challenge.status === 'completed' ? 'secondary' : 'default'}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {challenge.status === 'completed' ? 'Review' : 
                   challenge.status === 'locked' ? 'Locked' : 'Start'}
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
            <h3 className="text-xl font-semibold mb-2">No challenges found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find more challenges.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Challenges;

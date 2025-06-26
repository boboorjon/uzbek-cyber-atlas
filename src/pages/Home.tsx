import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Trophy, Target, Users, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interaktiv O'qitish",
      description: "Amaliy modullar va real dunyodagi stsenarilar orqali kiberxavfsizlikni egallang"
    },
    {
      icon: Target,
      title: "Amaliy Vazifalar",
      description: "Zaif mashinalar va CTF uslubidagi vazifalar bilan ko'nikmalaringizni sinab ko'ring"
    },
    {
      icon: Trophy,
      title: "Yutuqlar Tizimi",
      description: "Nishonlar va sertifikatlar oling, reytingda yuqoriga ko'tariling"
    },
    {
      icon: Users,
      title: "Jamoa O'qitish",
      description: "Kiberxavfsizlik ishqibozlari va mutaxassislari jamiyatiga qo'shiling"
    }
  ];

  const testimonials = [
    {
      name: "Akmal Karimov",
      role: "Xavfsizlik Tahlilchisi",
      content: "KiberAkademiya menga kiberxavfsizlik sohasiga o'tishda yordam berdi. Amaliy yondashuv ajoyib!",
      rating: 5
    },
    {
      name: "Dilnoza O'zbekova",
      role: "Penetratsiya Testchisi",
      content: "Vazifalar real va yaxshi tuzilgan. Ko'nikmalarni rivojlantirish uchun mukammal.",
      rating: 5
    },
    {
      name: "Sardor Toshkentov",
      role: "IT Talabasi",
      content: "An'anaviy ta'limni zamonaviy texnikalar bilan birlashtirgan ajoyib platforma.",
      rating: 5
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Asosiy Bo'lim */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-16 w-16 text-primary mr-4" />
                <div className="text-left">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    KiberAkademiya
                  </h1>
                  <p className="text-xl text-muted-foreground">Milliy o'quv platforma</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                O'zbekcha platforma bilan
                <span className="text-primary block">Kiberxavfsizlik mutaxasisiga aylaning</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                O'zbekistonning an'anaviy bilim mukammalligi qadriyatlari bilan zamonaviy xavfsizlik
                amaliyoti va amaliy vazifalarni birlashtiradigan ilg'or platforma bilan zamonaviy kasbni o'rganing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/login">
                  <Button size="lg" className="w-full sm:w-auto cyber-glow text-lg px-8 py-3">
                    <Play className="h-5 w-5 mr-2" />
                    O'qishni Boshlash
                  </Button>
                </Link>
                <Link to="/challenges">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
                    Vazifalarni Ko'rish
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* O'zbek Naqshlari */}
          <div className="absolute inset-0 uzbek-pattern opacity-30"></div>
        </section>

        {/* Xususiyatlar Bo'limi */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Nima Uchun KiberAkademiyani Tanlash Kerak?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Bizning platformamiz nazariy bilimlarni o'yin shaklidagi o'qitish muhitida amaliy tajriba bilan birlashtiradi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-colors">
                    <CardHeader className="text-center">
                      <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* O'quv Modullari Bo'limi */}
        <section className="py-16 bg-card/30 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">O'quv Modullari</h3>
              <p className="text-muted-foreground text-lg">
                Boshlang'ich dan ilg'or darajagacha tuzilgan o'quv yo'llari
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/80 backdrop-blur suzani-accent">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Tarmoq Xavfsizligi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Tarmoq protokollari, xavfsizlik devorlari va kirishni aniqlashni o'rganing</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">12 dars • 75% yakunlangan</p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur suzani-accent">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-6 w-6 text-accent mr-2" />
                    Penetratsiya Testi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Amaliy axloqiy hacking va zaifliklarni baholash</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">18 dars • 45% yakunlangan</p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur suzani-accent">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-primary mr-2" />
                    Raqamli Kriminalistika
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Xavfsizlik hodisalarini tekshiring va raqamli dalillarni tahlil qiling</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">15 dars • 20% yakunlangan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Talabalar Fikrlari Bo'limi */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Talabalarimiz Nima Deydi</h3>
              <p className="text-muted-foreground text-lg">
                Kiberxavfsizlik karerasini rivojlantirgan minglab mamnun o'quvchilarga qo'shiling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-primary fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Harakat Chaqiruvi Bo'limi */}
        <section className="py-16 bg-primary/10 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Sayohatingizni Boshlashga Tayyormisiz?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Bugun KiberAkademiyaga qo'shiling va O'zbekistonning yangi avlod kiberxavfsizlik mutaxassislari qatoriga kiriting
            </p>
            <Link to="/login">
              <Button size="lg" className="cyber-glow text-lg px-8 py-3">
                Hoziroq KiberAkademiyaga Qo'shiling
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
  );
};

export default Home;
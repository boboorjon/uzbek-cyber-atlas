import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Maximize,
  BookOpen,
  Code,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileText,
  Video,
  HelpCircle
} from 'lucide-react';

const Lesson = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(720); // 12 daqiqa
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const module = {
    id: parseInt(id || '1'),
    title: "Web Ilova Xavfsizligiga Kirish",
    description: "Web xavfsizligining asoslari, umumiy zaifliklar va asosiy himoya mexanizmlarini o'rganing.",
    instructor: "Dr. Saira Ahmad",
    totalLessons: 8,
    progress: 75
  };

  const lessons = [
    {
      id: 0,
      title: "Web Ilova Xavfsizligi Nima?",
      type: "video",
      duration: "12:30",
      completed: true,
      videoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      content: `
        # Web Ilova Xavfsizligiga Kirish

        Web ilova xavfsizligi kiberxavfsizlikning muhim jihati bo'lib, web ilovalarini turli xil tahdidlar va zaifliklardan himoyalashga qaratilgan.

        ## Asosiy Tushunchalar:

        ### 1. Hujum Sirtlari
        - Mijoz tomonidagi zaifliklar
        - Server tomonidagi zaifliklar
        - Ma'lumotlar bazasi zaifliklarі
        - Tarmoq aloqasi zaifliklarі

        ### 2. Umumiy Tahdid Faollari
        - Skript bolalari
        - Uyushgan jinoyat guruhlari
        - Davlat aktоrlari
        - Ichki tahdidlar

        ### 3. Xavfsizlik Tamoyillari
        - **Maxfiylik**: Ma'lumotlarning faqat vakolatli foydalanuvchilarga ochiq bo'lishini ta'minlash
        - **Yaxlitlik**: Ma'lumotlarning aniqligi va to'liqligini saqlash
        - **Mavjudlik**: Tizimlarning kerak bo'lganda ochiq bo'lishini ta'minlash
      `
    },
    {
      id: 1,
      title: "Umumiy Hujum Vektorlari",
      type: "reading",
      duration: "15:00",
      completed: true,
      content: `
        # Umumiy Web Ilova Hujum Vektorlari

        Hujum vektorlarini tushunish xavfsiz ilovalar yaratish uchun juda muhim.

        ## OWASP Top 10 Ko'rinishi:

        1. **Injection**: SQL, NoSQL, OS buyruq injection
        2. **Buzilgan Autentifikatsiya**: Sessiya boshqaruvi kamchiliklari
        3. **Maxfiy Ma'lumotlar Ochilishi**: Himoyalanmagan ma'lumot uzatish
        4. **XML Tashqi Obyektlar (XXE)**: XML protsessor zaifliklarі
        5. **Buzilgan Kirish Nazorati**: Avtorizatsiyani chetlab o'tish
        6. **Xavfsizlik Noto'g'ri Konfiguratsiya**: Standart/to'liq bo'lmagan konfiglar
        7. **Cross-Site Scripting (XSS)**: Skript injection
        8. **Xavfli Deserializatsiya**: Obyekt injection hujumlar
        9. **Ma'lum Zaifliklar bilan Komponentlar**: Eski kutubxonalar
        10. **Yetarli Bo'lmagan Jurnal va Monitoring**: Aniqlash bo'shliqlari
      `
    },
    {
      id: 2,
      title: "Amaliy Laboratoriya: Asosiy SQL Injection",
      type: "lab",
      duration: "25:00",
      completed: false,
      codeExample: `
// Zaif Kod Namunasi
const query = "SELECT * FROM users WHERE id = " + userId;

// Xavfsiz Kod Namunasi
const query = "SELECT * FROM users WHERE id = ?";
const stmt = connection.prepare(query);
stmt.execute([userId]);
      `
    }
  ];

  const currentLessonData = lessons[currentLesson];

  const quiz = {
    question: "Quyidagilardan qaysi biri kiberxavfsizlikdagi CIA triادining qismi EMAS?",
    options: [
      "Maxfiylik",
      "Yaxlitlik",
      "Mavjudlik",
      "Javobgarlik"
    ],
    correctAnswer: 3,
    explanation: "CIA triada Maxfiylik, Yaxlitlik va Mavjudlikdan iborat. Javobgarlik muhim, lekin CIA triадning qismi emas."
  };

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswers.includes(answerIndex)) {
      setSelectedAnswers(selectedAnswers.filter(a => a !== answerIndex));
    } else {
      setSelectedAnswers([answerIndex]);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Sarlavha */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>Modullar</span>
            <span>/</span>
            <span className="text-foreground">{module.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{module.title}</h1>
              <p className="text-muted-foreground">Muallif: {module.instructor}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {currentLesson + 1}-dars {module.totalLessons}dan
              </div>
              <div className="flex items-center gap-2">
                <Progress value={module.progress} className="w-32" />
                <span className="text-sm font-medium">{module.progress}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Asosiy Kontent */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video/Kontent Pleyer */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black relative">
                {currentLessonData.type === 'video' ? (
                    <>
                      <img
                          src={currentLessonData.videoUrl}
                          alt={currentLessonData.title}
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full w-16 h-16 bg-white/10 backdrop-blur border-white/20"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                        </Button>
                      </div>

                      {/* Video Boshqaruv */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="space-y-2">
                          <Progress value={(currentTime / duration) * 100} className="h-1" />
                          <div className="flex items-center justify-between text-white text-sm">
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <SkipBack className="h-4 w-4" />
                              </Button>
                              <Button
                                  size="sm"
                                  variant="ghost"
                                  className="text-white hover:bg-white/20"
                                  onClick={() => setIsPlaying(!isPlaying)}
                              >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                              </Button>
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <SkipForward className="h-4 w-4" />
                              </Button>
                              <Volume2 className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                                <Maximize className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                          {currentLessonData.type === 'reading' ? (
                              <FileText className="h-8 w-8 text-primary" />
                          ) : (
                              <Code className="h-8 w-8 text-primary" />
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{currentLessonData.title}</h3>
                        <p className="text-muted-foreground">
                          {currentLessonData.type === 'reading' ? 'O\'quv Materiali' : 'Amaliy Laboratoriya'}
                        </p>
                      </div>
                    </div>
                )}
              </div>
            </Card>

            {/* Dars Kontent Varaqlari */}
            <Tabs defaultValue="content" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="content">Kontent</TabsTrigger>
                <TabsTrigger value="code">Kod</TabsTrigger>
                <TabsTrigger value="quiz">Savol</TabsTrigger>
                <TabsTrigger value="notes">Eslatmalar</TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>{currentLessonData.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{
                      __html: currentLessonData.content?.replace(/\n/g, '<br/>').replace(/#{3}\s/g, '<h3>').replace(/#{2}\s/g, '<h2>').replace(/#{1}\s/g, '<h1>') || ''
                    }} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code">
                <Card>
                  <CardHeader>
                    <CardTitle>Kod Namunalari</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {currentLessonData.codeExample ? (
                        <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{currentLessonData.codeExample}</code>
                    </pre>
                    ) : (
                        <p className="text-muted-foreground">Bu dars uchun kod namunalari yo'q.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quiz">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Bilim Tekshiruvi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="font-semibold">{quiz.question}</h3>
                    <div className="space-y-2">
                      {quiz.options.map((option, index) => (
                          <Button
                              key={index}
                              variant={selectedAnswers.includes(index) ? "default" : "outline"}
                              className="w-full justify-start h-auto p-4 text-left"
                              onClick={() => handleAnswerSelect(index)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                                {selectedAnswers.includes(index) && (
                                    <CheckCircle2 className="h-4 w-4" />
                                )}
                              </div>
                              <span>{option}</span>
                            </div>
                          </Button>
                      ))}
                    </div>
                    {selectedAnswers.length > 0 && (
                        <div className="p-4 bg-secondary/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Tushuntirish:</strong> {quiz.explanation}
                          </p>
                        </div>
                    )}
                    <Button className="w-full" disabled={selectedAnswers.length === 0}>
                      Javobni Yuborish
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Sizning Eslatmalaringiz</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Eslatmalar funksiyasi tez orada...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Navigatsiya */}
            <div className="flex justify-between">
              <Button
                  variant="outline"
                  disabled={currentLesson === 0}
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Oldingi Dars
              </Button>
              <Button
                  disabled={currentLesson === lessons.length - 1}
                  onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
              >
                Keyingi Dars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Yon Panel - Darslar Ro'yxati */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kurs Jarayoni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessons.map((lesson, index) => (
                      <Button
                          key={lesson.id}
                          variant={index === currentLesson ? "default" : "ghost"}
                          className="w-full justify-start h-auto p-3"
                          onClick={() => setCurrentLesson(index)}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="flex-shrink-0">
                            {lesson.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-medium text-sm line-clamp-2">{lesson.title}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              {lesson.type === 'video' ? <Video className="h-3 w-3" /> :
                                  lesson.type === 'reading' ? <FileText className="h-3 w-3" /> :
                                      <Code className="h-3 w-3" />}
                              {lesson.duration}
                            </div>
                          </div>
                        </div>
                      </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Lesson;
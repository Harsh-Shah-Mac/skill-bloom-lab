
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChatInterface } from "@/components/ChatInterface";
import { ProjectDashboard } from "@/components/ProjectDashboard";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Brain, Rocket, Star, Zap, Target, BookOpen, Users, Trophy, Sparkles, Atom, Flame, Lightning } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'dashboard' | 'resources'>('landing');
  const [userProgress, setUserProgress] = useState(25);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-POWERED GENIUS",
      description: "ChatGPT analyzes your wildest ideas and creates mind-bending learning adventures",
      color: "from-electric-400 via-purple-500 to-pink-500",
      bgColor: "bg-electric-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "HYPER SMART SEARCH",
      description: "4o-mini hunts down the most insane resources tailored to your brain",
      color: "from-neon-400 via-green-500 to-emerald-500",
      bgColor: "bg-neon-500/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PROGRESSIVE MAYHEM",
      description: "Explode complex projects into bite-sized chaos quests",
      color: "from-hot-400 via-orange-500 to-red-500",
      bgColor: "bg-hot-500/20"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "ACHIEVEMENT MADNESS",
      description: "Unlock epic badges and level up like a total legend",
      color: "from-yellow-400 via-orange-500 to-pink-500",
      bgColor: "bg-yellow-500/20"
    }
  ];

  const floatingShapes = [
    { icon: <Atom className="w-12 h-12 text-electric-400" />, delay: "0s", duration: "8s" },
    { icon: <Flame className="w-16 h-16 text-hot-400" />, delay: "2s", duration: "10s" },
    { icon: <Lightning className="w-10 h-10 text-neon-400" />, delay: "4s", duration: "6s" },
    { icon: <Sparkles className="w-14 h-14 text-purple-400" />, delay: "1s", duration: "12s" },
  ];

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background chaos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-30"
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${10 + (index * 15)}%`,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
            }}
          >
            {shape.icon}
          </div>
        ))}
        
        {/* Morphing blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-electric-500/30 to-purple-500/30 morphing-blob animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-500/30 to-green-500/30 morphing-blob animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-hot-500/20 to-pink-500/20 morphing-blob animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-electric-400 to-transparent animate-slide-diagonal opacity-60"></div>
          <div className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-neon-400 to-transparent animate-slide-diagonal opacity-60" style={{ animationDelay: '5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header chaos */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <Star className="w-20 h-20 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
              <Zap className="w-10 h-10 text-electric-400 absolute -top-3 -right-3 animate-bounce" />
              <Sparkles className="w-8 h-8 text-neon-400 absolute -bottom-2 -left-2 animate-wiggle" />
            </div>
          </div>
          
          <h1 className="font-apple-ny text-7xl md:text-9xl font-black mb-8 animate-pulse-glow">
            <span className="bg-gradient-to-r from-electric-400 via-neon-400 to-hot-400 bg-clip-text text-transparent text-glow">
              LEARN
            </span>
            <span className="text-white text-glow">QUEST</span>
          </h1>
          
          <div className="relative mb-8">
            <p className="font-space text-2xl md:text-4xl text-white font-bold mb-4 animate-float">
              TRANSFORM YOUR WILDEST IDEAS INTO
            </p>
            <p className="font-apple-ny text-3xl md:text-5xl font-black bg-gradient-to-r from-hot-400 via-purple-500 to-electric-400 bg-clip-text text-transparent animate-pulse">
              EPIC LEARNING ADVENTURES! 🚀✨
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Badge className="bg-gradient-to-r from-electric-500 to-purple-600 text-white px-8 py-3 text-xl font-bold animate-wiggle border-2 border-electric-400 border-glow">
              AI-POWERED MAYHEM
            </Badge>
            <Badge className="bg-gradient-to-r from-neon-500 to-green-600 text-black px-8 py-3 text-xl font-bold animate-wiggle border-2 border-neon-400 border-glow" style={{ animationDelay: '0.2s' }}>
              GAMIFIED CHAOS
            </Badge>
            <Badge className="bg-gradient-to-r from-hot-500 to-orange-600 text-white px-8 py-3 text-xl font-bold animate-wiggle border-2 border-hot-400 border-glow" style={{ animationDelay: '0.4s' }}>
              PERSONALIZED INSANITY
            </Badge>
          </div>
        </div>

        {/* Features grid of chaos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.bgColor} backdrop-blur-lg border-4 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-110 hover:rotate-2 group cursor-pointer bg-noise animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 border-4 border-white/50 morphing-blob`}>
                  {feature.icon}
                </div>
                <h3 className="font-apple-ny text-2xl font-black text-white mb-4 text-glow">{feature.title}</h3>
                <p className="text-white/90 text-sm font-space font-medium">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action buttons chaos */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              onClick={() => setCurrentView('chat')}
              className="bg-gradient-to-r from-electric-500 via-purple-600 to-pink-600 hover:from-electric-600 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-8 text-2xl font-black rounded-3xl shadow-2xl hover:shadow-electric-500/50 transition-all duration-300 hover:scale-110 transform border-4 border-electric-400 border-glow font-apple-ny animate-pulse-glow"
            >
              🚀 START THE MADNESS
            </Button>
            <Button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-gradient-to-r from-neon-500 via-green-600 to-emerald-600 hover:from-neon-600 hover:via-green-700 hover:to-emerald-700 text-black px-16 py-8 text-2xl font-black rounded-3xl shadow-2xl hover:shadow-neon-500/50 transition-all duration-300 hover:scale-110 transform border-4 border-neon-400 border-glow font-apple-ny animate-pulse-glow"
              style={{ animationDelay: '1s' }}
            >
              📊 CHAOS DASHBOARD
            </Button>
          </div>
        </div>

        {/* Stats section mayhem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-r from-electric-600/30 to-purple-600/30 backdrop-blur-lg border-4 border-electric-400/50 animate-float morphing-blob">
            <CardContent className="p-8 text-center">
              <div className="font-apple-ny text-6xl font-black text-electric-400 mb-4 text-glow animate-pulse">10K+</div>
              <div className="text-white font-space font-bold text-lg">INSANE LEARNING PATHS</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-neon-600/30 to-green-600/30 backdrop-blur-lg border-4 border-neon-400/50 animate-float morphing-blob" style={{ animationDelay: '2s' }}>
            <CardContent className="p-8 text-center">
              <div className="font-apple-ny text-6xl font-black text-neon-400 mb-4 text-glow animate-pulse">50K+</div>
              <div className="text-white font-space font-bold text-lg">CURATED CHAOS RESOURCES</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-hot-600/30 to-orange-600/30 backdrop-blur-lg border-4 border-hot-400/50 animate-float morphing-blob" style={{ animationDelay: '4s' }}>
            <CardContent className="p-8 text-center">
              <div className="font-apple-ny text-6xl font-black text-hot-400 mb-4 text-glow animate-pulse">95%</div>
              <div className="text-white font-space font-bold text-lg">TOTAL DOMINATION RATE</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen dark">
      {currentView === 'landing' && renderLanding()}
      {currentView === 'chat' && <ChatInterface onBack={() => setCurrentView('landing')} />}
      {currentView === 'dashboard' && <ProjectDashboard onBack={() => setCurrentView('landing')} />}
      {currentView === 'resources' && <ResourceLibrary onBack={() => setCurrentView('landing')} />}
    </div>
  );
};

export default Index;

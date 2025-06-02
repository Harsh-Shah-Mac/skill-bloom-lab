
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChatInterface } from "@/components/ChatInterface";
import { ProjectDashboard } from "@/components/ProjectDashboard";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Brain, Rocket, Star, Zap, Target, BookOpen, Users, Trophy, Sparkles, Lightbulb } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'dashboard' | 'resources'>('landing');
  const [userProgress, setUserProgress] = useState(25);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-POWERED GENIUS",
      description: "ChatGPT analyzes your ideas and creates personalized learning paths",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "SMART SEARCH",
      description: "Find the most relevant resources tailored to your learning style",
      color: "from-neon-400 to-green-500",
      bgColor: "bg-neon-500/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PROGRESSIVE LEARNING",
      description: "Break complex topics into manageable learning quests",
      color: "from-hot-400 to-red-500",
      bgColor: "bg-hot-500/20"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "ACHIEVEMENT SYSTEM",
      description: "Unlock badges and track your learning progress",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/20"
    }
  ];

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fewer floating elements */}
        <div className="absolute top-20 left-20 opacity-20">
          <Lightbulb className="w-8 h-8 text-yellow-400 animate-float" />
        </div>
        <div className="absolute top-32 right-32 opacity-20">
          <Sparkles className="w-6 h-6 text-yellow-400 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Subtle background blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Simplified header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Star className="w-12 h-12 text-yellow-400" />
          </div>
          
          <h1 className="font-apple-ny text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              LEARN
            </span>
            <span className="text-white">QUEST</span>
          </h1>
          
          <div className="mb-8">
            <p className="font-space text-xl md:text-2xl text-white font-medium mb-4">
              Transform your ideas into
            </p>
            <p className="font-apple-ny text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Epic Learning Adventures! 🚀
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 text-lg font-bold">
              AI-POWERED
            </Badge>
            <Badge className="bg-gradient-to-r from-neon-500 to-green-500 text-black px-6 py-2 text-lg font-bold">
              GAMIFIED
            </Badge>
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 text-lg font-bold">
              PERSONALIZED
            </Badge>
          </div>
        </div>

        {/* Simplified features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.bgColor} backdrop-blur-lg border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group cursor-pointer`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-apple-ny text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm font-space">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simplified action buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => setCurrentView('chat')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 font-apple-ny"
            >
              🚀 START LEARNING
            </Button>
            <Button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-gradient-to-r from-neon-500 to-green-500 hover:from-neon-600 hover:to-green-600 text-black px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-neon-500/25 transition-all duration-300 hover:scale-105 font-apple-ny"
            >
              📊 DASHBOARD
            </Button>
            <Button 
              onClick={() => setCurrentView('resources')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 font-apple-ny"
            >
              📚 RESOURCES
            </Button>
          </div>
        </div>

        {/* Simplified stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-yellow-600/20 backdrop-blur-lg border-2 border-yellow-400/30">
            <CardContent className="p-6 text-center">
              <div className="font-apple-ny text-4xl font-bold text-yellow-400 mb-2">10K+</div>
              <div className="text-white font-space font-medium">Learning Paths</div>
            </CardContent>
          </Card>
          <Card className="bg-neon-600/20 backdrop-blur-lg border-2 border-neon-400/30">
            <CardContent className="p-6 text-center">
              <div className="font-apple-ny text-4xl font-bold text-neon-400 mb-2">50K+</div>
              <div className="text-white font-space font-medium">Curated Resources</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-600/20 backdrop-blur-lg border-2 border-yellow-400/30">
            <CardContent className="p-6 text-center">
              <div className="font-apple-ny text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-white font-space font-medium">Success Rate</div>
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

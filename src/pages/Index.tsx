
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChatInterface } from "@/components/ChatInterface";
import { ProjectDashboard } from "@/components/ProjectDashboard";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Brain, Rocket, Star, Zap, Target, BookOpen, Users, Trophy } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'dashboard' | 'resources'>('landing');
  const [userProgress, setUserProgress] = useState(25);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Planning",
      description: "ChatGPT analyzes your ideas and creates personalized learning paths",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Smart Search",
      description: "4o-mini finds the perfect resources for your skill level",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Progressive Learning",
      description: "Break down complex projects into fun, manageable mini-quests",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamified Progress",
      description: "Unlock achievements and level up your skills",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <Star className="w-16 h-16 text-yellow-400 animate-spin" style={{ animationDuration: '10s' }} />
              <Zap className="w-8 h-8 text-cyan-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            LEARN<span className="text-white">QUEST</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-bold">
            Turn Your Ideas Into Epic Learning Adventures! 🚀
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 text-lg font-bold animate-pulse">
              AI-Powered
            </Badge>
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 text-lg font-bold animate-pulse delay-100">
              Gamified
            </Badge>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 text-lg font-bold animate-pulse delay-200">
              Personalized
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => setCurrentView('chat')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 transform"
            >
              🚀 Start Your Quest
            </Button>
            <Button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 transform"
            >
              📊 View Dashboard
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-2 border-purple-400/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">10K+</div>
              <div className="text-white font-bold">Learning Paths Created</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-green-400 mb-2">50K+</div>
              <div className="text-white font-bold">Resources Curated</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border-2 border-green-400/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-pink-400 mb-2">95%</div>
              <div className="text-white font-bold">Success Rate</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {currentView === 'landing' && renderLanding()}
      {currentView === 'chat' && <ChatInterface onBack={() => setCurrentView('landing')} />}
      {currentView === 'dashboard' && <ProjectDashboard onBack={() => setCurrentView('landing')} />}
      {currentView === 'resources' && <ResourceLibrary onBack={() => setCurrentView('landing')} />}
    </div>
  );
};

export default Index;

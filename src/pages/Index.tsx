
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChatInterface } from "@/components/ChatInterface";
import { ProjectDashboard } from "@/components/ProjectDashboard";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { Brain, Rocket, Star, Target, Trophy, BookOpen } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'dashboard' | 'resources'>('landing');

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Personalized learning paths created by AI",
      bgColor: "bg-gray-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Progressive Quests",
      description: "Break down complex topics into manageable steps",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Track Progress",
      description: "Monitor your learning journey with achievements",
      bgColor: "bg-gray-50"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Curated Resources",
      description: "Access high-quality learning materials",
      bgColor: "bg-yellow-50"
    }
  ];

  const renderLanding = () => (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-black" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
            <span className="text-yellow-500">LEARN</span>QUEST
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Transform your ideas into
          </p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-500 mb-8">
            Epic Learning Adventures! 🚀
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm font-bold rounded-full">
              AI-POWERED
            </Badge>
            <Badge className="bg-gray-800 text-white px-4 py-2 text-sm font-bold rounded-full">
              GAMIFIED
            </Badge>
            <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm font-bold rounded-full">
              PERSONALIZED
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.bgColor} border-2 border-gray-200 hover:border-yellow-400 transition-all duration-200 hover:shadow-lg cursor-pointer`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-700">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setCurrentView('chat')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              🚀 Start Learning
            </Button>
            <Button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              📊 Dashboard
            </Button>
            <Button 
              onClick={() => setCurrentView('resources')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              📚 Resources
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-yellow-50 border-2 border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Learning Paths</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-2 border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-700 font-medium">Curated Resources</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-2 border-yellow-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
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

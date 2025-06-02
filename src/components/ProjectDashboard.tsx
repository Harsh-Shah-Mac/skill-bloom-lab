
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Trophy, Star, Zap, CheckCircle, Lock, Play } from "lucide-react";

interface ProjectDashboardProps {
  onBack: () => void;
}

interface QuestNode {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  level: number;
  position: { x: number; y: number };
  points: number;
}

export const ProjectDashboard = ({ onBack }: ProjectDashboardProps) => {
  const [selectedQuest, setSelectedQuest] = useState<QuestNode | null>(null);

  const questNodes: QuestNode[] = [
    {
      id: "1",
      title: "BASICS MASTERY",
      description: "Master the fundamentals and build your foundation",
      status: 'completed',
      level: 1,
      position: { x: 50, y: 85 },
      points: 500,
    },
    {
      id: "2", 
      title: "INTERMEDIATE CHAOS",
      description: "Dive deeper into advanced concepts",
      status: 'completed',
      level: 2,
      position: { x: 25, y: 70 },
      points: 750,
    },
    {
      id: "3",
      title: "CHALLENGE ARENA",
      description: "Test your skills with real-world projects",
      status: 'current',
      level: 3,
      position: { x: 75, y: 55 },
      points: 1000,
    },
    {
      id: "4",
      title: "EXPERT REALM",
      description: "Become a master of your domain",
      status: 'locked',
      level: 4,
      position: { x: 40, y: 40 },
      points: 1500,
    },
    {
      id: "5",
      title: "LEGEND STATUS",
      description: "Achieve legendary mastery",
      status: 'locked',
      level: 5,
      position: { x: 60, y: 25 },
      points: 2000,
    },
    {
      id: "6",
      title: "GODMODE ACTIVATED",
      description: "Transcend to ultimate knowledge",
      status: 'locked',
      level: 6,
      position: { x: 50, y: 10 },
      points: 3000,
    },
  ];

  const getNodeIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-8 h-8 text-neon-400" />;
      case 'current':
        return <Play className="w-8 h-8 text-yellow-400 animate-pulse" />;
      case 'locked':
        return <Lock className="w-8 h-8 text-gray-500" />;
      default:
        return <Target className="w-8 h-8" />;
    }
  };

  const getNodeColors = (status: string) => {
    switch (status) {
      case 'completed':
        return "bg-gradient-to-r from-neon-500 to-green-600 border-neon-400 shadow-neon-500/50";
      case 'current':
        return "bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-400 shadow-yellow-500/50 animate-pulse-glow";
      case 'locked':
        return "bg-gradient-to-r from-gray-600 to-gray-700 border-gray-500";
      default:
        return "bg-gradient-to-r from-electric-500 to-purple-600 border-electric-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 morphing-blob animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-500/20 to-green-500/20 morphing-blob animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-electric-500/10 to-purple-500/10 morphing-blob animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              onClick={onBack}
              className="bg-gradient-to-r from-electric-500 to-purple-600 hover:from-electric-600 hover:to-purple-700 text-white mr-4"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Trophy className="w-8 h-8 text-yellow-400 mr-3 animate-wiggle" />
            <h1 className="font-apple-ny text-4xl font-black text-white text-glow">
              QUEST DASHBOARD
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 text-xl font-bold">
              <Star className="w-5 h-5 mr-2" />
              2,750 XP
            </Badge>
            <Badge className="bg-gradient-to-r from-neon-500 to-green-600 text-black px-6 py-2 text-xl font-bold">
              Level 3 WARRIOR
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-black/50 backdrop-blur-lg border-4 border-yellow-400/30 morphing-blob">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-apple-ny text-2xl font-black text-yellow-400 text-glow">LEARNING PROGRESS</h3>
              <span className="text-white font-space text-lg">33% Complete</span>
            </div>
            <Progress value={33} className="h-4 bg-gray-800" />
            <div className="flex justify-between mt-4 text-sm text-white/80 font-space">
              <span>2 Quests Completed</span>
              <span>1 Active Quest</span>
              <span>3 Locked Quests</span>
            </div>
          </CardContent>
        </Card>

        {/* Quest Map */}
        <div className="relative">
          <Card className="min-h-[600px] bg-black/50 backdrop-blur-lg border-4 border-electric-400/30 morphing-blob">
            <CardContent className="p-8 relative">
              <h3 className="font-apple-ny text-3xl font-black text-electric-400 text-glow mb-8 text-center">
                YOUR LEARNING UNIVERSE
              </h3>
              
              {/* Quest Path SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Connect quest nodes with animated path */}
                {questNodes.slice(0, -1).map((node, index) => {
                  const nextNode = questNodes[index + 1];
                  return (
                    <line
                      key={`path-${node.id}`}
                      x1={`${node.position.x}%`}
                      y1={`${node.position.y}%`}
                      x2={`${nextNode.position.x}%`}
                      y2={`${nextNode.position.y}%`}
                      stroke="url(#pathGradient)"
                      strokeWidth="4"
                      strokeDasharray="10,5"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>

              {/* Quest Nodes */}
              {questNodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    zIndex: 10,
                  }}
                  onClick={() => setSelectedQuest(node)}
                >
                  <div
                    className={`w-20 h-20 rounded-full border-4 shadow-2xl transition-all duration-300 hover:scale-125 flex items-center justify-center ${getNodeColors(node.status)}`}
                  >
                    {getNodeIcon(node.status)}
                  </div>
                  
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-black/80 backdrop-blur px-3 py-1 rounded-lg border border-white/30">
                      <div className="text-white font-space font-bold text-sm">{node.title}</div>
                      <div className="text-yellow-400 text-xs">Level {node.level}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quest Details Panel */}
        {selectedQuest && (
          <Card className="mt-8 bg-black/50 backdrop-blur-lg border-4 border-hot-400/30 morphing-blob animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-apple-ny text-2xl font-black text-hot-400 text-glow">
                  {selectedQuest.title}
                </h3>
                <Badge className={`px-4 py-2 font-bold ${
                  selectedQuest.status === 'completed' ? 'bg-neon-500 text-black' :
                  selectedQuest.status === 'current' ? 'bg-yellow-500 text-black' :
                  'bg-gray-600 text-white'
                }`}>
                  {selectedQuest.status.toUpperCase()}
                </Badge>
              </div>
              
              <p className="text-white/90 font-space mb-6">{selectedQuest.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-yellow-400 font-space font-bold">
                    <Zap className="w-4 h-4 inline mr-1" />
                    {selectedQuest.points} XP
                  </span>
                  <span className="text-electric-400 font-space font-bold">
                    Level {selectedQuest.level}
                  </span>
                </div>
                
                {selectedQuest.status === 'current' && (
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8">
                    <Play className="w-4 h-4 mr-2" />
                    CONTINUE QUEST
                  </Button>
                )}
                
                {selectedQuest.status === 'completed' && (
                  <Button className="bg-gradient-to-r from-neon-500 to-green-600 hover:from-neon-600 hover:to-green-700 text-black font-bold px-8">
                    <Trophy className="w-4 h-4 mr-2" />
                    REVIEW
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

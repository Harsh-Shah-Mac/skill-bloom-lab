
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, CheckCircle, Lock, Play } from "lucide-react";

interface ProjectDashboardProps {
  onBack: () => void;
}

interface QuestNode {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  level: number;
  points: number;
}

export const ProjectDashboard = ({ onBack }: ProjectDashboardProps) => {
  const [selectedQuest, setSelectedQuest] = useState<QuestNode | null>(null);

  const questNodes: QuestNode[] = [
    {
      id: "1",
      title: "Foundation",
      description: "Master the fundamentals and build your foundation",
      status: 'completed',
      level: 1,
      points: 500,
    },
    {
      id: "2", 
      title: "Building Skills",
      description: "Develop intermediate understanding",
      status: 'completed',
      level: 2,
      points: 750,
    },
    {
      id: "3",
      title: "Practice Arena",
      description: "Apply your knowledge with real projects",
      status: 'current',
      level: 3,
      points: 1000,
    },
    {
      id: "4",
      title: "Advanced Topics",
      description: "Dive into complex concepts",
      status: 'locked',
      level: 4,
      points: 1500,
    },
    {
      id: "5",
      title: "Mastery",
      description: "Achieve expert-level understanding",
      status: 'locked',
      level: 5,
      points: 2000,
    },
  ];

  const getNodeIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'current':
        return <Play className="w-6 h-6 text-white" />;
      case 'locked':
        return <Lock className="w-6 h-6 text-gray-400" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getNodeColors = (status: string) => {
    switch (status) {
      case 'completed':
        return "bg-yellow-500 border-yellow-400";
      case 'current':
        return "bg-gray-800 border-gray-700 ring-4 ring-yellow-400";
      case 'locked':
        return "bg-gray-300 border-gray-200";
      default:
        return "bg-gray-500 border-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              onClick={onBack}
              className="bg-gray-800 hover:bg-gray-900 text-white mr-4 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <Star className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Learning Journey
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm font-bold rounded-full">
              2,750 XP
            </Badge>
            <Badge className="bg-gray-800 text-white px-4 py-2 text-sm font-bold rounded-full">
              Level 3
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Learning Progress</h3>
              <span className="text-gray-600 font-medium">40% Complete</span>
            </div>
            <Progress value={40} className="h-3 bg-gray-200" />
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>2 Completed</span>
              <span>1 In Progress</span>
              <span>2 Locked</span>
            </div>
          </CardContent>
        </Card>

        {/* Quest Path */}
        <Card className="mb-8 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Your Learning Path
            </h3>
            
            <div className="flex flex-col space-y-4">
              {questNodes.map((node, index) => (
                <div key={node.id} className="relative">
                  {/* Connection line */}
                  {index < questNodes.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-300"></div>
                  )}
                  
                  {/* Quest Node */}
                  <div
                    className="flex items-center p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedQuest(node)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mr-4 ${getNodeColors(node.status)}`}
                    >
                      {getNodeIcon(node.status)}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{node.title}</h4>
                      <p className="text-gray-600 text-sm">{node.description}</p>
                      <div className="flex items-center mt-2 gap-3">
                        <span className="text-yellow-600 font-semibold text-sm">
                          Level {node.level}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {node.points} XP
                        </span>
                      </div>
                    </div>
                    
                    <Badge className={`px-3 py-1 text-xs font-bold rounded-full ${
                      node.status === 'completed' ? 'bg-yellow-500 text-black' :
                      node.status === 'current' ? 'bg-gray-800 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {node.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quest Details */}
        {selectedQuest && (
          <Card className="bg-white border-2 border-yellow-400 rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedQuest.title}
                </h3>
                <Badge className={`px-4 py-2 font-bold rounded-full ${
                  selectedQuest.status === 'completed' ? 'bg-yellow-500 text-black' :
                  selectedQuest.status === 'current' ? 'bg-gray-800 text-white' :
                  'bg-gray-300 text-gray-600'
                }`}>
                  {selectedQuest.status.toUpperCase()}
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedQuest.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 font-semibold">
                    Level {selectedQuest.level}
                  </span>
                  <span className="text-gray-500">
                    {selectedQuest.points} XP
                  </span>
                </div>
                
                {selectedQuest.status === 'current' && (
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 rounded-xl">
                    Continue
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

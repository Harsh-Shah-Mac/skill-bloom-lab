
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, Target, Clock, BookOpen, Star, Zap, 
  PlayCircle, CheckCircle, Calendar, Users, 
  Bookmark, Share, Download, Settings
} from "lucide-react";

interface ProjectDashboardProps {
  onBack: () => void;
}

export const ProjectDashboard = ({ onBack }: ProjectDashboardProps) => {
  const [activeProject, setActiveProject] = useState("mobile-app");

  const projects = [
    {
      id: "mobile-app",
      title: "React Native Food App",
      description: "Build a full-stack food delivery mobile application",
      progress: 45,
      status: "In Progress",
      difficulty: "Intermediate",
      estimatedTime: "8 weeks",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      milestones: 8,
      completedMilestones: 3,
      nextDeadline: "Nov 15, 2024",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "web-portfolio",
      title: "Personal Portfolio Website",
      description: "Create a stunning portfolio with modern animations",
      progress: 80,
      status: "Almost Complete",
      difficulty: "Beginner",
      estimatedTime: "3 weeks",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      milestones: 5,
      completedMilestones: 4,
      nextDeadline: "Nov 8, 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Support Bot",
      description: "Develop an intelligent chatbot using OpenAI API",
      progress: 20,
      status: "Getting Started",
      difficulty: "Advanced",
      estimatedTime: "12 weeks",
      technologies: ["Python", "OpenAI API", "FastAPI", "PostgreSQL"],
      milestones: 10,
      completedMilestones: 2,
      nextDeadline: "Dec 1, 2024",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const achievements = [
    { id: 1, title: "First Steps", description: "Completed your first mini-project", icon: "🎯", unlocked: true },
    { id: 2, title: "Code Warrior", description: "Wrote 1000+ lines of code", icon: "⚔️", unlocked: true },
    { id: 3, title: "Problem Solver", description: "Solved 10 coding challenges", icon: "🧩", unlocked: true },
    { id: 4, title: "Speed Demon", description: "Completed a project ahead of schedule", icon: "⚡", unlocked: false },
    { id: 5, title: "Team Player", description: "Collaborated on a group project", icon: "👥", unlocked: false },
    { id: 6, title: "Master Builder", description: "Completed 5 full projects", icon: "🏗️", unlocked: false }
  ];

  const weeklyStats = [
    { day: "Mon", hours: 2.5, completed: 3 },
    { day: "Tue", hours: 1.5, completed: 2 },
    { day: "Wed", hours: 3.0, completed: 4 },
    { day: "Thu", hours: 2.0, completed: 3 },
    { day: "Fri", hours: 4.0, completed: 6 },
    { day: "Sat", hours: 3.5, completed: 5 },
    { day: "Sun", hours: 2.5, completed: 3 }
  ];

  const currentProject = projects.find(p => p.id === activeProject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="text-white hover:bg-white/10"
          >
            ← Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-white">Project Dashboard</h1>
          <div className="flex gap-2">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-black/20 backdrop-blur-lg border border-white/20 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">
              📊 Overview
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-white/20 text-white">
              🚀 Projects
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-white/20 text-white">
              🏆 Achievements
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white/20 text-white">
              📈 Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-2 border-purple-400/30">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">7</div>
                  <div className="text-white/80 font-semibold">Achievements Unlocked</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border-2 border-blue-400/30">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">3</div>
                  <div className="text-white/80 font-semibold">Active Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border-2 border-green-400/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">42h</div>
                  <div className="text-white/80 font-semibold">This Month</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg border-2 border-orange-400/30">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">85%</div>
                  <div className="text-white/80 font-semibold">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Current Project Spotlight */}
            {currentProject && (
              <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border-2 border-indigo-400/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-white">
                      🎯 Current Focus: {currentProject.title}
                    </CardTitle>
                    <Badge className={`bg-gradient-to-r ${currentProject.color} text-white px-4 py-2 font-bold`}>
                      {currentProject.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/90 text-lg">{currentProject.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-white/80 text-sm mb-2">Overall Progress</div>
                      <Progress value={currentProject.progress} className="h-3 mb-2" />
                      <div className="text-white font-bold">{currentProject.progress}% Complete</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm mb-2">Milestones</div>
                      <div className="text-2xl font-bold text-white">
                        {currentProject.completedMilestones}/{currentProject.milestones}
                      </div>
                      <div className="text-green-400 text-sm">Completed</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm mb-2">Next Deadline</div>
                      <div className="text-xl font-bold text-white">{currentProject.nextDeadline}</div>
                      <div className="text-orange-400 text-sm">5 days remaining</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-white/10 text-white border border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Calendar className="w-4 h-4 mr-2" />
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className={`bg-gradient-to-r ${project.color}/20 backdrop-blur-lg border-2 ${
                    project.id === activeProject ? 'border-white/50' : 'border-white/20'
                  } cursor-pointer hover:border-white/40 transition-all duration-300 hover:scale-105`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/80">{project.description}</p>
                      </div>
                      <Badge className={`bg-gradient-to-r ${project.color} text-white font-bold`}>
                        {project.difficulty}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-white/80 text-sm mb-2">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-white font-bold">{project.estimatedTime}</div>
                          <div className="text-white/60 text-xs">Est. Time</div>
                        </div>
                        <div>
                          <div className="text-white font-bold">{project.completedMilestones}/{project.milestones}</div>
                          <div className="text-white/60 text-xs">Milestones</div>
                        </div>
                        <div>
                          <div className="text-white font-bold">{project.technologies.length}</div>
                          <div className="text-white/60 text-xs">Technologies</div>
                        </div>
                        <div>
                          <div className="text-white font-bold">{project.nextDeadline}</div>
                          <div className="text-white/60 text-xs">Next Deadline</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} className="bg-white/10 text-white text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge className="bg-white/10 text-white text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-600">
                            <BookOpen className="w-4 h-4" />
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-600">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/50' 
                      : 'bg-white/5 border-white/10'
                  } backdrop-blur-lg border-2 transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`text-6xl mb-4 ${achievement.unlocked ? 'grayscale-0' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      achievement.unlocked ? 'text-yellow-400' : 'text-white/50'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${
                      achievement.unlocked ? 'text-white/90' : 'text-white/40'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && (
                      <Badge className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Unlocked!
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Weekly Activity Chart */}
            <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border-2 border-indigo-400/30">
              <CardHeader>
                <CardTitle className="text-white">📊 Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-4">
                  {weeklyStats.map((day) => (
                    <div key={day.day} className="text-center">
                      <div className="text-white/60 text-xs mb-2">{day.day}</div>
                      <div 
                        className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg mx-auto mb-2"
                        style={{ 
                          width: '20px', 
                          height: `${(day.hours / 4) * 60}px`,
                          minHeight: '10px'
                        }}
                      ></div>
                      <div className="text-white text-xs font-bold">{day.hours}h</div>
                      <div className="text-green-400 text-xs">{day.completed} tasks</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg border-2 border-orange-400/30">
                <CardContent className="p-6 text-center">
                  <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <div className="text-4xl font-black text-white mb-2">🔥 12</div>
                  <div className="text-white/80 font-semibold">Day Learning Streak</div>
                  <div className="text-orange-400 text-sm mt-2">Keep it up! 🚀</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border-2 border-green-400/30">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <div className="text-4xl font-black text-white mb-2">156</div>
                  <div className="text-white/80 font-semibold">Total Learning Hours</div>
                  <div className="text-green-400 text-sm mt-2">Amazing progress! 💪</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

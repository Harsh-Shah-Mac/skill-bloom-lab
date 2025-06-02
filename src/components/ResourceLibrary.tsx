
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, BookOpen, PlayCircle, FileText, Code, 
  Star, Clock, Users, Bookmark, Download, 
  Filter, Sparkles, Trophy, Target
} from "lucide-react";

interface ResourceLibraryProps {
  onBack: () => void;
}

export const ResourceLibrary = ({ onBack }: ResourceLibraryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚', color: 'from-purple-500 to-pink-500' },
    { id: 'tutorials', name: 'Video Tutorials', icon: '🎥', color: 'from-red-500 to-orange-500' },
    { id: 'articles', name: 'Articles & Guides', icon: '📝', color: 'from-blue-500 to-cyan-500' },
    { id: 'documentation', name: 'Documentation', icon: '📖', color: 'from-green-500 to-emerald-500' },
    { id: 'exercises', name: 'Practice Exercises', icon: '🏋️', color: 'from-yellow-500 to-orange-500' },
    { id: 'projects', name: 'Sample Projects', icon: '🚀', color: 'from-indigo-500 to-purple-500' }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete React Native Masterclass",
      description: "Learn React Native from scratch with hands-on projects and real-world examples.",
      type: "tutorial",
      category: "tutorials",
      duration: "12 hours",
      difficulty: "Intermediate",
      rating: 4.9,
      provider: "CodeAcademy Pro",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      isBookmarked: true,
      isPremium: true,
      thumbnail: "🎬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Node.js API Development Guide",
      description: "Build scalable REST APIs with Node.js, Express, and MongoDB.",
      type: "article",
      category: "articles",
      duration: "45 min read",
      difficulty: "Advanced",
      rating: 4.7,
      provider: "DevTo Community",
      technologies: ["Node.js", "Express", "MongoDB", "API"],
      isBookmarked: false,
      isPremium: false,
      thumbnail: "📝",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Firebase Authentication Setup",
      description: "Complete documentation for implementing Firebase Auth in your mobile app.",
      type: "documentation",
      category: "documentation",
      duration: "30 min read",
      difficulty: "Beginner",
      rating: 4.8,
      provider: "Firebase Docs",
      technologies: ["Firebase", "Authentication", "Security"],
      isBookmarked: true,
      isPremium: false,
      thumbnail: "🔥",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "JavaScript Coding Challenges",
      description: "50+ practice problems to master JavaScript fundamentals and algorithms.",
      type: "exercise",
      category: "exercises",
      duration: "8 hours",
      difficulty: "Mixed",
      rating: 4.6,
      provider: "CodeWars",
      technologies: ["JavaScript", "Algorithms", "Problem Solving"],
      isBookmarked: false,
      isPremium: false,
      thumbnail: "🧩",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Full-Stack E-commerce Project",
      description: "Complete source code and tutorial for building a modern e-commerce platform.",
      type: "project",
      category: "projects",
      duration: "20 hours",
      difficulty: "Advanced",
      rating: 4.9,
      provider: "GitHub",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      isBookmarked: true,
      isPremium: true,
      thumbnail: "🛒",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "CSS Grid and Flexbox Mastery",
      description: "Interactive guide to modern CSS layout techniques with live examples.",
      type: "tutorial",
      category: "tutorials",
      duration: "6 hours",
      difficulty: "Intermediate",
      rating: 4.8,
      provider: "CSS-Tricks",
      technologies: ["CSS", "HTML", "Layout", "Responsive Design"],
      isBookmarked: false,
      isPremium: false,
      thumbnail: "🎨",
      color: "from-pink-500 to-red-500"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const learningPaths = [
    {
      id: 1,
      title: "Mobile App Development Path",
      description: "Complete roadmap from beginner to expert mobile developer",
      progress: 65,
      totalResources: 24,
      completedResources: 16,
      estimatedTime: "12 weeks",
      difficulty: "Progressive",
      color: "from-blue-500 to-cyan-500",
      icon: "📱"
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Master frontend and backend web development",
      progress: 40,
      totalResources: 32,
      completedResources: 13,
      estimatedTime: "16 weeks",
      difficulty: "Progressive",
      color: "from-purple-500 to-pink-500",
      icon: "🌐"
    },
    {
      id: 3,
      title: "Data Science & ML Path",
      description: "Learn data science and machine learning from scratch",
      progress: 20,
      totalResources: 28,
      completedResources: 6,
      estimatedTime: "20 weeks",
      difficulty: "Progressive",
      color: "from-green-500 to-emerald-500",
      icon: "🤖"
    }
  ];

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
          <h1 className="text-3xl font-bold text-white">Resource Library</h1>
          <div className="flex gap-2">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmarks
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for tutorials, articles, technologies..."
              className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg rounded-2xl backdrop-blur-lg"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="resources" className="space-y-6">
          <TabsList className="bg-black/20 backdrop-blur-lg border border-white/20 p-1">
            <TabsTrigger value="resources" className="data-[state=active]:bg-white/20 text-white">
              📚 Resources
            </TabsTrigger>
            <TabsTrigger value="paths" className="data-[state=active]:bg-white/20 text-white">
              🛤️ Learning Paths
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="data-[state=active]:bg-white/20 text-white">
              ⭐ My Bookmarks
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-white/20 text-white">
              📈 Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } rounded-full px-6 py-2 transition-all duration-300 hover:scale-105`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card 
                  key={resource.id}
                  className={`bg-gradient-to-r ${resource.color}/20 backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer group`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="text-4xl mb-2">{resource.thumbnail}</div>
                      <div className="flex gap-1">
                        {resource.isPremium && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            PRO
                          </Badge>
                        )}
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className={`p-1 ${resource.isBookmarked ? 'text-yellow-400' : 'text-white/60'} hover:text-yellow-400`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80 text-sm leading-relaxed">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-white/70">
                          <Clock className="w-4 h-4" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4" />
                          {resource.rating}
                        </div>
                      </div>
                      <Badge className={`${
                        resource.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        resource.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        resource.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {resource.difficulty}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {resource.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="bg-white/10 text-white text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {resource.technologies.length > 3 && (
                        <Badge className="bg-white/10 text-white text-xs">
                          +{resource.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="text-xs text-white/60">
                      by {resource.provider}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                        {resource.type === 'tutorial' && <PlayCircle className="w-4 h-4 mr-2" />}
                        {resource.type === 'article' && <FileText className="w-4 h-4 mr-2" />}
                        {resource.type === 'documentation' && <BookOpen className="w-4 h-4 mr-2" />}
                        {resource.type === 'exercise' && <Target className="w-4 h-4 mr-2" />}
                        {resource.type === 'project' && <Code className="w-4 h-4 mr-2" />}
                        Start Learning
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paths" className="space-y-6">
            <div className="grid gap-6">
              {learningPaths.map((path) => (
                <Card 
                  key={path.id}
                  className={`bg-gradient-to-r ${path.color}/20 backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{path.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
                            <p className="text-white/80">{path.description}</p>
                          </div>
                          <Badge className={`bg-gradient-to-r ${path.color} text-white font-bold`}>
                            {path.difficulty}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{path.progress}%</div>
                            <div className="text-white/60 text-sm">Progress</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{path.completedResources}/{path.totalResources}</div>
                            <div className="text-white/60 text-sm">Resources</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{path.estimatedTime}</div>
                            <div className="text-white/60 text-sm">Est. Time</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">
                              {Math.floor((path.completedResources / path.totalResources) * 100)}%
                            </div>
                            <div className="text-white/60 text-sm">Complete</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-white/80 text-sm">
                            <span>Path Progress</span>
                            <span>{path.progress}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full bg-gradient-to-r ${path.color} transition-all duration-500`}
                              style={{ width: `${path.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Continue Path
                          </Button>
                          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Resources
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookmarks" className="space-y-6">
            <div className="text-center py-12">
              <Bookmark className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Your Bookmarked Resources</h3>
              <p className="text-white/80 mb-6">Quick access to your saved learning materials</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(r => r.isBookmarked).map((resource) => (
                  <Card 
                    key={resource.id}
                    className={`bg-gradient-to-r ${resource.color}/20 backdrop-blur-lg border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 cursor-pointer`}
                  >
                    <CardContent className="p-4">
                      <div className="text-3xl mb-3">{resource.thumbnail}</div>
                      <h4 className="text-white font-bold mb-2">{resource.title}</h4>
                      <p className="text-white/70 text-sm mb-3">{resource.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Bookmarked
                        </Badge>
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600">
                          Open
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-2 border-purple-400/30">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">47</div>
                  <div className="text-white/80 font-semibold">Resources Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border-2 border-blue-400/30">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">23</div>
                  <div className="text-white/80 font-semibold">Hours This Month</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg border-2 border-green-400/30">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-black text-white mb-2">89%</div>
                  <div className="text-white/80 font-semibold">Completion Rate</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

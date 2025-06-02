
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, BookOpen, Video, FileText, ExternalLink, Star, Zap } from "lucide-react";

interface ResourceLibraryProps {
  onBack: () => void;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'course' | 'tool';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  tags: string[];
  url: string;
}

export const ResourceLibrary = ({ onBack }: ResourceLibraryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const resources: Resource[] = [
    {
      id: "1",
      title: "Ultimate React Mastery Course",
      description: "Comprehensive guide to mastering React from basics to advanced patterns",
      type: 'course',
      difficulty: 'intermediate',
      rating: 4.9,
      tags: ['React', 'JavaScript', 'Frontend'],
      url: "#"
    },
    {
      id: "2",
      title: "AI-Powered Learning Strategies",
      description: "Revolutionary techniques for accelerated learning using AI",
      type: 'article',
      difficulty: 'beginner',
      rating: 4.7,
      tags: ['AI', 'Learning', 'Productivity'],
      url: "#"
    },
    {
      id: "3",
      title: "Advanced TypeScript Patterns",
      description: "Deep dive into complex TypeScript patterns and best practices",
      type: 'video',
      difficulty: 'advanced',
      rating: 4.8,
      tags: ['TypeScript', 'Advanced', 'Patterns'],
      url: "#"
    },
    {
      id: "4",
      title: "Notion Power User Toolkit",
      description: "Transform your productivity with advanced Notion techniques",
      type: 'tool',
      difficulty: 'intermediate',
      rating: 4.6,
      tags: ['Productivity', 'Tools', 'Organization'],
      url: "#"
    },
  ];

  const categories = [
    { id: 'all', name: 'ALL RESOURCES', icon: <Zap className="w-4 h-4" /> },
    { id: 'article', name: 'ARTICLES', icon: <FileText className="w-4 h-4" /> },
    { id: 'video', name: 'VIDEOS', icon: <Video className="w-4 h-4" /> },
    { id: 'course', name: 'COURSES', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tool', name: 'TOOLS', icon: <Star className="w-4 h-4" /> },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'course': return <BookOpen className="w-5 h-5" />;
      case 'tool': return <Star className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-neon-500 text-black';
      case 'intermediate': return 'bg-yellow-500 text-black';
      case 'advanced': return 'bg-hot-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 morphing-blob animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-500/20 to-green-500/20 morphing-blob animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={onBack}
            className="bg-gradient-to-r from-electric-500 to-purple-600 hover:from-electric-600 hover:to-purple-700 text-white mr-4"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <BookOpen className="w-8 h-8 text-yellow-400 mr-3 animate-wiggle" />
          <h1 className="font-apple-ny text-4xl font-black text-white text-glow">
            RESOURCE LIBRARY
          </h1>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-black/50 backdrop-blur-lg border-4 border-yellow-400/30 morphing-blob">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for resources, topics, or skills..."
                  className="pl-12 bg-gray-800/50 border-2 border-yellow-400/50 text-white placeholder:text-gray-400 font-space text-lg"
                />
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`font-bold ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card 
              key={resource.id}
              className="bg-black/50 backdrop-blur-lg border-4 border-electric-400/30 hover:border-electric-400/60 transition-all duration-300 hover:scale-105 group cursor-pointer morphing-blob animate-float"
              style={{ animationDelay: `${parseInt(resource.id) * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-electric-400">
                    {getTypeIcon(resource.type)}
                    <span className="ml-2 text-sm font-space font-bold uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-space font-bold">{resource.rating}</span>
                  </div>
                </div>
                <CardTitle className="font-apple-ny text-xl font-black text-white text-glow group-hover:text-yellow-400 transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-white/90 font-space mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`font-bold ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty.toUpperCase()}
                  </Badge>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-neon-500 to-green-600 hover:from-neon-600 hover:to-green-700 text-black font-bold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    VIEW
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      className="bg-purple-600/50 text-white text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <Card className="bg-black/50 backdrop-blur-lg border-4 border-gray-500/30 morphing-blob">
            <CardContent className="p-12 text-center">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="font-apple-ny text-2xl font-black text-white mb-2">
                NO RESOURCES FOUND
              </h3>
              <p className="text-gray-400 font-space">
                Try adjusting your search terms or explore different categories
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};


import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, Brain, User, Sparkles, Target, Clock, BookOpen } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'question' | 'analysis' | 'suggestion';
}

interface ChatInterfaceProps {
  onBack: () => void;
}

export const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Welcome to LearnQuest! 🚀 I'm your AI learning companion. Let's turn your project idea into an epic learning adventure! What's your project idea or what would you like to learn?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'question'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(10);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatSteps = [
    { id: 1, title: "Project Idea", icon: "💡", color: "from-yellow-400 to-orange-500" },
    { id: 2, title: "Skill Assessment", icon: "📊", color: "from-blue-400 to-cyan-500" },
    { id: 3, title: "Tech Preferences", icon: "⚡", color: "from-purple-400 to-pink-500" },
    { id: 4, title: "Timeline & Resources", icon: "⏰", color: "from-green-400 to-emerald-500" },
    { id: 5, title: "Learning Path", icon: "🎯", color: "from-red-400 to-pink-500" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let aiResponse = '';
      let nextStep = currentStep;
      let newProgress = progress;

      if (currentStep === 1) {
        aiResponse = `Awesome! "${userMessage}" sounds like a fantastic project! 🎉 Now let me understand your current skill level. On a scale of 1-10, how would you rate your experience with the technologies you think you'll need for this project?`;
        nextStep = 2;
        newProgress = 30;
      } else if (currentStep === 2) {
        aiResponse = `Great! Based on your skill level, I can tailor the perfect learning path. What technologies or tools are you most excited to use? (e.g., React, Python, Node.js, etc.) Don't worry if you're not sure - I can suggest some! ⚡`;
        nextStep = 3;
        newProgress = 50;
      } else if (currentStep === 3) {
        aiResponse = `Perfect choice! Now let's talk timeline and resources. How much time can you dedicate to this project per week? And do you prefer video tutorials, written guides, or hands-on coding exercises? 📚`;
        nextStep = 4;
        newProgress = 70;
      } else if (currentStep === 4) {
        aiResponse = `Amazing! I'm now creating your personalized learning path with progressive mini-projects, curated resources, and achievement milestones. This is going to be epic! 🚀✨`;
        nextStep = 5;
        newProgress = 100;
      } else {
        aiResponse = `Your learning quest is ready! I've created a step-by-step adventure that will take you from your current level to project mastery. Ready to see your personalized learning path? 🎯`;
      }

      const newMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        type: currentStep === 5 ? 'analysis' : 'question'
      };

      setMessages(prev => [...prev, newMessage]);
      setCurrentStep(nextStep);
      setProgress(newProgress);
      setIsTyping(false);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-white mb-2">AI Learning Assistant</h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              {chatSteps.map((step) => (
                <div
                  key={step.id}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step.id === currentStep 
                      ? `bg-gradient-to-r ${step.color} text-white animate-pulse shadow-lg`
                      : step.id < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-white/20 text-white/60'
                  }`}
                >
                  {step.id < currentStep ? '✓' : step.icon}
                </div>
              ))}
            </div>
            <Progress value={progress} className="w-64 mx-auto h-2" />
            <p className="text-white/80 text-sm mt-1">{progress}% Complete</p>
          </div>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="container mx-auto h-[calc(100vh-200px)] flex flex-col p-4">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600'
                }`}
              >
                {message.sender === 'user' ? (
                  <User className="w-6 h-6 text-white" />
                ) : (
                  <Brain className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Message */}
              <Card
                className={`max-w-lg ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/30'
                    : 'bg-gradient-to-r from-purple-500/20 to-pink-600/20 border-purple-400/30'
                } backdrop-blur-lg border-2 animate-fade-in`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-white">
                      {message.sender === 'user' ? 'You' : 'AI Assistant'}
                    </span>
                    {message.type && (
                      <Badge className={`text-xs ${
                        message.type === 'question' ? 'bg-yellow-500/20 text-yellow-300' :
                        message.type === 'analysis' ? 'bg-green-500/20 text-green-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {message.type === 'question' ? '❓ Question' :
                         message.type === 'analysis' ? '🔍 Analysis' : '💡 Suggestion'}
                      </Badge>
                    )}
                  </div>
                  <p className="text-white/90 leading-relaxed">{message.content}</p>
                  <div className="text-xs text-white/50 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <Card className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 border-purple-400/30 backdrop-blur-lg border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                    <span className="text-white/90">AI is thinking...</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-3 rounded-xl"
                disabled={isTyping}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {currentStep === 1 && (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I want to build a mobile app")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  📱 Mobile App
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I want to create a website")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  🌐 Website
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I want to learn machine learning")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  🤖 Machine Learning
                </Button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I'm a beginner (1-3)")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  🌱 Beginner
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I'm intermediate (4-6)")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  📈 Intermediate
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputValue("I'm advanced (7-10)")}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  🚀 Advanced
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

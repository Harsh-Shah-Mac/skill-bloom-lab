
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send, Sparkles, Brain, Zap } from "lucide-react";

interface ChatInterfaceProps {
  onBack: () => void;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 🚀 I'm your AI learning companion. What wild idea do you want to turn into an epic learning adventure today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's an amazing idea! 🎯 Let me create a personalized learning path for you. I'll break this down into bite-sized quests and find the most insane resources to help you master this!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 morphing-blob animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-500/20 to-green-500/20 morphing-blob animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={onBack}
            className="bg-gradient-to-r from-electric-500 to-purple-600 hover:from-electric-600 hover:to-purple-700 text-white mr-4"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h1 className="font-apple-ny text-4xl font-black text-white text-glow">
              AI LEARNING COMPANION
            </h1>
            <Sparkles className="w-6 h-6 text-neon-400 ml-3 animate-wiggle" />
          </div>
        </div>

        {/* Chat Area */}
        <Card className="flex-1 bg-black/50 backdrop-blur-lg border-4 border-yellow-400/30 morphing-blob">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-apple-ny text-2xl text-glow">
              CHAT WITH YOUR AI GENIUS
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full flex flex-col">
            <ScrollArea className="flex-1 mb-4 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-6 py-4 rounded-3xl font-space ${
                        message.isUser
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold"
                          : "bg-gradient-to-r from-electric-600/80 to-purple-600/80 text-white border-2 border-electric-400/50"
                      } animate-scale-in`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="flex gap-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Tell me what you want to learn... 🚀"
                className="flex-1 bg-gray-800/50 border-2 border-yellow-400/50 text-white placeholder:text-gray-400 font-space text-lg"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8"
              >
                <Send className="w-5 h-5" />
                <Zap className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

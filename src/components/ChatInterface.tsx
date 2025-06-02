
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send, Bot, User } from "lucide-react";

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
      text: "Hi there! I'm your AI learning companion. What would you like to learn today?",
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
        text: "That's a great topic! Let me create a personalized learning path for you. I'll break this down into manageable steps and find the best resources to help you succeed.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8 h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            onClick={onBack}
            className="bg-gray-800 hover:bg-gray-900 text-white mr-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              AI Learning Companion
            </h1>
          </div>
        </div>

        {/* Chat Area */}
        <Card className="flex-1 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
          <CardContent className="h-full flex flex-col p-6">
            <ScrollArea className="flex-1 mb-6 pr-4">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className="flex items-start max-w-xs lg:max-w-md">
                      {!message.isUser && (
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <Bot className="w-4 h-4 text-black" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.isUser
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.isUser && (
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="flex gap-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="What would you like to learn?"
                className="flex-1 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-xl text-base focus:border-yellow-400"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

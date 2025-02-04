"use client";

import { useState } from "react";
import { Bell, Send, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  role: "user" | "model";
  content: string;
  timestamp: string;
}

export default function TestModelPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");

    // Simulate model response
    setTimeout(() => {
      const modelResponse: Message = {
        role: "model",
        content: "Of course! Could you let me know your location so I can suggest some options?",
        timestamp: new Date().toLocaleTimeString([], { 
          hour: "2-digit", 
          minute: "2-digit" 
        }),
      };
      setMessages((prev) => [...prev, modelResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-[2000px] mx-auto px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Test Your Model</h1>
          <p className="text-sm text-gray-500 mt-1">
            Validate your fine-tuned model by running test cases or uploading your own dataset.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[2000px] mx-auto px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Project Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Project 1</h2>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Pencil className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              + Upload a Test Dataset
            </Button>
          </div>

          {/* Chat Area */}
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "model" && (
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/model-avatar.png" />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">Model</span>
                          <span className="text-xs text-gray-400">
                            {message.timestamp}
                          </span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 text-sm">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  )}
                  {message.role === "user" && (
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-400">
                            {message.timestamp}
                          </span>
                          <span className="text-sm font-medium">You</span>
                        </div>
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm">
                          {message.content}
                        </div>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 border-t bg-white"
            >
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Send a message"
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
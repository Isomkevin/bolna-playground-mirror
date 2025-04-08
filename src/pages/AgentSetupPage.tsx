
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  Copy, Upload, Plus, Download, ExternalLink, Phone, Link, Users, HelpCircle 
} from 'lucide-react';

const AgentSetupPage = () => {
  const [agent, setAgent] = useState({
    name: 'My New Agent',
    language: 'English',
    voice: 'Wendy',
    welcomeMessage: 'Hello from Bolna',
    prompt: 'You are a helpful agent. You will help the customer with their queries and doubts. You will never speak more than 2 sentences. Keep your responses concise'
  });

  return (
    <DashboardLayout title="Agent setup">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-bolna-border rounded-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-bolna-border">
              <h3 className="font-semibold">Your Agents</h3>
            </div>
            <div className="p-4 bg-white border-b border-bolna-border flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium">New Agent</p>
                <span className="text-xs text-gray-500">draft</span>
              </div>
            </div>
            <div className="p-4 flex justify-between">
              <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2">
                <Plus className="h-3 w-3" />
                Add Agent
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="h-3 w-3" />
                Import
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="border border-bolna-border rounded-lg mb-6">
            <div className="flex items-center justify-between p-4 border-b border-bolna-border">
              <h3 className="text-xl font-bold">{agent.name}</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Link className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4 pb-2 flex flex-wrap items-center gap-x-12 gap-y-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">$0.06/min</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Transcriber</span>
                  <div className="flex items-center">
                    <div className="h-2 w-10 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-1">0.005</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">LLM</span>
                  <div className="flex items-center">
                    <div className="h-2 w-10 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-1">0.003</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Voice</span>
                  <div className="flex items-center">
                    <div className="h-2 w-10 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-1">0.01</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Platform</span>
                  <div className="flex items-center">
                    <div className="h-2 w-10 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 ml-1">0.02</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto flex flex-col gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Assign inbound agent
                </Button>
                <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Get call from agent
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Buy phone numbers
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="agent" className="px-4 pb-4">
              <TabsList className="w-full justify-start border-b border-bolna-border rounded-none h-auto py-0">
                <TabsTrigger value="agent" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Agent
                </TabsTrigger>
                <TabsTrigger value="llm" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  LLM
                </TabsTrigger>
                <TabsTrigger value="transcriber" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Transcriber
                </TabsTrigger>
                <TabsTrigger value="voice" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Voice
                </TabsTrigger>
                <TabsTrigger value="call" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Call
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Tools
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:border-b-2 data-[state=active]:border-bolna-blue data-[state=active]:text-bolna-blue rounded-none py-2">
                  Analytics
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="agent" className="pt-4">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Agent Welcome Message</h4>
                    <Input 
                      value={agent.welcomeMessage}
                      onChange={(e) => setAgent({...agent, welcomeMessage: e.target.value})}
                    />
                    <p className="text-xs text-gray-500">This will be the initial message from the agent. You can use variables here using {'{variable_name}'}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium">Agent Prompt</h4>
                      <Button variant="link" className="text-bolna-blue flex items-center gap-1 p-0 h-auto">
                        Help me build my agent
                        <HelpCircle className="h-3 w-3" />
                      </Button>
                    </div>
                    <Textarea 
                      value={agent.prompt}
                      onChange={(e) => setAgent({...agent, prompt: e.target.value})}
                      className="min-h-[150px]"
                    />
                    <p className="text-xs text-gray-500">You can define variables in the prompt using {'{variable_name}'}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="flex justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Select value={agent.language} onValueChange={(val) => setAgent({...agent, language: val})}>
                    <SelectTrigger className="w-32 border-bolna-border">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-1">
                  <Select value={agent.voice} onValueChange={(val) => setAgent({...agent, voice: val})}>
                    <SelectTrigger className="w-32 border-bolna-border">
                      <SelectValue placeholder="Wendy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wendy">Wendy</SelectItem>
                      <SelectItem value="John">John</SelectItem>
                      <SelectItem value="Sarah">Sarah</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="text-sm">Use chat to test agent & prompts</Button>
                <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white text-sm">Test your prompt via chat</Button>
              </div>
              
              <div>
                <p className="text-sm mb-2">Have a web call with your agent to test & experience it (Beta)</p>
                <Button variant="outline" className="w-full justify-center text-sm bg-blue-50 border-blue-100 text-bolna-blue">
                  Start web call
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                See all call logs
              </Button>
              <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white">
                Create Agent
              </Button>
              <Button variant="ghost" size="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentSetupPage;

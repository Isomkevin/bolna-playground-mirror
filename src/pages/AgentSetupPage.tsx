
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toast } from '@/hooks/use-toast';
import { 
  Copy, Upload, Plus, Download, ExternalLink, Phone, Link as LinkIcon, 
  Users, HelpCircle, FileText, Bot, Mic, Headphones, Settings, 
  ArrowRight, Play, PauseCircle, ChevronDown, BarChart, Search,
  MessageSquare, Trash, Bell, AlertTriangle
} from 'lucide-react';

const AgentSetupPage = () => {
  const [agent, setAgent] = useState({
    name: 'My New Agent',
    language: 'English',
    voice: 'Wendy',
    welcomeMessage: 'Hello from AfriCopilot AI',
    prompt: 'You are a helpful agent. You will help the customer with their queries and doubts. You will never speak more than 2 sentences. Keep your responses concise',
    llmModel: 'gpt-4o mini',
    llmProvider: 'OpenAI',
    tokens: 150,
    temperature: 0.2,
    bufferSize: 150,
    responseRate: 'Normal',
    checkUserOnline: true,
    onlineMessage: 'Hey, are you still there',
    invokeAfterSeconds: 10,
    telephonyProvider: 'Twilio',
    voicemailDetection: false,
    hangupOnSilence: true,
    silenceSeconds: 10,
    hangupWithPrompt: false,
    hangupMessage: 'Call will now disconnect',
    callTimeLimit: 300,
    summarizationEnabled: false,
    extractionEnabled: false,
    webhookEnabled: false,
    webhookUrl: ''
  });

  // Added form state to manage more complex form validation
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle saving agent
  const onSaveAgent = (data) => {
    toast({
      title: "Agent saved successfully",
      description: "Your agent has been saved and is ready to use.",
    });
    console.log("Agent data saved:", data);
  };

  // Function to handle testing the agent
  const handleTestAgent = () => {
    toast({
      title: "Testing agent",
      description: "Initiating a test call with your agent.",
    });
  };

  return (
    <DashboardLayout title="Agent setup">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-africopilot-border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="p-4 bg-white border-b border-africopilot-border">
              <h3 className="font-semibold">Your Agents</h3>
            </div>
            <div className="p-4 bg-white border-b border-africopilot-border flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium">New Agent</p>
                <span className="text-xs text-gray-500">draft</span>
              </div>
            </div>
            <div className="p-4 flex justify-between">
              <Button className="bg-africopilot-blue hover:bg-africopilot-blue/90 text-white flex items-center gap-2">
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
          <div className="border border-africopilot-border rounded-lg mb-6 bg-white shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-africopilot-border">
              <h3 className="text-xl font-bold">{agent.name}</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" title="Copy agent">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" title="Share agent">
                  <LinkIcon className="h-4 w-4" />
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
                <Button className="bg-africopilot-blue hover:bg-africopilot-blue/90 text-white flex items-center gap-2">
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
              <TabsList className="w-full justify-start border-b border-africopilot-border rounded-none h-auto py-0 bg-transparent">
                <TabsTrigger value="agent" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Bot className="h-4 w-4" /> Agent
                </TabsTrigger>
                <TabsTrigger value="llm" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Settings className="h-4 w-4" /> LLM
                </TabsTrigger>
                <TabsTrigger value="transcriber" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Mic className="h-4 w-4" /> Transcriber
                </TabsTrigger>
                <TabsTrigger value="voice" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Headphones className="h-4 w-4" /> Voice
                </TabsTrigger>
                <TabsTrigger value="call" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Tools
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:border-b-2 data-[state=active]:border-africopilot-blue data-[state=active]:text-africopilot-blue rounded-none py-2 flex items-center gap-2">
                  <BarChart className="h-4 w-4" /> Analytics
                </TabsTrigger>
              </TabsList>
              
              {/* Agent Tab Content */}
              <TabsContent value="agent" className="pt-4">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Agent Name</h4>
                    <Input 
                      value={agent.name}
                      onChange={(e) => setAgent({...agent, name: e.target.value})}
                      className="border-africopilot-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Agent Welcome Message</h4>
                    <Input 
                      value={agent.welcomeMessage}
                      onChange={(e) => setAgent({...agent, welcomeMessage: e.target.value})}
                      className="border-africopilot-border"
                    />
                    <p className="text-xs text-gray-500">This will be the initial message from the agent. You can use variables here using {'{variable_name}'}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium">Agent Prompt</h4>
                      <Button variant="link" className="text-africopilot-blue flex items-center gap-1 p-0 h-auto">
                        Help me build my agent
                        <HelpCircle className="h-3 w-3" />
                      </Button>
                    </div>
                    <Textarea 
                      value={agent.prompt}
                      onChange={(e) => setAgent({...agent, prompt: e.target.value})}
                      className="min-h-[150px] border-africopilot-border"
                    />
                    <p className="text-xs text-gray-500">You can define variables in the prompt using {'{variable_name}'}</p>
                  </div>
                </div>
              </TabsContent>

              {/* LLM Tab Content */}
              <TabsContent value="llm" className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-4">Choose LLM model</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Select value={agent.llmProvider} onValueChange={(val) => setAgent({...agent, llmProvider: val})}>
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select LLM provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="OpenAI">OpenAI</SelectItem>
                            <SelectItem value="Anthropic">Anthropic</SelectItem>
                            <SelectItem value="Google">Google</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Select value={agent.llmModel} onValueChange={(val) => setAgent({...agent, llmModel: val})}>
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select LLM model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gpt-4o mini">gpt-4o mini</SelectItem>
                            <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                            <SelectItem value="gpt-4-turbo">gpt-4-turbo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-base font-medium">Tokens generated on each LLM output</h4>
                        <span>{agent.tokens}</span>
                      </div>
                      <Slider 
                        value={[agent.tokens]} 
                        min={50} 
                        max={300} 
                        step={10}
                        onValueChange={(val) => setAgent({...agent, tokens: val[0]})}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">Increasing tokens enables longer responses to be queued for speech generation but increases latency</p>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-base font-medium">Temperature</h4>
                        <span>{agent.temperature}</span>
                      </div>
                      <Slider 
                        value={[agent.temperature * 10]} 
                        min={0} 
                        max={10} 
                        step={1}
                        onValueChange={(val) => setAgent({...agent, temperature: val[0] / 10})}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">Increasing temperature enables heightened creativity, but increases chance of deviation from prompt</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Match incoming calls to users and preload their data before the call starts</h4>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="none">
                        <SelectTrigger className="border-africopilot-border">
                          <SelectValue placeholder="Select data source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Select data source</SelectItem>
                          <SelectItem value="crm">CRM Integration</SelectItem>
                          <SelectItem value="custom">Custom API</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="link" className="text-africopilot-blue text-xs flex items-center">
                        See examples and learn more
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium">Add knowledge base</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">currently in Beta</span>
                    </div>
                    <Select defaultValue="none">
                      <SelectTrigger className="border-africopilot-border">
                        <SelectValue placeholder="Select knowledge base" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Select knowledge base</SelectItem>
                        <SelectItem value="create">Create new knowledge base</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium">Add FAQs & Guardrails</h4>
                      <Button variant="link" className="text-africopilot-blue text-xs flex items-center">
                        Learn more
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Add a new block for FAQs & Guardrails
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Transcriber Tab Content */}
              <TabsContent value="transcriber" className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-4">Choose Transcriber</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Select defaultValue="deepgram">
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select transcriber" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="deepgram">Deepgram</SelectItem>
                            <SelectItem value="whisper">OpenAI Whisper</SelectItem>
                            <SelectItem value="google">Google STT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Select defaultValue="nova-2">
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nova-2">nova-2</SelectItem>
                            <SelectItem value="enhanced">Enhanced</SelectItem>
                            <SelectItem value="base">Base</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-medium">Keywords</h4>
                    <Input 
                      placeholder="Price:100"
                      className="border-africopilot-border"
                    />
                    <p className="text-xs text-gray-500">Enter certain keywords/proper nouns you'd want to boost while understanding speech</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <h4 className="text-base font-medium">Generate precise transcript</h4>
                      <p className="text-xs text-gray-500">Agent will try to generate more precise transcript during interruptions</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between">
                      <h4 className="text-base font-medium">Number of words to wait for before interrupting</h4>
                      <span>2</span>
                    </div>
                    <Slider 
                      defaultValue={[2]} 
                      min={1} 
                      max={10} 
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500">Agent will not consider interruptions until these many words are spoken (if recipient says "Stop/Wait" such as Stop, Wait, Hold On, agent will pause by default)</p>
                  </div>
                </div>
              </TabsContent>

              {/* Voice Tab Content */}
              <TabsContent value="voice" className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-4">Choose Synthesizer</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                        <Select defaultValue="elevenlabs">
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select synthesizer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="elevenlabs">ElevenLabs</SelectItem>
                            <SelectItem value="google">Google TTS</SelectItem>
                            <SelectItem value="amazon">Amazon Polly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-grow">
                        <Select defaultValue="wendy">
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select voice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wendy">Wendy</SelectItem>
                            <SelectItem value="rachel">Rachel</SelectItem>
                            <SelectItem value="john">John</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" className="rounded-full" size="icon">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="flex items-center gap-1">
                          More voices
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="text-base font-medium">Buffer Size</h4>
                      <span>{agent.bufferSize}</span>
                    </div>
                    <Slider 
                      value={[agent.bufferSize]} 
                      min={50} 
                      max={300} 
                      step={10}
                      onValueChange={(val) => setAgent({...agent, bufferSize: val[0]})}
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500">Increasing buffer size enables agent to speak long responses fluently, but increases latency</p>
                  </div>

                  <div className="space-y-2 border-t border-africopilot-border pt-4">
                    <h4 className="text-base font-medium">Response Rate</h4>
                    <Select value={agent.responseRate} onValueChange={(val) => setAgent({...agent, responseRate: val})}>
                      <SelectTrigger className="border-africopilot-border">
                        <SelectValue placeholder="Normal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Fast">Fast</SelectItem>
                        <SelectItem value="Normal">Normal</SelectItem>
                        <SelectItem value="Slow">Slow</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500">Agent will balance low latency and patient responses; may interrupt in long pauses</p>
                  </div>

                  <div className="border-t border-africopilot-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">Check if user is online</h4>
                        <p className="text-xs text-gray-500">Agent will check if the user is online if there's no reply from the user</p>
                      </div>
                      <Switch
                        checked={agent.checkUserOnline}
                        onCheckedChange={(checked) => setAgent({...agent, checkUserOnline: checked})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm text-gray-700 mb-2">User is online message</h4>
                        <Input 
                          value={agent.onlineMessage}
                          onChange={(e) => setAgent({...agent, onlineMessage: e.target.value})}
                          className="border-africopilot-border"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="text-sm text-gray-700">Invoke message after (seconds)</h4>
                          <span>{agent.invokeAfterSeconds}</span>
                        </div>
                        <Slider 
                          value={[agent.invokeAfterSeconds]} 
                          min={5} 
                          max={30} 
                          step={1}
                          onValueChange={(val) => setAgent({...agent, invokeAfterSeconds: val[0]})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Call Tab Content */}
              <TabsContent value="call" className="pt-4">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-base font-medium mb-2">Telephony Provider</h4>
                      <Select value={agent.telephonyProvider} onValueChange={(val) => setAgent({...agent, telephonyProvider: val})}>
                        <SelectTrigger className="border-africopilot-border">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Twilio">Twilio</SelectItem>
                          <SelectItem value="MessageBird">MessageBird</SelectItem>
                          <SelectItem value="Vonage">Vonage</SelectItem>
                          <SelectItem value="Africa's Talking">Africa's Talking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">Voicemail detection</h4>
                        <p className="text-xs text-gray-500">Automatically disconnect call on voicemail detection</p>
                      </div>
                      <Switch
                        checked={agent.voicemailDetection}
                        onCheckedChange={(checked) => setAgent({...agent, voicemailDetection: checked})}
                      />
                    </div>
                  </div>

                  <div className="border-t border-africopilot-border pt-4">
                    <h4 className="text-base font-medium mb-4">Call hangup modes</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium">Hangup calls on user silence</h4>
                          <p className="text-xs text-gray-500">Call will hangup if the user is not speaking</p>
                        </div>
                        <Switch
                          checked={agent.hangupOnSilence}
                          onCheckedChange={(checked) => setAgent({...agent, hangupOnSilence: checked})}
                        />
                      </div>
                      
                      {agent.hangupOnSilence && (
                        <div className="pl-6">
                          <div className="flex justify-between mb-2">
                            <h4 className="text-sm text-gray-700">Time (seconds)</h4>
                            <span>{agent.silenceSeconds}</span>
                          </div>
                          <Slider 
                            value={[agent.silenceSeconds]} 
                            min={5} 
                            max={30} 
                            step={1}
                            onValueChange={(val) => setAgent({...agent, silenceSeconds: val[0]})}
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <h4 className="text-sm font-medium">Hangup calls using a prompt</h4>
                          <p className="text-xs text-gray-500">Call will hangup as per the provided prompt</p>
                          <Button variant="link" className="text-africopilot-blue text-xs p-0 h-auto flex items-center">
                            See examples
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                        <Switch
                          checked={agent.hangupWithPrompt}
                          onCheckedChange={(checked) => setAgent({...agent, hangupWithPrompt: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-africopilot-border pt-4">
                    <h4 className="text-base font-medium mb-2">Call hangup message</h4>
                    <Input 
                      value={agent.hangupMessage}
                      onChange={(e) => setAgent({...agent, hangupMessage: e.target.value})}
                      className="border-africopilot-border"
                    />
                    <p className="text-xs text-gray-500 mt-1">Provide the final agent message just before hanging up</p>
                  </div>

                  <div className="border-t border-africopilot-border pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-base font-medium mb-2">Call Termination</h4>
                        <Select defaultValue="time-limit">
                          <SelectTrigger className="border-africopilot-border">
                            <SelectValue placeholder="Select termination type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="time-limit">The call ends after 300 seconds of call time</SelectItem>
                            <SelectItem value="completion">The call ends when the task is complete</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="text-base font-medium">Time (seconds)</h4>
                          <span>{agent.callTimeLimit}</span>
                        </div>
                        <Slider 
                          value={[agent.callTimeLimit]} 
                          min={60} 
                          max={600} 
                          step={30}
                          onValueChange={(val) => setAgent({...agent, callTimeLimit: val[0]})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tools Tab Content */}
              <TabsContent value="tools" className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-4">Choose functions</h4>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="none">
                        <SelectTrigger className="border-africopilot-border">
                          <SelectValue placeholder="Select functions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Choose functions</SelectItem>
                          <SelectItem value="availability">Check slot availability (using Cal.com)</SelectItem>
                          <SelectItem value="appointments">Book appointments (using Cal.com)</SelectItem>
                          <SelectItem value="transfer">Transfer call to a human agent</SelectItem>
                          <SelectItem value="custom">Add your own custom function</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="bg-africopilot-blue hover:bg-africopilot-blue/90 text-white">
                        Add this function
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md border-dashed border-gray-300 p-8 text-center">
                    <p className="text-gray-500">No functions added yet. Add functions to extend your agent's capabilities.</p>
                  </div>
                </div>
              </TabsContent>

              {/* Analytics Tab Content */}
              <TabsContent value="analytics" className="pt-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-4">Post call tasks</h4>
                    <p className="text-sm text-gray-600">Choose tasks to get executed after the agent conversation is complete</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Summarization</h4>
                        <p className="text-xs text-gray-500">Generate a summary of the conversation automatically.</p>
                      </div>
                      <Switch
                        checked={agent.summarizationEnabled}
                        onCheckedChange={(checked) => setAgent({...agent, summarizationEnabled: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Extraction</h4>
                        <p className="text-xs text-gray-500">Extract structured information from the conversation according to a custom prompt provided</p>
                      </div>
                      <Switch
                        checked={agent.extractionEnabled}
                        onCheckedChange={(checked) => setAgent({...agent, extractionEnabled: checked})}
                      />
                    </div>
                    
                    {agent.extractionEnabled && (
                      <div className="pl-6">
                        <Textarea 
                          placeholder="user_name : Yield the name of the user.
payment_mode : If user is paying by card yield Card. Else yield NA
cash : If they are paying by cash yield cash. Else yield NA"
                          className="min-h-[100px] border-africopilot-border"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h4 className="text-sm font-medium">Push all execution data to webhook</h4>
                        <p className="text-xs text-gray-500">Automatically receive all execution data for this agent using webhook</p>
                        <Button variant="link" className="text-africopilot-blue text-xs p-0 h-auto flex items-center">
                          See all samples
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                      <Switch
                        checked={agent.webhookEnabled}
                        onCheckedChange={(checked) => setAgent({...agent, webhookEnabled: checked})}
                      />
                    </div>
                    
                    {agent.webhookEnabled && (
                      <div className="pl-6">
                        <Input 
                          placeholder="Your webhook URL"
                          value={agent.webhookUrl}
                          onChange={(e) => setAgent({...agent, webhookUrl: e.target.value})}
                          className="border-africopilot-border"
                        />
                      </div>
                    )}
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
                    <SelectTrigger className="w-32 border-africopilot-border">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Swahili">Swahili</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="Arabic">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-1">
                  <Select value={agent.voice} onValueChange={(val) => setAgent({...agent, voice: val})}>
                    <SelectTrigger className="w-32 border-africopilot-border">
                      <SelectValue placeholder="Wendy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wendy">Wendy</SelectItem>
                      <SelectItem value="John">John</SelectItem>
                      <SelectItem value="Sarah">Sarah</SelectItem>
                      <SelectItem value="Kofi">Kofi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="text-sm">Use chat to test agent & prompts</Button>
                <Button className="bg-africopilot-blue hover:bg-africopilot-blue/90 text-white text-sm">Test your prompt via chat</Button>
              </div>
              
              <div>
                <p className="text-sm mb-2">Have a web call with your agent to test & experience it (Beta)</p>
                <Button variant="outline" className="w-full justify-center text-sm bg-blue-50 border-blue-100 text-africopilot-blue">
                  Start web call
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                See all call logs
              </Button>
              <Button 
                onClick={handleSubmit(onSaveAgent)}
                className="bg-africopilot-blue hover:bg-africopilot-blue/90 text-white">
                Create Agent
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentSetupPage;

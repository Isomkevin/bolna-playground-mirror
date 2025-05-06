
// Centralized data store for the Bolna dashboard
// This will be replaced with API calls in the future

export interface Voice {
  id: number;
  name: string;
  origin: string;
  accent: string;
  provider: string;
  sampleText: string;
}

export interface Provider {
  id: number;
  name: string;
  logo: string;
  connected?: boolean;
}

export interface PhoneNumber {
  id: string;
  number: string;
  agent: string;
  telephony: string;
  boughtOn: string;
  renewsOn: string;
  monthlyRent: string;
}

export interface ApiKey {
  id: string;
  identifier: string;
  lastAccessed: string;
  created: string;
}

export interface KnowledgeBaseEntry {
  id: string;
  ragId: string;
  filename: string;
  uploadedOn: string;
  status: 'Processing' | 'Ready' | 'Failed';
}

export interface BatchProcess {
  id: string;
  name: string;
  status: 'Running' | 'Completed' | 'Failed' | 'Pending';
  createdAt: string;
  completedAt?: string;
  progress: number;
}

export interface VoiceLabSample {
  id: string;
  text: string;
  voice: string;
  duration: string;
  createdAt: string;
}

// Dummy data
export const voices: Voice[] = [
  {
    id: 1,
    name: 'Isabelle',
    origin: 'Belgium',
    accent: 'French',
    provider: 'polly',
    sampleText: 'This is the text you can play using Isabelle'
  },
  {
    id: 2,
    name: 'Gregory',
    origin: 'United States',
    accent: 'English',
    provider: 'polly',
    sampleText: 'This is the text you can play using Gregory'
  },
  {
    id: 3,
    name: 'Kevin',
    origin: 'United States',
    accent: 'English',
    provider: 'polly',
    sampleText: 'This is the text you can play using Kevin'
  },
  {
    id: 4,
    name: 'Filiz',
    origin: 'Turkish',
    accent: 'Turkish',
    provider: 'polly',
    sampleText: 'This is the text you can play using Filiz'
  },
  {
    id: 5,
    name: 'Elin',
    origin: 'Swedish',
    accent: 'Swedish',
    provider: 'polly',
    sampleText: 'This is the text you can play using Elin'
  },
  {
    id: 6,
    name: 'Astrid',
    origin: 'Swedish',
    accent: 'Swedish',
    provider: 'polly',
    sampleText: 'This is the text you can play using Astrid'
  },
  {
    id: 7,
    name: 'Tatyana',
    origin: 'Russia',
    accent: 'Russian',
    provider: 'polly',
    sampleText: 'This is the text you can play using Tatyana'
  },
  {
    id: 8,
    name: 'Maxim',
    origin: 'Russia',
    accent: 'Russian',
    provider: 'polly',
    sampleText: 'This is the text you can play using Maxim'
  },
  {
    id: 9,
    name: 'Carmen',
    origin: 'Romanian',
    accent: 'Romanian',
    provider: 'polly',
    sampleText: 'This is the text you can play using Carmen'
  }
];

export const providers: Provider[] = [
  { 
    id: 1, 
    name: 'Azure OpenAI', 
    logo: 'https://platform.bolna.ai/images/azure.svg' 
  },
  { 
    id: 2, 
    name: 'Cal.com', 
    logo: 'https://cal.com/android-chrome-512x512.png' 
  },
  { 
    id: 3, 
    name: 'Cartesia', 
    logo: 'https://files.buildwithfern.com/https://cartesia.docs.buildwithfern.com/2025-04-28T22:13:39.651Z/logo/icon.png' 
  },
  { 
    id: 4, 
    name: 'Deepgram', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWAzPRghWCTmMQqYbarEXQ-8EZ7QzAGBMvw&s'  
  },
  { 
    id: 5, 
    name: 'ElevenLabs', 
    logo: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg',
    connected: true
  },
  { 
    id: 6, 
    name: 'OpenAI', 
    logo: 'https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png'  
  },
  { 
    id: 7, 
    name: 'Perplexity', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFSv1lxsEwowysGSVpPBM_VMwocDGqxqRyg&s'  
  },
  { 
    id: 8, 
    name: 'Plivo', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunYHxFW_oPvjamQZ449Mv5n8KX6bWHKUFog&s'  
  },
  { 
    id: 9, 
    name: 'Smallest', 
    logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
  },
];

export const phoneNumbers: PhoneNumber[] = [];

export const apiKeys: ApiKey[] = [];

export const knowledgeBaseEntries: KnowledgeBaseEntry[] = [];

export const batchProcesses: BatchProcess[] = [
  {
    id: 'batch-1',
    name: 'Weekly Customer Outreach',
    status: 'Running',
    createdAt: '2023-04-05T10:00:00Z',
    progress: 45
  },
  {
    id: 'batch-2',
    name: 'New Product Announcement',
    status: 'Completed',
    createdAt: '2023-04-02T14:30:00Z',
    completedAt: '2023-04-02T16:45:00Z',
    progress: 100
  },
  {
    id: 'batch-3',
    name: 'Service Follow-up Calls',
    status: 'Pending',
    createdAt: '2023-04-07T08:15:00Z',
    progress: 0
  }
];

export const voiceLabSamples: VoiceLabSample[] = [
  {
    id: 'sample-1',
    text: 'Welcome to our customer service line. How may I assist you today?',
    voice: 'Gregory',
    duration: '3.2s',
    createdAt: '2023-04-05T14:30:00Z'
  },
  {
    id: 'sample-2',
    text: 'Thank you for calling. Our representatives are currently busy. Your call is important to us.',
    voice: 'Isabelle',
    duration: '5.7s',
    createdAt: '2023-04-04T11:15:00Z'
  },
  {
    id: 'sample-3',
    text: 'Your appointment has been confirmed for tomorrow at 2 PM. We look forward to seeing you!',
    voice: 'Elin',
    duration: '4.1s',
    createdAt: '2023-04-03T09:45:00Z'
  }
];

// Languages and accents for filtering
export const languages = [
  { value: 'all', label: 'All Languages' },
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Romanian', label: 'Romanian' }
];

export const voiceProviders = [
  { value: 'all', label: 'All Voice Providers' },
  { value: 'polly', label: 'Amazon Polly' },
  { value: 'elevenlabs', label: 'ElevenLabs' },
  { value: 'google', label: 'Google' }
];

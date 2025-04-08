
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
    logo: '/lovable-uploads/fa567b85-828a-41d3-abe8-91bf8f14dba0.png' 
  },
  { 
    id: 2, 
    name: 'Cal.com', 
    logo: '/lovable-uploads/210bb858-1f0b-4398-b25d-b76e551d89bd.png' 
  },
  { 
    id: 3, 
    name: 'Cartesia', 
    logo: '/lovable-uploads/ab8dc577-0efe-4699-9228-a348e5f67fea.png' 
  },
  { 
    id: 4, 
    name: 'Deepgram', 
    logo: '/lovable-uploads/6c3a56d9-2703-4a26-8dc7-b4b093bada90.png'  
  },
  { 
    id: 5, 
    name: 'ElevenLabs', 
    logo: '/lovable-uploads/9bf7ef3d-4537-4e5d-b63b-1fefd4287669.png',
    connected: true
  },
  { 
    id: 6, 
    name: 'OpenAI', 
    logo: '/lovable-uploads/a9a01690-3800-4811-b2c4-6e2144c3dfcc.png'  
  },
  { 
    id: 7, 
    name: 'Perplexity', 
    logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
  },
  { 
    id: 8, 
    name: 'Plivo', 
    logo: '/lovable-uploads/faa0b433-7424-4a2a-ae29-30a343a64c34.png'  
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
  { value: '', label: 'All Languages' },
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Swedish', label: 'Swedish' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Romanian', label: 'Romanian' }
];

export const voiceProviders = [
  { value: '', label: 'All Voice Providers' },
  { value: 'polly', label: 'Amazon Polly' },
  { value: 'elevenlabs', label: 'ElevenLabs' },
  { value: 'google', label: 'Google' }
];

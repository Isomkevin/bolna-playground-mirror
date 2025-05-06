import React, { createContext, useContext, ReactNode, useState } from 'react';
import * as dashboardData from '@/data/dashboardData';
import { toast } from '@/hooks/use-toast';

// Define context type
type DataContextType = {
  voices: dashboardData.Voice[];
  providers: dashboardData.Provider[];
  phoneNumbers: dashboardData.PhoneNumber[];
  apiKeys: ApiKey[];
  knowledgeBaseEntries: dashboardData.KnowledgeBaseEntry[];
  batchProcesses: dashboardData.BatchProcess[];
  voiceLabSamples: dashboardData.VoiceLabSample[];
  languages: { value: string; label: string }[];
  voiceProviders: { value: string; label: string }[];
  // Mock actions
  addVoice: (voice: Omit<dashboardData.Voice, 'id'>) => void;
  connectProvider: (providerId: number) => void;
  createApiKey: (keyData: { apiKey: string, baseUrl: string, apiVersion: string }) => void;
  deleteApiKey: (keyId: string) => void;
  uploadKnowledgeBase: (filename: string) => void;
  createBatchProcess: (name: string) => void;
  buyPhoneNumber: () => void;
  createVoiceLabSample: (text: string, voice: string) => void;
};

interface ApiKey {
  id: string;
  identifier: string;
  key: string;
  lastAccessed: string | null;
  created: string;
  baseUrl?: string;
  apiVersion?: string;
}

// Define DataProviderProps interface
interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  // Initialize state with data from dashboardData
  const [voices, setVoices] = useState(dashboardData.voices);
  const [providers, setProviders] = useState(dashboardData.providers);
  const [phoneNumbers, setPhoneNumbers] = useState(dashboardData.phoneNumbers);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: '1',
      identifier: 'production-key',
      key: 'sk-prod-e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6',
      lastAccessed: '2025-05-05 14:23:45',
      created: '2025-04-15T12:00:00.000Z',
      baseUrl: 'https://api.bolna.ai',
      apiVersion: 'v1'
    },
    {
      id: '2',
      identifier: 'testing-key',
      key: 'sk-test-1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7',
      lastAccessed: '2025-05-04 09:15:22',
      created: '2025-04-20T15:30:00.000Z',
      baseUrl: 'https://sandbox.bolna.ai',
      apiVersion: 'v1'
    }
  ]);
  const [knowledgeBaseEntries, setKnowledgeBaseEntries] = useState(dashboardData.knowledgeBaseEntries);
  const [batchProcesses, setBatchProcesses] = useState(dashboardData.batchProcesses);
  const [voiceLabSamples, setVoiceLabSamples] = useState(dashboardData.voiceLabSamples);

  // Mock action functions
  const addVoice = (voice: Omit<dashboardData.Voice, 'id'>) => {
    const newVoice = {
      ...voice,
      id: voices.length + 1
    };
    setVoices([...voices, newVoice]);
    toast({
      title: "Voice Added",
      description: `${voice.name} has been added to your voices.`
    });
  };

  const connectProvider = (providerId: number) => {
    setProviders(
      providers.map(provider => 
        provider.id === providerId 
          ? { ...provider, connected: true } 
          : provider
      )
    );
    const provider = providers.find(p => p.id === providerId);
    toast({
      title: "Provider Connected",
      description: `${provider?.name} has been successfully connected.`
    });
  };

  const createApiKey = (keyData: { apiKey: string, baseUrl: string, apiVersion: string }) => {
    const newKey: ApiKey = {
      id: `key-${Date.now()}`,
      identifier: `key-${Math.random().toString(36).substring(2, 7)}`,
      key: keyData.apiKey || `sk-${Math.random().toString(36).substring(2, 10)}`,
      lastAccessed: null,
      created: new Date().toISOString(),
      baseUrl: keyData.baseUrl,
      apiVersion: keyData.apiVersion
    };
    
    setApiKeys(prev => [...prev, newKey]);
    return newKey;
  };

  const deleteApiKey = (keyId: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== keyId));
  };

  const uploadKnowledgeBase = (filename: string) => {
    const newEntry = {
      id: `kb-${Date.now()}`,
      ragId: `RAG-${Math.floor(1000 + Math.random() * 9000)}`,
      filename,
      uploadedOn: new Date().toISOString(),
      status: 'Processing' as const
    };
    setKnowledgeBaseEntries([...knowledgeBaseEntries, newEntry]);
    toast({
      title: "PDF Uploaded",
      description: `${filename} is being processed for your knowledge base.`
    });
  };

  const createBatchProcess = (name: string) => {
    const newBatch = {
      id: `batch-${Date.now()}`,
      name,
      status: 'Pending' as const,
      createdAt: new Date().toISOString(),
      progress: 0
    };
    setBatchProcesses([...batchProcesses, newBatch]);
    toast({
      title: "Batch Process Created",
      description: `${name} has been added to your batch processes.`
    });
  };

  const buyPhoneNumber = () => {
    const randomPhoneNumber = `+1${Math.floor(Math.random() * 1000000000).toString().padStart(10, '0')}`;
    const newPhoneNumber = {
      id: `phone-${Date.now()}`,
      number: randomPhoneNumber,
      agent: 'Unassigned',
      telephony: 'Plivo',
      boughtOn: new Date().toISOString(),
      renewsOn: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      monthlyRent: '$5.00'
    };
    setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
    toast({
      title: "Phone Number Purchased",
      description: `${randomPhoneNumber} has been added to your account.`
    });
  };

  const createVoiceLabSample = (text: string, voice: string) => {
    const newSample = {
      id: `sample-${Date.now()}`,
      text,
      voice,
      duration: `${(text.length / 20).toFixed(1)}s`, // Mock duration based on text length
      createdAt: new Date().toISOString()
    };
    setVoiceLabSamples([...voiceLabSamples, newSample]);
    toast({
      title: "Voice Sample Created",
      description: `A new voice sample has been generated with ${voice}.`
    });
  };

  return (
    <DataContext.Provider value={{
      voices,
      providers,
      phoneNumbers,
      apiKeys,
      knowledgeBaseEntries,
      batchProcesses,
      voiceLabSamples,
      languages: dashboardData.languages,
      voiceProviders: dashboardData.voiceProviders,
      addVoice,
      connectProvider,
      createApiKey,
      deleteApiKey,
      uploadKnowledgeBase,
      createBatchProcess,
      buyPhoneNumber,
      createVoiceLabSample
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

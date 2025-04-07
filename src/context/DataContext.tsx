
import React, { createContext, useContext, ReactNode, useState } from 'react';
import * as dashboardData from '@/data/dashboardData';
import { toast } from '@/hooks/use-toast';

// Define context type
type DataContextType = {
  voices: dashboardData.Voice[];
  providers: dashboardData.Provider[];
  phoneNumbers: dashboardData.PhoneNumber[];
  apiKeys: dashboardData.ApiKey[];
  knowledgeBaseEntries: dashboardData.KnowledgeBaseEntry[];
  batchProcesses: dashboardData.BatchProcess[];
  voiceLabSamples: dashboardData.VoiceLabSample[];
  languages: { value: string; label: string }[];
  voiceProviders: { value: string; label: string }[];
  // Mock actions
  addVoice: (voice: Omit<dashboardData.Voice, 'id'>) => void;
  connectProvider: (providerId: number) => void;
  createApiKey: () => void;
  uploadKnowledgeBase: (filename: string) => void;
  createBatchProcess: (name: string) => void;
  buyPhoneNumber: () => void;
  createVoiceLabSample: (text: string, voice: string) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with data from dashboardData
  const [voices, setVoices] = useState(dashboardData.voices);
  const [providers, setProviders] = useState(dashboardData.providers);
  const [phoneNumbers, setPhoneNumbers] = useState(dashboardData.phoneNumbers);
  const [apiKeys, setApiKeys] = useState(dashboardData.apiKeys);
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

  const createApiKey = () => {
    const newApiKey = {
      id: `key-${Date.now()}`,
      identifier: `api-key-${apiKeys.length + 1}`,
      lastAccessed: 'Never',
      created: new Date().toISOString()
    };
    setApiKeys([...apiKeys, newApiKey]);
    toast({
      title: "API Key Created",
      description: "Your new API key has been generated."
    });
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

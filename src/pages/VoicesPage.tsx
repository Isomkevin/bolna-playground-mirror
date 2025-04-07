
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Play } from 'lucide-react';

interface VoiceCardProps {
  name: string;
  origin: string;
  accent: string;
  provider: string;
  sampleText: string;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ 
  name, 
  origin, 
  accent, 
  provider, 
  sampleText 
}) => {
  return (
    <div className="border border-bolna-border rounded-lg p-6">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {origin} ({accent}) accent by {provider}
        </p>
      </div>
      
      <div className="mt-6 flex items-center gap-2">
        <Button variant="outline" className="rounded-full w-8 h-8 p-0 flex items-center justify-center">
          <Play className="h-4 w-4" />
        </Button>
        <p className="text-sm text-gray-600">
          {sampleText}
        </p>
      </div>

      <div className="mt-6">
        <Button variant="outline" className="w-full justify-center">
          Add Voice
        </Button>
      </div>
    </div>
  );
};

const VoicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [provider, setProvider] = useState('');
  
  const voices = [
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
  
  // Filter voices based on search query and selected filters
  const filteredVoices = voices.filter(voice => {
    const matchesSearch = voice.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         voice.accent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = !language || voice.accent.includes(language);
    const matchesProvider = !provider || voice.provider === provider;
    
    return matchesSearch && matchesLanguage && matchesProvider;
  });

  return (
    <DashboardLayout 
      title="Voices" 
      subtitle="Explore and test voices"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:flex-1">
          <Input 
            placeholder="Search voice, accent ..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Languages</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="Turkish">Turkish</SelectItem>
              <SelectItem value="Swedish">Swedish</SelectItem>
              <SelectItem value="Russian">Russian</SelectItem>
              <SelectItem value="Romanian">Romanian</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-64">
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Voice Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Voice Providers</SelectItem>
              <SelectItem value="polly">Amazon Polly</SelectItem>
              <SelectItem value="elevenlabs">ElevenLabs</SelectItem>
              <SelectItem value="google">Google</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-auto">
          <Button 
            className="w-full md:w-auto bg-bolna-blue hover:bg-bolna-blue/90 text-white"
          >
            Import voices
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVoices.map(voice => (
          <VoiceCard
            key={voice.id}
            name={voice.name}
            origin={voice.origin}
            accent={voice.accent}
            provider={voice.provider}
            sampleText={voice.sampleText}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default VoicesPage;

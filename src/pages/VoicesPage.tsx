
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
import { Play, Plus } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { toast } from '@/hooks/use-toast';

interface VoiceCardProps {
  name: string;
  origin: string;
  accent: string;
  provider: string;
  sampleText: string;
  onAddVoice: () => void;
  onPlaySample: () => void;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ 
  name, 
  origin, 
  accent, 
  provider, 
  sampleText,
  onAddVoice,
  onPlaySample
}) => {
  return (
    <div className="border border-bolna-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {origin} ({accent}) accent by {provider}
        </p>
      </div>
      
      <div className="mt-6 flex items-center gap-2">
        <Button 
          variant="outline" 
          className="rounded-full w-8 h-8 p-0 flex items-center justify-center hover:bg-gray-100 transition-colors"
          onClick={onPlaySample}
        >
          <Play className="h-4 w-4" />
        </Button>
        <p className="text-sm text-gray-600">
          {sampleText}
        </p>
      </div>

      <div className="mt-6">
        <Button 
          variant="outline" 
          className="w-full justify-center hover:bg-gray-50 transition-colors"
          onClick={onAddVoice}
        >
          Add Voice
        </Button>
      </div>
    </div>
  );
};

const VoicesPage = () => {
  const { voices, languages, voiceProviders, addVoice } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('all');
  const [provider, setProvider] = useState('all');
  
  // Filter voices based on search query and selected filters
  const filteredVoices = voices.filter(voice => {
    const matchesSearch = voice.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         voice.accent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = language === 'all' || voice.accent.includes(language);
    const matchesProvider = provider === 'all' || voice.provider === provider;
    
    return matchesSearch && matchesLanguage && matchesProvider;
  });

  const handleAddVoice = (voice: typeof voices[0]) => {
    // In a real app, this would make an API call
    toast({
      title: "Voice Added",
      description: `${voice.name} voice has been added to your account.`
    });
  };

  const handlePlaySample = (name: string) => {
    // In a real app, this would play audio
    toast({
      title: "Playing Sample",
      description: `Playing sample audio for ${name}.`
    });
  };

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
            className="transition-all duration-300 border-bolna-border focus:ring-2 focus:ring-bolna-blue/20 focus:border-bolna-blue"
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              {languages.map(lang => (
                <SelectItem key={lang.value} value={lang.value || "all"}>{lang.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-64">
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Voice Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Providers</SelectItem>
              {voiceProviders.map(vp => (
                <SelectItem key={vp.value} value={vp.value || "all"}>{vp.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-auto">
          <Button 
            className="w-full md:w-auto bg-bolna-blue hover:bg-bolna-blue/90 text-white transition-all duration-300 hover:shadow-md"
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
            onAddVoice={() => handleAddVoice(voice)}
            onPlaySample={() => handlePlaySample(voice.name)}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default VoicesPage;

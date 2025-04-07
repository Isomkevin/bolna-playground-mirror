
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Play, Download, Volume2, Trash2 } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { toast } from '@/hooks/use-toast';

const VoiceLabPage = () => {
  const { voices, voiceLabSamples, createVoiceLabSample } = useData();
  const [selectedVoice, setSelectedVoice] = useState("");
  const [text, setText] = useState("");
  
  const handleGenerate = () => {
    if (!selectedVoice || !text) {
      toast({
        title: "Missing Information",
        description: "Please select a voice and enter text to generate.",
        variant: "destructive"
      });
      return;
    }
    
    createVoiceLabSample(text, selectedVoice);
  };
  
  const handlePlay = (sampleId: string) => {
    // In a real app, this would play audio
    toast({
      title: "Playing Sample",
      description: "Audio playback started."
    });
  };
  
  const handleDownload = (sampleId: string) => {
    // In a real app, this would download audio
    toast({
      title: "Downloading",
      description: "Your audio file is being downloaded."
    });
  };

  return (
    <DashboardLayout 
      title="Voice Lab" 
      subtitle="Experiment with different voice configurations"
    >
      {/* Voice Generation Form */}
      <div className="bg-white border border-bolna-border rounded-lg p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Generate Voice Sample</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Voice</label>
            <Select value={selectedVoice} onValueChange={setSelectedVoice}>
              <SelectTrigger>
                <SelectValue placeholder="Select voice" />
              </SelectTrigger>
              <SelectContent>
                {voices.map(voice => (
                  <SelectItem key={voice.id} value={voice.name}>
                    {voice.name} ({voice.accent})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
            <Textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to speech..." 
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleGenerate}
            className="bg-bolna-blue hover:bg-bolna-blue/90 text-white transition-colors"
          >
            Generate Voice
          </Button>
        </div>
      </div>
      
      {/* Voice Samples List */}
      <div className="bg-white border border-bolna-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-bolna-border text-sm font-medium">
          <div className="col-span-4">Text</div>
          <div className="col-span-2">Voice</div>
          <div className="col-span-2">Duration</div>
          <div className="col-span-2">Created</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        
        {voiceLabSamples.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No voice samples available. Generate your first sample above.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {voiceLabSamples.map((sample) => {
              const date = new Date(sample.createdAt);
              const formattedDate = date.toLocaleDateString();
              
              return (
                <div key={sample.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="col-span-4 truncate">{sample.text}</div>
                  <div className="col-span-2">{sample.voice}</div>
                  <div className="col-span-2">{sample.duration}</div>
                  <div className="col-span-2">{formattedDate}</div>
                  <div className="col-span-2 flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
                      onClick={() => handlePlay(sample.id)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
                      onClick={() => handleDownload(sample.id)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default VoiceLabPage;

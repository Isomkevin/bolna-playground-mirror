
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Play, Pause, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

const BatchesPage = () => {
  const { batchProcesses, createBatchProcess } = useData();
  const [newBatchName, setNewBatchName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateBatch = () => {
    if (newBatchName.trim()) {
      createBatchProcess(newBatchName);
      setNewBatchName('');
      setIsDialogOpen(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Running':
        return <Play className="h-4 w-4 text-green-500" />;
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Failed':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout 
      title="Batches" 
      subtitle="Manage and monitor your batch processes"
    >
      <div className="mb-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500">
            Create and manage batch processes to handle large volumes of calls or tasks efficiently.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-bolna-blue hover:bg-bolna-blue/90 text-white flex items-center gap-2 transition-all duration-300 hover:shadow-md">
              <Plus className="h-4 w-4" />
              Create Batch
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Batch Process</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <label className="text-sm font-medium mb-2 block">Batch Name</label>
              <Input 
                value={newBatchName}
                onChange={(e) => setNewBatchName(e.target.value)}
                placeholder="Enter batch name"
                className="w-full"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateBatch} className="bg-bolna-blue hover:bg-bolna-blue/90 text-white">
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {batchProcesses.length === 0 ? (
        <div className="border border-bolna-border rounded-lg p-8 text-center">
          <p className="text-gray-500">No batch processes available. Create your first batch process.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {batchProcesses.map((batch) => (
            <div 
              key={batch.id} 
              className="border border-bolna-border rounded-lg p-6 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(batch.status)}
                  <h3 className="font-medium">{batch.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                    {batch.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  {batch.status === 'Running' && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1 hover:bg-gray-100 transition-colors"
                    >
                      <Pause className="h-3 w-3" />
                      Pause
                    </Button>
                  )}
                  {(batch.status === 'Pending' || batch.status === 'Failed') && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1 hover:bg-gray-100 transition-colors"
                    >
                      <Play className="h-3 w-3" />
                      Start
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{batch.progress}%</span>
                </div>
                <Progress value={batch.progress} className="h-2" />
              </div>
              
              <div className="text-sm text-gray-500 mt-4">
                <div className="flex justify-between">
                  <span>Created: {new Date(batch.createdAt).toLocaleString()}</span>
                  {batch.completedAt && (
                    <span>Completed: {new Date(batch.completedAt).toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default BatchesPage;

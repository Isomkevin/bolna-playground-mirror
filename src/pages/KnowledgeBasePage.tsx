
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Trash2, Upload, FileText } from 'lucide-react';

const KnowledgeBasePage = () => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsUploadDialogOpen(false);
      
      toast({
        title: "Upload successful",
        description: `${selectedFile.name} has been uploaded and is being processed.`,
        variant: "default",
      });
      
      // Reset form
      setSelectedFile(null);
    }, 2000);
  };

  const handleDelete = () => {
    toast({
      title: "Document deleted",
      description: "The document has been removed from your knowledge base.",
      variant: "default",
    });
  };

  return (
    <DashboardLayout 
      title="Knowledge Base" 
      subtitle="Manage knowledge base entries and upload PDFs"
    >
      <div className="mb-6 flex justify-end">
        <Button 
          className="bg-afrivoice-blue hover:bg-afrivoice-blue/90 text-white flex items-center gap-2"
          onClick={() => setIsUploadDialogOpen(true)}
          data-testid="upload-pdf-button"
        >
          <Upload className="h-4 w-4" />
          Upload PDF
        </Button>
      </div>
      
      <div className="border border-afrivoice-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-afrivoice-border text-sm">
          <div className="font-medium">RAG ID</div>
          <div className="font-medium">Filename</div>
          <div className="font-medium">PDF uploaded on</div>
          <div className="font-medium">Status</div>
          <div className="font-medium text-right">Delete</div>
        </div>
        
        {/* Empty state */}
        <div className="p-6 text-center text-gray-500">
          No data available.
        </div>
        
        {/* Example of how a row would look (hidden for now) */}
        <div className="hidden grid grid-cols-5 gap-4 p-4 border-b border-afrivoice-border">
          <div>rag_12345</div>
          <div>agriculture_handbook.pdf</div>
          <div>Apr 09, 2025</div>
          <div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Processed
            </span>
          </div>
          <div className="text-right">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Document</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this document from your knowledge base? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
      
      {/* Upload PDF Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="sm:max-w-[425px]" data-testid="upload-pdf-modal">
          <DialogHeader>
            <DialogTitle>Upload PDF to Knowledge Base</DialogTitle>
            <DialogDescription>
              Upload PDFs to use as knowledge sources for your voice agents.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="pdf-file">Select PDF File</Label>
              <Input
                id="pdf-file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                data-testid="pdf-file-input"
              />
              {selectedFile ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Selected file: {selectedFile.name}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No file chosen
                </p>
              )}
            </div>
            <div className="border rounded-md p-3 bg-blue-50">
              <p className="text-sm text-blue-700">
                You can refer RAG APIs from here. The contents will be processed and made available to your agents during conversations.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsUploadDialogOpen(false)}
              data-testid="cancel-upload"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleUpload}
              className="bg-afrivoice-blue hover:bg-afrivoice-blue/90"
              disabled={isUploading || !selectedFile}
              data-testid="confirm-upload"
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default KnowledgeBasePage;

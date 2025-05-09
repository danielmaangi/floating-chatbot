import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { uploadDocument } from '../services/openaiService';

const DocumentUpload: React.FC = () => {
  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await uploadDocument(file);
      alert('Document uploaded successfully!');
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document. Please try again.');
    }
  }, []);

  return (
    <div className="mb-4">
      <label
        htmlFor="document-upload"
        className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg
        hover:bg-blue-200 cursor-pointer transition-colors"
      >
        <Upload size={20} />
        <span>Upload Document</span>
        <input
          id="document-upload"
          type="file"
          accept=".txt,.md,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default DocumentUpload;
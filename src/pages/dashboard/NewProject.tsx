import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, MoreVertical, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewProjectPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => 
      file.type === 'image/svg+xml' || 
      file.type === 'image/png' || 
      file.type === 'image/jpeg' || 
      file.type === 'image/gif'
    );
    
    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter(file => 
        file.type === 'image/svg+xml' || 
        file.type === 'image/png' || 
        file.type === 'image/jpeg' || 
        file.type === 'image/gif'
      );
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const handleAddFiles = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-73px)]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Project 1</h1>
          <button className="text-blue-500 hover:text-blue-600">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
          onClick={handleAddFiles}
        >
          + Add Files
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".svg,.png,.jpg,.jpeg,.gif"
          multiple
          onChange={handleFileInput}
        />
        
        <div
          className={`border-2 border-dashed rounded-lg transition-colors ${
            isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : files.length > 0 
                ? 'border-gray-200' 
                : 'border-blue-200'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {files.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <Upload className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">No Files Uploaded Yet</h3>
              <p className="text-sm text-gray-500 mt-1">
                It looks like you haven't uploaded any files for this project.
              </p>
              <div className="mt-4">
                <button 
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                  onClick={handleAddFiles}
                >
                  Click to upload
                </button>
                <span className="text-gray-500 mx-1">or drag and drop</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                      {file.type.includes('image') && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Steps */}
      <div className="border-t bg-white px-8 py-6">
        {/* Step Labels */}
        <div className="grid grid-cols-4 mb-4">
          <span className="text-sm font-medium text-gray-900">Files Uploading</span>
          <span className="text-sm text-gray-400">Select Model</span>
          <span className="text-sm text-gray-400">Pre-Processing Rules</span>
          <span className="text-sm text-gray-400">Business Rules</span>
        </div>

        {/* Progress Bar and Steps */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="h-[2px] w-full bg-gray-200">
                <div className="h-full w-1/4 bg-blue-500"></div>
              </div>
            </div>
            <div className="relative flex justify-between">
              <div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <span className="text-sm text-gray-500">1/4</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="w-32 text-gray-600"
          >
            Draft
          </Button>
          <Button
            className="w-32 bg-blue-500 hover:bg-blue-600 text-white"
            disabled={files.length === 0}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
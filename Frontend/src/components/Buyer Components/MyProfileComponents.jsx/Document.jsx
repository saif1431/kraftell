import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdDeleteOutline } from "react-icons/md";

const Document = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 space-y-4">
<h1 className='text-2xl font-semibold'>Document</h1>

<div className='border border-gray-200 px-3 py-3 rounded-lg flex items-center justify-between'> 
      <input type="file" />
      <MdDeleteOutline className='text-xl  text-black' />

</div>
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <FiUpload className="text-3xl text-blue-500" />
          <p className="text-gray-600">
            {files.length > 0 ? files[0].name : 'Click or drag file to upload'}
          </p>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      
    </div>
  );
};

export default Document;
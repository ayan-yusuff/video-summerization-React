import React, { useState } from 'react';
import { Video, Key, FastForward } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedVideo(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">VideoSum</span>
            </div>
            <button
              onClick={onLogout}
              className="text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Select Video
            </label>
            {selectedVideo && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {selectedVideo.name}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Video className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Video Summarization</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Generate concise summaries of your video content automatically.
            </p>
            <button
              disabled={!selectedVideo}
              className="w-full btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Summarize Video
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Key className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Key Frame Extraction</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Extract important frames and moments from your video.
            </p>
            <button
              disabled={!selectedVideo}
              className="w-full btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Extract Frames
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <FastForward className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Video Skimming</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Create a quick preview by highlighting key moments.
            </p>
            <button
              disabled={!selectedVideo}
              className="w-full btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";

const Upload = () => {
  const [, setVideo] = useState<File | null>(null);
  const [, setImage] = useState<File | null>(null);
  const [, setSubtitle] = useState<File | null>(null);
  const [subtitleText, setSubtitleText] = useState<string>("");
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "video/mp4" || file.type === "video/x-msvideo")) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    } else {
      alert("Invalid video file. Only .mp4 and .avi allowed.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Invalid image file. Only .jpg and .png allowed.");
    }
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.name.endsWith(".srt") || file.name.endsWith(".vtt"))) {
      setSubtitle(file);
      const reader = new FileReader();
      reader.onload = () => {
        setSubtitleText(reader.result as string);
      };
      reader.readAsText(file);
    } else {
      alert("Invalid subtitle file. Only .srt and .vtt allowed.");
    }
  };

  return (
    <div className="p-6 mr-4 bg-[var(--color-lightgray)] overflow-y-auto scrolly dark:bg-[var(--color-dark)] rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Upload Your Video</h2>
          <p className="text-gray-600 dark:text-gray-400">Share your content with the world</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Video File</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Upload your video in MP4 or AVI format</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <input 
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer" 
                  type="file" 
                  accept=".mp4,.avi" 
                  onChange={handleVideoChange} 
                />
              </div>
              {videoPreview && (
                <div className="mt-4">
                  <video
                    src={videoPreview}
                    controls
                    className="w-full rounded-lg shadow-sm"
                  />
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Thumbnail</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add a cover image for your video</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <input 
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer" 
                  type="file" 
                  accept=".jpg,.jpeg,.png" 
                  onChange={handleImageChange} 
                />
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img 
                    src={imagePreview} 
                    alt="Thumbnail preview" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm" 
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Subtitles</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add subtitles in SRT or VTT format</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <input 
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer" 
                  type="file" 
                  accept=".srt,.vtt" 
                  onChange={handleSubtitleChange} 
                />
              </div>
              {subtitleText && (
                <div className="mt-4">
                  <pre className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm overflow-x-auto max-h-[300px]">
                    {subtitleText}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
            onClick={() => alert("Validated! But not uploading.")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Validate & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;

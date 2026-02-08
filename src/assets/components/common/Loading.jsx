import React from "react";

export default function Loading() {
  return (
    <>
    <div className="grid grid-cols-4 gap-5">
      <div className="animate-pulse bg-white rounded-xl shadow-sm p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>
      <div className="animate-pulse bg-white rounded-xl shadow-sm p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>
      <div className="animate-pulse bg-white rounded-xl shadow-sm p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>

      <div className="animate-pulse bg-white rounded-xl shadow-sm p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>
    </div> 
    </>
  );
}

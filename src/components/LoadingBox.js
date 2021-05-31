import React from "react";

function LoadingBox() {
  return (
    <div class="w-full h-screen justify-center items-center border border-lightBlue-300 shadow rounded-md p-4 mx-auto space-y-8">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-lime-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-lime-300 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-lime-300 rounded"></div>
            <div class="h-4 bg-lime-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-lime-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-lime-300 rounded w-3/4"></div>

          <div class="space-y-2">
            <div class="h-4 bg-lime-300 rounded"></div>
            <div class="h-4 bg-lime-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-lime-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-lime-300 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-lime-300 rounded"></div>
            <div class="h-4 bg-lime-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-lime-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-lime-300 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-lime-300 rounded"></div>
            <div class="h-4 bg-lime-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-lime-300 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-lime-300 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-lime-300 rounded"></div>
            <div class="h-4 bg-lime-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingBox;

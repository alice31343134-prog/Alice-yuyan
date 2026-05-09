/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

/**
 * A fullscreen overlay that displays a loading animation and text indicating that
 * a video remix is being created.
 */
export const SavingProgressPage: React.FC = () => {
  return (
    <div
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fade-in"
      aria-live="polite"
      aria-busy="true">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-500"></div>
      <h2 className="text-2xl font-bold text-white mt-8 text-center">
        <span className="block text-lg font-normal opacity-80 mb-2">正在创建您的重混...</span>
        Creating your remix...
      </h2>
      <p className="text-gray-400 mt-2 text-center px-4">
        <span className="block text-sm mb-1">请稍候，我们正在将您的设想变为现实。</span>
        Please wait while we bring your vision to life.
      </p>
    </div>
  );
};

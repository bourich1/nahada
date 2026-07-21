import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <span className="loader"></span>
    </div>
  );
};

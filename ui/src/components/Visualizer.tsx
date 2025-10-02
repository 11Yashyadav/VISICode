import React from 'react';

const Visualizer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://visi-code-edh0fbendshga9a9.centralindia-01.azurewebsites.net/visualize.html#mode=display"
        title="Visualizer"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default Visualizer;

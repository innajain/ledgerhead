import React from 'react';

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <>
      {/* Blurred background layer */}
      <div 
        className="fixed inset-0 z-40"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          filter: 'blur(0px)', // Force GPU acceleration
          transform: 'translateZ(0)', // Force hardware acceleration
        }}
      />
      
      {/* Modal container */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 min-w-[350px] max-w-full relative" onClick={e => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold" onClick={onClose} aria-label="Close">
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
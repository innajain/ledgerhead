import React from 'react';

export function FormStatusMessages({ error, success }: { error?: string; success?: string }) {
  return (
    <>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
    </>
  );
}

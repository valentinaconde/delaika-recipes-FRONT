import * as React from 'react';

export default function EmptyMessage({message}: {message: string}) {
  return (
    <div>
      <p className='pt-3'>{message}</p>
    </div>
  );
}
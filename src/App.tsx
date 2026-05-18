import React, { useEffect } from 'react';
import { useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const current = (event: KeyboardEvent) => setKey(event.key);

    document.addEventListener('keyup', current);

    return () => {
      document.removeEventListener('keyup', current);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};

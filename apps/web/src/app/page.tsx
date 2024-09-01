'use client';

import { useEffect, useState } from 'react';

import { Button } from '@web/ui-kit/ui';

function Index() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Component mounted");
  });

  const handleClick = (e: React.MouseEvent) => {
    setCount(count + 1);
    // console.log(e);
  };

  if (count > 5) {
    return <div>Count is too high!</div>;
  }

  return (
    <div>
      <h1>Badly Formatted Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <Button>Button</Button>
    </div>
  );
}

export default Index;

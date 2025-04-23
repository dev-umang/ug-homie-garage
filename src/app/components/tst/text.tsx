import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const someValue = "hello";

  useEffect(() => {
    console.log(`Count is: ${count} and value is ${someValue}`);
    document.title = `You clicked ${count} times`;
  }, []); // Empty dependency array - should warn about 'count' and 'someValue'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;

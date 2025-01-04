```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const myCount = count; // Capture count in a variable within the useEffect.
    
    const logCount = () => {
        console.log('Count:', myCount);
    };

    logCount(); // Call the function to avoid stale closures 
    
    // Cleanup function, not required in this case but good practice for effects that perform side-effects
    return () => {};
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
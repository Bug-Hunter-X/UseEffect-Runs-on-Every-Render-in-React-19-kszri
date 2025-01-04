# React 19 useEffect Bug

This repository demonstrates a subtle bug in React 19 related to the `useEffect` hook. Even when providing a dependency array, the effect seems to run on every render, leading to performance issues and unexpected behavior. 

## Bug Description
The provided `MyComponent` uses `useEffect` with `[count]` as a dependency array. However, the console log inside the `useEffect` shows that it's triggered on every render, not just when `count` changes. 

## Solution
The solution involves checking for stale closures within the effect.  A common cause of this issue is accessing values from the component's scope without explicitly including them in the dependency array.
import { useEffect, useState } from 'react';
import Circle from './Circle.jsx';

export default function Circles() {
  const [score, setScore] = useState(0);
  const [positions, setPositions] = useState([
    { x: 210, y: window.innerHeight },
    { x: 200, y: 200 },
  ]);

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       const x = Math.floor(Math.random() * window.innerWidth);
  //       const y = Math.floor(Math.random() * window.innerHeight);
  //       setPositions((prev) => [...prev, { x, y }]);
  //     }, 1000);

  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, []);

  const handleRemove = (i) => {
    const newPositions = [...positions];
    newPositions.splice(i, 1);
    setPositions(newPositions);
    setScore((prev) => prev + 100);
  };

  return (
    <>
      <h1 className='text-2xl font-bold text-white z-20 absolute left-3 top-3'>
        Score: {score}
      </h1>
      {positions.map(({ x, y }, i) => (
        <Circle
          key={`${x}-${y}-${i}`}
          x={x}
          y={y}
          onClick={() => handleRemove(i)}
        />
      ))}
    </>
  );
}

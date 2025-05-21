export default function Circle({ x, y, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        top: y,
        left: x,
        translate: '-50% -50%',
      }}
      className='absolute size-10 animate-[spin_0.1s_linear_infinite]  bg-conic from-amber-500 to-amber-400 shadow-[0_0_5px]  shadow-amber-200 rounded-full'
    ></div>
  );
}

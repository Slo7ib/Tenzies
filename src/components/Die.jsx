export default function Die(props) {
  return (
    <button
      className={`size-16 ${
        props.isHeld
          ? `bg-green-400  border-2 border-indigo-900 hover:text-white`
          : `bg-white hover:text-black`
      }  rounded-xl shadow-xl text-3xl font-semibold text-center flex items-center justify-center hover:scale-125 cursor-pointer hover: transition ease-in-out duration-300 hover:text-indigo-700`}
      onClick={() => props.hold(props.id)}
    >
      {props.value}
    </button>
  );
}

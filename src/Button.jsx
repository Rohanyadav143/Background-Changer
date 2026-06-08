function Button({ color, clicked }) {
  let textClr = color === "black" ? "white" : "black";

  return (
    <>
      <button className="p-1 pt-2 pb-2 outline-3 ml-15 mt-5 bg-white rounded-xl cursor-pointer" onClick={clicked}>
        <span className="p-2 rounded-2xl" style={{ backgroundColor: color, color: textClr }}>{color}</span>
      </button>
    </>
  );
}

export default Button;

function Buttons({ index, c, m }) {
  const addevent = () => {
    m(c);
  };
  let color = "white";
  if(c==="white"){
    color="black";
  }
  console.log("hello world " ,color);
  return (
    <button onClick={addevent}>
      <div
        className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{ backgroundColor: c, color: color }}
      >
        {c}
      </div>
    </button>
  );
}

export default Buttons;

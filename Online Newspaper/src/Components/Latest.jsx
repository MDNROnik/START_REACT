import Marquee from "react-fast-marquee";
const Latest = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-300 p-3 text-black">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      {/* Marquee */}
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">Keep Watch For Latest News !!!</p>
      </Marquee>
    </div>
  );
};

export default Latest;

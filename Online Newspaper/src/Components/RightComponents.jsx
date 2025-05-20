import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const RightComponents = () => {
  return (
    <div className="space-y-8">
      <div className=":w-full">
        <h2 className="font-bold mb-5">Login With</h2>
        <div className="space-y-3">
          <button className="btn btn-secondary btn-outline w-full">
            <FcGoogle size={24} /> Login with Google
          </button>
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-5">Find Us on</h2>
        <div className="">
          <div className="join join-vertical w-full">
            <button className="btn bg-base-100  join-item">
              <FaFacebook></FaFacebook> Facebook
            </button>
            <button className="btn bg-base-100  join-item">
              <FaXTwitter></FaXTwitter> X
            </button>
            <button className="btn bg-base-100 join-item">
              <FaInstagram></FaInstagram> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponents;

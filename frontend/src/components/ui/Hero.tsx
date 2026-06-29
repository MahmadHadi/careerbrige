import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import { ArrowRight, CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-screen px-4 flex md:flex-row flex-col items-center justify-center gap-4">
      <div className="hero-left | w-full md:w-1/2 flex flex-col gap-4">
        {/* <div className="text-[clamp(1.5rem,3vw,3rem)] font-bold flex flex-col gap-0">
          <h1 className="leading-12">Bridge the Gap Between</h1>
          <h1 className="leading-12 text-blue-600">Learning and Industry</h1>
        </div> */}
        <div className="text-[clamp(1.5rem,3vw,3rem)] font-bold flex flex-col gap-0">
          <h1 className="leading-tight">Bridge the Gap Between</h1>
          <h1 className="leading-tight text-blue-600">Learning and Industry</h1>
        </div>

        <p className="">
          Connect with experienced professionals for personalized one-on-one
          mentorship to accelerate your career growth. Stop guessing and start
          growing with expert guidance.
        </p>

        <div className="flex gap-4">
          <Link
            className="border px-5 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-all flex items-center gap-2"
            to={"/login"}
          >
            Find an Expert
            <ArrowRight size={20} strokeWidth={2} />
          </Link>
          <Link
            className="border border-blue-400 hover:text-white hover:bg-blue-600 transition-all px-5 py-2 text-sm rounded-md"
            to={"/login"}
          >
            Become an Expert
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            <img
              src={assets.avatar1}
              alt=""
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <img
              src={assets.avatar2}
              alt=""
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <img
              src={assets.avatar3}
              alt=""
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          </div>

          <p className="text-gray-600">
            Joined by{" "}
            <span className="font-semibold text-blue-600">2,000+</span> industry
            leaders
          </p>
        </div>
      </div>

      <div className="hero-right | w-full md:w-1/2 relative">
        <div className="hero-img-wrapper | bg-white p-2 rounded-md">
          <img className="rounded-md" src={assets.heroImg} alt="" />
        </div>
        <div className="floating-div | animate-float flex items-center gap-2 px-2 py-2 rounded-md bg-white border-blue-400 shadow-blue-300 shadow-xs absolute bottom-7 -left-10 ">
          <div className="bg-amber-100 p-3 rounded-full">
            <CalendarDays size={16} strokeWidth={1.5} />
          </div>
          <div className="text">
            <div className="label | text-xs font-semibold text-gray-500">
              Next Session
            </div>
            <div className="time | font-semibold text-gray-700">
              Today, 2:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

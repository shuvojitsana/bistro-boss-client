// import banner from "../../../assets/home/banner.jpg"
import './SingleBanner.css';


const SingleBanner = () => {
    return (
        <div className="hero min-h-screen bg-fixed SingleBanner">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-slate-100">
          <div className="max-w-[740px] text-black ">
            <h1 className="mb-5 text-5xl font-mono ">Bistro Boss</h1>
            <p className="mb-5 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    );
};

export default SingleBanner;
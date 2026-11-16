import bannerImage from "../assets/banner-main.png";
import backgroundShadow from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <section className="container mx-auto mt-8 px-4 sm:px-0">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-12 lg:px-16 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${backgroundShadow})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35"
        />

        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              BPL DREAM LEAGUE
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build Your
              <span className="block text-emerald-300">Dream Cricket Team</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Pick your favourite players, create your winning combination, and
              make every match unforgettable.
            </p>
            <a
              href="#players"
              className="btn mt-8 rounded-full border-0 bg-emerald-400 px-7 font-bold text-slate-950 shadow-lg shadow-emerald-950/30 hover:bg-emerald-300"
            >
              Explore Players <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={bannerImage}
              alt="Cricket bat, ball and stumps"
              className="w-52 drop-shadow-[0_20px_35px_rgba(16,185,129,0.2)] sm:w-64 lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

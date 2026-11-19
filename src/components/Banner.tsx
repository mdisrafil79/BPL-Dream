import bannerImage from '../assets/banner-main.png'
import heroBackground from '../assets/hero-bg.png'

interface BannerProps {
  onClaim: () => void
}

const Banner = ({ onClaim }: BannerProps) => {
  return (
    <section id="top" className="mx-auto w-[92%] max-w-[1440px] lg:w-[82%]">
      <div
        className="relative isolate flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-[26px] bg-[#08080a] bg-cover bg-center px-5 py-9 text-center sm:min-h-[400px] sm:px-8 sm:py-10 lg:aspect-[2.42/1] lg:min-h-0 lg:rounded-[28px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center">
          <img
            src={bannerImage}
            alt="Cricket bats, ball and stumps"
            className="w-44 drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)] sm:w-52 lg:w-64"
          />
          <h1 className="mt-1 max-w-[1100px] text-[clamp(28px,2.75vw,42px)] font-extrabold leading-tight tracking-tight text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mt-3 text-[clamp(15px,1.45vw,24px)] font-medium text-slate-300">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            type="button"
            onClick={onClaim}
            className="mt-6 rounded-lg border-[1.5px] border-[#101010] bg-neon px-[clamp(16px,1.6vw,24px)] py-2.5 text-[clamp(13px,1.1vw,16px)] font-bold text-[#101010] shadow-[0_10px_30px_-10px_rgba(231,254,40,0.65)] transition hover:brightness-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner

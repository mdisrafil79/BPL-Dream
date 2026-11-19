import Logo from '../assets/logo.png'

const links = ['Home', 'Fixture', 'Teams', 'Schedules']

const CoinIcon = () => (
  <span
    aria-hidden="true"
    className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe27a] via-[#fbc531] to-[#eb9f0a] text-[11px] font-bold text-[#7a4c00] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)]"
  >
    $
  </span>
)

const Nav = ({ coin }: { coin: number }) => {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-[100px] w-[92%] max-w-[1440px] items-center justify-between sm:h-[112px] lg:w-[82%]">
        <a href="#top" className="flex shrink-0 items-center" aria-label="BPL Dream 11 home">
          <img src={Logo} alt="BPL Dream 11" className="h-14 w-auto sm:h-[72px]" />
        </a>

        <div className="flex items-center gap-8 sm:gap-10">
          <ul className="hidden items-center gap-7 text-[15px] font-medium text-neutral-500 md:flex lg:gap-9">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  className="transition-colors hover:text-neutral-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <span className="text-[15px] font-semibold text-neutral-900">
              {coin} Coin
            </span>
            <CoinIcon />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav

import { useState, type FormEvent } from 'react'
import { toast } from 'react-toastify'
import footerLogo from '../assets/logo-footer.png'

const quickLinks = ['Home', 'Services', 'About', 'Contact']

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      toast.error('Please enter your email address')
      return
    }

    toast.success('Subscribed successfully. Welcome aboard!')
    setEmail('')
  }

  return (
    <footer className="bg-footer text-neutral-300">
      <div className="mx-auto w-[92%] max-w-[1440px] pb-8 pt-[195px] lg:w-[82%]">
        <div className="flex justify-center">
          <img src={footerLogo} alt="BPL Dream 11" className="h-24 w-auto sm:h-28" />
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10 lg:mt-12 lg:gap-16">
          <div>
            <h3 className="text-[16px] font-semibold text-white">About Us</h3>
            <p className="mt-5 max-w-[270px] text-[14px] leading-7 text-neutral-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-[14px] text-neutral-400">
              {quickLinks.map((link) => (
                <li key={link} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-neutral-400" aria-hidden="true" />
                  <a href="#top" className="text-[15px] transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-white">Subscribe</h3>
            <p className="mt-5 max-w-[280px] text-[14px] leading-7 text-neutral-400">
              Subscribe to our newsletter for the latest updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex max-w-[330px] overflow-hidden rounded-lg"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-11 min-w-0 flex-1 rounded-l-lg border border-r-0 border-neutral-200 bg-white px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-r-lg bg-gradient-to-r from-[#ec9db8] via-[#f4c98d] to-[#ffe27a] px-5 text-sm font-semibold text-white transition hover:brightness-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-[14px] text-neutral-400">
          @2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState, type FormEvent } from 'react'
import { toast } from 'react-toastify'
import newsletterBackground from '../assets/bg-shadow.png'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      toast.error('Please enter your email address')
      return
    }

    toast.success('Subscribed successfully. Welcome aboard!')
    setEmail('')
  }

  return (
    <section className="relative z-10 mx-auto mt-28 w-[92%] max-w-[1440px] lg:mt-40 lg:w-[82%]">
      <div className="-mb-[160px] rounded-[2.5rem] border border-white p-2.5 sm:p-3">
        <div
          className="rounded-[2rem] bg-white bg-cover bg-center px-6 py-12 text-center sm:py-14"
          style={{ backgroundImage: `url(${newsletterBackground})` }}
        >
          <h2 className="text-[clamp(26px,2.2vw,34px)] font-bold tracking-tight text-neutral-900">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-3 text-[clamp(14px,1.2vw,18px)] text-neutral-500">
            Get the latest updates and news right in your inbox!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex w-full max-w-[clamp(360px,32vw,520px)] flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 flex-1 rounded-lg border border-neutral-200 bg-white/85 px-4 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-lg bg-gradient-to-r from-[#ec9db8] via-[#f4c98d] to-[#ffe27a] px-6 text-sm font-semibold text-white transition hover:brightness-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

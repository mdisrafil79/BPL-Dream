import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

interface PlayerImageProps {
  src: string
  alt: string
  className?: string
  iconClassName?: string
}

/**
 * Player photo with a neutral grey fallback, mirroring the reference design
 * when an image URL cannot be loaded.
 */
const PlayerImage = ({
  src,
  alt,
  className = '',
  iconClassName = 'text-4xl',
}: PlayerImageProps) => {
  const [hasFailed, setHasFailed] = useState(false)

  if (!src || hasFailed) {
    return (
      <div
        className={`flex items-center justify-center bg-[#d9d9d9] ${className}`}
        role="img"
        aria-label={alt}
      >
        <FaUser className={`text-white/70 ${iconClassName}`} aria-hidden="true" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasFailed(true)}
      className={`object-cover object-top ${className}`}
    />
  )
}

export default PlayerImage

import Link from "next/link"
import Image from "next/image"

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart'},
  { src: '/assets/icons/user.svg', alt: 'user'},
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
       <Link href="/" className="flex items-center gap-1">
        <Image 
        src="/assets/icons/logo.svg"
        width={28}
        height={28}
        alt="logo"
        />

        <p className="nav-logo">
          Scrap<span className='text-primary'>Ninja</span>
        </p>
       </Link>

       <div className="flex items-center gap-5">
        {navIcons.map((icon) => (
          <Image
          src={icon.src}
          height={28}
          width={28}
          alt={icon.alt}
          key={icon.alt}
          className="object-contain"
          />
        ))}
       </div>
      </nav>
    </header>
  )
}

export default Navbar

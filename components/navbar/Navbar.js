import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            <div>Home</div> 
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <div>About</div> 
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <div>Contact</div> 
          </Link>
        </li>
      </ul>
    </nav>
  );
}

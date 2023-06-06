
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      <li>
        <Link href="/about">About us</Link>
      </li>

      <li>
      <Link href="/contact">contact</Link>
      </li>
    </div>
  )
}

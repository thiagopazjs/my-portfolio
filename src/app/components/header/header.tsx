import Image from "next/image"
import"./header.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi i'm Thiago Paz!</h1>
        <h2>Software Developer</h2>
      </div>
      <Image
        src="/eu.jpeg"
        alt="me logo"
        width={100}
        height={24}
        priority
      />
    </div>
  )
}
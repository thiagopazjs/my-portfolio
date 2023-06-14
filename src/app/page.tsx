import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />

        <div>
          <h1>Hi i'm Thiago Paz!</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p>5 years working as a Software Developer, in companys such as Riachuelo,Sancor Seguros, B2B Group.</p>
        <div className="experience-time">
        </div>

      </div>
      <div className="info">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Technical</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
        <span>🎓</span>
        <span>Analysis and systems development - Unicesumar</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
      </div>
    </main>
  )
}

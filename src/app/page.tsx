import { Header } from './components/header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container" >
      <Header/>
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

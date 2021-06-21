import '../styles/index.scss'
import Recepies from './Recepies';
import comics from "../images/comics.jpg"
import mySvg from "../images/undraw_Golden_gate_bridge_re_e8tc.svg"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={comics} alt="manga" width="250" />
        <img src={mySvg} alt="office-girl" width="250" />
        <Recepies />
      </main>
    </>
  )
}

export default App
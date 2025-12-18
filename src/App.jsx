import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="topHeader"><h2>thiago<span className="markRed">.dev</span></h2></div>
        <nav>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="heroPage">
          <div className="heroContent">
            <h1>
              Olá,<br />
              eu sou <span className="markRed">Thiago</span>,<br />
              desenvolvedor full stack
            </h1>
            <h2>
             Possuo experiência em HTML, CSS, JavaScript, React, React Native e bancos de dados SQL e NoSQL. Formado em Técnico em Informática para Internet pelo SESI/SENAI (2024), atualmente curso Ciências da Computação na Universidade Católica de Brasília. Gosto de transformar ideias em soluções digitais eficientes e bem estruturadas.
            </h2>
            <button>
              Ver Projetos
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
import "../styles/Hero.css"

function Hero() {
    return (
        <div className="heroPage w-full h-[calc(100dvh-100px)] flex flex-col items-center justify-center">
            <div className="heroContent w-4/5 font-bold ">
                <h1 className="text-8xl text-[var(--whitePearl)]">
                    Olá,<br />
                    eu sou <span className="markRed">Thiago</span>,<br />
                    desenvolvedor full stack
                </h1>
                <h2 className="block text-lg text-[var(--whitePearl)]">
                    Possuo experiência em HTML, CSS, JavaScript, React, React Native e bancos de dados SQL e NoSQL. Formado em Técnico em Informática para Internet pelo SESI/SENAI (2024), atualmente curso Ciências da Computação na Universidade Católica de Brasília. Gosto de transformar ideias em soluções digitais eficientes e bem estruturadas.
                </h2>
                <button className="relative w-xs h-[60px] text-2xl cursor-pointer bg-transparent font-bold text-[var(--red)] rounded-xl">
                    Ver Projetos
                </button>
            </div>
        </div>
    )
}

export default Hero;
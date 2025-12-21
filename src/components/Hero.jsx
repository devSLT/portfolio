import "../styles/Hero.css"

function Hero() {
    return (
        <section className="heroPage w-full w-max-[1080px] overflow-hidden h-[calc(100dvh-100px)] min-h-[500px] max-h-[1080px] flex flex-col items-center justify-center">
            <div className="heroContent w-4/5 font-bold">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[var(--whitePearl)]">
                    Olá,<br />
                    eu sou <span className="markRed">Thiago</span>,<br />
                    desenvolvedor full stack
                </h1>
                <h2 className="block text-base md:text-xl font-normal text-[var(--whitePearl)]">
                    Desenvolvedor focado em criar soluções digitais eficientes, bem estruturadas e orientadas à experiência do usuário.                </h2>
                <button className="relative w-48 md:w-xs h-[60px] text-xl lg:text-2xl cursor-pointer bg-transparent font-bold text-[var(--red)] rounded-xl">
                    Ver Projetos
                </button>
            </div>
        </section>
    )
}

export default Hero;
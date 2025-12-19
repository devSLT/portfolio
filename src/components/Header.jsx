import "../styles/Header.css"

function Header() {
    return (
        <header className="w-full max-w-full overflow-hidden h-[100px] flex flex-col justify-center items-center font-[var(--robotoflex)] font-bold ">
            <div className="topHeader w-full h-3/5 flex justify-center items-center">
                <h2 className="text-2xl md:text-3xl text-[var(--whitePearl)]">
                    thiago<span className="markRed">.dev</span>
                </h2>
            </div>
            <nav className="w-4/5 h-2/5 flex justify-between items-center">
                <ul className="w-full h-full flex justify-between items-center list-none font-semibold md:font-bold text-base md:text-lg text-[var(--whitePearl)]">
                    <li><a href="#About" className="decoration none">About</a></li>
                    <li><a href="#Projects" className="decoration none">Projects</a></li>
                    <li><a href="#Contact" className="decoration none">Conta</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import "../styles/Header.css"

function Header() {
    return (
        <header className="w-full h-[100px] flex flex-col justify-center items-center font-[var(--robotoflex)] font-bold">
            <div className="topHeader w-full h-3/5 flex justify-center items-center">
                <h2 className="text-2xl text-[var(--whitePearl)]">thiago<span className="markRed">.dev</span></h2>
            </div>
            <nav className="w-4/5 h-2/5 flex justify-between items-center">
                <ul className="w-full h-full flex justify-between items-center list-none">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
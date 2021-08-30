function Nav() {
    return (
        <nav className="py-4">
            <ul className="clear-both flex flex-col md:flex-row list-none place-items-center justify-center text-secondaryone-verydark m-8 uppercase tracking-wider font-light text-sm no-underline border-t border-b border-secondaryone-verydark">
                <li><a href="#basics">Basics</a></li>
                <li><a href="#guts">Guts</a></li>
                <li><a href="#materials">Materials</a></li>
                <li><a href="#strings">Strings</a></li>
                <li><a href="#gettingstarted">Getting started</a></li>
                <li><a href="#faqs">FAQs</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
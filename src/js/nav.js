function Nav() {
    return (
        <nav className="py-4">
            <ul className="clear-both flex flex-col md:flex-row list-none place-items-center justify-center text-secondaryone-verydark dark:text-secondaryone-verylight m-8 p-1 uppercase tracking-wider font-light text-sm no-underline border-t border-b border-secondaryone-verydark dark:border-secondaryone-verylight">
                <li className="p-0"><a href="#basics">Basics</a></li>
                <li className="p-0"><a href="#guts">Guts</a></li>
                <li className="p-0"><a href="#materials">Materials</a></li>
                <li className="p-0"><a href="#strings">Strings</a></li>
                <li className="p-0"><a href="#gettingstarted">Getting started</a></li>
                <li className="p-0"><a href="#faqs">FAQs</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
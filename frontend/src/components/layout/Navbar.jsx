import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sofa, Moon, Sun, Menu } from 'lucide-react'

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference on mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    const navLinkClass = ({ isActive }) => 
        isActive 
            ? "relative text-[13px] uppercase tracking-[0.18em] text-foreground after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-amber-500 text-amber-600"
            : "text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors";

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-card/10 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/70">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex h-[78px] items-center justify-between">

                    {/* <!-- Logo --> */}
                    <Link to="/" className="flex items-center gap-3 shrink-0">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-500/10 text-amber-600 shadow-sm">
                            <Sofa className="w-[18px] h-[18px]" />
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-[22px] font-bold tracking-[0.08em] text-foreground">
                                BIPIN <span className="font-bold text-amber-600">DECOR</span>
                            </h1>
                        </div>
                    </Link>

                    {/* <!-- Desktop Nav --> */}
                    <nav className="hidden lg:flex items-center gap-8 font-bold">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                        <NavLink to="/services" className={navLinkClass}>
                            Services
                        </NavLink>
                        <NavLink to="/portfolio" className={navLinkClass}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </nav>

                    {/* <!-- Right Actions --> */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-amber-300 hover:text-amber-600 transition-all duration-300"
                            aria-label="Toggle Dark Mode">
                            {isDarkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                        </button>

                        <Link to="/contact"
                            className="hidden lg:inline-flex items-center justify-center rounded-full border border-amber-600 bg-amber-600 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(217,119,6,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-amber-700">
                            Login
                        </Link>

                        <button
                            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-amber-300 hover:text-amber-600 transition-all duration-300"
                            aria-label="Open Menu">
                            <Menu className="w-[20px] h-[20px]" />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar
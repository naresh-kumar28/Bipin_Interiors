import React from 'react'
import { Link } from 'react-router-dom'
import { Sofa, MapPin, Phone, Mail, Heart } from 'lucide-react'

function Footer() {
    return (
        <footer id="site-footer" className="bg-card pt-16 pb-8 border-t border-border">
            <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

                <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:pr-8">

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

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        Premium Decor installation studio specializing in luxury finishes, wall paneling, false
                        ceilings, and
                        bespoke spatial transformations.
                    </p>

                    <div className="flex items-center gap-3">
                        <Link to="#"
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 shadow-sm">
                            {/* Instagram SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </Link>

                        <Link to="#"
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 shadow-sm">
                            {/* Facebook SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </Link>

                        <Link to="#"
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 shadow-sm">
                            {/* Twitter SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:col-start-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link to="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-amber-600 transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-amber-600 transition-colors">Services</Link></li>
                        <li><Link to="/portfolio" className="hover:text-amber-600 transition-colors">Portfolio</Link>
                        </li>
                        <li><Link to="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link to="/privacy_policy" className="hover:text-amber-600 transition-colors">Privacy
                            Policy</Link></li>
                        <li><Link to="/terms_condition" className="hover:text-amber-600 transition-colors">Terms &
                            Conditions</Link>
                        </li>
                        <li><Link to="/return_refund" className="hover:text-amber-600 transition-colors">Return
                            Policy</Link></li>
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-amber-600 w-5 h-5 mt-0.5 shrink-0" />
                            <span>123 Luxury Avenue, Design District, City, 10001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-amber-600 w-5 h-5 shrink-0" />
                            <Link to="tel:+15551234567" className="hover:text-amber-600 transition-colors">+1 (555)
                                123-4567</Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-amber-600 w-5 h-5 shrink-0" />
                            <Link to="mailto:hello@bipinDecors.com"
                                className="hover:text-amber-600 transition-colors">hello@bipinDecors.com</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className="max-w-7xl mx-auto pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Bipin Decors. All rights reserved.</p>
                <p className="flex items-center gap-1.5">
                    Designed with <Heart className="text-amber-500 w-4 h-4 fill-amber-500/20" /> by LearnSyntax
                </p>
            </div>
        </footer>
    )
}

export default Footer

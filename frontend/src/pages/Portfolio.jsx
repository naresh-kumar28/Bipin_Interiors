import React from 'react'
import { Link } from 'react-router-dom'
import { portfolioHero, modernLivingRoom, portfolioKitchen, masterBedroom, corporateLobby, luxuryBath, contemporaryLounge } from '../assets/images'

function Portfolio() {
    return (
        <main className="flex-grow flex flex-col w-full">

            {/* Page Header */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${portfolioHero})` }}
                    className="absolute inset-0 opacity-10 bg-cover bg-center">
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Our
                        Masterpieces</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Work Gallery</h1>
                    <p className="text-lg text-white/80 font-light max-w-xl mx-auto">
                        Explore our curated portfolio of stunning transformations and bespoke installations.
                    </p>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-16 px-6 bg-background">
                <div className="max-w-7xl mx-auto">

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        <button
                            className="px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-sm shadow-sm transition-all">All
                            Projects</button>
                        <button
                            className="px-6 py-2.5 bg-transparent border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm rounded-sm transition-all">Living
                            Room</button>
                        <button
                            className="px-6 py-2.5 bg-transparent border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm rounded-sm transition-all">Bedroom</button>
                        <button
                            className="px-6 py-2.5 bg-transparent border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm rounded-sm transition-all">Kitchen</button>
                        <button
                            className="px-6 py-2.5 bg-transparent border border-border text-foreground hover:border-primary hover:text-primary font-medium text-sm rounded-sm transition-all">Commercial</button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Portfolio Item 1 (Before/After Style) */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer lg:col-span-2 lg:row-span-2">
                            <img src={modernLivingRoom}
                                alt="Living Room Transformation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <span
                                    className="bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block w-max mb-3 rounded-sm">Before
                                    & After</span>
                                <h3
                                    className="text-2xl lg:text-3xl font-heading font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Modern Luxury Living Room</h3>
                                <p
                                    className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Complete transformation featuring UV Marble Sheets and WPC Louvers.
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-2xl"></iconify-icon>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src={portfolioKitchen}
                                alt="Kitchen Renovation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-2 py-1 inline-block w-max mb-2 rounded-sm">Kitchen</span>
                                <h3
                                    className="text-xl font-heading font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Minimalist Kitchen</h3>
                                <p
                                    className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    PVC Paneling & False Ceiling
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-xl"></iconify-icon>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src={masterBedroom}
                                alt="Master Bedroom"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-2 py-1 inline-block w-max mb-2 rounded-sm">Bedroom</span>
                                <h3
                                    className="text-xl font-heading font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Master Bedroom</h3>
                                <p
                                    className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Custom False Ceiling Design
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-xl"></iconify-icon>
                            </div>
                        </div>

                        {/* Portfolio Item 4 */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src={corporateLobby}
                                alt="Office Space"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-2 py-1 inline-block w-max mb-2 rounded-sm">Commercial</span>
                                <h3
                                    className="text-xl font-heading font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Corporate Lobby</h3>
                                <p
                                    className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    WPC Louvers & Accent Wall
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-xl"></iconify-icon>
                            </div>
                        </div>

                        {/* Portfolio Item 5 */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src={luxuryBath}
                                alt="Bathroom"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-2 py-1 inline-block w-max mb-2 rounded-sm">Bathroom</span>
                                <h3
                                    className="text-xl font-heading font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Luxury Bath Setup</h3>
                                <p
                                    className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Seamless UV Marble Installation
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-xl"></iconify-icon>
                            </div>
                        </div>

                        {/* Portfolio Item 6 */}
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src={contemporaryLounge}
                                alt="Living Room Details"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-2 py-1 inline-block w-max mb-2 rounded-sm">Living
                                    Room</span>
                                <h3
                                    className="text-xl font-heading font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Contemporary Lounge</h3>
                                <p
                                    className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Full Home Renovation Finish
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-xl"></iconify-icon>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-16">
                        <button
                            className="px-8 py-3 bg-transparent border border-primary text-primary font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-sm">
                            Load More Projects
                        </button>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Portfolio

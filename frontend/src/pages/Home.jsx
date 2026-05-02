import React from 'react'

import { Link } from 'react-router-dom';

import { 
    livingRoom, bedroom, kitchen, office, lobby, hall,
    uvMarbleSheet, pvcPaneling, falseCeiling, wpcLouvers, customFurniture, homeRenovation,
    craftsmanship, transformSpace
} from "../assets/images";
import heroVideo from "../assets/video.mp4";

function Home() {
    return (
        <main className="flex-grow flex flex-col w-full">

            {/* Hero Section */}
            <section
                className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-black">

                {/* Video */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">

                    {/* Tagline */}
                    <span className="text-amber-400 tracking-[0.25em] uppercase text-xs md:text-sm mb-6 block font-medium">
                        Bipin Decor Studio
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl text-white mb-6 leading-[1.2] font-serif font-medium">
                        Elevate Your Living Space
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                        Crafted with precision, designed with elegance — we transform everyday spaces into timeless
                        Decors.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

                        {/* Primary Button */}
                        <a href="#contact"
                            className="group inline-flex items-center gap-3 px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 text-xs tracking-[0.2em] uppercase">
                            Start Your Project
                            <iconify-icon icon="lucide:arrow-right"
                                className="text-sm transition-transform duration-300 group-hover:translate-x-1"></iconify-icon>
                        </a>

                        {/* Secondary Button */}
                        {/* <a href="#services"
                            className="inline-flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase border-b border-card/40 hover:border-card transition-all duration-300">
                            View Portfolio
                        </a> */}

                    </div>

                </div>
            </section>

            {/* NEW Categories Section */}
            <section className="py-16 md:py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-7">
                        <div>
                            <span
                                className="text-primary text-sm font-bold uppercase tracking-widest mb-1 block animate-fade-in">
                                Explore Spaces
                            </span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                                Design by Category
                            </h2>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <button
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                <iconify-icon icon="lucide:arrow-left" className="text-lg"></iconify-icon>
                            </button>
                            <button
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                <iconify-icon icon="lucide:arrow-right" className="text-lg"></iconify-icon>
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex overflow-x-auto gap-8 pb-10 -mb-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] group/carousel">

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer transition-all duration-500">
                            <img src={livingRoom}
                                alt="Living Room"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Living Room</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer  transition-all duration-500">
                            <img src={bedroom}
                                alt="Bedroom"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Bedroom</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer  transition-all duration-500">
                            <img src={kitchen} alt="Kitchen"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Kitchen</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer  transition-all duration-500">
                            <img src={office}
                                alt="Office"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Office</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer  transition-all duration-500">
                            <img src={lobby}
                                alt="Lobby"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Lobby</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                        <a href="#"
                            className="group/card relative w-[280px] md:w-[360px] aspect-square rounded-2xl overflow-hidden snap-start shrink-0 cursor-pointer  transition-all duration-500">
                            <img src={hall}
                                alt="Hall"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                            </div>
                            <div
                                className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover/card:-translate-y-1">
                                <h3 className="text-white text-2xl font-heading font-bold mb-1.5">Hall</h3>
                                <p
                                    className="text-white/80 text-sm flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/card:translate-y-0">
                                    Explore <iconify-icon icon="lucide:arrow-right" className="text-xs"></iconify-icon>
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* Redesigned Services Section */}
            <section className="py-5 px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className=" mb-10">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">Bipin Decor
                            Services
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                        {/* Service Card 1 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={uvMarbleSheet}
                                    alt="UV Marble Sheet"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">UV Marble Sheet</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    High-gloss, durable UV marble sheets providing a luxurious stone finish without the
                                    heavy cost and maintenance.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={pvcPaneling}
                                    alt="PVC Paneling"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">PVC Paneling</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    Moisture-resistant, elegant PVC panels perfect for modern walls and ceilings with
                                    endless design possibilities.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={falseCeiling} alt="False Ceiling"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">False Ceiling</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    Intricate false ceiling designs that enhance lighting, conceal wiring, and add
                                    architectural depth to any room.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={wpcLouvers}
                                    alt="WPC Louvers"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">WPC Louvers</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    Contemporary wooden-finish louvers that bring warmth, texture, and sophisticated
                                    linear patterns to your spaces.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>

                        {/* Service Card 5 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={customFurniture}
                                    alt="Custom Furniture"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">Custom Furniture</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    Bespoke furniture pieces designed to perfectly fit your space, style, and functional
                                    requirements.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>

                        {/* Service Card 6 */}
                        <div
                            className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border overflow-hidden flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img src={homeRenovation}
                                    alt="Home Renovation"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold mb-3">Home Renovation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    Comprehensive end-to-end Decor transformations tailored to your lifestyle,
                                    blending aesthetics with functionality.
                                </p>
                                <a href="#"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors w-full">
                                    View Service
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Portfolio / Before After Section */}
            {/* <section className="py-24 px-6 bg-background border-y border-border">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Portfolio</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">Featured
                                Transformations</h2>
                        </div>
                        <a href="#"
                            className="text-primary font-medium hover:text-foreground transition-colors flex items-center gap-2 border-b border-primary pb-1">
                            View All Projects <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                                alt="Living Room Transformation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <span
                                    className="bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block w-max mb-3 rounded-sm">Before
                                    & After</span>
                                <h3
                                    className="text-2xl font-heading font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Modern Living Room</h3>
                                <p
                                    className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    UV Marble Sheet & WPC Louver Installation
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-2xl"></iconify-icon>
                            </div>
                        </div>

                        
                        <div
                            className="group relative overflow-hidden rounded-sm shadow-sm aspect-[4/3] bg-muted cursor-pointer">
                            <img src="kitchn.jpg" alt="Kitchen Transformation"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <span
                                    className="bg-card/20 backdrop-blur-md text-white border border-card/30 text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block w-max mb-3 rounded-sm">Featured</span>
                                <h3
                                    className="text-2xl font-heading font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Luxury Kitchen</h3>
                                <p
                                    className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Premium PVC Paneling & False Ceiling
                                </p>
                            </div>

                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-card/50">
                                <iconify-icon icon="lucide:maximize" className="text-white text-2xl"></iconify-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-3xl">
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="relative w-full group">
                        <div
                            className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={craftsmanship} alt="Craftsmanship"
                                className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="inline-block mb-4">
                            <span
                                className="text-amber-600 text-xs md:text-sm font-bold uppercase tracking-widest bg-amber-500/10 text-amber-600 px-4 py-1.5 rounded-full">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
                            Craftsmanship <br />
                            <span className="text-foreground">Meets Elegance</span>
                        </h2>

                        <p className="text-muted-foreground text-base mb-8 leading-relaxed max-w-lg">
                            We don't just renovate spaces; we craft environments that reflect your personal style while
                            ensuring durability and flawless execution.
                        </p>

                        <div className="space-y-3">

                            <div
                                className="group flex gap-4 p-3 -ml-3 rounded-2xl hover:bg-card hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 border border-transparent hover:border-border cursor-default">
                                <div
                                    className="w-14 h-14 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <iconify-icon icon="lucide:award"
                                        className="text-2xl text-indigo-600 group-hover:text-white transition-colors duration-300"></iconify-icon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Experienced Team</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Over a decade of specialized
                                        experience in
                                        high-end installations and Decor finishing.</p>
                                </div>
                            </div>

                            <div
                                className="group flex gap-4 p-3 -ml-3 rounded-2xl hover:bg-card hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 border border-transparent hover:border-border cursor-default">
                                <div
                                    className="w-14 h-14 rounded-xl bg-cyan-50 group-hover:bg-cyan-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <iconify-icon icon="lucide:gem"
                                        className="text-2xl text-cyan-600 group-hover:text-white transition-colors duration-300"></iconify-icon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Premium Materials</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">We source only the finest quality
                                        UV marble,
                                        PVC, and WPC materials for lasting beauty.</p>
                                </div>
                            </div>

                            <div
                                className="group flex gap-4 p-3 -ml-3 rounded-2xl hover:bg-card hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 border border-transparent hover:border-border cursor-default">
                                <div
                                    className="w-14 h-14 rounded-xl bg-emerald-50 group-hover:bg-emerald-500 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <iconify-icon icon="lucide:check-circle"
                                        className="text-2xl text-emerald-600 group-hover:text-white transition-colors duration-300"></iconify-icon>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Clean Finishing</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">Impeccable attention to detail
                                        ensuring
                                        seamless joints, perfect alignment, and a flawless look.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="py-10 px-6 bg-background text-foreground relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full">
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-amber-600 text-xs font-bold md:text-sm uppercase tracking-[0.3em] block mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 text-foreground">
                            A Refined Journey <br className="hidden md:block" /> From Concept to Completion
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            Every project is handled with thoughtful planning, premium craftsmanship, and a seamless
                            execution
                            process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

                        <div
                            className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-default">
                            <div
                                className="w-12 h-12 rounded-full border border-amber-100 bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                <iconify-icon icon="lucide:phone-call" className="text-xl text-amber-600"></iconify-icon>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">Consultation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Tell us about your space, style, and installation requirements.
                            </p>
                        </div>

                        <div
                            className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-default">
                            <div
                                className="w-12 h-12 rounded-full border border-amber-100 bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                <iconify-icon icon="lucide:ruler" className="text-xl text-amber-600"></iconify-icon>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">Site Visit</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We inspect the area carefully and take accurate measurements.
                            </p>
                        </div>

                        <div
                            className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-default">
                            <div
                                className="w-12 h-12 rounded-full border border-amber-100 bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                <iconify-icon icon="lucide:file-text" className="text-xl text-amber-600"></iconify-icon>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">Quotation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Receive a clear and transparent estimate with no hidden surprises.
                            </p>
                        </div>

                        <div
                            className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-default">
                            <div
                                className="w-12 h-12 rounded-full border border-amber-100 bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                <iconify-icon icon="lucide:hammer" className="text-xl text-amber-600"></iconify-icon>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">Installation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our skilled team executes the work with precision and clean finishing.
                            </p>
                        </div>

                        <div
                            className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 cursor-default">
                            <div
                                className="w-12 h-12 rounded-full border border-amber-100 bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                                <iconify-icon icon="lucide:badge-check" className="text-xl text-amber-600"></iconify-icon>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">Final Handover</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We complete the final review and deliver a polished finished space.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <div
                        className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px]">
                    </div>
                    <div
                        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px]">
                    </div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">

                    <div className="mb-20 space-y-3">
                        <span className="text-amber-600 text-sm font-bold uppercase tracking-widest block">
                            CLIENT STORIES
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground">Words of Trust</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16 group/testimonials">

                        <div className="group/card relative">
                            <div
                                className="relative bg-card rounded-2xl p-9 pt-20 pb-10 shadow-lg border border-border 
                                        transition-all duration-300 ease-in-out
                                        group-hover/card:-translate-y-2 group-hover/card:shadow-2xl group-hover/card:border-amber-100">

                                <iconify-icon icon="lucide:quote-right"
                                    className="absolute top-6 right-6 text-border text-6xl rotate-180 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                </iconify-icon>

                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                                    alt="Amit Sharma"
                                    className="w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 -translate-x-1/2 border-8 border-card shadow-md" />

                                <h4 className="text-xl font-semibold text-foreground mt-1">Amit Sharma</h4>
                                <p className="text-sm text-amber-600 font-medium mb-4">Residential Client</p>

                                <div className="flex justify-center text-amber-400 mb-6 gap-0.5">
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                </div>

                                <p className="text-base text-muted-foreground leading-relaxed font-light">
                                    "Bipin Decors completely transformed our living space. The finish is flawless and
                                    the result
                                    looks absolutely premium."
                                </p>
                            </div>
                        </div>

                        <div className="group/card relative">
                            <div
                                className="relative bg-card rounded-2xl p-9 pt-20 pb-10 shadow-lg border border-border 
                                        transition-all duration-300 ease-in-out
                                        group-hover/card:-translate-y-2 group-hover/card:shadow-2xl group-hover/card:border-amber-100">
                                <iconify-icon icon="lucide:quote-right"
                                    className="absolute top-6 right-6 text-border text-6xl rotate-180 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                </iconify-icon>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                                    alt="Priya Kapoor"
                                    className="w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 -translate-x-1/2 border-8 border-card shadow-md" />
                                <h4 className="text-xl font-semibold text-foreground mt-1">Priya Kapoor</h4>
                                <p className="text-sm text-amber-600 font-medium mb-4">Commercial Client</p>
                                <div className="flex justify-center text-amber-400 mb-6 gap-0.5">
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed font-light">
                                    "The PVC paneling work was done with precision. The team was professional and
                                    delivered exactly
                                    what was promised."
                                </p>
                            </div>
                        </div>

                        <div className="group/card relative">
                            <div
                                className="relative bg-card rounded-2xl p-9 pt-20 pb-10 shadow-lg border border-border 
                                        transition-all duration-300 ease-in-out
                                        group-hover/card:-translate-y-2 group-hover/card:shadow-2xl group-hover/card:border-amber-100">
                                <iconify-icon icon="lucide:quote-right"
                                    className="absolute top-6 right-6 text-border text-6xl rotate-180 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                </iconify-icon>
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                                    alt="Rahul Mehta"
                                    className="w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 -translate-x-1/2 border-8 border-card shadow-md" />
                                <h4 className="text-xl font-semibold text-foreground mt-1">Rahul Mehta</h4>
                                <p className="text-sm text-amber-600 font-medium mb-4">Home Owner</p>
                                <div className="flex justify-center text-amber-400 mb-6 gap-0.5">
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                    <iconify-icon icon="lucide:star" className="text-xl"></iconify-icon>
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed font-light">
                                    "False ceiling and louvers work looks stunning. Attention to detail and finishing
                                    quality is top
                                    notch."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div
                    style={{ backgroundImage: `url(${transformSpace})` }}
                    className="absolute inset-0 opacity-10 bg-cover bg-center">
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-lg text-white/80 mb-10 font-light max-w-xl mx-auto">
                        Book a consultation with our experts today and take the first step towards your dream Decor.
                    </p>
                    <a href="#"
                        className="inline-block px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-card hover:text-secondary transition-all shadow-lg hover:shadow-xl">
                        Schedule Consultation
                    </a>
                </div>
            </section>

        </main>
    )
}

export default Home

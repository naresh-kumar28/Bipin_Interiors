import React from 'react'
import { Link } from 'react-router-dom'
import { aboutHero, mirror, labour, worker } from '../assets/images'

function About() {
    return (
        <main className="flex-grow flex flex-col w-full">

            {/* Page Header */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${aboutHero})` }}
                    className="absolute inset-0 opacity-10 bg-cover bg-center">
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Bipin Decors</h1>
                    <p className="text-lg text-white/80 font-light max-w-xl mx-auto">
                        Crafting luxurious, functional, and timeless spaces with uncompromising attention to detail.
                    </p>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">The Beginning</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground mb-8">A Legacy of
                            Design Excellence</h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                            Founded with a passion for transforming ordinary rooms into extraordinary environments,
                            Bipin Decors has grown into a premier Decor installation studio. We specialize in
                            bringing high-end residential and commercial visions to life.
                        </p>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                            Our journey began over a decade ago with a simple philosophy: Decor design should not
                            only look stunning but also withstand the test of time. Today, we are known for our
                            meticulous craftsmanship in UV marble sheets, PVC paneling, and bespoke false ceilings.
                        </p>
                        <div className="flex items-center gap-6 border-l-4 border-primary pl-6 py-2">
                            <div>
                                <p className="text-3xl font-heading font-bold text-foreground">10+</p>
                                <p className="text-xs uppercase tracking-widest mt-1 text-muted-foreground font-bold">Years
                                    Experience</p>
                            </div>
                            <div className="w-px h-12 bg-border"></div>
                            <div>
                                <p className="text-3xl font-heading font-bold text-foreground">500+</p>
                                <p className="text-xs uppercase tracking-widest mt-1 text-muted-foreground font-bold">
                                    Projects Delivered</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-lg">
                            <img src={mirror}
                                alt="Decor Design Studio" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Craftsmanship Focus */}
            <section className="py-24 px-6 bg-muted/30 border-y border-border">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground mb-16">Uncompromising Craftsmanship
                    </h2>
            
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div
                            className="bg-card p-10 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 ease-in-out hover:-translate-y-2 group">
                            <div
                                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="lucide:gem"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Premium Materials</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We meticulously source the highest grade UV marble, PVC panels, and WPC louvers. Our
                                materials are chosen for their durability, finish, and ability to elevate any space.
                            </p>
                        </div>
            
                        <div
                            className="bg-card p-10 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 ease-in-out hover:-translate-y-2 group">
                            <div
                                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="lucide:ruler"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Precision Execution</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Luxury is in the details. Our installation process is marked by exact measurements,
                                seamless joints, and a flawless finish that defines high-end Decor design.
                            </p>
                        </div>
            
                        <div
                            className="bg-card p-10 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 ease-in-out hover:-translate-y-2 group">
                            <div
                                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
                                <iconify-icon icon="lucide:users"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Client-Centric Approach</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We collaborate closely with our clients, ensuring their vision is translated into
                                reality with transparency, timely delivery, and utmost professionalism.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Experience */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square overflow-hidden rounded-sm bg-muted shadow-sm">
                                <img src={labour}
                                    alt="Craftsman at work" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-sm bg-muted shadow-sm translate-y-8">
                                <img src={worker}
                                    alt="Precision tools" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground mb-8">Master
                            Artisans at Work</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light">
                            Behind every flawless installation is a team of dedicated artisans. Our installers are not
                            just workers; they are craftsmen who take immense pride in their art.
                        </p>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                            With rigorous training and years of hands-on experience, our team handles complex
                            architectural challenges with ease, ensuring that every panel, sheet, and louver is placed
                            with absolute perfection.
                        </p>
                        <a href="#"
                            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 transition-all shadow-md">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About

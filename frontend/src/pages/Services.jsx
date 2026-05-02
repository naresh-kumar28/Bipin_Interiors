import React from 'react'
import { Link } from 'react-router-dom'
import { servicesHero, uvMarbleSheet, pvcPaneling, falseCeiling, wpcLouvers, transformSpace } from '../assets/images'

function Services() {
    return (
        <main className="flex-grow flex flex-col w-full">

            {/* Page Header */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${servicesHero})` }}
                    className="absolute inset-0 opacity-10 bg-cover bg-center">
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">What We Do</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Premium Services</h1>
                    <p className="text-lg text-white/80 font-light max-w-xl mx-auto">
                        Expert installations and bespoke finishes designed to elevate your living and working
                        environments.
                    </p>
                </div>
            </section>

            {/* Services Detailed Breakdown */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Service 1: UV Marble Sheet */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted shadow-lg">
                                <img src={uvMarbleSheet}
                                    alt="UV Marble Sheet Installation" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full border border-primary/20 -z-10">
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <iconify-icon icon="lucide:grid-3x3"></iconify-icon>
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-foreground">UV Marble Sheet Installation
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                                Experience the luxurious look of natural stone without the immense weight, cost, and
                                maintenance. Our UV marble sheets offer a high-gloss, premium finish that completely
                                transforms your walls.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Waterproof, fire-retardant, and termite-proof
                                        materials.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Seamless joint installation for a continuous
                                        stone look.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Ideal for living rooms, TV units, and luxury
                                        bathrooms.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 transition-all shadow-md">
                                Request Quote
                            </a>
                        </div>
                    </div>

                    {/* Service 2: PVC Paneling */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted shadow-lg">
                                <img src={pvcPaneling}
                                    alt="PVC Paneling" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full border border-primary/20 -z-10">
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <iconify-icon icon="lucide:layers"></iconify-icon>
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-foreground">Premium PVC Paneling</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                                Versatile, durable, and elegant. Our PVC paneling solutions are perfect for modernizing
                                spaces quickly while providing excellent insulation and moisture resistance.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Wide variety of textures, including wood grain
                                        and matte finishes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Highly resistant to dampness, making it perfect
                                        for humid areas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Quick, dust-free installation process.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 transition-all shadow-md">
                                Request Quote
                            </a>
                        </div>
                    </div>

                    {/* Service 3: False Ceiling */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted shadow-lg">
                                <img src={falseCeiling}
                                    alt="False Ceiling" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full border border-primary/20 -z-10">
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <iconify-icon icon="lucide:monitor"></iconify-icon>
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-foreground">Designer False Ceilings</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                                Elevate your space from the top down. Our custom false ceiling designs not only add
                                architectural depth but also provide intelligent solutions for ambient lighting and
                                wiring concealment.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Gypsum, POP, and PVC ceiling options tailored to
                                        your design.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Integrated cove lighting and spotlight
                                        placement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Improves room acoustics and thermal
                                        insulation.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 transition-all shadow-md">
                                Request Quote
                            </a>
                        </div>
                    </div>

                    {/* Service 4: WPC Louvers */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted shadow-lg">
                                <img src={wpcLouvers}
                                    alt="WPC Louvers" className="w-full h-full object-cover" />
                            </div>
                            <div
                                className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full border border-primary/20 -z-10">
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <iconify-icon icon="lucide:layout-dashboard"></iconify-icon>
                                </div>
                                <h2 className="text-3xl font-heading font-bold text-foreground">WPC Louver Installation</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                                Add warmth, texture, and a contemporary linear aesthetic to your Decors or exteriors
                                with our premium Wood Plastic Composite (WPC) louvers.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Authentic wood look without the maintenance of
                                        real timber.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Perfect for accent walls, partitions, and
                                        exterior facades.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <iconify-icon icon="lucide:check"
                                        className="text-primary text-lg shrink-0 mt-1"></iconify-icon>
                                    <span className="text-muted-foreground">Eco-friendly, highly durable, and
                                        weather-resistant.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-primary/90 transition-all shadow-md">
                                Request Quote
                            </a>
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

export default Services

import React from 'react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../context/SiteContext'

function Contact() {
    const { settings } = useSiteSettings();

    // Prepare WhatsApp URL
    const waNumber = settings?.whatsapp_number?.replace(/\D/g, '') || '15551234567';
    const waMessage = settings?.whatsapp_message ? encodeURIComponent(settings.whatsapp_message) : '';
    const waUrl = `https://wa.me/${waNumber}${waMessage ? `?text=${waMessage}` : ''}`;

    return (
        <main className="flex-grow flex flex-col w-full">

            {/* Page Header */}
            <section className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Get in
                        Touch</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Let's Discuss Your Project</h1>
                    <p className="text-lg text-white/80 font-light max-w-xl mx-auto">
                        Whether you have a clear vision or need expert guidance, our team is here to bring your ideas to
                        life.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
                <div className="max-w-7xl mx-auto flex justify-center">

                    {/* Direct Contact Section */}
                    <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">
                        <div className="relative overflow-hidden bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border/60 h-full w-full flex flex-col items-center justify-center">

                            {/* Soft background decorations */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl"></div>

                            {/* Icon Box */}
                            <div className="relative z-10 mb-8 w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
                                <iconify-icon icon="lucide:headphones" className="text-5xl text-primary"></iconify-icon>
                            </div>

                            {/* Headline & Description */}
                            <div className="relative z-10">
                                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">
                                    Direct Support
                                </span>

                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                                    Talk to Us Directly 😊
                                </h2>

                                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-3">
                                    Feel free to contact us for false ceiling, PVC paneling, renovation, or interior decoration work.
                                </p>

                                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
                                    No bots, no delay — direct interaction with our team.
                                </p>
                            </div>

                            {/* Call to Action Buttons */}
                            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20b858] transition-all shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                                        <path d="M16.04 2.003C8.302 2.003 2 8.305 2 16.043c0 2.475.647 4.892 1.878 7.02L2.08 29.997l7.106-1.864a14.005 14.005 0 0 0 6.854 1.746h.006c7.738 0 14.04-6.302 14.04-14.04S23.784 2.003 16.04 2.003Zm0 25.506h-.005a11.65 11.65 0 0 1-5.94-1.626l-.426-.253-4.216 1.106 1.126-4.108-.278-.421a11.637 11.637 0 0 1-1.93-6.164c0-6.434 5.234-11.669 11.675-11.669 3.117 0 6.048 1.215 8.25 3.419a11.596 11.596 0 0 1 3.417 8.25c-.001 6.434-5.235 11.466-11.673 11.466Zm6.4-8.734c-.35-.175-2.07-1.022-2.39-1.137-.32-.117-.554-.175-.787.175-.233.35-.904 1.137-1.108 1.37-.204.233-.408.262-.758.087-.35-.175-1.477-.544-2.814-1.734-1.04-.927-1.742-2.071-1.946-2.421-.204-.35-.022-.539.153-.714.157-.156.35-.408.525-.612.175-.204.233-.35.35-.583.117-.233.058-.437-.029-.612-.087-.175-.787-1.895-1.079-2.596-.284-.682-.573-.59-.787-.601l-.671-.012c-.233 0-.612.087-.933.437-.32.35-1.225 1.196-1.225 2.916s1.254 3.383 1.429 3.616c.175.233 2.468 3.769 5.978 5.287.836.361 1.488.576 1.996.737.839.267 1.602.229 2.205.139.672-.1 2.07-.846 2.362-1.662.292-.816.292-1.516.204-1.662-.087-.146-.32-.233-.67-.408Z" />
                                    </svg>
                                    Message on Whatsapp
                                </a>

                                <a
                                    href={`mailto:${settings?.contact_email || "hello@bipinDecors.com"}`}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-sm hover:bg-card transition-colors"
                                >
                                    <iconify-icon icon="lucide:mail" className="text-xl"></iconify-icon>
                                    Email Us
                                </a>

                                <a
                                    href={`tel:${settings?.contact_phone?.replace(/\s/g, '') || "+15551234567"}`}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border text-foreground font-semibold rounded-sm hover:bg-card transition-colors"
                                >
                                    <iconify-icon icon="lucide:phone" className="text-xl"></iconify-icon>
                                    Call Us
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Contact
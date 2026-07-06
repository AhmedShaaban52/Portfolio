"use client";

import { useState } from "react";
import { InteractiveCanvas } from "./InteractiveCanvas";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrans } from "@/hooks/useTrans";
import Link from "next/link";

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function WhatsappIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.851.505 3.586 1.382 5.07L2 22l5.077-1.352A9.94 9.94 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.161a8.13 8.13 0 0 1-4.152-1.135l-.298-.177-3.086.822.825-3.011-.194-.309a8.128 8.128 0 0 1-1.24-4.351c0-4.495 3.655-8.151 8.15-8.151 4.494 0 8.151 3.655 8.151 8.15 0 4.495-3.657 8.162-8.156 8.162z" />
        </svg>
    );
}

const CONTACT_INFO = [
    { icon: Mail, labelKey: "email", valueKey: "email-value" },
    { icon: MapPin, labelKey: "location", valueKey: "cairo-egypt" },
    { icon: Phone, labelKey: "phone", valueKey: "phone-number" },
];

const SOCIALS = [
    { labelKey: "whatsapp", icon: WhatsappIcon, href: "https://wa.me/201024400646" },
    { labelKey: "linkedin", icon: LinkedinIcon, href: "https://www.linkedin.com/in/ahmed-shaaban52/" },
    { labelKey: "github", icon: GithubIcon, href: "https://github.com/AhmedShaaban52" },

];

export function Contact() {
    const { t } = useTrans("contact");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSend() {
        const recipient = "ahmedshababn91@gmail.com";
        const subject = form.subject || "Project Inquiry";
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }

    return (
        <section
            id="contact"
            className="relative py-32 overflow-hidden border-t border-border/40 bg-transparent"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-50">
                <div
                    className="absolute top-[20%] left-[10%] size-100 rounded-full bg-[#00df9a]/8 blur-[100px]"
                    style={{ animation: "orb-float-1 20s ease-in-out infinite" }}
                />
                <div
                    className="absolute bottom-[10%] right-[15%] size-87.5 rounded-full bg-primary/5 blur-[90px]"
                    style={{ animation: "orb-float-3 16s ease-in-out infinite" }}
                />
            </div>
            <InteractiveCanvas />

            <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 size-125 bg-[#00df9a]/5 rounded-full blur-[120px] z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#00df9a] font-mono text-sm font-bold">04.</span>
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20">
                        {t("contact")}
                    </span>
                    <div className="flex-1 h-px bg-border/60 max-w-20" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div className="flex flex-col space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                                {t("lets-work")} <span className="text-[#00df9a]">{t("together")}</span>
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                                {t("have-a-project-in-mind")}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {CONTACT_INFO.map(({ icon: Icon, labelKey, valueKey }) => (
                                <div key={labelKey} className="flex items-center gap-4 p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/60 hover:border-[#00df9a]/30 transition-all duration-200 group cursor-pointer">
                                    <div className="p-2.5 rounded-xl bg-[#00df9a]/10 text-[#00df9a] group-hover:bg-[#00df9a] group-hover:text-black transition-all duration-200">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{t(labelKey)}</p>
                                        <p className="text-sm font-medium text-foreground">{t(valueKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <span className="text-xs text-muted-foreground">{t("find-me-on")}</span>
                            {SOCIALS.map(({ labelKey, icon: Icon, href }) => (
                                <Link key={labelKey} href={href} aria-label={t(labelKey)} target="_blank"
                                    className="p-2.5 rounded-xl bg-card/40 border border-border/60 text-muted-foreground  hover:border-[#00df9a]/40 hover:text-[#00df9a] hover:bg-[#00df9a]/5 transition-all duration-200">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/60">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-muted-foreground">{t("name")}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t("your-name")}
                                    className="bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#00df9a] focus:ring-2 focus:ring-[#00df9a]/10 transition-all duration-200"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-muted-foreground">{t("email")}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t("enter-your-email")}
                                    className="bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#00df9a] focus:ring-2 focus:ring-[#00df9a]/10 transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 mb-4">
                            <label className="text-xs font-medium text-muted-foreground">{t("subject")}</label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder={t("project-inquiry")}
                                className="bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#00df9a] focus:ring-2 focus:ring-[#00df9a]/10 transition-all duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 mb-6">
                            <label className="text-xs font-medium text-muted-foreground">{t("message")}</label>
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t("tell-me-about-your-project")}
                                className="bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-[#00df9a] focus:ring-2 focus:ring-[#00df9a]/10 transition-all duration-200 resize-none"
                            />
                        </div>

                        <Button
                            onClick={handleSend}
                            className="w-full bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-bold h-12 rounded-xl gap-2 text-sm transition-all active:scale-[0.98] shadow-[0_4px_24px_rgba(0,223,154,0.2)]"
                        >
                            <Send className="w-4 h-4" />
                            {t("send-message")}
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
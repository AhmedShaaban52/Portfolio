import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveCanvas } from "./InteractiveCanvas";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-background overflow-hidden border-t">
            <InteractiveCanvas />
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-4">Get In <span className="text-[#00df9a]">Touch</span></h2>
                <p className="text-muted-foreground mb-12">Have a project in mind? Let's build something amazing together.</p>

                <form className="grid grid-cols-1 gap-4 text-left bg-card/50 backdrop-blur-sm p-8 rounded-3xl border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="bg-background border rounded-xl px-4 py-3 outline-none focus:border-[#00df9a] transition-colors" />
                        <input type="email" placeholder="Email" className="bg-background border rounded-xl px-4 py-3 outline-none focus:border-[#00df9a] transition-colors" />
                    </div>
                    <input type="text" placeholder="Subject" className="bg-background border rounded-xl px-4 py-3 outline-none focus:border-[#00df9a] transition-colors" />
                    <textarea placeholder="Message" rows={5} className="bg-background border rounded-xl px-4 py-3 outline-none focus:border-[#00df9a] transition-colors" />
                    <Button className="bg-[#00df9a] hover:bg-[#00df9a]/90 text-black font-bold h-12 rounded-xl gap-2">
                        <Send className="w-4 h-4" /> Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}
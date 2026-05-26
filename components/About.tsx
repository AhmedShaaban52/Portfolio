"use client";

import { InteractiveCanvas } from "./InteractiveCanvas";
import { Code2, Database, Zap } from "lucide-react";

export function About() {
    return (
        <section
            id="about"
            className="relative py-28 bg-background overflow-hidden border-t border-border/40"
        >
            {/* شبكة النقاط والأنيميشن التفاعلي بالخلفية */}
            <InteractiveCanvas />

            {/* إضاءة خفيفة جانبية (Ambient Glow) لتكحيل السكشن */}
            <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00df9a]/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* ── الجزء الأيسر: المحتوى النصي ── */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20">
                        My Story
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        Passionate about weaving tech & design into <span className="text-[#00df9a]">digital reality</span>
                    </h2>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        أنا مطور ويب متكامل (Fullstack Developer) متخصص في بناء تطبيقات ويب سريعة وقابلة للتوسع باستخدام نظام **Next.js** البيئي. شغفي الأساسي هو سد الفجوة بين التصميمات العصرية الأنيقة وبين البنية البرمجية القوية والآمنة.
                    </p>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        أهتم جداً بتفاصيل تجربة المستخدم (UX/UI)، كتابة الأكواد النظيفة (Clean Code) القابلة للصيانة، وتأمين وإعداد قواعد البيانات بكفاءة عالية لضمان تقديم منتج حقيقي متكامل ومستقر بنسبة 100%.
                    </p>
                </div>

                {/* ── الجزء الأيمن: كروت المميزات ── */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">

                    {/* كارت 1 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Architecture & Clean Code</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    بناء مكونات بتصميم هندسي منظم، مرن، وقابل لإعادة الاستخدام بسهولة.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* كارت 2 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Backend & Security</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    هيكلة قواعد البيانات، وإعداد سياسات حماية صارمة مثل Row Level Security (RLS).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* كارت 3 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Performance Optimization</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    تحسين فائق للسرعة، أرشفة محركات البحث (SEO)، والاعتماد الكامل على SSR/ISR.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
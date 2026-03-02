'use client';

import { useRouter } from 'next/navigation';
import { MochiCard } from "@/components/ui/mochi-card";
import { MochiButton } from "@/components/ui/mochi-button";
import { ArrowRight, Heart, MessageCircle, Sparkles, Smile, Star } from "lucide-react";
import { LINE_BOT_URL } from "@/lib/config/constants";

const translations: Record<"en" | "ja", any> = {
  en: {
    badge: "AI Marketing Engineer",
    title1: "Break Through the Limits",
    title2: "with Systems.",
    heroDesc: "I am an AI Marketing Engineer who implements your \"winning formula\" into a marketing system that runs 24/7.",
    btnStart: "Let's Consult",
    btnSpecs: "See What I Can Do",
    btnLine: "Chat on LINE",
    phiTitle: "Automation is not about mindlessness.",
    phiDesc: "Introducing tools to eliminate tasks is becoming the standard. However, I do not offer \"build-it-and-forget-it\" automation.",
    cards: [
      { title: "I design systems with 'margin'", desc: "Allowing you to refine your product and strategy." },
      { title: "I value feedback.", desc: "Marketing is about accepting market reactions and using them for the next improvement." },
      { title: "Data-Driven Growth", desc: "A system that grows alongside your business by gathering necessary data naturally." }
    ],
    showcaseTitle: "Minimal Communication, Optimal Construction.",
    showcaseDesc: "No need for endless meetings. Share your current workflow and your ideal state, and I handle the rest.",
    showcaseBtn: "Consult on Automation"
  },
  ja: {
    badge: "AIマーケティングエンジニア",
    title1: "仕組みで、",
    title2: "「個」の限界を突破する。",
    heroDesc: "あなたの「勝ちパターン」を、24時間365日稼働するマーケティングシステムとして実装する、AIマーケティングエンジニアです。",
    btnStart: "30分で自動化ポイントを整理する",
    btnSpecs: "できることを見る →",
    btnLine: "LINEで相談",
    phiTitle: "自動化は、思考停止ではない。",
    phiDesc: "ツールを入れて作業をなくすことが、当たり前になりつつあります。しかし、私は「作りっぱなし」の自動化は提供しません。",
    cards: [
      { title: "「余白」をデザインする", desc: "運用にゆとりを持たせ、あなたが商品や戦略の磨き込みに集中できる環境を作ります。" },
      { title: "フィードバックを大切にする", desc: "市場の反応を受け取り、次の改善に活かすための仕組みを構築します。" },
      { title: "事業と共に成長するシステム", desc: "日々の運用を通じて、意思決定に必要なデータが自然と集まる仕組みを作ります。" }
    ],
    showcaseTitle: "最小限のコミュニケーションで、最適な構築を。",
    showcaseDesc: "延々と続く会議や、膨大なプロジェクト管理は必要ありません。今の流れと、理想の姿を共有してください。",
    showcaseBtn: "自動化・仕組み化の相談をする"
  }
};

export default function HomeClient({ locale }: { locale: 'en' | 'ja' }) {
  const router = useRouter();
  const t = translations[locale];

  const icons = [
    <Sparkles className="w-8 h-8" key="sparkles" />,
    <Heart className="w-8 h-8" key="heart" />,
    <Star className="w-8 h-8" key="star" />
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
      <main className="w-full max-w-6xl px-6 pb-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-40 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-10 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg floating">
              <Sparkles className="w-3.5 h-3.5 fill-primary/20" />
              {t.badge}
            </div>

            <h1 className="text-6xl md:text-8xl font-[900] text-foreground tracking-tighter leading-[0.9] text-shadow-sm">
              {t.title1} <br/>
              <span className="text-primary relative inline-block">
                {t.title2}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg font-medium">
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start">
              <MochiButton size="lg" className="group" onClick={() => router.push(`/${locale}/contact`)}>
                {t.btnStart} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MochiButton>
              <MochiButton variant="secondary" size="lg" onClick={() => router.push(`/${locale}/what-i-do`)}>
                {t.btnSpecs}
              </MochiButton>
              <MochiButton
                variant="secondary"
                size="lg"
                className="group"
                style={{ backgroundColor: '#06C755', borderColor: '#06C755', color: 'white' }}
                onClick={() => window.open(LINE_BOT_URL, '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                {t.btnLine}
              </MochiButton>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-xl aspect-square flex items-center justify-center">
             {/* Glow background */}
             <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-150" />

             {/* Glass Panel Background */}
             <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl rounded-[4rem] border border-white/40 shadow-xl" />

             <div className="relative z-10 w-full h-full p-8 floating flex items-center justify-center">
               {/* Chibi Character Overlay */}
               <div className="w-3/4 h-3/4 animate-[floating_10s_infinite_ease-in-out_2s] flex flex-col items-center justify-center text-center p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60">
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-black text-primary leading-tight">AI & Marketing Automation</h3>
                  <p className="mt-2 text-sm font-bold text-muted-foreground uppercase tracking-widest">Powered by n8n & LLM</p>
               </div>
             </div>

             {/* Interactive Squishy Elements */}
             <MochiCard className="absolute -bottom-10 right-0 md:right-10 w-72 z-20 scale-110 animate-[floating_8s_infinite_ease-in-out_1s]">
               <div className="flex items-center gap-5 mb-4">
                 <div className="w-14 h-14 rounded-3xl bg-primary flex items-center justify-center text-white shadow-inner">
                   <Sparkles className="w-7 h-7 fill-current" />
                 </div>
                 <div>
                   <h3 className="font-black text-lg">System Efficiency</h3>
                   <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Automation Score: 99%</p>
                 </div>
               </div>
               <div className="h-4 w-full bg-secondary rounded-full overflow-hidden shadow-inner">
                 <div className="h-full w-[95%] bg-primary rounded-full animate-[pulse_3s_infinite]" />
               </div>
             </MochiCard>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.phiTitle}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
              {t.phiDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.cards.map((item: any, i: number) => (
              <MochiCard key={i} className="group hover:-translate-y-4 transition-all duration-500 text-center py-12 px-10">
                <div className="w-20 h-20 rounded-[2.5rem] bg-secondary flex items-center justify-center text-primary mb-8 mx-auto shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {icons[i]}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </MochiCard>
            ))}
          </div>
        </section>

        {/* Squishy Button Showcase */}
        <section className="py-24 bg-white/30 backdrop-blur-xl rounded-[4rem] border border-white/60 shadow-inner px-12 overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black leading-tight">{t.showcaseTitle}</h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                {t.showcaseDesc}
              </p>
              <div className="flex gap-4">
                 <MochiButton variant="secondary" className="px-12" onClick={() => router.push(`/${locale}/contact`)}>{t.showcaseBtn}</MochiButton>
                 <MochiButton size="icon" className="rounded-full" onClick={() => router.push(`/${locale}/about`)}><Smile /></MochiButton>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 scale-110">
              <div className="space-y-6 pt-12">
                <div className="h-40 bg-primary/20 rounded-[3rem] border-4 border-white/60 shadow-xl floating" />
                <div className="h-24 bg-white/60 rounded-[2rem] border-2 border-white shadow-lg" />
              </div>
              <div className="space-y-6">
                <div className="h-24 bg-white/60 rounded-[2rem] border-2 border-white shadow-lg" />
                <div className="h-40 bg-secondary rounded-[3rem] border-4 border-white/60 shadow-xl floating [animation-delay:1s]" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

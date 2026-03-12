'use client';

import { useRouter } from 'next/navigation';
import { MochiCard } from "@/components/ui/mochi-card";
import { MochiButton } from "@/components/ui/mochi-button";
import { Shield } from "lucide-react";

const translations = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 2026',
    sections: {
      introduction: {
        title: 'Introduction',
        body: 'This Privacy Policy describes how Kazuya Hibara ("I", "me", or "my") collects, uses, and protects your personal information when you visit this website or use my services.',
      },
      collection: {
        title: 'Information I Collect',
        providedTitle: 'Information You Provide',
        providedIntro: 'When you contact me through the contact form, I collect:',
        providedItems: [
          'Name',
          'Email address',
          'Business information you choose to share',
          'Information about your current workflows and challenges',
          'Your preferred contact method',
        ],
        automaticTitle: 'Automatically Collected Information',
        automaticIntro: 'When you visit this website, I may automatically collect certain information about your device and usage, including:',
        automaticItems: [
          'IP address',
          'Browser type and version',
          'Pages visited and time spent',
          'Referring website',
        ],
      },
      use: {
        title: 'How I Use Your Information',
        intro: 'I use the information I collect to:',
        items: [
          'Respond to your inquiries and consultation requests',
          'Provide the services you request',
          'Improve this website and my services',
          'Send relevant communications (with your consent)',
        ],
      },
      sharing: {
        title: 'Sharing Your Information',
        intro: 'I do not sell, trade, or rent your personal information to third parties. I may share your information only in the following circumstances:',
        items: [
          'With service providers who assist in operating this website',
          'When required by law or to protect legal rights',
          'With your explicit consent',
        ],
      },
      security: {
        title: 'Data Security',
        body: 'I implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.',
      },
      rights: {
        title: 'Your Rights',
        intro: 'You have the right to:',
        items: [
          'Access the personal information I hold about you',
          'Request correction of inaccurate information',
          'Request deletion of your information',
          'Withdraw consent for data processing',
        ],
      },
      cookies: {
        title: 'Cookies',
        body: 'This website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, though this may affect some website functionality.',
      },
      contact: {
        title: 'Contact',
        body: 'If you have questions about this Privacy Policy or wish to exercise your rights, please contact me through the contact form on this website.',
      },
      changes: {
        title: 'Changes to This Policy',
        body: 'I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
      },
    },
  },
  ja: {
    title: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
    lastUpdated: '\u6700\u7d42\u66f4\u65b0\u65e5: 2026\u5e742\u6708',
    sections: {
      introduction: {
        title: '\u306f\u3058\u3081\u306b',
        body: '\u3053\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u6a9c\u539f\u548c\u4e5f\uff08\u4ee5\u4e0b\u300c\u79c1\u300d\uff09\u304c\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u8a2a\u554f\u3057\u305f\u969b\u3001\u307e\u305f\u306f\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u305f\u969b\u306b\u3001\u3069\u306e\u3088\u3046\u306b\u500b\u4eba\u60c5\u5831\u3092\u53ce\u96c6\u3001\u4f7f\u7528\u3001\u4fdd\u8b77\u3059\u308b\u304b\u3092\u8aac\u660e\u3057\u307e\u3059\u3002',
      },
      collection: {
        title: '\u53ce\u96c6\u3059\u308b\u60c5\u5831',
        providedTitle: '\u3054\u63d0\u4f9b\u3044\u305f\u3060\u304f\u60c5\u5831',
        providedIntro: '\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u3092\u901a\u3058\u3066\u3054\u9023\u7d61\u3044\u305f\u3060\u304f\u969b\u3001\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u53ce\u96c6\u3057\u307e\u3059\uff1a',
        providedItems: [
          '\u304a\u540d\u524d',
          '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
          '\u3054\u5171\u6709\u3044\u305f\u3060\u304f\u30d3\u30b8\u30cd\u30b9\u60c5\u5831',
          '\u73fe\u5728\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3068\u8ab2\u984c\u306b\u95a2\u3059\u308b\u60c5\u5831',
          '\u3054\u5e0c\u671b\u306e\u9023\u7d61\u65b9\u6cd5',
        ],
        automaticTitle: '\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831',
        automaticIntro: '\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u8a2a\u554f\u3057\u305f\u969b\u3001\u30c7\u30d0\u30a4\u30b9\u3068\u5229\u7528\u72b6\u6cc1\u306b\u95a2\u3059\u308b\u7279\u5b9a\u306e\u60c5\u5831\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\uff1a',
        automaticItems: [
          'IP\u30a2\u30c9\u30ec\u30b9',
          '\u30d6\u30e9\u30a6\u30b6\u306e\u7a2e\u985e\u3068\u30d0\u30fc\u30b8\u30e7\u30f3',
          '\u95b2\u89a7\u3057\u305f\u30da\u30fc\u30b8\u3068\u6ede\u5728\u6642\u9593',
          '\u53c2\u7167\u5143\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8',
        ],
      },
      use: {
        title: '\u60c5\u5831\u306e\u5229\u7528\u76ee\u7684',
        intro: '\u53ce\u96c6\u3057\u305f\u60c5\u5831\u306f\u4ee5\u4e0b\u306e\u76ee\u7684\u3067\u5229\u7528\u3057\u307e\u3059\uff1a',
        items: [
          '\u304a\u554f\u3044\u5408\u308f\u305b\u3084\u30b3\u30f3\u30b5\u30eb\u30c6\u30fc\u30b7\u30e7\u30f3\u306e\u4f9d\u983c\u3078\u306e\u5bfe\u5fdc',
          '\u3054\u4f9d\u983c\u306e\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b',
          '\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3068\u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584',
          '\u95a2\u9023\u3059\u308b\u60c5\u5831\u306e\u9001\u4fe1\uff08\u540c\u610f\u304c\u3042\u308b\u5834\u5408\uff09',
        ],
      },
      sharing: {
        title: '\u60c5\u5831\u306e\u5171\u6709',
        intro: '\u500b\u4eba\u60c5\u5831\u3092\u7b2c\u4e09\u8005\u306b\u8ca9\u58f2\u3001\u4ea4\u63db\u3001\u30ec\u30f3\u30bf\u30eb\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u306e\u307f\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\uff1a',
        items: [
          '\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u904b\u55b6\u3092\u652f\u63f4\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc',
          '\u6cd5\u5f8b\u3067\u8981\u6c42\u3055\u308c\u308b\u5834\u5408\u3001\u307e\u305f\u306f\u6cd5\u7684\u6a29\u5229\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081',
          '\u304a\u5ba2\u69d8\u306e\u660e\u793a\u7684\u306a\u540c\u610f\u304c\u3042\u308b\u5834\u5408',
        ],
      },
      security: {
        title: '\u30c7\u30fc\u30bf\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3',
        body: '\u500b\u4eba\u60c5\u5831\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u9069\u5207\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u3092\u5b9f\u65bd\u3057\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u3067\u306e\u9001\u4fe1\u65b9\u6cd5\u306f100%\u5b89\u5168\u3067\u306f\u306a\u304f\u3001\u7d76\u5bfe\u7684\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u4fdd\u8a3c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002',
      },
      rights: {
        title: '\u304a\u5ba2\u69d8\u306e\u6a29\u5229',
        intro: '\u304a\u5ba2\u69d8\u306b\u306f\u4ee5\u4e0b\u306e\u6a29\u5229\u304c\u3042\u308a\u307e\u3059\uff1a',
        items: [
          '\u4fdd\u6709\u3059\u308b\u500b\u4eba\u60c5\u5831\u3078\u306e\u30a2\u30af\u30bb\u30b9',
          '\u4e0d\u6b63\u78ba\u306a\u60c5\u5831\u306e\u8a02\u6b63\u4f9d\u983c',
          '\u60c5\u5831\u306e\u524a\u9664\u4f9d\u983c',
          '\u30c7\u30fc\u30bf\u51e6\u7406\u3078\u306e\u540c\u610f\u306e\u64a4\u56de',
        ],
      },
      cookies: {
        title: '\u30af\u30c3\u30ad\u30fc',
        body: '\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u306f\u3001\u30d6\u30e9\u30a6\u30b8\u30f3\u30b0\u4f53\u9a13\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u30af\u30c3\u30ad\u30fc\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u3067\u30af\u30c3\u30ad\u30fc\u3092\u62d2\u5426\u3059\u308b\u8a2d\u5b9a\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u4e00\u90e8\u306e\u6a5f\u80fd\u306b\u5f71\u97ff\u304c\u51fa\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002',
      },
      contact: {
        title: '\u304a\u554f\u3044\u5408\u308f\u305b',
        body: '\u3053\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u3064\u3044\u3066\u3054\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u3001\u307e\u305f\u306f\u6a29\u5229\u3092\u884c\u4f7f\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002',
      },
      changes: {
        title: '\u30dd\u30ea\u30b7\u30fc\u306e\u5909\u66f4',
        body: '\u3053\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u968f\u6642\u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u5909\u66f4\u304c\u3042\u3063\u305f\u5834\u5408\u306f\u3001\u6539\u8a02\u65e5\u3092\u66f4\u65b0\u3057\u3066\u3053\u306e\u30da\u30fc\u30b8\u306b\u63b2\u8f09\u3057\u307e\u3059\u3002',
      },
    },
  },
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-black text-foreground">{title}</h2>
    {children}
  </div>
);

interface ListItemsProps {
  items: string[];
}

const ListItems = ({ items }: ListItemsProps) => (
  <ul className="space-y-2 pl-6">
    {items.map((item, i) => (
      <li key={i} className="list-disc text-foreground/80 font-medium">{item}</li>
    ))}
  </ul>
);

export default function PrivacyClient({ locale }: { locale: 'en' | 'ja' }) {
  const router = useRouter();
  const t = translations[locale];
  const s = t.sections;

  return (
    <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
      <main className="w-full max-w-6xl px-6 pb-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg">
              <Shield className="w-3.5 h-3.5" />
              {locale === "en" ? "Legal" : "\u6cd5\u7684\u60c5\u5831"}
            </div>

            <h1 className="text-5xl md:text-7xl font-[900] text-foreground tracking-tighter leading-[0.95]">
              {t.title}
            </h1>

            <p className="text-muted-foreground font-medium">
              {t.lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <MochiCard className="p-8 md:p-12 max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Section title={s.introduction.title}>
              <p className="text-foreground/80 font-medium leading-relaxed">{s.introduction.body}</p>
            </Section>

            {/* Collection */}
            <Section title={s.collection.title}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black mb-2">{s.collection.providedTitle}</h3>
                  <p className="text-foreground/80 font-medium mb-3">{s.collection.providedIntro}</p>
                  <ListItems items={s.collection.providedItems} />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2">{s.collection.automaticTitle}</h3>
                  <p className="text-foreground/80 font-medium mb-3">{s.collection.automaticIntro}</p>
                  <ListItems items={s.collection.automaticItems} />
                </div>
              </div>
            </Section>

            {/* Use */}
            <Section title={s.use.title}>
              <p className="text-foreground/80 font-medium mb-3">{s.use.intro}</p>
              <ListItems items={s.use.items} />
            </Section>

            {/* Sharing */}
            <Section title={s.sharing.title}>
              <p className="text-foreground/80 font-medium mb-3">{s.sharing.intro}</p>
              <ListItems items={s.sharing.items} />
            </Section>

            {/* Security */}
            <Section title={s.security.title}>
              <p className="text-foreground/80 font-medium leading-relaxed">{s.security.body}</p>
            </Section>

            {/* Rights */}
            <Section title={s.rights.title}>
              <p className="text-foreground/80 font-medium mb-3">{s.rights.intro}</p>
              <ListItems items={s.rights.items} />
            </Section>

            {/* Cookies */}
            <Section title={s.cookies.title}>
              <p className="text-foreground/80 font-medium leading-relaxed">{s.cookies.body}</p>
            </Section>

            {/* Contact */}
            <Section title={s.contact.title}>
              <p className="text-foreground/80 font-medium leading-relaxed">{s.contact.body}</p>
            </Section>

            {/* Changes */}
            <Section title={s.changes.title}>
              <p className="text-foreground/80 font-medium leading-relaxed">{s.changes.body}</p>
            </Section>
          </MochiCard>
        </section>

        {/* Back Link */}
        <section className="pb-16 text-center">
          <MochiButton
            variant="secondary"
            onClick={() => router.push(`/${locale}`)}
          >
            {locale === "en" ? "\u2190 Back to Home" : "\u2190 \u30db\u30fc\u30e0\u306b\u623b\u308b"}
          </MochiButton>
        </section>
      </main>
    </div>
  );
}

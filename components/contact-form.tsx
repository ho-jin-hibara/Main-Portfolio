'use client';

import { useRouter } from 'next/navigation';
import { MochiCard } from "@/components/ui/mochi-card";
import { MochiButton } from "@/components/ui/mochi-button";
import { Sparkles, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { trackEvent } from "@/components/google-analytics";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const translations = {
  en: {
    title: 'Contact',
    consultationTitle: '30-Minute Online Consultation',
    consultationIntro: "Let's identify where automation can help your business. Share your current workflow and challenges, and I'll propose concrete solutions.",
    consultationNote: "No preparation needed. Just tell me about your day-to-day operations.",
    valueProposition: "I automate your winning business patterns with n8n and AI, reducing manual work by 60+ hours monthly.",
    successTitle: 'Thank you for your inquiry!',
    successBody: "I'll get back to you within 2 business days.",
    errorTitle: 'Something went wrong.',
    errorBody: 'Please try again or email me directly.',
    form: {
      name: 'Name',
      email: 'Email Address',
      businessDescription: 'Tell me about your business',
      businessPlaceholder: "What do you do? Who are your customers? What's your current situation?",
      challenges: "What's your most time-consuming task right now?",
      challengesPlaceholder: 'Describe the manual tasks or workflows that take up most of your time...',
      tools: 'What tools do you currently use?',
      otherToolsPlaceholder: 'Please specify other tools...',
      contactMethod: 'Preferred contact method',
      otherContactPlaceholder: 'Please specify (e.g., LINE, WhatsApp)...',
      submit: 'Send Inquiry',
      submitting: 'Sending...',
      required: '*',
    },
    toolOptions: ['Google Sheets', 'Google Docs', 'Google Calendar', 'Gmail', 'Notion', 'Slack', 'LINE', 'Instagram', 'Stripe', 'Other'],
    contactMethods: [
      { value: 'email', label: 'Email' },
      { value: 'zoom', label: 'Zoom' },
      { value: 'other', label: 'Other' },
    ],
  },
  ja: {
    title: 'お問い合わせ',
    consultationTitle: '30分オンライン相談',
    consultationIntro: '自動化がビジネスのどこで役立つか、一緒に特定しましょう。現在のワークフローと課題を共有していただければ、具体的なソリューションをご提案します。',
    consultationNote: '事前準備は不要です。日々の業務について教えてください。',
    valueProposition: "n8nとAIであなたの勝ちパターンを自動化し、月60時間以上の手作業を削減します。",
    successTitle: 'お問い合わせありがとうございます！',
    successBody: '2営業日以内にご連絡いたします。',
    errorTitle: '問題が発生しました。',
    errorBody: 'もう一度お試しいただくか、直接メールでご連絡ください。',
    form: {
      name: 'お名前',
      email: 'メールアドレス',
      businessDescription: 'ビジネスについて教えてください',
      businessPlaceholder: '何をされていますか？顧客は誰ですか？現在の状況は？',
      challenges: '今、最も時間のかかるタスクは何ですか？',
      challengesPlaceholder: '時間の大部分を占める手作業やワークフローについて教えてください...',
      tools: '現在使用しているツールは？',
      otherToolsPlaceholder: 'その他のツールを入力してください...',
      contactMethod: '希望の連絡方法',
      otherContactPlaceholder: '指定してください（例：LINE、WhatsApp）...',
      submit: '送信する',
      submitting: '送信中...',
      required: '*',
    },
    toolOptions: ['Google Sheets', 'Google Docs', 'Google Calendar', 'Gmail', 'Notion', 'Slack', 'LINE', 'Instagram', 'Stripe', 'その他'],
    contactMethods: [
      { value: 'email', label: 'メール' },
      { value: 'zoom', label: 'Zoom' },
      { value: 'other', label: 'その他' },
    ],
  },
};

interface ContactFormProps {
  locale: 'en' | 'ja';
}

export function ContactForm({ locale }: ContactFormProps) {
  const router = useRouter();
  const t = translations[locale];

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState<string>('email');
  const [otherTools, setOtherTools] = useState('');
  const [otherContact, setOtherContact] = useState('');
  const [utmData, setUtmData] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      const val = params.get(key);
      if (val) utm[key] = val;
    }
    if (document.referrer) utm.referrer = document.referrer;
    utm.landing_page = window.location.pathname;
    setUtmData(utm);
  }, []);

  const handleToolToggle = (tool: string) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    const toolsUsed = selectedTools.includes('Other') || selectedTools.includes('その他')
      ? [...selectedTools.filter(t => t !== 'Other' && t !== 'その他'), otherTools].join(', ')
      : selectedTools.join(', ');

    const preferredContactMethod = contactMethod === 'other'
      ? otherContact
      : contactMethod;

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      businessOverview: formData.get('business'),
      currentChallenges: formData.get('challenges'),
      toolsUsed,
      preferredContactMethod,
      _tracking: utmData,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      trackEvent('form_submit', 'contact', utmData.utm_source || 'direct');
      setFormState('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
        <main className="w-full max-w-6xl px-6 pb-20 pt-24 md:pt-32 flex-1 flex items-center justify-center">
          <MochiCard className="p-12 text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-black mb-4">{t.successTitle}</h2>
            <p className="text-muted-foreground font-medium text-lg">{t.successBody}</p>
            <MochiButton
              variant="secondary"
              className="mt-8"
              onClick={() => router.push(`/${locale}`)}
            >
              {locale === "en" ? "Back to Home" : "ホームに戻る"}
            </MochiButton>
          </MochiCard>
        </main>
      </div>
    );
  }

  if (formState === 'error') {
    return (
      <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
        <main className="w-full max-w-6xl px-6 pb-20 pt-24 md:pt-32 flex-1 flex items-center justify-center">
          <MochiCard className="p-12 text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <h2 className="text-3xl font-black mb-4">{t.errorTitle}</h2>
            <p className="text-muted-foreground font-medium text-lg">{t.errorBody}</p>
            <MochiButton
              variant="secondary"
              className="mt-8"
              onClick={() => setFormState('idle')}
            >
              {locale === "en" ? "Try Again" : "もう一度試す"}
            </MochiButton>
          </MochiCard>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
      <main className="w-full max-w-6xl px-6 pb-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 fill-primary/20" />
              {locale === "en" ? "Get in Touch" : "お問い合わせ"}
            </div>

            <h1 className="text-5xl md:text-7xl font-[900] text-foreground tracking-tighter leading-[0.95]">
              {t.title}
            </h1>

            {/* Value Proposition - under 50 words */}
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              {t.valueProposition}
            </p>
          </div>
        </section>

        {/* Consultation Info */}
        <section className="pb-12">
          <MochiCard className="p-8 md:p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-4">{t.consultationTitle}</h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-4">
              {t.consultationIntro}
            </p>
            <p className="text-primary font-bold italic">
              {t.consultationNote}
            </p>
          </MochiCard>
        </section>

        {/* Contact Form */}
        <section className="pb-24">
          <MochiCard className="p-8 md:p-12 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-bold">
                  {t.form.name} <span className="text-primary">{t.form.required}</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-white/50 border-white/60 rounded-xl h-14 text-lg font-medium placeholder:text-muted-foreground/70 placeholder:font-normal"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-bold">
                  {t.form.email} <span className="text-primary">{t.form.required}</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white/50 border-white/60 rounded-xl h-14 text-lg font-medium placeholder:text-muted-foreground/70 placeholder:font-normal"
                />
              </div>

              {/* Business Description */}
              <div className="space-y-2">
                <Label htmlFor="business" className="text-lg font-bold">
                  {t.form.businessDescription} <span className="text-primary">{t.form.required}</span>
                </Label>
                <Textarea
                  id="business"
                  name="business"
                  placeholder={t.form.businessPlaceholder}
                  required
                  className="bg-white/50 border-white/60 rounded-xl min-h-[140px] text-lg font-medium leading-relaxed placeholder:text-muted-foreground/70 placeholder:font-normal"
                />
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <Label htmlFor="challenges" className="text-lg font-bold">
                  {t.form.challenges} <span className="text-primary">{t.form.required}</span>
                </Label>
                <Textarea
                  id="challenges"
                  name="challenges"
                  placeholder={t.form.challengesPlaceholder}
                  required
                  className="bg-white/50 border-white/60 rounded-xl min-h-[140px] text-lg font-medium leading-relaxed placeholder:text-muted-foreground/70 placeholder:font-normal"
                />
              </div>

              {/* Tools */}
              <div className="space-y-4">
                <Label className="text-lg font-bold">{t.form.tools}</Label>
                <div className="flex flex-wrap gap-3">
                  {t.toolOptions.map((tool) => (
                    <label
                      key={tool}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 cursor-pointer transition-all ${selectedTools.includes(tool)
                          ? 'bg-primary/20 border-primary text-primary'
                          : 'bg-white/50 border-white/60 hover:border-primary/40'
                        }`}
                    >
                      <Checkbox
                        checked={selectedTools.includes(tool)}
                        onCheckedChange={() => handleToolToggle(tool)}
                        className="sr-only"
                      />
                      <span className="font-semibold text-base">{tool}</span>
                    </label>
                  ))}
                </div>
                {selectedTools.includes('Other') || selectedTools.includes('その他') ? (
                  <Input
                    placeholder={t.form.otherToolsPlaceholder}
                    value={otherTools}
                    onChange={(e) => setOtherTools(e.target.value)}
                    className="bg-white/50 border-white/60 rounded-xl h-14 text-lg font-medium mt-3 placeholder:text-muted-foreground/70 placeholder:font-normal"
                  />
                ) : null}
              </div>

              {/* Contact Method */}
              <div className="space-y-4">
                <Label className="text-lg font-bold">{t.form.contactMethod}</Label>
                <div className="flex flex-wrap gap-3">
                  {t.contactMethods.map((method) => (
                    <label
                      key={method.value}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 cursor-pointer transition-all ${contactMethod === method.value
                          ? 'bg-primary/20 border-primary text-primary'
                          : 'bg-white/50 border-white/60 hover:border-primary/40'
                        }`}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.value}
                        checked={contactMethod === method.value}
                        onChange={(e) => setContactMethod(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-semibold text-base">{method.label}</span>
                    </label>
                  ))}
                </div>
                {contactMethod === 'other' && (
                  <Input
                    placeholder={t.form.otherContactPlaceholder}
                    value={otherContact}
                    onChange={(e) => setOtherContact(e.target.value)}
                    className="bg-white/50 border-white/60 rounded-xl h-14 text-lg font-medium mt-3 placeholder:text-muted-foreground/70 placeholder:font-normal"
                  />
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <MochiButton
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    t.form.submitting
                  ) : (
                    <>
                      {t.form.submit}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </MochiButton>
              </div>
            </form>
          </MochiCard>
        </section>
      </main>
    </div>
  );
}

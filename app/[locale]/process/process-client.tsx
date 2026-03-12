'use client';

import { use } from 'react';

import { useRouter } from 'next/navigation';
import { MochiCard } from "@/components/ui/mochi-card";
import { MochiButton } from "@/components/ui/mochi-button";
import { ArrowRight, Sparkles, CheckCircle2, Target, Search, BarChart3, Wrench, TestTube, Plus, Settings, Shield } from "lucide-react";

const translations = {
  en: {
    title: 'The Process',
    intro: 'A clear, low-friction path from "I need help with automation" to "I have a working system." Here\'s how Phase 1 works.',
    steps: [
      {
        step: 0,
        title: 'Confirm Business Model & Winning Formula',
        description: 'Before automating anything, I need to understand what\'s already working. We\'ll identify your existing "winning formula" - the patterns that generate revenue and keep customers coming back.',
        details: [
          'Review your current customer journey',
          "Identify what's generating results",
          'Map existing workflows and touchpoints',
        ],
      },
      {
        step: 1,
        title: 'Identify Automation Candidates (Up to 3)',
        description: 'Based on your winning formula, we identify up to 3 processes that are candidates for automation. These are typically repetitive, time-consuming tasks that don\'t require human judgment.',
        details: [
          'Audit repetitive manual tasks',
          'Evaluate time spent on each',
          'Assess automation feasibility',
        ],
      },
      {
        step: 2,
        title: 'Select One Based on Impact vs. Difficulty',
        description: 'Together, we choose one automation to start with. We prioritize based on potential time savings (impact) versus implementation complexity (difficulty). Start small, prove value, then expand.',
        details: [
          'Score each candidate on impact',
          'Assess technical complexity',
          'Choose the highest ROI option',
        ],
      },
      {
        step: 3,
        title: 'Design & Implementation',
        description: "I handle all the technical work. Using n8n, Google Tools, and AI (LLM), I design and build the automation system. You don't need to learn any new tools or understand the technical details.",
        details: [
          'Design the workflow architecture',
          'Build n8n automation flows',
          'Integrate with your existing tools',
          'Implement AI components if needed',
        ],
      },
      {
        step: 4,
        title: 'Test & 1-2 Week Trial Run',
        description: 'Before going fully live, we run a trial period. This allows us to catch edge cases, fine-tune the automation, and ensure it works seamlessly with your actual workflow.',
        details: [
          'Deploy to staging/test environment',
          'Run with real (or test) data',
          'Monitor and adjust',
          'Handoff with documentation',
        ],
      },
    ],
    afterPhase1Title: 'After Phase 1',
    afterPhase1Intro: 'Once your first automation is running smoothly, you have options:',
    afterOptions: [
      { title: 'Expand:', description: 'Add more automations from your candidate list' },
      { title: 'Optimize:', description: 'Refine existing automation based on real usage data' },
      { title: 'Maintain:', description: 'Ongoing support to keep systems running' },
    ],
    afterPhase1Outro: "There's no pressure to continue. Phase 1 is designed to deliver immediate value regardless of future engagement.",
    ctaTitle: 'Ready to Start?',
    ctaText: 'The first step is a 30-minute consultation where we identify your automation opportunities together.',
    ctaButton: 'Book Your 30-Min Consultation',
  },
  ja: {
    title: 'プロセス',
    intro: '「自動化の相談をしたい」から「動くシステムがある」までの、明確でシンプルな道のり。Phase 1の進め方をご紹介します。',
    steps: [
      {
        step: 0,
        title: 'ビジネスモデル＆勝ちパターンの確認',
        description: '何かを自動化する前に、すでにうまくいっていることを理解する必要があります。収益を生み、顧客がリピートするパターン＝「勝ちパターン」を特定します。',
        details: [
          '現在のカスタマージャーニーを確認',
          '成果を出しているものを特定',
          '既存のワークフローとタッチポイントをマッピング',
        ],
      },
      {
        step: 1,
        title: '自動化候補の特定（最大3つ）',
        description: '勝ちパターンに基づき、自動化の候補となるプロセスを最大3つ特定します。通常、人の判断が不要な、繰り返しの多い時間のかかるタスクです。',
        details: [
          '繰り返しの手作業を監査',
          '各タスクにかかる時間を評価',
          '自動化の実現可能性を評価',
        ],
      },
      {
        step: 2,
        title: 'インパクト vs 難易度で1つを選択',
        description: '一緒に、最初に自動化するものを1つ選びます。潜在的な時間削減（インパクト）と実装の複雑さ（難易度）に基づいて優先順位をつけます。小さく始め、価値を証明してから拡大。',
        details: [
          '各候補のインパクトをスコアリング',
          '技術的な複雑さを評価',
          '最もROIの高いオプションを選択',
        ],
      },
      {
        step: 3,
        title: '設計＆実装',
        description: '技術的な作業はすべて私が担当します。n8n、Googleツール、AI（LLM）を使用して、自動化システムを設計・構築します。新しいツールを学んだり、技術的な詳細を理解したりする必要はありません。',
        details: [
          'ワークフローアーキテクチャの設計',
          'n8n自動化フローの構築',
          '既存ツールとの統合',
          '必要に応じてAIコンポーネントを実装',
        ],
      },
      {
        step: 4,
        title: 'テスト＆1〜2週間のトライアル',
        description: '本格稼働の前に、トライアル期間を設けます。エッジケースを発見し、自動化を微調整し、実際のワークフローとシームレスに機能することを確認します。',
        details: [
          'ステージング/テスト環境にデプロイ',
          '実データ（またはテストデータ）で実行',
          '監視と調整',
          'ドキュメント付きで引き渡し',
        ],
      },
    ],
    afterPhase1Title: 'Phase 1の後',
    afterPhase1Intro: '最初の自動化がスムーズに動き出したら、選択肢があります：',
    afterOptions: [
      { title: '拡張：', description: '候補リストから追加の自動化を構築' },
      { title: '最適化：', description: '実際の使用データに基づいて既存の自動化を改善' },
      { title: '保守：', description: 'システムの継続的なサポート' },
    ],
    afterPhase1Outro: '継続のプレッシャーはありません。Phase 1は、将来の契約に関係なく、即座に価値を提供するよう設計されています。',
    ctaTitle: '始める準備はできましたか？',
    ctaText: '最初のステップは、30分のコンサルテーションで自動化の機会を一緒に特定することです。',
    ctaButton: '30分コンサルテーションを予約',
  },
};

const stepIcons = [
  <Target className="w-6 h-6" />,
  <Search className="w-6 h-6" />,
  <BarChart3 className="w-6 h-6" />,
  <Wrench className="w-6 h-6" />,
  <TestTube className="w-6 h-6" />,
];

const afterIcons = [
  <Plus className="w-5 h-5" />,
  <Settings className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
];

export default function ProcessClient({ locale }: { locale: 'en' | 'ja' }) {
  const router = useRouter();
  const t = translations[locale];

  return (
    <div className="min-h-screen w-full flex flex-col items-center mochi-texture">
      <main className="w-full max-w-6xl px-6 pb-20">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 fill-primary/20" />
              Phase 1
            </div>

            <h1 className="text-5xl md:text-7xl font-[900] text-foreground tracking-tighter leading-[0.95]">
              {t.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto">
              {t.intro}
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="pb-24">
          <div className="space-y-8">
            {t.steps.map((step, index) => (
              <MochiCard key={index} className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Step Number */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                      {stepIcons[index]}
                    </div>
                    <div className="hidden md:block mt-4 text-center">
                      <span className="text-sm font-black text-muted-foreground">
                        Step {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="md:hidden">
                      <span className="text-sm font-black text-primary">Step {step.step}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black">{step.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                      {step.description}
                    </p>

                    <div className="pt-4">
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/80 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MochiCard>
            ))}
          </div>
        </section>

        {/* After Phase 1 Section */}
        <section className="py-24 bg-white/30 backdrop-blur-xl rounded-[4rem] border border-white/60 shadow-inner px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6">{t.afterPhase1Title}</h2>
            <p className="text-xl text-muted-foreground text-center font-medium mb-12">{t.afterPhase1Intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {t.afterOptions.map((option, i) => (
                <div key={i} className="bg-white/50 rounded-2xl p-6 border border-white/60">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {afterIcons[i]}
                  </div>
                  <h4 className="font-black text-lg mb-2">{option.title}</h4>
                  <p className="text-muted-foreground font-medium text-sm">{option.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground font-medium italic">
              {t.afterPhase1Outro}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black">{t.ctaTitle}</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-lg mx-auto">{t.ctaText}</p>
          <MochiButton size="lg" className="group" onClick={() => router.push(`/${locale}/contact`)}>
            {t.ctaButton} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MochiButton>
        </section>
      </main>
    </div>
  );
}

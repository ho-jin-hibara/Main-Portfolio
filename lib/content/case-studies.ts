import { CaseStudyArticle } from './types';

export const caseStudies: CaseStudyArticle[] = [
  // ── Case 1: Tanaka Tax & Accounting Office ──────────────────────
  {
    slug: 'tanaka-tax-office',
    category: 'case-study',
    enabled: true,
    titleEn: 'Automated Practice Management for a Solo Tax Accountant',
    titleJa: '一人税理士事務所の業務自動化システム',
    descriptionEn: '60 hours/month saved. Invoice collection rate 78% → 95%. Capacity for 12 new clients.',
    descriptionJa: '月60時間削減。請求書回収率78%→95%。新規12社の顧問を受け入れ可能に。',
    heroImage: '/images/cases/case-01-tax-office.webp',
    directAnswerEn: "A solo tax accountant saved 60 hours monthly by automating inquiry responses, invoice collection, and report generation. AI handles 80% of client communications while collection rate improved from 78% to 95%, enabling 12 new clients without additional staff.",
    directAnswerJa: "一人税理士が問い合わせ対応・請求書回収・報告書作成を自動化し月60時間を削減。AIが顧客対応の80%を処理、回収率78%→95%に改善。追加スタッフなしで新規12社を獲得。",
    datePublished: "2026-01-20",
    dateModified: "2026-02-12",
    persona: {
      nameEn: 'Yuki Tanaka',
      nameJa: '田中 優紀',
      businessTypeEn: 'Solo Tax Accountant (incorporated)',
      businessTypeJa: '一人法人 税理士事務所',
      locationEn: 'Saitama, Japan',
      locationJa: '埼玉県',
      revenue: '¥15M/year',
      staffSize: '1 + part-time assistant',
    },
    painPoints: {
      en: [
        'Spending 3 hours/day answering client inquiries via email and LINE — the same 20 questions repeated',
        'Invoice collection is entirely manual — clients pay late, but Tanaka avoids sending reminders out of discomfort',
        'End-of-year tax season is brutal: manually creating work reports for each of 30 clients',
        'Wants to take on 10+ new clients but physically cannot handle the administrative workload',
      ],
      ja: [
        'メールとLINEでのクライアント問い合わせ対応に1日3時間 — 同じ20の質問が繰り返される',
        '請求書回収がすべて手動 — クライアントの支払いが遅延するが、気まずさからリマインドを避けている',
        '確定申告期は地獄：30社分の月次業務報告書を手動作成',
        '新規10社以上を受けたいが、管理業務の負荷で物理的に不可能',
      ],
    },
    workflows: [
      'ai-inquiry-concierge',
      'ai-invoice-collection',
      'ai-timesheet-generator',
      'daily-business-summary',
    ],
    results: [
      {
        metricEn: 'Inquiry Response Time',
        metricJa: '問い合わせ応答時間',
        before: '24h',
        after: '5 min',
      },
      {
        metricEn: 'Invoice Collection Rate',
        metricJa: '請求書回収率',
        before: '78%',
        after: '95%',
      },
      {
        metricEn: 'Monthly Report Creation',
        metricJa: '月次報告書作成',
        before: '8h/month',
        after: '30 min',
      },
      {
        metricEn: 'Time Saved',
        metricJa: '削減時間',
        before: '—',
        after: '60h/month',
      },
      {
        metricEn: 'Revenue Impact',
        metricJa: '売上インパクト',
        before: '¥15M/year',
        after: '+¥6M/year',
      },
    ],
    narrativeEn: `Yuki Tanaka runs a solo tax accounting practice in Saitama, serving 30 small businesses and freelancers. Despite strong expertise, administrative overhead was consuming the majority of working hours.

**The Breaking Point**: During the 2024 tax filing season, Tanaka was working 14-hour days — 3 hours on client inquiries, 2 hours on invoice chasing, and the rest on actual accounting work. The practice was at capacity, turning away potential clients.

**The Solution**: We deployed four interconnected n8n workflows:

1. **AI Inquiry Concierge** handles first-contact responses via LINE and email. The AI learned from 2 years of past conversations to answer the most common 20 questions accurately. Only complex or new inquiries are escalated to Tanaka.

2. **AI Invoice Collection System** monitors the accounts receivable spreadsheet daily. It sends graduated reminders — polite at 7 days, firm at 14, formal at 21 — with AI drafting contextually appropriate messages. Tanaka no longer dreads the awkward conversation.

3. **AI Timesheet Generator** pulls calendar events and task logs to auto-generate monthly work reports for each client. What used to take 8 hours now takes 30 minutes of review.

4. **Daily Business Summary** delivers a morning briefing via LINE at 7 AM: which clients responded overnight, which invoices are overdue, and what deadlines are approaching.

**The Result**: Within 3 months, Tanaka recovered 60 hours per month. The invoice collection rate jumped from 78% to 95%. Most importantly, the practice took on 12 new clients — adding ¥6M in annual revenue — without hiring additional staff.`,

    narrativeJa: `田中優紀は埼玉で一人税理士事務所を運営し、30社の中小企業・フリーランスの顧問を担当。高い専門性にもかかわらず、管理業務が労働時間の大半を消費していた。

**転機**: 2024年の確定申告期、田中は14時間労働の日々を送っていた — 問い合わせ対応に3時間、請求書催促に2時間、残りが本来の会計業務。事務所はキャパシティの限界に達し、新規顧問を断っていた。

**ソリューション**: 4つの連携するn8nワークフローを導入：

1. **AI問い合わせコンシェルジュ**がLINEとメールの一次対応を担当。2年分の過去の会話から学習したAIが、よくある20の質問に正確に回答。複雑な問い合わせや新規案件のみ田中にエスカレーション。

2. **AI請求書回収システム**が売掛金スプレッドシートを毎日監視。段階的なリマインドを送信 — 7日目は丁寧に、14日目はしっかりと、21日目は正式に。AIが文脈に適したメッセージを作成。もう気まずい催促の会話は不要。

3. **AI業務報告書自動生成**がカレンダーイベントとタスクログから各クライアントの月次報告書を自動生成。以前は8時間かかっていた作業が30分のレビューだけに。

4. **デイリーサマリー**が毎朝7時にLINEでブリーフィングを配信：夜間に返答があったクライアント、未回収の請求書、近づく締切を一覧で確認。

**成果**: 3ヶ月以内に月60時間を回復。請求書回収率は78%から95%に向上。最も重要なのは、追加スタッフを雇うことなく新規12社の顧問を受け入れ、年商+600万円を達成したこと。`,
  },

  // ── Case 2: Sato Wellness Online Shop ───────────────────────────
  {
    slug: 'sato-wellness-shop',
    category: 'case-study',
    enabled: true,
    titleEn: 'Content & CRM Automation for an Organic E-Commerce Brand',
    titleJa: 'オーガニックEC事業のコンテンツ＆CRM自動化',
    descriptionEn: 'SNS time 2h/day → 15min. Repeat rate 22% → 38%. Organic traffic +180%.',
    descriptionJa: 'SNS作業2h/日→15分。リピート率22%→38%。オーガニック流入+180%。',
    heroImage: '/images/cases/case-02-wellness-shop.webp',
    directAnswerEn: "An organic e-commerce brand reduced SNS content creation from 2 hours daily to 15 minutes while growing organic traffic 180%. Automated customer segmentation improved repeat purchase rate from 22% to 38%, adding 2.4M yen annual revenue.",
    directAnswerJa: "オーガニックECがSNS作業を1日2時間から15分に短縮、オーガニック流入180%成長。自動顧客セグメンテーションでリピート率22%→38%に改善、年間240万円の売上増。",
    datePublished: "2026-01-20",
    dateModified: "2026-02-12",
    persona: {
      nameEn: 'Mai Sato',
      nameJa: '佐藤 麻衣',
      businessTypeEn: 'Solo E-Commerce Owner (incorporated)',
      businessTypeJa: '一人法人 EC事業',
      locationEn: 'Online (Shopify + Instagram)',
      locationJa: 'オンライン（Shopify + Instagram）',
      revenue: '¥8M/year (growing 30% YoY)',
      staffSize: '1 (fulfillment outsourced)',
    },
    painPoints: {
      en: [
        'Posting to 3 social media platforms daily takes 2 hours — manually creating different content for each',
        'No systematic customer follow-up after purchase; relying on hope that customers return',
        'Cannot identify loyal customers vs. churn risks — all data trapped in Shopify admin',
        'Blog abandoned after 2 months because writing SEO articles takes too long; organic search traffic is near zero',
      ],
      ja: [
        '3つのSNSへの毎日の投稿に2時間 — 各プラットフォーム用のコンテンツを手動で別々に作成',
        '購入後のフォローアップが体系化されておらず、顧客の再訪を「期待」するだけ',
        'ロイヤル顧客と離脱リスク顧客の区別ができない — すべてのデータがShopify管理画面に閉じ込め',
        'SEO記事の執筆に時間がかかりすぎてブログを2ヶ月で放棄。オーガニック検索流入はほぼゼロ',
      ],
    },
    workflows: [
      'ai-sns-content-generator',
      'seo-wordpress-auto-publisher',
      'shopify-order-sync-crm',
      'ai-calendar-concierge',
      'daily-business-summary',
    ],
    results: [
      {
        metricEn: 'SNS Content Time',
        metricJa: 'SNSコンテンツ制作時間',
        before: '2h/day',
        after: '15 min/day',
      },
      {
        metricEn: 'Blog Output',
        metricJa: 'ブログ記事数',
        before: '0/month',
        after: '4/month',
      },
      {
        metricEn: 'Organic Search Traffic',
        metricJa: 'オーガニック検索流入',
        before: 'Baseline',
        after: '+180%',
      },
      {
        metricEn: 'Customer Repeat Rate',
        metricJa: 'リピート率',
        before: '22%',
        after: '38%',
      },
      {
        metricEn: 'Revenue Impact',
        metricJa: '売上インパクト',
        before: '¥8M/year',
        after: '+¥2.4M/year',
      },
    ],
    narrativeEn: `Mai Sato launched an organic wellness brand on Shopify two years ago. Sales were growing 30% year-over-year driven by Instagram, but the growth was entirely dependent on Mai's daily manual hustle.

**The Breaking Point**: Mai was spending 2 hours every morning creating posts for Instagram, Twitter, and LINE — often at the expense of product development. The blog had been abandoned months ago. Worst of all, there was no system to bring customers back after their first purchase.

**The Solution**: Five integrated workflows transformed the business:

1. **AI SNS Content Generator** takes a single product photo or theme and generates platform-optimized posts for Instagram (with hashtags), Twitter (with hooks), and LinkedIn (for B2B wholesale inquiries). Mai reviews and approves in 15 minutes.

2. **SEO Blog Auto-Publisher** generates 4 wellness-focused SEO articles per month based on Search Console keyword opportunities. Articles are published as WordPress drafts for Mai's review.

3. **Shopify Order Sync & Customer Tagging** creates a live CRM in Google Sheets. Every customer is automatically tagged: first-time buyer, repeat customer, high-value, or at-risk (no purchase in 60+ days).

4. **AI Calendar Concierge** repurposed for post-purchase follow-ups: product usage tips sent 7 days after purchase, a satisfaction check at 14 days, and a replenishment reminder at 30 days — all personalized by product type.

5. **Daily Business Summary** provides a morning dashboard: yesterday's orders, inventory alerts, top-performing social posts, and which at-risk customers need attention.

**The Result**: Social media went from a 2-hour daily burden to a 15-minute review task. The blog grew from zero to 4 articles/month, driving a 180% increase in organic search traffic within 3 months. The customer repeat rate jumped from 22% to 38% through systematic post-purchase nurturing. Combined revenue impact: +¥2.4M per year.`,

    narrativeJa: `佐藤麻衣は2年前にShopifyでオーガニックウェルネスブランドを立ち上げた。Instagramの力で売上は年30%成長していたが、その成長は麻衣の毎日の手作業に完全に依存していた。

**転機**: 毎朝2時間をInstagram、Twitter、LINEの投稿作成に費やし、商品開発の時間を犠牲にしていた。ブログは数ヶ月前に放棄。最悪なのは、初回購入後に顧客を呼び戻すシステムがなかったこと。

**ソリューション**: 5つの統合ワークフローがビジネスを変革：

1. **AI SNS投稿自動生成**が1枚の商品写真やテーマから各プラットフォーム最適化された投稿を生成。Instagram（ハッシュタグ付き）、Twitter（フック付き）、LinkedIn（B2B卸売問い合わせ向け）。麻衣は15分でレビュー・承認。

2. **SEOブログ自動生成**がSearch Consoleのキーワード機会に基づき、月4本のウェルネス系SEO記事を生成。WordPressに下書きとして公開し、麻衣がレビュー。

3. **Shopify受注同期＆顧客タグ付け**がGoogleスプレッドシートにライブCRMを構築。すべての顧客を自動タグ付け：初回購入者、リピーター、高単価顧客、離脱リスク（60日以上未購入）。

4. **AIカレンダーコンシェルジュ**を購入後フォローに転用：購入7日後に商品使い方のコツ、14日後に満足度チェック、30日後にリピート購入リマインド — すべて商品タイプ別にパーソナライズ。

5. **デイリーサマリー**が朝のダッシュボードを提供：昨日の受注、在庫アラート、パフォーマンスの良いSNS投稿、注意が必要な離脱リスク顧客。

**成果**: SNSは1日2時間の負担から15分のレビュー作業に。ブログはゼロから月4記事に成長し、3ヶ月以内にオーガニック検索流入が180%増加。体系的な購入後ナーチャリングでリピート率が22%から38%に向上。合計売上インパクト：年間+240万円。`,
  },

  // ── Case 3: Yamamoto Consulting & Coaching ──────────────────────
  {
    slug: 'yamamoto-consulting',
    category: 'case-study',
    enabled: true,
    titleEn: 'Lead Generation & Operations Automation for a Solo Consultant',
    titleJa: '一人コンサルタントのリード獲得＆業務自動化',
    descriptionEn: 'New leads: 0 → 8-12/month. Payment collection fully automated. +¥5M/year revenue.',
    descriptionJa: '新規リード：0→月8-12件。回収完全自動化。年商+500万。',
    heroImage: '/images/cases/case-03-consulting.webp',
    directAnswerEn: "A solo consultant grew new qualified leads from 0 to 8-12 monthly through automated prospecting. AI-powered invoice collection eliminated payment chasing discomfort while competitive intelligence briefings enabled proactive strategy, adding 5M yen annual revenue.",
    directAnswerJa: "一人コンサルタントが自動化リード獲得で新規見込み客を月0件から8〜12件に。AI請求書回収で催促の心理的負担を解消、競合情報ブリーフィングで能動的戦略を実現し年間500万円の売上増。",
    datePublished: "2026-01-20",
    dateModified: "2026-02-12",
    persona: {
      nameEn: 'Kenji Yamamoto',
      nameJa: '山本 健二',
      businessTypeEn: 'Solo Business Consultant / Executive Coach (incorporated)',
      businessTypeJa: '一人法人 経営コンサルタント',
      locationEn: 'Tokyo, Japan',
      locationJa: '東京都',
      revenue: '¥20M/year',
      staffSize: '1',
    },
    painPoints: {
      en: [
        'Lead generation relies entirely on referrals and LinkedIn network — zero systematic outreach',
        'Invoices created manually in Excel, often sent late, and embarrassed to follow up on late payments',
        'No competitive intelligence — clients sometimes mention competitor moves Yamamoto is unaware of',
        'Wants to expand services (online courses) but has no time or content pipeline to create them',
      ],
      ja: [
        'リード獲得が紹介とLinkedInネットワークに完全に依存 — 体系的なアウトリーチがゼロ',
        '請求書をExcelで手動作成し、送付が遅れがち。遅延支払いの催促も気まずくて避けている',
        '競合情報をキャッチできない — クライアントから競合の動きを聞いて初めて知ることも',
        'サービス拡大（オンライン講座）を希望するが、コンテンツを作る時間もパイプラインもない',
      ],
    },
    workflows: [
      'google-maps-lead-scraper',
      'ai-invoice-collection',
      'invoice-pdf-processor',
      'competitor-intelligence-tracker',
      'business-automation-analyzer',
    ],
    results: [
      {
        metricEn: 'New Qualified Leads',
        metricJa: '新規見込みリード',
        before: '0/month',
        after: '8-12/month',
      },
      {
        metricEn: 'Invoice Processing',
        metricJa: '請求書処理時間',
        before: '3h/month',
        after: '15 min',
      },
      {
        metricEn: 'Payment Follow-up',
        metricJa: '支払い催促',
        before: 'Manual (avoided)',
        after: 'Fully automated',
      },
      {
        metricEn: 'Competitive Intelligence',
        metricJa: '競合情報',
        before: 'None',
        after: 'Weekly AI briefing',
      },
      {
        metricEn: 'Revenue Impact',
        metricJa: '売上インパクト',
        before: '¥20M/year',
        after: '+¥5M/year',
      },
    ],
    narrativeEn: `Kenji Yamamoto is an experienced business consultant and executive coach in Tokyo, working with 8-10 retainer clients. His expertise commands premium fees, but his pipeline was entirely referral-dependent — a single-point-of-failure growth model.

**The Breaking Point**: When two retainer clients ended their contracts in the same quarter, Yamamoto had no pipeline to replace them. The financial hit was significant, and it took 6 months of networking to recover. Meanwhile, invoices were being created in Excel, sent late, and payments were chronically overdue because Yamamoto found it uncomfortable to chase clients he had relationships with.

**The Solution**: Five workflows created a systematic business engine:

1. **Google Maps Lead Scraper** identifies potential consulting clients — SMBs in target industries within Tokyo — extracting contact details and enriching with website and social data. Feeds a structured outreach pipeline.

2. **AI Invoice Collection System** eliminated the emotional burden of payment chasing. AI-drafted reminders escalate from polite to formal over 30 days. Yamamoto's collection rate went to near-100% without a single awkward conversation.

3. **Invoice PDF Processor** handles incoming subcontractor invoices. PDFs are automatically parsed by GPT-4o Vision and logged to a bookkeeping sheet, saving 3 hours of monthly data entry.

4. **Competitor Intelligence Tracker** monitors 5 competitor consultants' websites, LinkedIn activity, and published content. A weekly AI-curated briefing keeps Yamamoto informed of market movements.

5. **Business Automation Analyzer** was deployed as a lead magnet: a free "Automation Readiness Assessment" that prospects fill out. The diagnostic itself demonstrates Yamamoto's expertise while qualifying leads. Three clients in the first quarter came directly from this tool.

**The Result**: New qualified leads grew from zero to 8-12 per month. Invoice processing dropped from 3 hours to 15 minutes monthly. The emotional drain of payment collection was eliminated entirely. Competitive intelligence went from zero to structured weekly briefings. Combined revenue impact: +¥5M per year from the new client acquisition channel alone.`,

    narrativeJa: `山本健二は東京で経営コンサルタント・エグゼクティブコーチとして活動し、8〜10社のリテーナー顧問を抱える。高い専門性でプレミアムフィーを実現していたが、パイプラインは完全に紹介頼み — 成長モデルの単一障害点だった。

**転機**: 同じ四半期に2社のリテーナー契約が終了した時、代わりの見込み客パイプラインがなかった。財務的な打撃は大きく、回復に6ヶ月のネットワーキングを要した。一方で請求書はExcelで手動作成、送付遅延が常態化。関係性のあるクライアントへの支払い催促は気まずく、慢性的な回収遅延が発生していた。

**ソリューション**: 5つのワークフローが体系的なビジネスエンジンを構築：

1. **Google Mapsリード収集**が東京のターゲット業種のSMBからコンサルティング見込み客を特定。連絡先を抽出し、Webサイト・SNSデータで情報を補完。構造化されたアウトリーチパイプラインに投入。

2. **AI請求書回収システム**が支払い催促の心理的負担を解消。AIが作成するリマインドが30日間で丁寧→堅め→正式にエスカレーション。回収率がほぼ100%に — 気まずい会話は一度もなし。

3. **請求書PDF自動読み取り**が外注先からの請求書を処理。PDFはGPT-4o Visionで自動解析され、帳簿スプレッドシートに記帳。月3時間のデータ入力作業を削減。

4. **競合情報トラッキング**が5社の競合コンサルタントのWebサイト、LinkedIn活動、公開コンテンツを監視。AIがキュレーションした週次ブリーフィングで市場動向を把握。

5. **ビジネス自動化AI診断**をリードマグネットとして展開：無料の「自動化準備度アセスメント」に見込み客が回答。診断そのものが山本の専門性を示しつつ、リードを精査。初四半期に3件のクライアントがこのツールから直接獲得。

**成果**: 新規見込みリードがゼロから月8〜12件に成長。請求書処理は月3時間から15分に。支払い回収の心理的負担は完全に解消。競合情報はゼロから構造化された週次ブリーフィングへ。合計売上インパクト：新規獲得チャネルだけで年間+500万円。`,
  },
];

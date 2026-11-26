
import React from "react";
import "../App.css";

export type Language = "ja" | "en";

export interface MetricItem {
  label: { ja: string; en: string };
  value: { ja: string; en: string };
}

export interface AchievementItem {
  id: string;
  category: { ja: string; en: string };
  title: { ja: string; en: string };
  period?: { ja: string; en: string };
  metrics?: MetricItem[];
  highlights: { ja: string[]; en: string[] };
  tags: { ja: string[]; en: string[] };
}

const achievementsData: AchievementItem[] = [
  {
    id: "meta-ads",
    category: {
      ja: "マーケティング戦略・広告改善 / D2C・EC",
      en: "Marketing Strategy & Advertising Optimization",
    },
    title: {
      ja: "事業目標に合わせたマーケティング戦略設計と広告・LPの継続改善",
      en: "Marketing Strategy, Advertising & Landing Page Optimization",
    },
    period: { ja: "2025年", en: "2025" },
    metrics: [
      {
        label: { ja: "広告CTR", en: "Ad CTR" },
        value: { ja: "3.0% → 4.9%", en: "3.0% → 4.9%" },
      },
      {
        label: { ja: "改善率", en: "Growth Rate" },
        value: { ja: "+63%", en: "+63%" },
      },
    ],
    highlights: {
      ja: [
        "事業内容や目標を理解したうえで課題を整理し、KPIやマーケティング施策の方向性を設計",
        "広告データやユーザー行動を分析し、ターゲット・訴求内容・クリエイティブを改善",
        "ファーストビュー、コピー、CTAなど、問い合わせや購入につながるLPの構成・導線を分析して改善を提案",
        "広告の数値だけでなく、Webサイトやユーザーの行動も踏まえた継続的な改善を実施",
      ],
      en: [
        "Identified business challenges and developed KPIs and marketing strategies aligned with business objectives",
        "Analyzed advertising data and user behavior to improve targeting, messaging, and creatives",
        "Reviewed landing page structure, first-view design, copy, and CTAs to improve conversion paths",
        "Developed ongoing optimization processes by looking beyond ad performance to the overall customer journey",
      ],
    },
    tags: {
      ja: ["Meta広告", "マーケティング戦略", "LP改善", "データ分析", "直クライアント"],
      en: ["Meta Ads", "Marketing Strategy", "LP Optimization", "Data Analysis", "Direct Client"],
    },
  },
  {
    id: "ga4-recruitment",
    category: {
      ja: "Web分析・計測基盤構築 / 教育法人",
      en: "Web Analytics & Measurement Infrastructure / Education",
    },
    title: {
      ja: "採用サイトの分析基盤構築と応募につながるユーザー導線の改善支援",
      en: "Recruitment Website Analytics & Applicant Journey Improvement",
    },
    period: { ja: "2026年 〜 現在", en: "2026 – Present" },
    metrics: [
      {
        label: { ja: "プロジェクト状況", en: "Project Status" },
        value: { ja: "構築・改善進行中", en: "In Progress" },
      },
    ],
    highlights: {
      ja: [
        "採用活動の目標に合わせたKPIの整理と、GA4・GTMを活用したカスタムイベント・計測要件の設計",
        "ユーザー行動やページ間の遷移を分析し、応募までの離脱ポイントや改善箇所を検討",
        "経営層や採用担当者がデータを把握し、施策を判断できるLooker Studioダッシュボードを設計・構築",
        "広告の成果とWebサイト内の行動をつなげて分析できる環境を整備し、応募導線の改善を支援",
      ],
      en: [
        "Defined KPIs and designed custom events and measurement requirements using GA4 and GTM",
        "Analyzed user behavior and navigation patterns to identify potential drop-off points in the application journey",
        "Designed and built Looker Studio dashboards to help management and recruitment teams make data-informed decisions",
        "Developed an analytics environment connecting advertising performance with website behavior to support applicant journey improvements",
      ],
    },
    tags: {
      ja: ["GA4", "GTM", "Looker Studio", "Web分析", "応募導線改善"],
      en: ["GA4", "GTM", "Looker Studio", "Web Analytics", "User Journey"],
    },
  },
  {
    id: "gtm-agency-tracking",
    category: {
      ja: "Web計測・技術実装 / Web代理店パートナー",
      en: "Web Tracking & Technical Implementation / Agency Partner",
    },
    title: {
      ja: "Webサイト・広告の計測環境構築とデータ品質の改善",
      en: "Website & Advertising Tracking Implementation and Data Quality Improvement",
    },
    highlights: {
      ja: [
        "代理店のマーケターやディレクターと連携し、要件に応じたGTMタグ・トリガー・計測設計を実施",
        "カスタムドメインやECサイト、複数のツールが連携する環境でのトラッキング実装",
        "広告やWebサイトのデータを正しく取得するための計測環境を構築",
        "技術的な仕様を理解したうえで、マーケティング施策の分析や改善に活用できる環境を整備",
      ],
      en: [
        "Worked with agency marketers and directors to implement GTM tags, triggers, and measurement configurations based on project requirements",
        "Implemented tracking across custom domains, e-commerce websites, and multi-tool integrations",
        "Built measurement environments to support reliable data collection from advertising platforms and websites",
        "Applied technical knowledge to create tracking infrastructure that supports marketing analysis and optimization",
      ],
    },
    tags: {
      ja: ["GTM", "GA4", "技術実装", "広告計測", "代理店パートナー"],
      en: ["GTM", "GA4", "Technical Implementation", "Ad Tracking", "Agency Partner"],
    },
  },
];

interface AchievementsSectionProps {
  lang?: Language;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  lang = "ja",
}) => {
  const uiText = {
    badgeName: "TRACK RECORD",
    title: {
      ja: "実績・プロジェクト",
      en: "Projects & Experience",
    },
    subtitle: {
      ja: (
        <>
          事業の課題整理やマーケティング施策の改善から、
          <span style={{ display: "inline-block" }}>
            Webサイトの分析・技術的な計測環境の構築まで、
          </span>
          <span style={{ display: "inline-block" }}>
            マーケティングとテクノロジーの両面から取り組んだ実務をご紹介します。
          </span>
        </>
      ),
      en: (
        <>
          From identifying business challenges and improving marketing strategies
          <br />
          to website analytics and technical implementation,
          <br />
          these projects demonstrate my combined marketing and technical expertise.
        </>
      ),
    },
    trustBadges: {
      rating: {
        ja: "クラウドソーシング評価",
        en: "Client Rating",
      },
      ctr: {
        ja: "Meta広告 CTR改善",
        en: "Meta Ads CTR Improvement",
      },
      integration: {
        ja: "対応領域",
        en: "Areas of Expertise",
      },
    },
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        {/* ヘッダー */}
        <div className="achievements-header">
          <span className="badge-category">{uiText.badgeName}</span>
          <h2 className="section-title">{uiText.title[lang]}</h2>
          <p className="section-subtitle">{uiText.subtitle[lang]}</p>
        </div>

        {/* 実績・強みバッジ */}
        <div
          className="trust-badges-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "900px",
            margin: "0 auto 40px auto",
          }}
        >
          <div
            className="trust-card"
            style={{ flex: "1 1 240px", maxWidth: "280px" }}
          >
            <span className="trust-value">
              4.9<small>/5.0</small>
            </span>
            <span className="trust-label">
              {uiText.trustBadges.rating[lang]}
            </span>
          </div>

          <div
            className="trust-card glow"
            style={{ flex: "1 1 240px", maxWidth: "280px" }}
          >
            <span className="trust-valueHighlight">
              +63<small>%</small>
            </span>
            <span className="trust-label">
              {uiText.trustBadges.ctr[lang]}
            </span>
          </div>

          <div
            className="trust-card"
            style={{ flex: "1 1 240px", maxWidth: "280px" }}
          >
            <span
              className="trust-value"
              style={{ fontSize: "1.8rem", lineHeight: "1.4" }}
            >
              Web × Marketing
            </span>
            <span className="trust-label">
              {uiText.trustBadges.integration[lang]}
            </span>
          </div>
        </div>

        {/* 実績カード */}
        <div className="cards-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="case-card">
              <div className="card-content">
                <div className="card-top">
                  <span className="card-category">
                    {item.category[lang]}
                  </span>
                  {item.period && (
                    <span className="card-period">
                      {item.period[lang]}
                    </span>
                  )}
                </div>

                {/* タイトル */}
                <h3
                  className="card-title"
                  style={{
                    lineHeight: "1.5",
                    marginBottom: "16px",
                  }}
                >
                  {item.title[lang]}
                </h3>

                {/* 数値・プロジェクト指標 */}
                {item.metrics && item.metrics.length > 0 && (
                  <div
                    className="metrics-box"
                    style={
                      item.metrics.length === 1
                        ? {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "16px",
                          }
                        : { marginBottom: "16px" }
                    }
                  >
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-item">
                        <span className="metric-label">
                          {metric.label[lang]}
                        </span>
                        <span className="metric-value">
                          {metric.value[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 主な取り組み */}
                <ul
                  className="highlights-list"
                  style={{
                    paddingLeft: "1.2rem",
                    margin: "0 0 16px 0",
                  }}
                >
                  {item.highlights[lang].map((highlight, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "8px",
                        lineHeight: "1.5",
                        fontSize: "0.88rem",
                      }}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* タグ */}
              <div className="card-footer" style={{ marginTop: "auto" }}>
                {item.tags[lang].map((tag) => (
                  <span key={tag} className="tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

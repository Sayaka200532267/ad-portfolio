
// src/components/CapabilitiesSection.tsx

import React from "react";
import { Container, Col } from "react-bootstrap";
import { IconType } from "react-icons";
import { motion, Variants } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaChartLine,
  FaChartBar,
  FaLaptop,
  FaGlobeAmericas,
  FaLanguage,
  FaLightbulb,
  FaCode,
  FaSearch,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import "../App.css";

// 行ごとのアニメーション設定
const rowVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

type Language = "ja" | "en";

interface CapabilitiesSectionProps {
  lang: Language;
}

// データ管理用の型定義
interface Capability {
  id: string;
  icons: {
    component: IconType;
    color: string;
    style?: React.CSSProperties;
  }[];
  textJa: React.ReactNode;
  textEn: React.ReactNode;
}

// 対応可能な内容
const capabilitiesData: Capability[] = [
  {
    id: "business-analysis",
    icons: [{ component: FaLightbulb, color: "#F4B400" }],
    textJa: (
      <>
        Web集客の課題整理・
        <br />
        改善の方向性の提案
      </>
    ),
    textEn: (
      <>
        Business & Website
        <br />
        Challenge Analysis
      </>
    ),
  },
  {
    id: "website-improvement",
    icons: [{ component: FaLaptop, color: "#61DAFB" }],
    textJa: (
      <>
        Webサイト・LPの
        <br />
        構成や導線の改善
      </>
    ),
    textEn: (
      <>
        Website & Landing Page
        <br />
        Optimization
      </>
    ),
  },
  {
    id: "marketing-strategy",
    icons: [{ component: FiTarget, color: "#FF7043" }],
    textJa: (
      <>
        ターゲット・集客方法・
        <br />
        マーケティング施策の設計
      </>
    ),
    textEn: (
      <>
        Marketing Strategy,
        <br />
        Targeting & Planning
      </>
    ),
  },
  {
    id: "advertising",
    icons: [
      { component: FaFacebookF, color: "#3b5998" },
      {
        component: FaInstagram,
        color: "#E1306C",
        style: { marginLeft: "0.5rem" },
      },
      {
        component: FaGoogle,
        color: "#4285F4",
        style: { marginLeft: "0.5rem" },
      },
    ],
    textJa: (
      <>
        Google広告・Meta広告の
        <br />
        設定・運用・改善
      </>
    ),
    textEn: (
      <>
        Google Ads & Meta Ads
        <br />
        Setup and Optimization
      </>
    ),
  },
  {
    id: "analytics",
    icons: [{ component: FaChartLine, color: "#34A853" }],
    textJa: (
      <>
        Webサイトや広告の
        <br />
        アクセス解析・効果測定
      </>
    ),
    textEn: (
      <>
        Website Analytics &
        <br />
        Marketing Performance
      </>
    ),
  },
  {
    id: "tracking",
    icons: [{ component: FaChartBar, color: "#FBBC05" }],
    textJa: (
      <>
        GA4・GTMなどを使った
        <br />
        データ計測環境の構築
      </>
    ),
    textEn: (
      <>
        GA4, GTM & Tracking
        <br />
        Implementation
      </>
    ),
  },
  {
    id: "web-technical",
    icons: [{ component: FaCode, color: "#7952B3" }],
    textJa: (
      <>
        Webサイトの制作・
        <br />
        CMS設定・技術的な改善
      </>
    ),
    textEn: (
      <>
        Website Development,
        <br />
        CMS & Technical Support
      </>
    ),
  },
  {
    id: "data-reporting",
    icons: [{ component: FaSearch, color: "#17A2B8" }],
    textJa: (
      <>
        データ分析・レポート作成・
        <br />
        改善施策の検討
      </>
    ),
    textEn: (
      <>
        Data Analysis, Reporting
        <br />
        & Optimization Planning
      </>
    ),
  },
  {
    id: "global-expansion",
    icons: [
      { component: FaGlobeAmericas, color: "#17a2b8" },
      {
        component: FaLanguage,
        color: "#6f42c1",
        style: { marginLeft: "0.5rem" },
      },
    ],
    textJa: (
      <>
        海外展開・日本市場進出・
        <br />
        Webサイトや広告のローカライズ
      </>
    ),
    textEn: (
      <>
        Cross-Border Marketing
        <br />
        & Localization
      </>
    ),
  },
];

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  lang,
}) => {
  // 3つずつ配列を分割して行を作る
  const rows = [];

  for (let i = 0; i < capabilitiesData.length; i += 3) {
    rows.push(capabilitiesData.slice(i, i + 3));
  }

  return (
    <Container className="capabilities-section-container py-4">
      {/* セクションタイトル */}
      <h3
        className="about-section-title text-center"
        style={{ margin: "3rem 0 1rem 0", fontSize: "1.7rem" }}
      >
        {lang === "ja" ? "対応可能な内容" : "Services & Capabilities"}
      </h3>

      <p
        className="text-center mb-5"
        style={{ lineHeight: "1.8", color: "#64748b" }}
      >
        {lang === "ja"
          ? "現状の整理から改善の提案、必要な設定や実装まで、事業の状況に合わせて幅広く対応します。"
          : "From identifying challenges and recommending improvements to technical setup and implementation, I provide support based on your business needs."}
      </p>

      <div className="text-center">
        {rows.map((rowItems, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="row justify-content-center mb-4"
            custom={rowIndex}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {rowItems.map((item) => (
              <Col xs={6} md={4} key={item.id} className="about-icon-col">
                <div>
                  {item.icons.map((icon, idx) => {
                    const IconComponent = icon.component;

                    return (
                      <IconComponent
                        key={idx}
                        size={70}
                        color={icon.color}
                        style={icon.style}
                      />
                    );
                  })}
                </div>

                <p className="mt-2">
                  {lang === "ja" ? item.textJa : item.textEn}
                </p>
              </Col>
            ))}
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default CapabilitiesSection;

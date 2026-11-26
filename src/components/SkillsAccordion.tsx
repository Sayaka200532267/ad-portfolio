
// src/components/SkillsAccordion.tsx

import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import "../App.css";

import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaTags,
  FaDatabase,
  FaGlobeAmericas,
  FaPaperPlane,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaCode,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCanva,
  SiAdobeillustrator,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

import { AiOutlineLineChart } from "react-icons/ai";

type Language = "ja" | "en";

interface SkillsAccordionProps {
  lang: Language;
}

const translations = {
  ja: {
    title: "スキル・使用ツール",
    subtitle:
      "マーケティングからWeb制作、データ分析、技術的な実装まで、課題に応じて幅広く対応しています。",
    categories: {
      web: "Web開発・技術",
      marketing: "Webマーケティング・広告",
      analytics: "アクセス解析・計測",
      data: "データ分析・データベース",
      design: "デザイン・クリエイティブ",
      languages: "言語・海外対応",
    },
    items: {
      web: [
        "HTML5 / CSS3",
        "JavaScript / React",
        "PHP",
        "WordPress",
        "Shopify",
        "Drupal",
      ],
      marketing: [
        "Google広告",
        "Meta広告（Facebook / Instagram）",
        "Web集客施策・広告運用",
        "Webサイト・LP改善",
        "ターゲット・顧客導線の検討",
      ],
      analytics: [
        "Google Analytics 4（GA4）",
        "Google Tag Manager（GTM）",
        "Looker Studio",
        "Microsoft Clarity",
        "コンバージョン計測・イベント設定",
      ],
      data: [
        "SQL（BigQuery）",
        "広告・Webサイトデータの分析",
        "データ集計・レポート作成",
      ],
      design: [
        "Figma",
        "Canva",
        "Adobe Illustrator",
        "Webサイト・LPのデザイン調整",
        "広告クリエイティブの改善",
      ],
      languages: [
        "日本語",
        "英語（ビジネスコミュニケーション・ローカライズ対応）",
      ],
    },
    contact: {
      title: "お問い合わせ",
      subtitle:
        "Web集客やサイト改善について、何から始めればいいかわからない段階でもお気軽にご相談ください。",
      button: "メールで相談する",
    },
  },

  en: {
    title: "Skills & Technologies",
    subtitle:
      "Combining digital marketing, web development, analytics, and technical implementation to solve business challenges.",
    categories: {
      web: "Web Development & Technology",
      marketing: "Digital Marketing & Advertising",
      analytics: "Web Analytics & Tracking",
      data: "Data Analysis & Databases",
      design: "Design & Creative Tools",
      languages: "Languages & Global Support",
    },
    items: {
      web: [
        "HTML5 / CSS3",
        "JavaScript / React",
        "PHP",
        "WordPress",
        "Shopify",
        "Drupal",
      ],
      marketing: [
        "Google Ads",
        "Meta Ads (Facebook / Instagram)",
        "Online Marketing & Ad Operations",
        "Website & Landing Page Optimization",
        "Targeting & Customer Journey Planning",
      ],
      analytics: [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager (GTM)",
        "Looker Studio",
        "Microsoft Clarity",
        "Conversion Tracking & Event Setup",
      ],
      data: [
        "SQL (BigQuery)",
        "Advertising & Website Data Analysis",
        "Data Reporting & Visualization",
      ],
      design: [
        "Figma",
        "Canva",
        "Adobe Illustrator",
        "Website & Landing Page Design Adjustments",
        "Ad Creative Optimization",
      ],
      languages: [
        "Japanese",
        "English (Business Communication & Localization)",
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Have questions about improving your website or online marketing? Feel free to reach out, even if you're not sure where to start.",
      button: "Contact Me by Email",
    },
  },
};

const SkillsAccordion: React.FC<SkillsAccordionProps> = ({ lang }) => {
  const t = translations[lang];

  const skillGroups = [
    {
      key: "0",
      title: t.categories.web,
      icon: <FaLaptopCode className="me-2 text-primary" />,
      items: t.items.web,
      icons: [
        <SiHtml5 className="me-2 text-danger" />,
        <SiCss3 className="me-2 text-primary" />,
        <SiJavascript className="me-2 text-warning" />,
        <FaReact className="me-2 text-info" />,
        <FaCode className="me-2 text-secondary" />,
        <SiWordpress className="me-2 text-primary" />,
      ],
    },
    {
      key: "1",
      title: t.categories.marketing,
      icon: <FaBullhorn className="me-2 text-danger" />,
      items: t.items.marketing,
      icons: [
        <FaGoogle className="me-2 text-primary" />,
        <FaFacebookF className="me-2 text-primary" />,
        <FaInstagram className="me-2 text-danger" />,
        <FaBullhorn className="me-2 text-secondary" />,
        <FaLaptopCode className="me-2 text-info" />,
      ],
    },
    {
      key: "2",
      title: t.categories.analytics,
      icon: <FaChartLine className="me-2 text-success" />,
      items: t.items.analytics,
      icons: [
        <AiOutlineLineChart className="me-2 text-warning" />,
        <FaTags className="me-2 text-info" />,
        <FaChartLine className="me-2 text-success" />,
        <AiOutlineLineChart className="me-2 text-warning" />,
        <FaTags className="me-2 text-info" />,
      ],
    },
    {
      key: "3",
      title: t.categories.data,
      icon: <FaDatabase className="me-2 text-secondary" />,
      items: t.items.data,
      icons: [
        <FaDatabase className="me-2 text-secondary" />,
        <AiOutlineLineChart className="me-2 text-warning" />,
        <FaChartLine className="me-2 text-success" />,
      ],
    },
    {
      key: "4",
      title: t.categories.design,
      icon: <SiFigma className="me-2 text-danger" />,
      items: t.items.design,
      icons: [
        <SiFigma className="me-2 text-danger" />,
        <SiCanva className="me-2 text-info" />,
        <SiAdobeillustrator className="me-2 text-warning" />,
        <FaLaptopCode className="me-2 text-info" />,
        <FaInstagram className="me-2 text-danger" />,
      ],
    },
    {
      key: "5",
      title: t.categories.languages,
      icon: <FaGlobeAmericas className="me-2 text-success" />,
      items: t.items.languages,
      icons: [
        <FaGlobeAmericas className="me-2 text-success" />,
        <FaGlobeAmericas className="me-2 text-info" />,
      ],
    },
  ];

  return (
    <Container id="skills" className="py-5">
      {/* スキルセクション */}
      <div className="mb-5">
        <h2
          className="text-center mb-3 fw-bold"
          style={{ fontSize: "1.8rem" }}
        >
          {t.title}
        </h2>

        <p
          className="text-center text-muted mb-4"
          style={{ lineHeight: "1.8" }}
        >
          {t.subtitle}
        </p>

        <Accordion
          alwaysOpen
          className="custom-accordion mx-auto"
          style={{ maxWidth: "800px" }}
        >
          {skillGroups.map((group) => (
            <Accordion.Item
              key={group.key}
              eventKey={group.key}
              className="border-0 mb-2 rounded shadow-sm overflow-hidden"
            >
              <Accordion.Header className="custom-accordion-header">
                {group.icon}
                {group.title}
              </Accordion.Header>

              <Accordion.Body className="text-center py-4 bg-light">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3 align-items-center">
                  {group.items.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span style={{ minWidth: "28px", textAlign: "center" }}>
                        {group.icons[index]}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <hr className="my-5 opacity-25" />

      {/* お問い合わせセクション */}
      <div id="contact" className="pt-3">
        <Card
          className="border-0 shadow-lg mx-auto rounded-4 overflow-hidden"
          style={{ maxWidth: "680px" }}
        >
          <Card.Body className="p-4 p-md-5 text-center">
            <h3
              className="fw-bold mb-2"
              style={{ fontSize: "1.6rem" }}
            >
              {t.contact.title}
            </h3>

            <p className="text-muted small mb-4">
              {t.contact.subtitle}
            </p>

            <a
              href="mailto:Sayaka.ohara.work@gmail.com"
              className="btn w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 border-0 text-white"
              style={{
                backgroundColor: "#458ddb",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <FaPaperPlane />
              {t.contact.button}
            </a>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SkillsAccordion;


// src/components/MainSection.tsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowDown,
} from "react-icons/fa";
import "../App.css";

type Language = "ja" | "en";

interface MainSectionProps {
  lang: Language;
}

interface ComparisonPair {
  problemJa: string;
  problemEn: string;
  solutionJa: string;
  solutionEn: string;
}

const comparisonData: ComparisonPair[] = [
  {
    problemJa: "ホームページを作ったけれど、問い合わせや集客につながらない",
    problemEn:
      "You have a website, but it's not generating inquiries or attracting customers.",
    solutionJa:
      "サイトの内容や見せ方、サービスの伝わりやすさ、問い合わせまでの流れを確認し、集客につながる改善策を提案します。",
    solutionEn:
      "I review your website content, messaging, and customer journey to identify ways to turn visitors into potential customers.",
  },
  {
    problemJa: "広告を出しているのに、思うような成果が出ない",
    problemEn:
      "You're running ads, but they're not delivering the results you expected.",
    solutionJa:
      "広告だけでなく、広告を見た人が訪れるWebサイトやLPまで確認し、問い合わせにつながらない原因を探ります。",
    solutionEn:
      "I look beyond your ads to examine the website and landing pages visitors reach, identifying what's preventing them from taking action.",
  },
  {
    problemJa: "SNSを始めたいけれど、何を発信すればいいかわからない",
    problemEn:
      "You want to start using social media, but aren't sure what to post or where to begin.",
    solutionJa:
      "SNSを始める前に、サービスの見せ方やターゲット、Webサイトや問い合わせ先など、集客の土台が整っているかを確認します。そのうえで、SNSが適切な手段かどうかも含めて提案します。",
    solutionEn:
      "Before starting social media, I review your service positioning, target audience, website, and inquiry process. I also help determine whether social media is the right channel for your business.",
  },
  {
    problemJa: "何が問題なのか、どこから改善すればいいかわからない",
    problemEn:
      "You know something isn't working, but don't know what to improve first.",
    solutionJa:
      "Webサイトや広告、現在の集客方法を全体的に確認し、データやユーザーの行動をもとに優先して取り組む課題を整理します。",
    solutionEn:
      "I assess your website, advertising, and current marketing activities to identify the main issues and prioritize practical improvements.",
  },
  {
    problemJa: "Webサイトや広告の効果がわからず、判断に困っている",
    problemEn:
      "You can't clearly tell whether your website and marketing activities are working.",
    solutionJa:
      "必要なデータを正しく取得できる環境を整え、アクセス状況や広告の成果を把握し、次の改善につなげられるようにします。",
    solutionEn:
      "I set up reliable tracking and reporting so you can understand your website and advertising performance and make informed decisions.",
  },
  {
    problemJa: "Webやマーケティングに詳しい人が社内にいない",
    problemEn:
      "You don't have an in-house person who can manage your website or online marketing.",
    solutionJa:
      "課題の整理から施策の検討、Web制作・設定・分析まで、必要なことを一緒に考え、実行をサポートします。",
    solutionEn:
      "I work as your web and marketing partner, helping you identify challenges, explore solutions, and put them into action—from website development to analytics.",
  },
];

const MainSection: React.FC<MainSectionProps> = ({ lang }) => {
  const isJa = lang === "ja";

  return (
    <Container style={{ maxWidth: 960, margin: "0 auto" }} className="py-4">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-3 mb-3" style={{ color: "#1e293b" }}>
          {isJa
            ? "Web集客やサイト運営で、こんなお悩みはありませんか？"
            : "Need Help With Your Website or Online Marketing?"}
        </h2>
        <p
          className="text-muted small"
          style={{ color: "#64748b", lineHeight: "1.8" }}
        >
          {isJa
            ? "今の状況や課題を整理し、マーケティングと技術の両面から、事業に合った改善策をご提案します。"
            : "I help businesses identify what they need and find practical solutions by combining marketing expertise and technical knowledge."}
        </p>
      </div>

      {/* Desktop */}
      <div className="pc-block d-none d-md-block">
        <Row className="g-4 mb-4">
          {/* Common Challenges */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Header
                className="text-white py-3 fw-bold d-flex align-items-center justify-content-center fs-5"
                style={{ backgroundColor: "#334155" }}
              >
                <FaExclamationTriangle className="me-2 text-warning" />
                {isJa ? "よくあるお悩み" : "Common Challenges"}
              </Card.Header>

              <Card.Body className="p-4" style={{ backgroundColor: "#f8fafc" }}>
                <ul className="list-unstyled mb-0">
                  {comparisonData.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start mb-3 pb-3 border-bottom border-light"
                      style={{ minHeight: "60px" }}
                    >
                      <span className="badge bg-danger bg-opacity-10 text-danger rounded-circle me-3 mt-1 px-2 py-1 fs-6 flex-shrink-0 fw-bold">
                        ?
                      </span>
                      <span
                        className="text-secondary small fw-medium"
                        style={{ lineHeight: "1.7", color: "#475569" }}
                      >
                        {isJa ? item.problemJa : item.problemEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Support and Solutions */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Header
                className="text-white py-3 fw-bold d-flex align-items-center justify-content-center fs-5"
                style={{ backgroundColor: "#0f172a" }}
              >
                <FaCheckCircle className="me-2 text-success" />
                {isJa ? "改善に向けたサポート" : "How I Can Help"}
              </Card.Header>

              <Card.Body className="p-4 bg-white">
                <ul className="list-unstyled mb-0">
                  {comparisonData.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start mb-3 pb-3 border-bottom border-light"
                      style={{ minHeight: "60px" }}
                    >
                      <FaCheckCircle
                        className="text-success me-3 mt-1 flex-shrink-0"
                        style={{ fontSize: "1.1rem" }}
                      />
                      <span
                        className="small fw-medium"
                        style={{ lineHeight: "1.7", color: "#1e293b" }}
                      >
                        {isJa ? item.solutionJa : item.solutionEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Mobile */}
      <div className="mobile-block d-md-none">
        {comparisonData.map((item, idx) => (
          <Card
            key={idx}
            className="mb-4 border-0 shadow-sm rounded-4 overflow-hidden"
          >
            {/* Challenge */}
            <Card.Body className="p-3 bg-light border-start border-4 border-secondary">
              <div className="d-flex align-items-center text-muted fw-bold small mb-2">
                <FaExclamationTriangle className="me-1 text-warning" />
                {isJa ? `よくあるお悩み ${idx + 1}` : `Challenge ${idx + 1}`}
              </div>

              <p
                className="mb-0 small fw-medium"
                style={{ color: "#475569", lineHeight: "1.7" }}
              >
                {isJa ? item.problemJa : item.problemEn}
              </p>
            </Card.Body>

            {/* Arrow */}
            <div className="text-center py-1 bg-white text-muted">
              <FaArrowDown
                style={{ fontSize: "0.8rem", color: "#0f172a" }}
              />
            </div>

            {/* Solution */}
            <Card.Body className="p-3 bg-white border-start border-4 border-dark">
              <div
                className="d-flex align-items-center fw-bold small mb-2"
                style={{ color: "#0f172a" }}
              >
                <FaCheckCircle className="me-1 text-success" />
                {isJa ? "改善に向けたサポート" : "How I Can Help"}
              </div>

              <p
                className="mb-0 small fw-medium"
                style={{ color: "#1e293b", lineHeight: "1.7" }}
              >
                {isJa ? item.solutionJa : item.solutionEn}
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MainSection;

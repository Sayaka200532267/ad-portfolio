
// src/components/AboutSection.tsx

import React, { useState } from "react";
import { Row, Col, Image, Container, Modal } from "react-bootstrap";
import { FaChartLine, FaGlobeAmericas, FaCheck } from "react-icons/fa";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

type Language = "ja" | "en";

interface AboutSectionProps {
  lang: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 名前・キャッチコピー
  const NameTitle = () => (
    <div className="title-area mb-3 text-center">
      <h2
        className="about-main-title"
        style={{ fontSize: "1.3rem", lineHeight: "1.6" }}
      >
        {lang === "ja" ? (
          <>
          小原さやかです。
            <br />
            Webの仕組みと
            <br />マーケティングの両面から、
            <br />
            事業の課題を見つけ<br />解決をサポートします。
            </>
        ) : (
          <>
            Hi, I'm Sayaka Ohara.
            <br />
            Helping businesses solve online growth challenges through
            marketing and technology.
          </>
        )}
      </h2>
    </div>
  );

  // 強み1：Webとマーケティング
  const StrengthOne = () => (
    <div className="strength-box border-start-blue p-4 mb-4 bg-white rounded shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <FaChartLine className="text-primary me-2 flex-shrink-0" size={24} />
        <h3 className="strength-heading m-0">
          {lang === "ja"
            ? "Webの仕組みとマーケティング、両方の視点から課題を見つけます。"
            : "Combining Marketing and Technical Knowledge to Solve Business Challenges."}
        </h3>
      </div>

      <ul
        className="custom-bullet-list ps-0 mb-0"
        style={{ listStyle: "none" }}
      >
        <li className="d-flex align-items-start mb-3" style={{ lineHeight: "1.7" }}>
          <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
          <span>
            {lang === "ja"
              ? "広告やSNSだけを見るのではなく、サービスの内容、ターゲット、Webサイト、問い合わせまでの流れを含めて現状を把握します。"
              : "I look beyond ads and social media to understand the entire customer journey, including your services, target audience, website, and inquiry process."}
          </span>
        </li>

        <li className="d-flex align-items-start" style={{ lineHeight: "1.7" }}>
          <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
          <span>
            {lang === "ja"
              ? "課題に応じて、WebサイトやLPの改善、広告施策、アクセス解析、計測環境の構築などを組み合わせ、提案から実装・改善まで対応します。"
              : "Depending on your needs, I combine website and landing page improvements, advertising, web analytics, and tracking implementation — from planning to execution and optimization."}
          </span>
        </li>
      </ul>
    </div>
  );

  // 強み2：海外経験・クロスボーダー対応
  const StrengthTwo = () => (
    <div className="strength-box border-start-green p-4 mb-4 bg-white rounded shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <FaGlobeAmericas className="text-success me-2 flex-shrink-0" size={24} />
        <h3 className="strength-heading m-0">
          {lang === "ja"
            ? "日本と海外、異なる市場やユーザーを理解した対応が可能です。"
            : "Supporting Businesses Across Japanese and International Markets."}
        </h3>
      </div>

      <ul
        className="custom-bullet-list ps-0 mb-0"
        style={{ listStyle: "none" }}
      >
        <li className="d-flex align-items-start mb-3" style={{ lineHeight: "1.7" }}>
          <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
          <span>
            {lang === "ja"
              ? "カナダでの留学・就業経験を通じて培った英語力と異文化理解を活かし、海外企業とのコミュニケーションや英語での業務に対応します。"
              : "With experience studying and working in Canada, I bring English communication skills and cross-cultural understanding to international projects."}
          </span>
        </li>

        <li className="d-flex align-items-start" style={{ lineHeight: "1.7" }}>
          <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
          <span>
            {lang === "ja"
              ? "市場ごとの文化やユーザー行動の違いを踏まえ、日本企業の海外展開や海外企業の日本市場進出をサポートします。"
              : "I support Japanese businesses expanding overseas and international businesses entering Japan, taking local markets and customer behavior into account."}
          </span>
        </li>
      </ul>
    </div>
  );

  // お悩み・解決ブロック
  const TroubleBlock = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`trouble-solution-box p-${mobile ? "3" : "4"} rounded text-center mb-${mobile ? "3" : "4"} description-text ${mobile ? "bg-light" : ""}`}
    >
      <p
        className={`trouble-quote mb-2 description-text ${mobile ? "small text-muted" : ""}`}
        style={{ lineHeight: mobile ? "1.6" : undefined }}
      >
        {lang === "ja" ? (
          <>
            「Webから問い合わせを増やしたいけれど、何から始めればいいかわからない」
            <br />
            「広告やSNSを始めたいけれど、今の状態で効果が出るのかわからない」
            <br />
            「Webサイトを作ったものの、その後どう改善すればいいかわからない」
          </>
        ) : (
          <>
            "We want more inquiries through our website, but don't know where to start."
            <br />
            "We want to use ads or social media, but aren't sure if we're ready."
            <br />
            "We have a website, but don't know how to improve it."
          </>
        )}
      </p>

      <p
        className={`solution-text m-0 description-text ${mobile ? "small fw-bold" : ""}`}
        style={{ lineHeight: "1.6" }}
      >
        {lang === "ja"
          ? "まずは事業やWebサイトの現状を一緒に整理し、本当に必要なことを見極めます。施策の提案だけでなく、Web制作・設定・計測・分析・改善まで、状況に合わせてサポートします。"
          : "I start by understanding your business and current online presence to identify what you actually need. From planning to website development, technical setup, analytics, and ongoing improvements, I provide practical support based on your situation."}
      </p>
    </div>
  );

  // PC用コンテンツ
  const AboutContentPC = () => (
    <div className="about-full-text">
      <StrengthOne />
      <StrengthTwo />
      <TroubleBlock />
    </div>
  );

  // スマホ用コンテンツ
  const AboutContentMobile = () => (
    <div className="about-full-text-mobile">
      <div className="strength-box border-start-blue p-3 mb-3 bg-white rounded shadow-sm">
        <div className="d-flex align-items-start mb-3">
          <FaChartLine className="text-primary me-2 flex-shrink-0 mt-1" size={20} />
          <h3
            className="strength-heading m-0 fs-6 fw-bold"
            style={{ lineHeight: "1.5" }}
          >
            {lang === "ja"
              ? "Webの仕組みとマーケティング、両方の視点から課題を見つけます。"
              : "Combining Marketing and Technical Knowledge to Solve Business Challenges."}
          </h3>
        </div>

        <ul
          className="custom-bullet-list ps-0 mb-0"
          style={{ listStyle: "none" }}
        >
          <li className="d-flex align-items-start mb-3" style={{ lineHeight: "1.6" }}>
            <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "広告やSNSだけを見るのではなく、サービスの内容、ターゲット、Webサイト、問い合わせまでの流れを含めて現状を把握します。"
                : "I look beyond ads and social media to understand your services, target audience, website, and inquiry process."}
            </span>
          </li>

          <li className="d-flex align-items-start" style={{ lineHeight: "1.6" }}>
            <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "課題に応じて、WebサイトやLPの改善、広告施策、アクセス解析、計測環境の構築などを組み合わせ、提案から実装・改善まで対応します。"
                : "I combine website improvements, advertising, web analytics, and tracking implementation — from planning to execution and optimization."}
            </span>
          </li>
        </ul>
      </div>

      <div className="strength-box border-start-green p-3 mb-3 bg-white rounded shadow-sm">
        <div className="d-flex align-items-start mb-3">
          <FaGlobeAmericas className="text-success me-2 flex-shrink-0 mt-1" size={20} />
          <h3
            className="strength-heading m-0 fs-6 fw-bold"
            style={{ lineHeight: "1.5" }}
          >
            {lang === "ja"
              ? "日本と海外、異なる市場やユーザーを理解した対応が可能です。"
              : "Supporting Businesses Across Japanese and International Markets."}
          </h3>
        </div>

        <ul
          className="custom-bullet-list ps-0 mb-0"
          style={{ listStyle: "none" }}
        >
          <li className="d-flex align-items-start mb-3" style={{ lineHeight: "1.6" }}>
            <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "カナダでの留学・就業経験を通じて培った英語力と異文化理解を活かし、海外企業とのコミュニケーションや英語での業務に対応します。"
                : "With experience studying and working in Canada, I bring English communication skills and cross-cultural understanding to international projects."}
            </span>
          </li>

          <li className="d-flex align-items-start" style={{ lineHeight: "1.6" }}>
            <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "市場ごとの文化やユーザー行動の違いを踏まえ、日本企業の海外展開や海外企業の日本市場進出をサポートします。"
                : "I support Japanese businesses expanding overseas and international businesses entering Japan, taking local markets and customer behavior into account."}
            </span>
          </li>
        </ul>
      </div>

      <TroubleBlock mobile />
    </div>
  );

  return (
    <Container className="about-section-container py-4">
      <section id="about" className="mb-5">
        {/* PC版 */}
        <div className="pc-block d-none d-md-block">
          <Row className="gx-5 align-items-start profile-row">
            <Col
              md={4}
              className="text-center profile-image-col sticky-md-top"
              style={{ top: "100px", zIndex: 1 }}
            >
              <NameTitle />

              <div className="profile-image-container mb-4">
                <Image
                  src="/Sayaka-ad.png"
                  roundedCircle
                  fluid
                  alt={lang === "ja" ? "小原さやか プロフィール写真" : "Sayaka Ohara Profile Photo"}
                  className="profile-image shadow"
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>

            <Col md={8} className="profile-text-col">
              <AboutContentPC />
            </Col>
          </Row>

          {/* Looker Studio / GA4 レポート実績 */}
          <div className="mt-5 p-4 bg-light rounded text-center shadow-sm report-section">
            <h3 className="h5 fw-bold mb-4 text-dark">
              {lang === "ja"
                ? "Looker Studio / GA4 によるレポート作成例"
                : "Looker Studio / GA4 Report Samples"}
            </h3>

            <Row className="justify-content-center gx-3">
              <Col md={5} className="mb-3 mb-md-0">
                <Image
                  src="/looker-sample.png"
                  fluid
                  rounded
                  alt="Looker Studio Report Sample"
                  className="report-thumb shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/looker-sample.png")}
                />
              </Col>

              <Col md={5}>
                <Image
                  src="/GA4-sample.png"
                  fluid
                  rounded
                  alt="GA4 Report Sample"
                  className="report-thumb shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/GA4-sample.png")}
                />
              </Col>
            </Row>

            <p className="mt-3 text-muted small m-0">
              {lang === "ja"
                ? "※画像をクリックすると拡大できます"
                : "* Click images to enlarge"}
            </p>
          </div>
        </div>

        {/* スマホ版 */}
        <div className="mobile-block d-md-none">
          <NameTitle />

          <div className="text-center mb-4">
            <Image
              src="/Sayaka-ad.png"
              roundedCircle
              fluid
              alt={lang === "ja" ? "小原さやか プロフィール写真" : "Sayaka Ohara Profile Photo"}
              className="profile-image-mobile shadow"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
              }}
            />
          </div>

          <AboutContentMobile />

          <div className="mt-4 p-3 bg-light rounded text-center shadow-sm">
            <h3 className="h6 fw-bold mb-3 text-dark">
              {lang === "ja" ? (
                <>
                  Looker Studio / GA4
                  <br />
                  レポート作成例
                </>
              ) : (
                "Looker Studio / GA4 Reports"
              )}
            </h3>

            <Image
              src="/looker-sample.png"
              fluid
              rounded
              alt="Looker Studio Report Sample"
              className="mb-3 report-thumb-mobile shadow-sm"
              style={{ cursor: "pointer", maxWidth: "280px" }}
              onClick={() => setSelectedImage("/looker-sample.png")}
            />

            <br />

            <Image
              src="/GA4-sample.png"
              fluid
              rounded
              alt="GA4 Report Sample"
              className="report-thumb-mobile shadow-sm"
              style={{ cursor: "pointer", maxWidth: "280px" }}
              onClick={() => setSelectedImage("/GA4-sample.png")}
            />

            <p className="mt-2 text-muted small m-0">
              {lang === "ja"
                ? "※画像をクリックすると拡大できます"
                : "* Click images to enlarge"}
            </p>
          </div>
        </div>

        {/* 画像拡大表示モーダル */}
        <Modal
          show={!!selectedImage}
          onHide={() => setSelectedImage(null)}
          centered
          size="lg"
        >
          <Modal.Body className="p-1 text-center bg-dark rounded">
            {selectedImage && (
              <Image
                src={selectedImage}
                fluid
                alt="Enlarged Report"
                style={{ maxHeight: "85vh" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </section>
    </Container>
  );
};

export default AboutSection;

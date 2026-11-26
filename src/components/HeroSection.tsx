// src/components/HeroSection.tsx

import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

type Language = "ja" | "en";

interface HeroSectionProps {
  lang: Language;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

// 多言語テキスト定義
const translations = {
  ja: {
    titleMain: "デジタルマーケティング・Web制作",
    titleSub: "Web集客・サイト改善のパートナー",
    subtitleLine1: "Webサイトや広告を活用して、",
    subtitleLine2:"事業の集客・売上アップをサポートします。",
    btnText: "お問い合わせはこちら",
  },
  en: {
    titleMain: "Marketing × Technology",
    titleSub: "Your Partner in Web Growth",
    subtitleLine1: "Combining marketing expertise and technical knowledge",
    subtitleLine2: "to improve your website and grow your business online.",
    btnText: "Get in Touch",
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="hero"
      className="hero-video-relative text-center text-white mb-5"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        src="/hero-image2.mp4"
      >
        <source src="/hero-image2.mp4" type="video/mp4" />
      </video>

      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <motion.h1
          className="hero-title fade-up"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {t.titleMain}
          <br />
          {" × "}
          <br />
          {t.titleSub}
        </motion.h1>

        <motion.p
          className="hero-subtitle fade-up"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {t.subtitleLine1}
          <br />
          {t.subtitleLine2}
        </motion.p>

        <Button
          className="hero-button"
          style={{
            backgroundColor: "#458ddb",
            color: "white",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            border: "none",
            marginTop: "1.5rem",
          }}
          href="mailto:your-email@example.com"
          size="lg"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "contact_click",
            });
          }}
        >
          {t.btnText}
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
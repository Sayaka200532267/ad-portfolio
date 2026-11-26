
import React from "react";
import { Navbar, Nav, Container, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type Language = "ja" | "en";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const navLabels = {
    brand: "Sayaka Ohara",
    tagline:
      lang === "ja"
        ? "Webマーケティング × プログラミング × 英語"
        : "Web Marketing | Development | English",
    problems: lang === "ja" ? "お悩み" : "Pain Points",
    improvements: lang === "ja" ? "改善案" : "Solutions",
    about: lang === "ja" ? "自己紹介" : "About Me",
    achievements: lang === "ja" ? "実績" : "Achievements",
    skills: lang === "ja" ? "スキル" : "Skills",
    contact: lang === "ja" ? "お問い合わせ" : "Contact",
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="xl"
      className="portfolio-navbar mb-0"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="portfolio-brand">
          <span className="portfolio-brand-name">{navLabels.brand}</span>
          <span className="portfolio-brand-tagline">
            {navLabels.tagline}
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto portfolio-nav">
            <Nav.Link as={HashLink} smooth to="/#problems">
              {navLabels.problems}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#improvements">
              {navLabels.improvements}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#about">
              {navLabels.about}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#achievements">
              {navLabels.achievements}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#skills">
              {navLabels.skills}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#contact">
              {navLabels.contact}
            </Nav.Link>
          </Nav>

          <ButtonGroup size="sm" className="portfolio-language-switch">
            <Button
              variant={lang === "ja" ? "light" : "outline-light"}
              onClick={() => setLang("ja")}
            >
              JP
            </Button>
            <Button
              variant={lang === "en" ? "light" : "outline-light"}
              onClick={() => setLang("en")}
            >
              EN
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

"use client";

import HorizontalSlides from "./HorizontalSlides";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import VersionTimeline from "./VersionTimeline";
import GitHubCalendar from "./GitHubCalendar";
import Contact from "./Contact";

const slides = [
  { id: "home", label: "Home", content: <Hero /> },
  { id: "projects", label: "Work", content: <Projects /> },
  { id: "skills", label: "Skills", content: <Skills /> },
  { id: "journey", label: "Experience", content: <VersionTimeline /> },
  { id: "github", label: "GitHub", content: <GitHubCalendar /> },
  { id: "contact", label: "Contact", content: <Contact /> },
];

export default function AdaptivePage() {
  return <HorizontalSlides slides={slides} />;
}

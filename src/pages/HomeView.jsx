import React from 'react'
import Hero from '../features/hero/Hero'
import About from '../features/about/About'
import Skills from '../features/skills/Skills'
import GitHub from '../features/github/GitHub'
import LeetCode from '../features/leetcode/LeetCode'
import Learning from '../features/learning/Learning'
import Contact from '../features/contact/Contact'

export default function HomeView() {
  return (
    <main className="main-content">
      <Hero />
      <About />
      <Skills />
      <GitHub />
      <LeetCode />
      <Learning />
      <Contact />
    </main>
  )
}

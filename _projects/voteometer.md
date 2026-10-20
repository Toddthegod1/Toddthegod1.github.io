---
title: Voteometer
kind: Full-stack web app
year: 2026
order: 1
featured: true
summary: A decision-support tool that blends how much you like each candidate with how likely they are to win, producing a single "Power Number" for who to vote for.
stack: [Next.js, TypeScript, React, Prisma, Tailwind CSS, Chart.js, Vercel]
links:
  - { label: Live app, url: "https://voteometer.vercel.app/", icon: external }
  - { label: GitHub, url: "https://github.com/Toddthegod1/Voteometer", icon: github }
  - { label: Demo video, url: "https://youtu.be/499npzav4D0", icon: play }
---

## The idea

Most voters weigh two questions: *who do I like?* and *who can actually win?* Voteometer answers both at once. You rate candidates, answer a few head-to-head matchup questions, and the app combines your preferences with a probabilistic model of electability to rank every candidate by a single **Power Number**.

## Highlights

- Rate candidates on a −10 to 10 scale and answer generated head-to-head matchup questions
- Pulls real-world market probabilities from **Polymarket** for general-election matchups
- Models multi-candidate primaries and generates the questions automatically
- Interactive charts built with Chart.js
- Full-stack Next.js + Prisma app, deployed on Vercel

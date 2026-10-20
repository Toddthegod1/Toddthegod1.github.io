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

## Overview
Voteometer is a political decision-support web app that helps voters choose the best candidate by combining personal preference with real-world electability into a single score — the **Power Number**. Instead of asking "Who do I like best?" or "Who can actually win?", Voteometer answers both questions at once and surfaces the candidate with the best shot at delivering your preferred outcome.

## Problem
Voters in multi-candidate primaries often face a dilemma: their favorite candidate may have little chance of winning the general election, while a more electable candidate may not align well with their values. Existing tools address preference or electability in isolation but not both together.

## What I Built
- A rating system where users score each candidate on a -10 to 10 preference scale
- Head-to-head matchup questions to surface relative preferences
- Integration with **Polymarket** to pull live market probabilities for general-election matchups
- Multi-candidate primary modeling with automatic question generation
- A Power Number formula that weights preference against win probability
- Interactive Chart.js visualizations showing score breakdowns and comparisons
- Full deployment on Vercel

## Challenges
The trickiest part was designing the Power Number formula so that it felt intuitive — a candidate you rate 10/10 with a 5% win chance should score lower than one you rate 7/10 with a 60% win chance. Tuning the weighting to feel fair across a range of scenarios required several iterations of testing and user feedback.

## Outcome
Voteometer is fully live and usable. Building it deepened my understanding of TypeScript, data modeling, and how to translate an abstract idea into a working product with a clean, usable interface.

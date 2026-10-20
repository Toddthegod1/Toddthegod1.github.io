---
title: Carbon Tracker
kind: Cloud app · AWS
year: 2025
order: 6
summary: A small cloud app for logging resource usage and viewing CO₂-equivalent summaries, deployed across EC2, RDS, and SQS.
stack: [Python, AWS EC2, RDS (PostgreSQL), SQS, Gunicorn, Nginx]
links:
  - { label: GitHub, url: "https://github.com/Toddthegod1/CarbonTracker", icon: github }
---

## What it does

Carbon Tracker logs carbon-output events (resource usage) and turns them into CO₂e summaries and trends.

## Architecture

- **App server** on EC2 serving the web UI and API through Gunicorn behind Nginx
- **Worker** on a second EC2 instance that processes queued jobs from **SQS**
- **PostgreSQL on RDS** for storage, with init and seed scripts for emission factors
- Run as `systemd` services, with tests via `pytest`

Built for Cloud Computing (COSC349) during my semester at the University of Otago.

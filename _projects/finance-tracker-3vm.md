---
title: 3-VM Personal Finance Tracker
kind: Infrastructure · Virtualization
year: 2025
order: 7
summary: A personal finance web app split across three virtual machines (database, API, and web server) provisioned with Vagrant.
stack: [Vagrant, VirtualBox, Node.js, Express, PostgreSQL, Nginx]
links:
  - { label: GitHub, url: "https://github.com/Toddthegod1/3VMProjectPublic", icon: github }
permalink: /projects/3vmprojectpublic/
---

## What it does

Users record income and expenses, set budgets, and see summaries by category along with their net balance.

## Architecture

| VM | Role |
| --- | --- |
| **db-vm** | PostgreSQL database for transactions and budgets |
| **api-vm** | Node.js + Express REST API with the business logic |
| **web-vm** | Nginx serving the front end and proxying API calls |

Splitting the app this way keeps each tier independent, so it can be moved to the cloud or run on-prem with minimal changes. Built for Cloud Computing & Virtualisation (COSC349) at the University of Otago.

---
title: Carbon Tracker
layout: page
permalink: /projects/carbon-tracker/
---

**Stack:** AWS EC2, PostgreSQL, Python, Gunicorn, HTML/CSS

## Overview
Carbon Tracker is a cloud-deployed web application for logging carbon-output events and visualizing emission trends over time. The project was built to deepen hands-on experience with cloud infrastructure, relational database design, and end-to-end deployment — not just writing code, but shipping it to a real server.

## Problem
Most cloud tutorials stop at "Hello World." I wanted to build something that required setting up a persistent server, a real database, and a running background service — the kind of infrastructure that underlies production web apps.

## What I Built
- A Python web app with a clean HTML/CSS front end for entering and reviewing carbon events
- A PostgreSQL database with a normalized schema for events, categories, and emission factors
- Database initialization and seed scripts for repeatable setup
- Deployment to an AWS EC2 instance with Gunicorn as the WSGI server
- A systemd service to keep the app running automatically after reboots
- Basic analytics to visualize emission trends over time

## Technologies Used
- AWS EC2 for compute
- PostgreSQL (AWS RDS) for the relational database
- Python and Gunicorn for the application server
- HTML/CSS for the front end
- systemd for process management

## Challenges
Configuring the systemd service and making sure the app survived server reboots was more involved than expected. Getting the EC2 security groups, environment variables, and database connection strings all working together required careful debugging across multiple layers of the stack.

## Outcome
The project gave me real experience with the full deployment lifecycle — from writing application code to configuring cloud infrastructure to keeping a service running in production. It's the kind of end-to-end experience that classroom projects rarely provide.

## Links
[GitHub Repo](https://github.com/Toddthegod1/CarbonTracker.git)
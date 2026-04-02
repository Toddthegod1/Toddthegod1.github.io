---
title: NBIA Advanced REST API
layout: page
permalink: /projects/nbia-api/
---

**Stack:** OpenAPI 3.0, Swagger UI, YAML

## Overview
The National Biomedical Imaging Archive (NBIA) is a public cancer imaging repository maintained by the NIH. This project involved authoring and organizing a structured OpenAPI specification for the NBIA Advanced REST API, making it possible for researchers to explore and test endpoints interactively through Swagger UI rather than reading static documentation.

## Problem
The NBIA Advanced REST API provides access to a large archive of cancer imaging data, but its documentation was not structured in a way that allowed interactive exploration. Researchers who wanted to understand available endpoints, required parameters, and response schemas had to piece together information from scattered sources.

## What I Built
- A complete OpenAPI 3.0 YAML specification covering the NBIA Advanced REST API endpoints
- Organized endpoint groupings with consistent parameter and schema definitions
- Alignment between the spec and the official NBIA documentation
- An interactive Swagger UI deployment that lets users explore and test the API directly in the browser

## Technologies Used
- OpenAPI 3.0 specification format
- Swagger UI for interactive documentation rendering
- YAML for spec authoring
- Cross-referencing with official NIH/NBIA documentation

## Challenges
The main challenge was ensuring consistency across a large number of endpoints — matching parameter names, types, and descriptions to the actual API behavior. API documentation work requires careful attention to detail and the ability to read and interpret existing technical documentation accurately.

## Outcome
The resulting specification makes the NBIA Advanced REST API significantly easier to explore for researchers working with cancer imaging data. This project sharpened my understanding of API design principles, OpenAPI conventions, and what makes documentation useful in practice.

## Links
[NBIA API Explorer](https://cbiit.github.io/NBIA-TCIA/#/)
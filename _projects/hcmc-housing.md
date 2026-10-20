---
title: Ho Chi Minh City Housing Market
kind: Machine learning · Team of 3
year: 2026
order: 2
featured: true
summary: Forecasting and segmenting district-level housing prices in Ho Chi Minh City, and showing how much of the growth disappears once you adjust for inflation.
stack: [Python, pandas, scikit-learn, XGBoost, k-means, PCA]
links:
  - { label: GitHub, url: "https://github.com/Toddthegod1/VietnameseHousingProject", icon: github }
---

## What we did

We analyzed 2017–2022 housing prices across nine Ho Chi Minh City districts, then merged in CPI, population, and spatial-cost data to put the prices in context.

## Findings

- **Real vs. nominal growth diverged sharply.** In two districts, prices rose 38–40% in nominal terms but only 19–21% after adjusting for inflation.
- **One outlier stood out.** Clustering districts with k-means and PCA isolated a low-price, high-growth district that behaved differently from the rest.

## Modeling

- Reshaped raw district prices into a time-series modeling dataset
- Built 1-, 7-, and 30-day XGBoost forecasts and benchmarked them against a naive baseline
- Packaged the full analysis as a reproducible pipeline (`run_pipeline.py`) that regenerates every figure and table

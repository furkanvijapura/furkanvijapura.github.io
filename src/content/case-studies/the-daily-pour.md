---
app: "The Daily Pour"
category: "Food & Drink"
role: "iOS & Flutter developer at Wve Labs — built and shipped the app"
constraints:
  - "Inconsistent physical products: many bottles lacked clear labels or had mismatched shapes, making automated identification unreliable"
  - "Two systems of record: a WordPress backend and a Node.js/MongoDB backend had to stay in sync, including in real time"
  - "Guest access: browsing needed to work without forcing signup, without opening a security gap"
stack: ["Flutter", "Vue.js", "Node.js", "MongoDB", "AWS", "Figma"]
storeUrl: "https://apps.apple.com/us/app/the-daily-pour/id6502606142"
playStoreUrl: "https://play.google.com/store/apps/details?id=com.bottleraiders"
sourceNote: "Problem, architecture, and outcome details below are drawn from Wve Labs' own public case study for this project (wvelabs.com/case-study/the-daily-pour), not independently re-verified beyond what's stated there."
---

The Daily Pour (formerly Bottle Raiders) is an AI-powered spirits review app that scans bottle labels and barcodes to surface aggregated ratings from expert and user reviews.

## The problem

Two separate technical challenges shaped the build. First, real bottles are inconsistent: many lack a clean, scannable label, and shapes vary enough that naive image matching wasn't reliable. Second, the product ran on two systems of record — a WordPress backend and a Node.js/MongoDB backend — that both needed to reflect the same data, including in near-real time.

## Architecture decisions

Rather than a dual-write pattern (writing to both databases from the client), the sync problem was solved with a REST API layer: changes on the WordPress side get sent to Node.js, which cross-checks MongoDB and applies whatever updates are needed. That keeps one system as the source of truth for a given write, instead of two systems racing to agree.

For the scanning problem, the app pairs barcode recognition with label-based AI matching, so a bottle can still be identified even when the barcode alone isn't enough context.

Guest access was handled by allowing browsing and scanning without an account, while gating the parts of the product that write data (reviews, watchlists) behind lightweight auth — trading a small security surface for a much lower signup wall.

## Outcome

The app shipped on both the App Store and Google Play, and was covered by Forbes, which described it as aiming to be "the Vivino for premium spirits." Both a public listing and a specific piece of press coverage are independently checkable, unlike a claim on their own.

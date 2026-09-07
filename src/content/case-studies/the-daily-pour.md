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
sourceNote: "The problem, decisions, and outcome below come straight from Wve Labs' own published case study for this project (wvelabs.com/case-study/the-daily-pour). Treat them as the agency's account, not something re-verified beyond that page."
---

The Daily Pour (formerly Bottle Raiders) is an AI-powered spirits review app that scans bottle labels and barcodes to surface aggregated ratings from expert and user reviews.

## The problem

Two separate challenges shaped the build. Real bottles are messy: labels are often worn, missing, or oddly shaped, which made naive image matching unreliable on its own. The second challenge was structural. The product ran on two backends at once, a WordPress system and a Node.js/MongoDB system, and both had to agree on the same data quickly.

## Architecture decisions

WordPress writes get pushed through a REST API to Node.js, which checks MongoDB and applies whatever updates are needed. One system stays the source of truth for a given change, so the two databases don't end up racing each other.

For scanning, barcode recognition works alongside label-based AI matching. If a barcode alone isn't enough to identify a bottle, the label picks up the slack.

Guest browsing needed to work without a signup wall, but writing a review or building a watchlist needed a real account. So anyone can browse and scan; only signed-in users can save.

## Outcome

The app shipped on the App Store and Google Play. Forbes covered it, describing the ambition as building "the Vivino for premium spirits" — a specific, checkable line, not a generic compliment.

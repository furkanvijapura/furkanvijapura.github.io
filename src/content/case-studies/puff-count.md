---
app: "Puff Count: Quit Vaping Now"
category: "Lifestyle"
role: "iOS developer at Wve Labs — built and shipped the app"
constraints:
  - "Charting: overlaying two related data series (a dual graph) on top of existing charting libraries wasn't supported cleanly out of the box"
  - "Scale: past 10,000+ active users, Firebase read/data-transfer costs grew large enough to threaten the app's unit economics"
stack: ["Swift", "Firebase", "Figma"]
storeUrl: "https://apps.apple.com/us/app/puff-count-quit-vaping-now/id1488580640"
sourceNote: "Problem, architecture, and outcome details below are drawn from Wve Labs' own public case study for this project (wvelabs.com/case-study/puffcount-lifestyle-app), not independently re-verified beyond what's stated there."
---

Puff Count: Quit Vaping Now is a vaping-cessation app with custom quit plans and daily, weekly, and monthly progress tracking.

## The problem

Two problems showed up at different points in the app's life. Early on, the progress charts needed to show two related series at once — a "dual graph" — which existing charting libraries didn't render cleanly without custom work. Later, once the app had grown past 10,000 active users, Firebase's per-read data-transfer costs started to matter: the same client-side patterns that were fine at low volume weren't sustainable at scale.

## Architecture decisions

The dual-graph problem was solved by overlaying two separate graphs at adjusted opacities rather than fighting a single library's multi-series API — a simpler fix than it sounds, and one that avoided taking on a heavier charting dependency.

The cost problem was solved on the client, not by switching providers: reworking how and how often data was fetched and displayed cut Firebase's data-transfer costs by over 90%, without changing the backend itself. That's a meaningfully different fix than "add caching" — it's closer to rethinking what the client actually needed to ask for.

## Outcome

The app passed 30,000 downloads in its first month, reached #1 in its App Store category for quit-vaping apps, and scaled past 10,000 active users before the Firebase cost work above became necessary — a sequence that's itself a reasonable proxy for real, sustained usage rather than a launch-week spike.

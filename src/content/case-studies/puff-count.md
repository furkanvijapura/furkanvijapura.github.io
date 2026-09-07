---
app: "Puff Count: Quit Vaping Now"
category: "Lifestyle"
role: "iOS developer at Wve Labs — built and shipped the app"
constraints:
  - "Charting: overlaying two related data series (a dual graph) on top of existing charting libraries wasn't supported cleanly out of the box"
  - "Scale: past 10,000+ active users, Firebase read/data-transfer costs grew large enough to threaten the app's unit economics"
stack: ["Swift", "Firebase", "Figma"]
storeUrl: "https://apps.apple.com/us/app/puff-count-quit-vaping-now/id1488580640"
sourceNote: "This account is built from Wve Labs' public case study for the project (wvelabs.com/case-study/puffcount-lifestyle-app). It reflects what the agency documented there, not independent verification beyond it."
---

Puff Count: Quit Vaping Now is a vaping-cessation app with custom quit plans and daily, weekly, and monthly progress tracking.

## The problem

Two problems surfaced at different points in the app's life. Early on, the progress charts needed to plot two related data series together, and off-the-shelf charting libraries didn't support that combination cleanly. Later, once the app had grown past 10,000 active users, Firebase's per-read costs started eating into the app's economics — the kind of problem that only shows up once there's real scale to deal with.

## Architecture decisions

The chart problem had a simple fix: two separate graphs, layered at adjusted opacities, stood in for a proper multi-series chart, without pulling in a heavier library to get there.

The cost problem was fixed on the client. Changing how often and how much data got fetched and displayed cut Firebase's data-transfer costs by more than 90%, without touching the backend at all. It's a smaller, cheaper change than a caching layer, and it came from asking what the client actually needed to request in the first place.

## Outcome

The app hit 30,000 downloads in its first month and reached #1 in its App Store category for quit-vaping apps. It had already scaled past 10,000 active users by the time the Firebase optimization became necessary, which points to sustained use rather than a launch-week spike.

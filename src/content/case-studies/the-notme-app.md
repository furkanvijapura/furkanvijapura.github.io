---
app: "The NotME App"
category: "Lifestyle"
role: "iOS & Flutter developer at Wve Labs — built and shipped the app"
constraints:
  - "Privacy of intent: nobody should have to risk revealing interest to someone who doesn't reciprocate — preferences have to stay private until both sides agree"
  - "Safety has to work in the moment: a way to withdraw consent mid-encounter needs to be immediate and unambiguous, not buried in a settings menu"
  - "Consent records are only meaningful if they're tied to a real, verified person, not an anonymous username"
stack: ["Swift", "Flutter"]
storeUrl: "https://apps.apple.com/us/app/the-notme-app/id6745784550"
playStoreUrl: "https://play.google.com/store/apps/details?id=com.thenotme.app"
sourceNote: "No public case study exists for this project either. The details below are pulled from the app's App Store listing and the feature set already documented on this site, not from any internal or agency source."
---

The NotME App is a consent-verification tool for people who already know each other. Each person privately sets what they're open to, and the app only shows what both sides agree on.

## The problem

Asking someone directly about consent carries real social risk, since a mismatch means an awkward rejection. The app needed a way for two people to express interest without either one having to see a no. It also had to hold up mid-encounter, since the whole point is physical safety, and a safety feature that only works in theory doesn't count for much in practice.

## Architecture decisions

Preferences stay private until both sides opt into a shared "Rendezvous," at which point the app reveals the overlap and nothing else — the same trick mutual-match systems use elsewhere to keep rejections invisible. A safe word, "SEESAW," sits one tap away at all times instead of buried in settings, because a safety control has to be reachable in the moment it's needed, not three menus deep. Identity gets checked too: an age-verification mark plus a QR pairing at the actual meeting ties a consent record to a real person, not a username, and that record is kept securely for 12 months.

## Outcome

The app is live on the App Store and Google Play. It occupies a narrow, safety-focused niche — structured, revocable, identity-backed consent — that most dating apps don't touch.

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
sourceNote: "There's no dedicated wvelabs.com case study for this project. The details below come from the app's own App Store listing and the site's existing documented feature set — nothing here is invented beyond what's independently checkable."
---

The NotME App is a consent-verification tool for people who already know each other: each person privately sets what they're open to, and the app reveals only what both sides agree on.

## The problem

Consent conversations are awkward precisely because directness carries risk — asking outright means risking an uncomfortable rejection. The app needed a way to let two people express interest privately, so a mismatch never has to be seen by either side, while still producing something real and specific once there's a match, not just a vague green light. And because the subject is physical safety, not just preference-matching, whatever gets built has to hold up in the moment something goes wrong, not just at signup.

## Architecture decisions

Preferences are set privately per person and only compared once both sides have opted into a "Rendezvous" — the app reveals overlap, never a one-sided rejection, the same privacy shape that makes mutual-match systems work elsewhere. A universal safe word ("SEESAW") is built in as an always-available control rather than a menu item, since a safety feature that requires hunting through settings isn't a safety feature. Identity is verified with an age-checkmark and QR-code pairing at the point of an actual in-person meeting, so a consent record is attached to a real verified person rather than a handle, and those records are retained securely for 12 months.

## Outcome

The app is live on both the App Store and Google Play, built around a specific, safety-forward niche — structured, revocable, identity-backed consent — that's uncommon in the broader dating-app category.

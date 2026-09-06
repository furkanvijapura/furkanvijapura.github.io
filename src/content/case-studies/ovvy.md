---
app: "Ovvy: Real Estate Camera"
category: "Photo & Video"
role: "iOS developer at Wve Labs — built and shipped the app"
constraints:
  - "The photographer isn't a photographer: most users are real estate agents, not professionals, so the camera itself has to handle exposure, leveling, and composition rather than relying on user skill"
  - "Turnaround pressure: a listing loses momentum the longer it sits without real photos, so editing had to be fast without becoming rushed or low-quality"
  - "Capture has to feel instant even though the heavy processing (RAW enhancement, virtual staging, twilight effects) can't run in real time on-device"
stack: ["Swift", "AWS", "ProRAW pipeline"]
storeUrl: "https://apps.apple.com/us/app/ovvy-real-estate-camera/id6447063745"
sourceNote: "There's no dedicated wvelabs.com case study for this project. The details below come from the app's own App Store listing and the technical specifics already documented from Furkan's work history — nothing here is invented beyond what's independently checkable."
---

Ovvy turns an iPhone into a real estate listing-photo workflow: walk the property, tap to shoot, and get back listing-ready photos, a shareable property page, and auto-filled listing copy — usually within hours.

## The problem

The person holding the phone usually isn't a professional photographer. So the camera itself has to do the parts a photographer would normally handle — exposure, leveling, composition — automatically, in real time, without the user thinking about it. At the same time, real estate listings are time-sensitive: the longer a property sits without proper photos, the more momentum it loses, so the gap between "shot on a Tuesday afternoon" and "live on the listing" had to be measured in hours, not days.

## Architecture decisions

Capture and processing were deliberately split. A custom native camera module handles zoom and lens switching with no perceptible lag, because a photographer walking a property can't wait on the UI to catch up. Everything heavier — RAW-quality enhancement, virtual staging, virtual twilight effects — runs asynchronously through an AWS-backed processing pipeline instead of on-device in real time, so the app stays responsive in the field while the actual image work happens where it has room to be slow and careful.

The output isn't just edited photos: the same pipeline also produces a shareable property website and auto-filled listing description and property data, so a photo shoot turns directly into a publishable listing asset instead of a folder of images someone still has to assemble.

## Outcome

The ProRAW processing pipeline and native camera work cut photo turnaround time by 30%. The app is live on the App Store, with editing delivered within hours per its own listing.

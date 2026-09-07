---
app: "Ovvy: Real Estate Camera"
category: "Photo & Video"
role: "iOS developer at Wve Labs — built and shipped the app"
constraints:
  - "The photographer isn't a photographer: most users are real estate agents, not professionals, so the camera itself has to handle exposure, leveling, and composition rather than relying on user skill"
  - "Connectivity in the field is unreliable: agents shoot inside properties with weak or no signal, so capturing and organizing photos can't depend on being online"
  - "Turnaround pressure: a listing loses momentum the longer it sits without real photos, so editing had to be fast without becoming rushed or low-quality"
  - "Capture has to feel instant even though the heavy processing (RAW enhancement, virtual staging, twilight effects) can't run in real time on-device"
stack: ["Swift", "AWS", "ProRAW pipeline"]
storeUrl: "https://apps.apple.com/us/app/ovvy-real-estate-camera/id6447063745"
sourceNote: "Wve Labs hasn't published a case study for this one. Facts here come from Ovvy's App Store listing and its product site (ovvy.ai). The offline-first and background-sync details are Furkan's own account of the app's architecture, not published externally, since no public source describes internal engineering like that."
---

Ovvy turns an iPhone into a real estate listing-photo workflow. Snap photos with guided framing, sort and submit by room, and get back listing-ready photos, a shareable property page, and pre-written listing copy, usually within hours.

## The problem

Most people holding the phone aren't photographers. The camera had to take over the parts a photographer would normally handle — exposure, leveling, composition — automatically. Agents also shoot inside properties, often with weak or no signal, so the app couldn't assume a live connection just to capture and organize a set of photos. Speed mattered on top of that: a listing loses momentum the longer it sits without real photos, so the gap between a Tuesday afternoon shoot and a live listing had to shrink to hours.

## Architecture decisions

The app is offline-first. Photos are captured and organized locally no matter what the connection looks like, then uploaded in the background with automatic sync once a connection is available, so an agent never has to stop and babysit an upload bar before walking into the next room.

Capture and processing also run on different clocks. A custom native camera module keeps zoom and lens switching lag-free, because someone walking a property can't wait on the interface to catch up. Everything slower happens later: RAW enhancement, virtual staging, and virtual twilight effects all run asynchronously through an AWS pipeline once the agent has moved on.

That same pipeline does more than edit photos. It also generates a shareable property website and fills in listing descriptions and property data, turning a photo shoot straight into something publishable.

## Outcome

The native camera work and the ProRAW pipeline cut turnaround time by 30%. The app is live on the App Store, with editing typically delivered within hours, and is now used by over 2,000 active realtors according to its own site.

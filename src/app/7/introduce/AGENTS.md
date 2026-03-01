# AGENTS.md - 7th Introduce

## Scope
- This file applies to everything under `src/app/7/introduce`.

## Current Flow
1. Slot reels spin and stop at `777`.
2. Fireworks burst near the left/right `7` positions at the same time.
3. Slot stage fades/moves up.
4. `KUIT SEVENTH` appears.

## Implementation Notes
- Main file: `src/app/7/introduce/_components/IntroduceAnimationContainer.tsx`
- Styling currently relies on Tailwind utility classes in JSX.
- Animation engine: `gsap`

## Rules For Future Changes
- Keep the experience self-contained in `7/introduce`.
- Preserve sequence timing unless explicitly changed by user request.
- Prefer editing existing GSAP timeline instead of creating parallel timelines.
- If adding visual effects, avoid heavy runtime dependencies (especially Three.js) unless user explicitly asks.

## Verification
- At minimum, run `npm run lint` after edits.
- If animation flow changes significantly, run `npm run build` as well.

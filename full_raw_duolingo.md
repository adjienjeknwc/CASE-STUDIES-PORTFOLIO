<USER_REQUEST>
# Increasing 7-Day Retention for New Users on Duolingo

**Type:** Metric-first Product Case Study
**Role:** Product Manager (Case Study)
**Focus Metric:** New User 7-Day Retention

---

## 1. Problem Statement

Duolingo has one of the strongest onboarding funnels in consumer tech, but like most habit-based apps, it loses a large share of new users within the first week. Public data and industry benchmarks suggest most language-learning apps see 60-75% of new users drop off before day 7 — the window where a habit either forms or dies.

**The question I'm solving:** *How can Duolingo increase 7-day retention for new users, without simply adding more notifications or gamification bloat that erodes long-term trust?*

I chose 7-day retention specifically (not Day 1 or Day 30) because:
- Day 1 retention is mostly about onboarding UX, which Duolingo has already optimized heavily (streak intro, placement test, mascot Duo).
- Day 30+ retention is a lagging indicator — by then, habit formation has already succeeded or failed.
- **Day 7 is the critical "habit crystallization" window** — enough sessions have happened to reveal *why* users are dropping, and there's still time to intervene.

---

## 2. Context & Why This Matters to the Business

- Duolingo's business model depends on daily active engagement — its ad revenue, Super Duolingo subscriptions, and streak-based monetization all compound with retention.
- A small lift in 7-day retention has outsized downstream impact: users who form a first-week habit are dramatically more likely to become long-term DAUs and eventual subscribers.
- Duolingo has publicly emphasized streaks and gamification as retention levers — but streak mechanics primarily *reward* existing habits. They don't necessarily solve the root cause of early drop-off for users who haven't formed a habit yet.

**Framing:** This isn't a "make onboarding prettier" problem. It's a "diagnose *why* motivated new users stop returning" problem.

---

## 3. Hypothesis-Driven Research Approach
<truncated 5650 bytes>
(make sure this isn't just delaying churn by a week)
- Notification opt-out rate (make sure the anchor-prompt doesn't feel invasive)

**Target:** Even a 3-5 percentage point lift in 7-day retention would be considered a strong win, given how compounding retention gains are for a habit-based product.

**How I'd test it:** A/B test — new users randomly assigned to see the anchor-moment onboarding prompt vs. standard onboarding, measured over a 4-week window to also check for novelty effects wearing off.

---

## 7. Risks & Open Questions

- **Risk:** Users may not accurately predict their own free time (stated preference ≠ revealed behavior). Mitigation: use the "re-prompt if not sticking" mechanism to course-correct within the app rather than relying on the first answer being right.
- **Risk:** Adding a question during onboarding could increase friction/drop-off *before* day 1. Mitigation: place it after the first lesson (once there's already investment), not before signup.
- **Open question:** Does this hypothesis (H3) actually explain the biggest share of churn, or would research reveal H1/H2 are bigger drivers? This case study assumes H3 based on reasoning, not real data — in an actual PM role, I'd want funnel data before committing engineering resources.

---

## 8. What I'd Do Next If This Were Real

1. Pull actual funnel drop-off data segmented by the three hypotheses before building anything
2. Run 5-10 churn interviews to sanity-check the habit-cue theory qualitatively
3. Ship a lightweight version of the anchor-prompt as an A/B test within 2-3 weeks, not a full quarter — the goal is fast signal, not a polished feature
4. Only invest in P1/P2 once P0 shows a measurable lift

---

*This case study reflects my own product reasoning based on publicly available information about Duolingo and general behavior-design principles. It does not use or claim access to any internal Duolingo data.*
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-07-24T16:19:06+05:30.
</ADDITIONAL_METADATA>
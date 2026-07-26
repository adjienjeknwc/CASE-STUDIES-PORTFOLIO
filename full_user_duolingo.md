<USER_REQUEST>
help me with these things on this case study -Make it yours — swap in a product you actually use daily if Duolingo doesn't resonate, and adjust the hypothesis to match your real reasoning. Interviewers can tell when something feels copy-pasted vs. genuinely thought through.
Add a cover visual — even a simple funnel diagram or the three-hypothesis table as an image at the top makes it feel more like a real deliverable.
Keep the "not real data" disclaimer — it's actually a strength, not a weakness. It shows intellectual honesty, which FAANG interviewers value over fake confidence.
Practice talking through it out loud — the real test is whether you can defend your prioritization calls (why P0 over P2) conversationally in an interview.                    CASE STUDY-# Increasing 7-Day Retention for New Users on Duolingo

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

Rather than jumping to a solution, I'd structure research around three competing hypotheses for *why* users drop off in week one:

| Hypothesis | What it would look like if true |
|---|---|
| **H1: Difficulty mismatch** | Users hit a lesson that's too hard too soon (placement test miscalibration) and get discouraged |
| **H2: Motivation mismatch** | Users signed up for a vague reason ("I should learn Spanish") without a concrete goal, so nothing pulls them back |
| **H3: Habit-cue failure** | Users don't have a consistent trigger (time of day, existing routine) to open the app, so it's forgotten, not rejected |

**How I'd validate each (in a real setting):**
- **Funnel analysis:** Segment day 2-7 drop-off by lesson difficulty spikes and placement test results (tests H1)
- **Onboarding survey data:** Look at stated goals at signup ("casual," "trip prep," "fluency") cross-referenced with retention curves (tests H2)
- **Session time-of-day analysis:** Check if retained users show consistent daily time patterns vs. churned users showing random/no pattern (tests H3)
- **5-10 lightweight user interviews** with people who downloaded Duolingo and quit within a week — asking simply: "What was happening in your life the day you stopped opening it?"

*(For this case study, I'm reasoning from publicly known behavioral patterns in habit-formation apps, since I don't have access to Duolingo's internal funnel data.)*

**Working assumption for the rest of this case study:** H3 (habit-cue failure) is the most underexplored and highest-leverage hypothesis, because Duolingo already invests heavily in H1 (adaptive difficulty) and H2 (goal-setting at onboarding). Habit-cue design is comparatively unexplored.

---

## 4. Proposed Solution: "Anchor Moments"

Instead of relying on generic push notifications ("Duo misses you!"), design a feature that helps new users **attach their Duolingo habit to an existing daily routine** — a well-established behavior-design principle (habit stacking).

**Core mechanic:**
During onboarding (after day 1, once a user has completed their first lesson), prompt:

> "When do you usually have 5 minutes free? Right after you wake up, during your commute, or before bed?"

Based on the answer, Duolingo:
1. Sets a **contextual reminder** tied to that moment, not just a generic time (e.g., "commute" triggers reminder via calendar/location cues rather than a fixed clock time, since commute times shift daily)
2. Surfaces a **"quick win" 2-minute lesson** for that specific slot — shorter than the standard lesson, respecting that "commute" or "before bed" moments have low time budgets
3. Tracks whether the user engaged with the **suggested moment vs. a different time** — this becomes a leading indicator for churn risk, allowing early intervention (e.g., a re-prompt to pick a different anchor if the first one isn't sticking)

**Why this over alternatives I considered and rejected:**
- *More notifications* — rejected. Notification fatigue already hurts retention; adding volume without relevance would likely worsen uninstalls.
- *Harder streak penalties* — rejected. Punitive mechanics work for already-engaged users, not new users who haven't formed the habit yet.
- *AI-personalized content* — rejected for v1. High engineering cost, and doesn't address the root problem (users forgetting to open the app), only what happens once they do.

---

## 5. Prioritization & Trade-offs

Given limited engineering resources (say, one team for one quarter), here's how I'd sequence this:

| Priority | Feature | Reasoning |
|---|---|---|
| **P0** | Anchor-moment prompt at onboarding | Cheap to build (mostly a UI + reminder scheduling change), directly tests H3 |
| **P0** | Shortened "quick win" lesson for low-time slots | Low engineering lift, reuses existing lesson content |
| **P1** | Adaptive re-prompt if first anchor isn't sticking | Requires tracking logic, but high signal value |
| **P2** | Location/calendar-based smart triggers (vs. fixed time) | Higher engineering cost (calendar API, location permissions) — defer until P0 validates the core hypothesis |

**What I'd explicitly say no to, and why:** Building the full location-aware smart trigger system (P2) before validating that habit-cue mismatch is even the real problem. It's tempting because it's the "coolest" version of the idea, but it's also the most expensive — I'd want cheap signal from P0 first.

---

## 6. Success Metrics

**Primary metric:** 7-day retention rate (% of new users who open the app on day 7)

**Guardrail metrics** (to make sure we're not gaming the primary metric):
- Session completion rate (are people finishing lessons, or just opening and bouncing?)
- Day 14 and Day 30 retention (make sure this isn't just delaying churn by a week)
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
The current local time is: 2026-07-24T06:52:52+05:30.
</ADDITIONAL_METADATA>
<USER_SETTINGS_CHANGE>
The user changed setting `Model Selection` from None to Gemini 3.5 Flash (Low). No need to comment on this change if the user doesn't ask about it. If reporting what model you are, please use a human readable name instead of the exact string.
</USER_SETTINGS_CHANGE>
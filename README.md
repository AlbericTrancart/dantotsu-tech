# Dantotsu Quality for Software

Exploring how Toyota’s radical quality mindset can help us improve the way we build software.

## Install

```bash
npm install
```

## Running it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.




# Business case #1 — Corporate restaurants system

Our client operates high-end restaurant services for prestigious corporate customers. After deploying the first restaurant in production using a new, fully integrated IT system, we deliberately shifted our focus to quality, with the goal of delivering a consistently smooth experience for both customers and restaurant staff.

## Results

Over a period of six months, we reduced the number of defects by more than a factor of ten.

At the end of this period, we observed approximately 40 defects (anomalous events) *per week*, across the following scope:

- A customer-facing mobile application
- A cashier tablet application
- A cloud-based backend
- An on-premise backend deployed in each restaurant
- Two frontend applications
- Both preproduction and production environments

## What do we count as a “defect”?

We chose to measure defects using standard application monitoring tools (in this case, Sentry).

Application monitoring is not a perfect measure: it does not capture purely visual issues (e.g. CSS problems), nor infrastructure-level failures. However, it proved to be a good first-order proxy for defect volume, and - critically - one that can be fully automated.

Automation was a strict requirement. Software teams typically start with a large defect volume, **it is important that updating the metric must take no more than five minutes**.

Most software teams count a bug as one defect, even if that bug impacts thousands of users. We deliberately chose a different approach.

Our job is to deliver value to users. A bug affecting 1,000 users represents 1,000 defects, not one.

A useful analogy comes from manufacturing: if 1,000 parts share the same defect, they still end up in 1,000 cars - and potentially generate 1,000 customer claims. For this reason, we tracked Sentry events, not Sentry issues (which group multiple events under a single root cause).

## How did we achieve this?

For every defect appearing in Sentry, we applied the 8-step problem-solving process described by Sadao Nomura.

In most cases, these steps were performed on-the-fly (without bureaucratic analysis report), often with a short discussion involving the relevant developer when needed.

When a countermeasure could be identified and implemented in less than 30 minutes, **we applied it right away** - following Nomura’s principle that *speed is essential*. No Jira tickets. No approval loops.

If the countermeasure resulted in a functional change, we discussed it briefly with the product team, implemented it immediately, and only then created a ticket and added it to the current sprint.

When a countermeasure required up to two days of work, we informed the product team that we were starting immediately on a defect and created a technical task in the current sprint.

**This was possible because the product team clearly understood that any defect reported by Sentry represents an anomalous event that may degrade the user experience until it is investigated and resolved.**

For deeper changes (e.g. architectural work), we created an EPIC and prioritized it in the roadmap. If such an item risked being deprioritized, we explicitly reminded stakeholders that sustainable quality cannot be achieved through short-term fixes alone, and that customer value was at risk.

Over six months, only two architectural changes required prioritization:

- Isolating asynchronous worker processes from the backend server
- A major refactoring of a known structural weakness in the system

## How did you find the time to do the 8-step process?

We followed Nomura’s advice quite literally: “just do it.”

Every day, we deliberately set aside time for Dantotsu activities. **Crucially, we did not ask for permission.**

In practice, most of the time, no one objected. Occasionally, people became curious and asked questions - in which case we explained what we were doing. Very rarely, someone asked us to stop. When that happened, we explained that we were simply doing our job: solving problems that directly affect users.

Like most teams, we initially faced a large backlog of defects, which can make it politically difficult to slow down feature development. This required actively balancing feature work with Dantotsu activities.

However, one principle remained non-negotiable: **do not let other people decide for you were to put the cursor, you're the one in charge of maintaining the code**.

If the defect backlog is not shrinking, it is a strong signal that the approach is not radical enough - or not applied consistently enough.

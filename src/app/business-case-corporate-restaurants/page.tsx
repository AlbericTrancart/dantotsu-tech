import styles from "../page.module.css";
import Image from "next/image";
import businessCase1Img from '@/assets/business-case-1.png'
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: 'Dantotsu Quality for Tech - Business case: Corporate restaurants system',
  description: 'How Dantotsu mindset helped reduce defects by a factor of 10 in a corporate restaurants system',
};

export default function Home() {
  return (
    <>
        <section>
            <h1>Business case — Corporate restaurants system</h1>

            <p>
                Our client operates high-end restaurant services for prestigious corporate customers.
            </p>
            
            <p>
                After deploying the first restaurant in production using a new, fully integrated IT system, we deliberately shifted our focus to quality, with the goal of delivering a consistently smooth experience for both customers and restaurant staff.
            </p>
        </section>

        <section>
            <h2>Business case — Corporate restaurants system</h2>

            <Image className={styles.image} src={businessCase1Img} alt="" width={400} objectFit="contain"  />
            
            <p>
                Over a period of six months, we reduced the number of defects by more than a factor of ten.
            </p>
            
            <p>
                At the end of this period, we observed approximately 40 defects (anomalous events) <em>per week</em>, across the following scope:
            </p>

            <ul>        
            <li>A customer-facing mobile application</li>
            <li>A cashier tablet application</li>
            <li>A cloud-based backend</li>
            <li>An on-premise backend deployed in each restaurant</li>
            <li>Two frontend applications</li>
            <li>Both preproduction and production environments</li>
            <li>Handling 250 customers each day in production</li>
            </ul>
        </section>

        <section>
            <h2>What do we count as a “defect”?</h2>

            <p>
                <strong>We chose to measure defects using standard application monitoring tools</strong> (in this case, Sentry).
            </p>
            
            <p>
                Application monitoring is not a perfect measure: it does not capture purely visual issues (e.g. CSS problems), nor infrastructure-level failures. It can also show false positives. However, it proved to be a good proxy for defect volume, and - critically - one that can be fully automated.
            </p>
            
            <p>
                Automation was a strict requirement. Software teams typically start with a large defect volume, <strong>it is important that updating the metric must take no more than five minutes</strong>.
            </p>
            
            <p>
                Most software teams count a bug as one defect, even if that bug impacts thousands of users. We deliberately chose a different approach.
            </p>
            
            <p>
                Our job is to deliver value to users. A bug affecting 1,000 users represents 1,000 defects, not one.
            </p>
            
            <p>
                A useful analogy comes from manufacturing: if 1,000 parts share the same defect, they still end up in 1,000 cars - and potentially generate 1,000 customer claims. For this reason, <strong>we tracked Sentry events, not Sentry issues</strong> (which group multiple events under a single root cause).
            </p>
        </section>

        <section>
            <h2>How did we achieve this?</h2>

            <p>
                For every defect appearing in Sentry, <strong>we applied the 8-step problem-solving procedure</strong> described by Sadao Nomura.
            </p>

            <p>
                In most cases, these steps were performed on-the-fly (<strong>without bureaucratic analysis report</strong>), often with a short discussion involving the relevant developer when needed.
            </p>

            <p>
                When a countermeasure could be identified and implemented in less than 1 hour, <strong>we applied it right away</strong> - following Nomura’s principle that <em>speed is essential</em>. No Jira tickets. No approval loops. Just old school code review.
            </p>

            <p>
                If the countermeasure resulted in a functional change, we discussed it briefly with the product team, implemented it immediately, and <em>only then</em> created a ticket and added it to the current sprint.
            </p>

            <p>
                When a countermeasure required up to two days of work, we informed the product team that we were starting immediately on a defect and created a technical task in the current sprint.
            </p>

            <p>
                <strong>This was possible because the product team clearly understood that any defect reported by Sentry represents an anomalous event that may degrade the user experience until it is investigated and resolved.</strong>
            </p>

            <p>
                For deeper changes (e.g. architectural work), we created an EPIC and prioritized it in the roadmap. If such an item risked being deprioritized, we explicitly reminded stakeholders that <strong>sustainable quality cannot be achieved through short-term fixes alone, and that customer value was at risk.</strong>
            </p>

            <p>
                Over six months, only two architectural changes required prioritization:
            </p>
            
            <ul>
                <li>Isolating asynchronous worker processes from the backend server</li>
                <li>A major refactoring of a known structural weakness in the system</li>
            </ul>

            <p>
                We found out that if you manage to implement gradual countermeasures for each defect, you will have less structural change to “sell” and thus you will have an easier time convincing stakeholders to invest in those structural changes.
            </p>
        </section>

        <section>
            <h2>How did you find the time to do the 8-step process?</h2>

            <p>
                We followed Nomura’s advice quite literally: <strong>“just do it.”</strong>
            </p>


            <p>
                Every day, we deliberately set aside time for Dantotsu activities. <strong>Crucially, we did not ask for permission.</strong>
            </p>
            <p>
                In practice, most of the time, no one objected. Occasionally, people became curious and asked questions - in which case we explained what we were doing. Very rarely, someone asked us to stop. When that happened, we explained that we were simply doing our job: solving problems that directly affect users.
            </p>

            <p>
                Like most teams, we initially faced a large backlog of defects, which can make it politically difficult to slow down feature development. This required actively balancing feature work with Dantotsu activities.
            </p>

            <p>
                However, one principle remained non-negotiable: <strong>do not let other people decide for you where to put the cursor; you’re the one in charge of maintaining the code</strong>.
            </p>

            <p>
                If the defect backlog is not shrinking, it is a strong signal that the approach is not radical enough - or not applied consistently enough.
            </p>

            <Link href="/" className={styles.button}>← Back to the main page</Link>
        </section>
    </>
  );
}

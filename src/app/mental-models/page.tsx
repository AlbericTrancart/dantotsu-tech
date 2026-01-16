import styles from "../page.module.css";
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
        <section style={{position: 'relative'}}>
            <h1>Mental models for better code quality</h1>

            <p>
                Here are some reframes and mental models that I kept repeating to software developers while experimenting with Dantotsu and going through a lot of defects.
            </p>

            <p>
                Each image is a link to a blog post explaining the model in more details.
            </p>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-seek-the-truth/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-seek-the-truth.png" alt="#1 Mental Model - Seek the truth" />
            </a>

            <a href="https://alberic.trancart.net/2025/07/dantotsu-quality-code-the-broken-window/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-broken-window.png" alt="#2 Mental Model - Broken window" />
            </a>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-just-effing-do-it-jedi/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-jedi.png" alt="#3 Mental Model - JEDI" />
            </a>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-garbage-in-garbage-out/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-garbage-in-garbage-out.png" alt="#4 Mental Model - Garbage in, garbage out" />
            </a>

            <a href="https://alberic.trancart.net/2025/10/dantotsu-quality-tradeoffs/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-tradeoffs.png" alt="#5 Mental Model - Tradeoffs" />
            </a>

            <a href="https://alberic.trancart.net/2025/10/dantotsu-quality-the-right-tool-for-the-right-job/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-right-tool-right-job.png" alt="#6 Mental Model - The right tool for the right job" />
            </a>

            <a href="https://alberic.trancart.net/2025/11/dantotsu-quality-complexity-the-ultimate-evil/" target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src="/mental-models/mental-model-complexity.png" alt="#7 Mental Model - Complexity is the ultimate evil" />
            </a>

            <img className={styles.image} src="/mental-models/mental-model-iso-prod.png" alt="#8 Mental Model - Iso prod" />

            <img className={styles.image} src="/mental-models/mental-model-works-by-design.png" alt="#9 Mental Model - Works by design" />

            <img className={styles.image} src="/mental-models/mental-model-chesterton-fence.png" alt="#10 Mental Model - Chesterton's fence" />

            <img className={styles.image} src="/mental-models/mental-model-shit-will-happen.png" alt="#11 Mental Model - Shit will happen" />
            
            <Link href="/" className={styles.button}>← Back to the main page</Link>
        </section>
    </>
  );
}

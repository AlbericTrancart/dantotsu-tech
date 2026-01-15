import styles from "../page.module.css";
import Image from "next/image";
import mentalModelSeekTheTruthImg from '@/assets/mental-model-seek-the-truth.png'
import mentalModelBrokenWindowImg from '@/assets/mental-model-broken-window.png'
import mentalModelJediImg from '@/assets/mental-model-jedi.png'
import mentalModelGarbageInGarbageOutImg from '@/assets/mental-model-garbage-in-garbage-out.png'
import mentalModelTradeoffsImg from '@/assets/mental-model-tradeoffs.png'
import mentalModelRightToolRightJobImg from '@/assets/mental-model-right-tool-right-job.png'
import mentalModelComplexityImg from '@/assets/mental-model-complexity.png'
import mentalModelIsoProdImg from '@/assets/mental-model-iso-prod.png'
import mentalModelWorksByDesignImg from '@/assets/mental-model-works-by-design.png'
import mentalModelChestertonFenceImg from '@/assets/mental-model-chesterton-fence.png'
import mentalModelShitWillHappenImg from '@/assets/mental-model-shit-will-happen.png'
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
            <h1>Mental models for better code quality</h1>

            <p>
                Here are some reframes and mental models that I kept repeating to software developers while experimenting with Dantotsu and going through a lot of defects.
            </p>

            <p>
                Each image is a link to a blog post explaining the model in more details.
            </p>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-seek-the-truth/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelSeekTheTruthImg} alt="#1 Mental Model - Seek the truth" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/07/dantotsu-quality-code-the-broken-window/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelBrokenWindowImg} alt="#2 Mental Model - Broken window" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-just-effing-do-it-jedi/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelJediImg} alt="#3 Mental Model - JEDI" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/09/dantotsu-quality-garbage-in-garbage-out/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelGarbageInGarbageOutImg} alt="#4 Mental Model - Garbage in, garbage out" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/10/dantotsu-quality-tradeoffs/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelTradeoffsImg} alt="#5 Mental Model - Tradeoffs" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/10/dantotsu-quality-the-right-tool-for-the-right-job/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelRightToolRightJobImg} alt="#6 Mental Model - The right tool for the right job" width={800} objectFit="contain" />
            </a>

            <a href="https://alberic.trancart.net/2025/11/dantotsu-quality-complexity-the-ultimate-evil/" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} src={mentalModelComplexityImg} alt="#7 Mental Model - Complexity is the ultimate evil" width={800} objectFit="contain" />
            </a>

            <Image className={styles.image} src={mentalModelIsoProdImg} alt="#8 Mental Model - Iso prod" width={800} objectFit="contain" />

            <Image className={styles.image} src={mentalModelWorksByDesignImg} alt="#9 Mental Model - Works by design" width={800} objectFit="contain" />

            <Image className={styles.image} src={mentalModelChestertonFenceImg} alt="#10 Mental Model - Chesterton's fence" width={800} objectFit="contain" />

            <Image className={styles.image} src={mentalModelShitWillHappenImg} alt="#11 Mental Model - Shit will happen" width={800} objectFit="contain" />
            
            <Link href="/" className={styles.button}>Back to the main page</Link>
        </section>
    </>
  );
}

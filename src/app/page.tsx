import styles from "./page.module.css";
import Image from "next/image";
import imageImg from '@/assets/dantotsu-book.jpg'
import logoImg from './favicon.png'
import businessCas1Img from '@/assets/business-case-1.png'
import mentalModelImg from '@/assets/mental-model-jedi.png'
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: 'Dantotsu Quality for Tech',
  description: 'Exploring how Toyota’s radical quality mindset can improve the way we build software',
};

export default function Home() {
  return (
    <>
      <section>
        <Image className={styles.image} src={logoImg} alt="" width={72} objectFit="contain"  />

        <h1>Dantotsu Quality for Tech</h1>

        <p className={styles.subtitle}>
          Exploring how Toyota’s radical quality mindset can improve the way we build software
        </p>
      </section>

      <hr />

      {/* What is Dantotsu */}
      <section>
        <h2>What is Dantotsu quality?</h2>

        <p>
          <strong>Dantotsu</strong> (断トツ) means “extreme”, “radical”, “unparalleled”. At Toyota, Dantotsu quality aims for <em>radical improvement</em>, not marginal gains.
        </p>

        <p className={styles.quote}>
          <em>“Many companies seem to be in trouble because product quality is not getting better despite company-wide [...] “quality first” policy”</em><br />
          Sadao Nomura
        </p>

        <p>
          <strong>If this quote resonates with you, you’re in the right place.</strong><br />
          This page is a hub for <em>the work in progress</em> exploration of how we can transpose Dantotsu quality philosophy to software engineering.
        </p>

        
      </section>

      <hr />

      <div className={styles.wrapper}>
        {/* Mental Models */}
        <section>
          <h2>Mental models</h2>

          <Image className={styles.image} src={mentalModelImg} alt="" width={300} objectFit="contain"  />
          
          <p>
            A few printable mental models to challenge common coding mistakes
          </p>


          <a className={styles.button} href="https://alberic.trancart.net/tag/dantotsu-quality/">
            Explore the mental models →
          </a>
        </section>

        {/* Book Source */}
        <section>
          <h2>Where these ideas come from</h2>

          <Image className={styles.image} src={imageImg} alt="" width={200} objectFit="contain"  />

          <p>
            <em>
              “The Toyota Way of Dantotsu Radical Quality Improvement”
            </em>{" "}
            by <strong>Sadao Nomura</strong>.
          </p>

          <a
            className={styles.button}
            href="https://www.amazon.fr/Toyota-Dantotsu-Radical-Quality-Improvement/dp/0367672367"
            target="_blank"
            rel="noreferrer noopener"
          >
            Discover the book →
          </a>
        </section>

        <section>
          <h2>Business case</h2>

          <Image className={styles.image} src={businessCas1Img} alt="" width={300} objectFit="contain"  />
          
          <p>
            Over six months, we reduced software defects by more than 10x on a new integrated IT system for a corporate restaurant operator.
          </p>

          <Link className={styles.button} href="/business-case-corporate-restaurants">
            More details →
          </Link>
        </section>
      </div>
    </>
  );
}

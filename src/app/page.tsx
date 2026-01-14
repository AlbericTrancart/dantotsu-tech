import styles from "./page.module.css";
import Image from "next/image";
import bookCoverImg from './dantotsu-book.jpg'

import mentalModelImg from './mental-model.png'

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.section}>
        <h1 className={styles.hero}>Dantotsu Quality for Software Engineering</h1>
        <p className={styles.subtitle}>
          Exploring how Toyota’s radical quality mindset can improve the way we build software
        </p>
      </section>

      <hr />

      {/* What is Dantotsu */}
      <section className={styles.section}>
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

      {/* Source */}
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2>Where these ideas come from</h2>

          <Image className={styles.bookCover} src={bookCoverImg} alt="" width={200} objectFit="contain"  />

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

        {/* Mental Models */}
        <section className={styles.section}>
          <h2>Mental models</h2>

          <p>
            A few printable mental models to challenge common coding mistakes
          </p>

          <Image className={styles.bookCover} src={mentalModelImg} alt="" width={300} objectFit="contain"  />

          <a className={styles.button} href="https://alberic.trancart.net/tag/dantotsu-quality/">
            Explore the mental models →
          </a>
        </section>
      </div>

      <footer className={styles.footer}>
        <div>
          <strong>Page created by Albéric Trancart</strong>
        </div>

        <div className={styles.links}>
          <a href="https://alberic.trancart.net/">Blog</a>
          <a href="https://www.linkedin.com/in/alberic-trancart/">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

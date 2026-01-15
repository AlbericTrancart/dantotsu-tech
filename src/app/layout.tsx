import "./globals.css";
import styles from "./layout.module.css";
import theodoLogoImg from '@/assets/theodo-logo.png'
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}

          <footer className={styles.footer}>
            <div>
              <strong>Page created by Albéric Trancart</strong>
            </div>

            <a href="https://www.theodo.com" target="_blank" rel="noopener noreferrer">
              <Image
                src={theodoLogoImg}
                alt="Theodo Logo"
                width={100}
                className={styles.theodoLogo}
              />
            </a>

            <div className={styles.links}>
              <a href="https://alberic.trancart.net/">Blog</a>
              <a href="https://www.linkedin.com/in/alberic-trancart/">LinkedIn</a>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}

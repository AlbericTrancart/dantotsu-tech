import "./globals.css";
import styles from "./layout.module.css";

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

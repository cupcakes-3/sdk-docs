import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: "flex", justifyContent: "center"}}>
        <div className={styles.buttons} style={{marginRight: 30}}>
          <Link
          style={{
            border: "2px solid white",
            background: "transparent"
          }}
            className="button button--info button--lg"
            to="/docs/intro"
          >
            Quickstart SDK - 5min ⏱️
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            target="_black"
            className="button button--secondary button--lg"
            to="https://calendly.com/mohit-proton"
          >
            Book a demo 📷️
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

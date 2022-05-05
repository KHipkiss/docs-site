import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Coming soon!',
    description: (
      <>
        This site will shortly be filled with my technical authored documents, how tos, and processes.
        <br />Watch this space!
      </>
    ),
  },
  {
    title: 'My blog',
    description: (
      <>
        Read my blog for thoughts on documentation, tips, and tools!
      </>
    )
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent:"space-around"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

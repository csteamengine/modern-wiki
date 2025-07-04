import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Projects',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Explore hands-on projects in 3D printing, CNC machining, electronics, and custom keyboards —
                all with full documentation and lessons learned.
            </>
        ),
    },
    {
        title: 'Tips & Tricks',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Discover useful tools, gotchas, and time-saving techniques from years of trial, error, and tinkering.
                Whether it's firmware quirks or cable routing, it's here.
            </>
        ),
    },
    {
        title: 'Made for Hobbyists',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                This wiki was built by and for modern hobbyists who want to understand how things work
                and build something better. Documented with clarity and care.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
    LightbulbOutlined,
    SearchOutlined,
    BuildCircleOutlined,
    AutoStoriesOutlined,
    BugReportOutlined,
    UpdateOutlined,
    GroupOutlined,
    ExploreOutlined, RocketLaunch,
} from '@mui/icons-material';

import styles from './index.module.css';
import {Button, IconButton} from "@mui/material";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <Button endIcon={<RocketLaunch />} variant="contained" size="large" className={styles.buttons}>
                    <Link
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        to="/docs/projects">
                        View My Projects
                    </Link>
                </Button>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    return (
        <Layout
            title="Welcome to the Modern Hobbyist Wiki"
            description="A wiki for projects, tips, and lessons learned by a modern hobbyist.">
            <HomepageHeader />
            <main className="container margin-vert--lg">
                <section className="margin-bottom--lg">
                    <Heading as="h2">
                        <LightbulbOutlined style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        Why This Wiki Exists
                    </Heading>
                    <p>
                        I've spent years experimenting, troubleshooting, and figuring things out the hard way. While there are plenty of guides and tutorials out there on <strong>what</strong> to do, I found that the biggest challenge was often understanding <strong>how</strong> to start learning in the first place.
                    </p>
                    <p>
                        This wiki is my attempt to document not just my (very limited) knowledge but also my learning journey—so you can see the paths I took, the mistakes I made, and the strategies that worked best.
                    </p>
                </section>

                <section className="margin-bottom--lg">
                    <Heading as="h2">
                        <SearchOutlined style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        What You'll Find Here
                    </Heading>
                    <ul>
                        <li>
                            <BuildCircleOutlined fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            <strong>Project Breakdowns</strong> – Step-by-step insights into projects I've built, from custom mechanical keyboards to entire DIY CNC Machines.
                        </li>
                        <li>
                            <AutoStoriesOutlined fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            <strong>Learning Strategies</strong> – My approach to picking up complex skills, from decoding technical documentation to troubleshooting hardware issues.
                        </li>
                        <li>
                            <SearchOutlined fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            <strong>Tools & Resources</strong> – The books, videos, forums, and courses that helped me the most.
                        </li>
                        <li>
                            <BugReportOutlined fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            <strong>Failures & Fixes</strong> – The things that went wrong and what I did to recover.
                        </li>
                        <li>
                            <UpdateOutlined fontSize="small" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                            <strong>Continuous Learning</strong> – How I stay up-to-date with rapidly evolving technologies.
                        </li>
                    </ul>
                </section>

                <section className="margin-bottom--lg">
                    <Heading as="h2">
                        <GroupOutlined style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        Who This Is For
                    </Heading>
                    <p>
                        This wiki is for makers, tinkerers, and anyone who wants to take on new technical challenges but isn't sure where to start. Whether you're diving into 3D printing, designing PCBs, or automating your workshop, I hope my experiences help make your learning journey smoother.
                    </p>
                </section>

                <section className="margin-bottom--lg">
                    <Heading as="h2">
                        <ExploreOutlined style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        How to Use This Wiki
                    </Heading>
                    <p>
                        You can browse through topics using the sidebar or search for specific subjects. If you're looking for guidance on how to approach a brand-new skill, check out the{' '}
                        <Link to="/docs/learning-strategies">Learning Strategies</Link> section.
                    </p>
                </section>

                <section className="margin-bottom--lg">
                    <p>
                        This is a living document, and I'll be updating it as I learn more. If you have questions or suggestions, feel free to reach out!
                    </p>
                </section>
                <div className="container" style={{justifyContent: 'center', textAlign: 'center'}}>
                    <h1 className="hero__title">
                        Happy Making!
                    </h1>
                    <Button endIcon={<RocketLaunch />} variant="contained" size="large" className={styles.buttons}>
                        <Link
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            to="/docs/projects">
                            View My Projects
                        </Link>
                    </Button>
                </div>
            </main>
        </Layout>
    );
}

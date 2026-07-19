import React, { useState } from 'react'
import '../style/landing.scss'
import { Link } from 'react-router'

// ── Icons (inline, stroke style to match the rest of the app) ─────────────────
const Icon = {
    arrow: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>),
    upload: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>),
    target: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
    code: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    chat: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
    map: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>),
    file: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>),
    check: (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>),
}

const FEATURES = [
    { icon: Icon.target, tag: 'SCORE', title: 'Match score', body: 'A single number for how well your background lines up with the role, and why.' },
    { icon: Icon.code, tag: 'TECHNICAL', title: 'Technical questions', body: 'The questions the role is likely to raise, each with what it\u2019s really testing for and a model answer.' },
    { icon: Icon.chat, tag: 'BEHAVIORAL', title: 'Behavioral questions', body: 'Story-based prompts pulled from the seniority and team signals in the listing itself.' },
    { icon: Icon.map, tag: 'ROADMAP', title: 'Prep roadmap', body: 'A day-by-day plan for the time you actually have before the interview.' },
    { icon: Icon.file, tag: 'RESUME', title: 'Tailored resume', body: 'Your resume, rewritten to speak the language of this specific job description.' },
]

const STEPS = [
    { n: '01', title: 'Submit', body: 'Paste the job description. Upload your resume, or just describe yourself in a few lines.' },
    { n: '02', title: 'Analyze', body: 'We read the listing the way a hiring manager would \u2014 skills, seniority, and the gaps between them.' },
    { n: '03', title: 'Study', body: 'Open your file: expected questions, a prep roadmap, and a resume tuned to the role.' },
]

const Landing = () => {
    const [ menuOpen, setMenuOpen ] = useState(false)

    return (
        <div className='landing-page'>

            {/* ── Nav ── */}
            <header className='landing-nav'>
                <div className='landing-nav__inner'>
                    <Link to='/' className='landing-nav__mark'>Aced<span>.</span></Link>

                    <nav className={`landing-nav__links ${menuOpen ? 'landing-nav__links--open' : ''}`}>
                        <a href='#process' onClick={() => setMenuOpen(false)}>How it works</a>
                        <a href='#file' onClick={() => setMenuOpen(false)}>What you get</a>
                        <Link to='/login' onClick={() => setMenuOpen(false)}>Log in</Link>
                        <Link to='/register' className='button primary-button' onClick={() => setMenuOpen(false)}>
                            Start your file
                        </Link>
                    </nav>

                    <button className='landing-nav__toggle' onClick={() => setMenuOpen(o => !o)} aria-label='Toggle menu'>
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className='hero'>
                <div className='hero__text'>
                    <span className='eyebrow'>AI Interview Prep</span>
                    <h1>Walk in already knowing what they&rsquo;ll ask.</h1>
                    <p className='hero__sub'>
                        Paste the job description, add your resume, and get a full case file: your match score,
                        the questions to expect, a day-by-day roadmap, and a resume rewritten for the role.
                    </p>
                    <div className='hero__actions'>
                        <Link to='/register' className='button primary-button'>
                            Start your file
                            <span className='button__icon'>{Icon.arrow}</span>
                        </Link>
                        <a href='#file' className='button ghost-button'>See what&rsquo;s inside</a>
                    </div>
                    <p className='hero__note'>No credit card. Your first file is free.</p>
                </div>

                <div className='hero__visual'>
                    <div className='dossier'>
                        <div className='dossier__tab'>OPEN FILE</div>
                        <div className='dossier__top'>
                            <span className='dossier__label'>CANDIDATE FILE</span>
                            <span className='dossier__ref'>REF. 00842</span>
                        </div>

                        <div className='dossier__score'>
                            <div className='dossier__ring'>
                                <span>94</span>
                                <small>%</small>
                            </div>
                            <div>
                                <p className='dossier__score-label'>Match score</p>
                                <p className='dossier__score-sub'>Strong fit for this role</p>
                            </div>
                        </div>

                        <div className='dossier__rows'>
                            <div className='dossier__row'>
                                <span className='pill pill--technical'>TECHNICAL</span>
                                <p>Walk me through a time you optimized a slow API.</p>
                            </div>
                            <div className='dossier__row'>
                                <span className='pill pill--behavioral'>BEHAVIORAL</span>
                                <p>Tell me about a disagreement with a teammate.</p>
                            </div>
                            <div className='dossier__row dossier__row--muted'>
                                <span className='pill pill--roadmap'>ROADMAP</span>
                                <p>Day 3 &mdash; mock system design, 45 min</p>
                            </div>
                        </div>

                        <div className='dossier__stamp'>PREPARED</div>
                    </div>
                </div>
            </section>

            {/* ── How it works ── */}
            <section id='process' className='process'>
                <div className='section-head'>
                    <span className='eyebrow'>The process</span>
                    <h2>Three steps, one sitting.</h2>
                </div>

                <div className='process__list'>
                    {STEPS.map((step, i) => (
                        <div className='process__step' key={step.n}>
                            <span className='process__number'>{step.n}</span>
                            <h3>{step.title}</h3>
                            <p>{step.body}</p>
                            {i < STEPS.length - 1 && <span className='process__connector' aria-hidden='true' />}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── What's inside ── */}
            <section id='file' className='file-contents'>
                <div className='section-head'>
                    <span className='eyebrow'>The file</span>
                    <h2>Everything you&rsquo;d want before walking in.</h2>
                </div>

                <div className='file-contents__grid'>
                    {FEATURES.map(f => (
                        <div className='index-card' key={f.tag}>
                            <div className='index-card__top'>
                                <span className='index-card__icon'>{f.icon}</span>
                                <span className='index-card__tag'>{f.tag}</span>
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Closer look ── */}
            <section className='closer-look'>
                <div className='closer-look__text'>
                    <span className='eyebrow'>A closer look</span>
                    <h2>Every question comes with the reasoning behind it.</h2>
                    <p>
                        Not just a list of things to expect &mdash; each entry explains what it&rsquo;s really
                        probing for, and a model answer shaped around your own background.
                    </p>
                    <ul className='closer-look__points'>
                        <li>{Icon.check} Organized into technical, behavioral, and roadmap sections</li>
                        <li>{Icon.check} Every question tied back to a line in the job description</li>
                        <li>{Icon.check} A roadmap sized to the days you actually have left</li>
                    </ul>
                </div>

                <div className='closer-look__mock'>
                    <div className='mock-window'>
                        <div className='mock-window__nav'>
                            <span className='mock-window__item mock-window__item--active'>{Icon.code} Technical</span>
                            <span className='mock-window__item'>{Icon.chat} Behavioral</span>
                            <span className='mock-window__item'>{Icon.map} Road Map</span>
                        </div>
                        <div className='mock-window__body'>
                            <div className='mock-q'>
                                <span>Q1</span>
                                <p>How would you design a rate limiter for a public API?</p>
                            </div>
                            <div className='mock-q'>
                                <span>Q2</span>
                                <p>Explain the trade-offs between SQL and NoSQL for this system.</p>
                            </div>
                            <div className='mock-q mock-q--dim'>
                                <span>Q3</span>
                                <p>What would you monitor after shipping this to production?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className='cta-band'>
                <h2>Your next interview starts with one paste.</h2>
                <Link to='/register' className='button primary-button'>
                    Start your file
                    <span className='button__icon'>{Icon.arrow}</span>
                </Link>
            </section>

            {/* ── Footer ── */}
            <footer className='landing-footer'>
                <span className='landing-nav__mark'>Aced<span>.</span></span>
                <p>Interview prep, briefed.</p>
                <div className='landing-footer__links'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Help Center</a>
                </div>
            </footer>
        </div>
    )
}

export default Landing

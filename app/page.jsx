'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const designContract =
  '<!-- THESIS: A real, readable physical-design profile built around a working silicon die, not a static resume template. -->\n' +
  '<!-- OWN-WORLD: Ink-dark substrate, soft mint signal paths, copper traces, measured die geometry and restrained instrument labels. -->\n' +
  '<!-- STORY: See who Ranjith is, inspect grounded experience and skills, then contact him or print the resume. -->\n' +
  '<!-- FIRST VIEWPORT: Profile and direct actions at left; live interactive 3D die, routing traces and process labels at right. -->\n' +
  '<!-- FORM: Experience-led portfolio in the user-pinned silicon / physical-design world; no concept-seed key because the brief pins the direction. -->'

const View = dynamic(() => import('@/components/canvas/View').then((module) => module.View), { ssr: false })
const ChipScene = dynamic(() => import('@/components/canvas/ChipScene').then((module) => module.ChipScene), {
  ssr: false,
})

const experience = [
  {
    company: 'SRESHTA SEMICON TECHNOLOGIES PVT LTD',
    location: 'Visakhapatnam, India',
    role: 'VLSI Physical Design Intern · Onsite',
    date: '20 May – 20 July 2026',
    detail:
      'Worked with Cadence tools on the Leon Processor and DTMF Receiver projects, with exposure to synthesis and physical design.',
    tags: ['Leon Processor', 'DTMF Receiver', 'Cadence'],
  },
  {
    company: 'KT Semicon',
    location: 'Online',
    role: 'Short-term Physical Design Intern · Online',
    date: '10 May – 10 July 2026',
    detail: 'RTL-to-GDSII physical design internship.',
    tags: ['RTL-to-GDSII'],
  },
  {
    company: 'Dr. Narla Tata Rao Thermal Power Station (Dr. NTTPS)',
    location: 'Vijayawada, India',
    role: 'Six-month internship · Final diploma semester',
    date: 'November 2023 – May 2024',
    detail: '',
    tags: [],
  },
]

const flow = ['Synthesis', 'Floorplanning', 'Power planning', 'Placement', 'CTS', 'Routing', 'Signoff']

const capabilities = [
  {
    title: 'Physical design',
    copy: 'Logic synthesis, floorplanning, power planning, placement, clock-tree synthesis, routing, timing closure and signoff methodologies.',
  },
  {
    title: 'Timing & verification',
    copy: 'Basic static timing analysis, timing constraints, physical verification and stage-specific files across the ASIC flow.',
  },
  {
    title: 'Tools & scripting',
    copy: 'Cadence Genus, Cadence Innovus, Xilinx Vivado, S-Edit, Linux and intermediate TCL scripting.',
  },
]

const education = [
  {
    school: 'SRK Institute of Technology',
    course: 'BTech · Electronics and VLSI Engineering',
    date: 'August 2024 – April 2027',
  },
  {
    school: 'Dhanekula Institute of Engineering and Technology',
    course: 'Diploma · Electrical, Electronics and Communications Engineering',
    date: 'May 2021 – July 2024',
  },
]

const learning = [
  {
    title: 'Digital VLSI Testing',
    provider: 'NPTEL · 12-week course',
    date: 'January – April 2026',
  },
  {
    title: 'Physical Design workshop: RTL to GDSII',
    provider: 'KT Semicon',
    date: '14 – 16 February 2026',
  },
  {
    title: 'VLSI Design Flow: RTL to GDS',
    provider: 'NPTEL · 12-week course',
    date: 'July – October 2025',
  },
  {
    title: 'IoT Internship Program',
    provider: 'CSC India',
    date: '20 May – 20 July 2026',
  },
  {
    title: 'Signal Processing in Medical Imaging: From Engineering to Clinical Diagnostics',
    provider: 'IEEE SPS Seasonal School',
    date: '21 – 25 July 2025',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none'>
      <path d='M4.2 10h11.4M10.4 4.8l5.2 5.2-5.2 5.2' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 20 20' fill='none'>
      <path d='M10 3.5v8m0 0 3-3m-3 3-3-3M4.5 13v3h11v-3' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

export default function Page() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
  const [motionOverride, setMotionOverride] = useState(null)
  const motionEnabled = motionOverride === null ? !prefersReducedMotion : motionOverride

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(media.matches)
    updatePreference()
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  return (
    <main className='resume'>
      <div aria-hidden='true' hidden dangerouslySetInnerHTML={{ __html: designContract }} />
      <a className='skip-link' href='#main-content'>
        Skip to content
      </a>

      <header className='site-header'>
        <a className='wordmark' href='#top' aria-label='Ranjith Kumar Golagani, home'>
          <span className='wordmark-mark' aria-hidden='true'>
            RG
          </span>
          <span>Ranjith Kumar Golagani</span>
        </a>
        <nav className='desktop-nav' aria-label='Main navigation'>
          <a href='#experience'>Experience</a>
          <a href='#capabilities'>Capabilities</a>
          <a href='#education'>Education</a>
        </nav>
        <a className='header-contact' href='mailto:ranjithkumargolagani@gmail.com'>
          Get in touch <ArrowIcon />
        </a>
      </header>

      <div id='main-content'>
        <section className='hero section-frame' id='top' aria-labelledby='hero-title'>
          <div className='hero-copy'>
            <p className='discipline-label'>
              <span aria-hidden='true' />
              Physical design · VLSI engineering
            </p>
            <h1 id='hero-title'>
              Ranjith Kumar
              <span>Golagani</span>
            </h1>
            <p className='hero-role'>Physical Design Engineer Intern</p>
            <p className='hero-intro'>
              Building a foundation in the journey from RTL to routed silicon — with hands-on exposure to synthesis and
              physical design.
            </p>
            <p className='hero-location'>
              <svg aria-hidden='true' viewBox='0 0 20 20' fill='none'>
                <path
                  d='M16 8.4c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z'
                  stroke='currentColor'
                  strokeWidth='1.4'
                />
                <circle cx='10' cy='8.4' r='1.8' stroke='currentColor' strokeWidth='1.4' />
              </svg>
              Vijayawada, Andhra Pradesh, India
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='mailto:ranjithkumargolagani@gmail.com'>
                Contact me <ArrowIcon />
              </a>
              <a
                className='button button-secondary'
                href='https://www.linkedin.com/in/ranjith-kumar-golagani-2962ab249'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn <ArrowIcon />
              </a>
              <button className='button button-quiet print-action' onClick={() => window.print()} type='button'>
                Print / Save PDF <DownloadIcon />
              </button>
            </div>
          </div>

          <div className='hero-visual'>
            <div className='scene-heading'>
              <span>Silicon, in progress</span>
              <span className='scene-coordinate'>16°30&apos;N&nbsp; 80°38&apos;E</span>
            </div>
            <div className='scene-stage'>
              <View className='chip-view' aria-hidden='true'>
                <ChipScene motionEnabled={motionEnabled} />
              </View>
              <span className='scene-label scene-label-rtl'>RTL</span>
              <span className='scene-label scene-label-cts'>CTS</span>
              <span className='scene-label scene-label-route'>ROUTE</span>
              <span className='scene-pin scene-pin-top' aria-hidden='true' />
              <span className='scene-pin scene-pin-side' aria-hidden='true' />
            </div>
            <div className='scene-footer'>
              <span className='scene-caption'>
                <span className='signal-dot' aria-hidden='true' />
                A closer look at the physical design flow
              </span>
              <button
                className='motion-toggle'
                type='button'
                onClick={() => setMotionOverride(!motionEnabled)}
                aria-pressed={motionEnabled}
              >
                {motionEnabled ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              </button>
            </div>
          </div>

          <div className='hero-index' aria-hidden='true'>
            <span>01</span>
            <span className='hero-index-line' />
            <span>PROFILE</span>
          </div>
        </section>

        <section className='flow-section section-frame' aria-labelledby='flow-title'>
          <div className='flow-intro'>
            <h2 id='flow-title'>From logic to layout.</h2>
            <p>Learning each stage that takes a design closer to silicon.</p>
          </div>
          <ol className='flow-track' aria-label='ASIC physical design flow stages'>
            {flow.map((stage, index) => (
              <li className={index === flow.length - 1 ? 'flow-stage flow-stage-final' : 'flow-stage'} key={stage}>
                <span className='flow-node' aria-hidden='true' />
                <span>{stage}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className='content-section section-frame' id='experience' aria-labelledby='experience-title'>
          <div className='section-heading'>
            <h2 id='experience-title'>Experience</h2>
            <p>Internship experience across physical design and RTL-to-GDSII.</p>
          </div>
          <div className='experience-list'>
            {experience.map((item, index) => (
              <article className='experience-entry' key={item.company}>
                <div className='entry-marker' aria-hidden='true'>
                  <span className={index === 0 ? 'entry-marker-dot entry-marker-active' : 'entry-marker-dot'} />
                  {index < experience.length - 1 && <span className='entry-marker-line' />}
                </div>
                <div className='entry-content'>
                  <div className='entry-topline'>
                    <div>
                      <h3>{item.company}</h3>
                      <p className='entry-role'>{item.role}</p>
                    </div>
                    <p className='entry-date'>{item.date}</p>
                  </div>
                  <p className='entry-location'>{item.location}</p>
                  {item.detail && <p className='entry-detail'>{item.detail}</p>}
                  {item.tags.length > 0 && (
                    <ul className='tag-list' aria-label='Internship projects and tools'>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='capabilities-section' id='capabilities' aria-labelledby='capabilities-title'>
          <div className='section-frame capabilities-inner'>
            <div className='section-heading'>
              <h2 id='capabilities-title'>Building the toolkit.</h2>
              <p>Skills and tools developed through coursework, workshops and internship experience.</p>
            </div>
            <div className='capability-list'>
              {capabilities.map((capability, index) => (
                <article className='capability-entry' key={capability.title}>
                  <span className='capability-index'>0{index + 1}</span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.copy}</p>
                  </div>
                  <span className='capability-mark' aria-hidden='true'>
                    <span />
                    <span />
                    <span />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='content-section section-frame education-section' id='education' aria-labelledby='education-title'>
          <div className='section-heading'>
            <h2 id='education-title'>Education</h2>
            <p>Electronics, communications and VLSI engineering.</p>
          </div>
          <div className='education-list'>
            {education.map((item) => (
              <article className='education-entry' key={item.school}>
                <span className='education-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M3 9.2 12 4l9 5.2-9 5.2-9-5.2ZM6.5 11.6v4.7c3.5 2.3 7.5 2.3 11 0v-4.7M21 9.2v6'
                      stroke='currentColor'
                      strokeWidth='1.4'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <div className='education-copy'>
                  <h3>{item.school}</h3>
                  <p>{item.course}</p>
                </div>
                <p className='education-date'>{item.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='learning-section section-frame' aria-labelledby='learning-title'>
          <div className='section-heading'>
            <h2 id='learning-title'>Courses & training</h2>
            <p>Focused study in VLSI design, testing, signal processing and connected systems.</p>
          </div>
          <ul className='learning-list'>
            {learning.map((item) => (
              <li className='learning-entry' key={item.title}>
                <span className='learning-marker' aria-hidden='true' />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.provider}</p>
                </div>
                <span className='learning-date'>{item.date}</span>
                <ArrowIcon />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className='site-footer'>
        <div className='footer-main section-frame'>
          <div>
            <h2>Let&apos;s talk silicon.</h2>
            <p>Interested in a Physical Design Engineer Intern or entry-level Physical Design Engineer role.</p>
          </div>
          <a className='button button-primary footer-button' href='mailto:ranjithkumargolagani@gmail.com'>
            Start a conversation <ArrowIcon />
          </a>
        </div>
        <div className='footer-bottom section-frame'>
          <a href='mailto:ranjithkumargolagani@gmail.com'>ranjithkumargolagani@gmail.com</a>
          <a href='tel:+916304830542'>+91 63048 30542</a>
          <span>Vijayawada, Andhra Pradesh, India</span>
          <a
            href='https://www.linkedin.com/in/ranjith-kumar-golagani-2962ab249'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn <ArrowIcon />
          </a>
          <span className='footer-signoff'>© 2026 Ranjith Kumar Golagani</span>
        </div>
      </footer>
    </main>
  )
}

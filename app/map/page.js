'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, AlertCircle, XCircle, ChevronRight } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 1,
    category: 'Founder Trap',
    categoryIndex: 0,
    label: 'The Vacation Test',
    symptom:
      'If you took two weeks off with no phone, would revenue meaningfully drop or operations stall?',
    redLabel: 'Yes — everything stops',
    yellowLabel: 'Somewhat — a few things break',
    greenLabel: 'No — it runs without me',
  },
  {
    id: 2,
    category: 'Founder Trap',
    categoryIndex: 0,
    label: 'The Brain Lock',
    symptom:
      'Are critical decisions — pricing, hiring, offers — waiting on your personal approval before moving forward?',
    redLabel: 'All decisions route through me',
    yellowLabel: 'Most do, but some are delegated',
    greenLabel: 'Team handles it with clear criteria',
  },
  {
    id: 3,
    category: 'Founder Trap',
    categoryIndex: 0,
    label: 'Decision Density',
    symptom:
      'How many times per day are you pulled out of deep work to make low-stakes operational calls?',
    redLabel: 'Constantly — 10+ times daily',
    yellowLabel: 'A few times — 3–5 per day',
    greenLabel: 'Rarely — team is self-sufficient',
  },
  {
    id: 4,
    category: 'Revenue Velocity',
    categoryIndex: 1,
    label: 'Speed to Lead',
    symptom:
      'How fast does a qualified lead receive a meaningful human (or AI) touchpoint after expressing interest?',
    redLabel: 'Hours or longer',
    yellowLabel: 'Within the hour',
    greenLabel: 'Within 5 minutes',
  },
  {
    id: 5,
    category: 'Revenue Velocity',
    categoryIndex: 1,
    label: 'Ghost Database',
    symptom:
      'Do you have unconverted leads sitting in your CRM older than 90 days with no active nurture sequence?',
    redLabel: 'Yes — hundreds rotting',
    yellowLabel: 'Some — sporadic follow-up',
    greenLabel: 'No — automated sequences active',
  },
  {
    id: 6,
    category: 'Revenue Velocity',
    categoryIndex: 1,
    label: 'Content Gap',
    symptom:
      'Is your content consistently moving cold audiences toward a first conversion event?',
    redLabel: 'No consistent content strategy',
    yellowLabel: 'Sporadic — no clear system',
    greenLabel: 'Yes — documented and publishing',
  },
  {
    id: 7,
    category: 'Admin Friction',
    categoryIndex: 2,
    label: 'Data Gymnastics',
    symptom:
      'How much time does your team spend manually moving data between tools (copy/paste, reformatting, re-entry)?',
    redLabel: 'Hours per week per person',
    yellowLabel: 'Some — a few hours',
    greenLabel: 'Minimal — mostly automated',
  },
  {
    id: 8,
    category: 'Admin Friction',
    categoryIndex: 2,
    label: 'Search & Rescue',
    symptom:
      'How long does it take a team member to find a specific document, asset, or piece of client info?',
    redLabel: '5+ minutes — or it\u2019s lost',
    yellowLabel: '2–5 minutes of searching',
    greenLabel: 'Under 60 seconds',
  },
  {
    id: 9,
    category: 'Admin Friction',
    categoryIndex: 2,
    label: 'Status Update Tax',
    symptom:
      'How much time is spent in meetings or messages answering \u2018where are we on this?\u2019 questions?',
    redLabel: 'Multiple check-ins daily',
    yellowLabel: 'Weekly recurring status calls',
    greenLabel: 'Async dashboards handle it',
  },
  {
    id: 10,
    category: 'Operational Integrity',
    categoryIndex: 3,
    label: 'Onboarding Experience',
    symptom:
      'When a new client signs, is their onboarding experience consistent, fast, and self-explanatory?',
    redLabel: 'Manual chaos every time',
    yellowLabel: 'Semi-structured — some gaps',
    greenLabel: 'Documented and systematized',
  },
  {
    id: 11,
    category: 'Operational Integrity',
    categoryIndex: 3,
    label: 'Meeting ROI',
    symptom:
      'Do your internal meetings produce clear decisions and next actions — or are they status updates that could be a Loom?',
    redLabel: 'Mostly updates, rarely decisions',
    yellowLabel: 'Mixed — some productive',
    greenLabel: 'Agendas, decisions, actions every time',
  },
  {
    id: 12,
    category: 'Operational Integrity',
    categoryIndex: 3,
    label: 'Staff Fulfillment',
    symptom:
      'Are your team members spending the majority of their time on high-value work — or repetitive manual tasks?',
    redLabel: 'Mostly repetitive and manual',
    yellowLabel: 'Split — some high-value, some not',
    greenLabel: 'Primarily high-value work',
  },
]

const CATEGORIES = [
  'Founder Trap',
  'Revenue Velocity',
  'Admin Friction',
  'Operational Integrity',
]

const DIAGNOSTICS = {
  'Founder Trap': {
    red: 'You don\u2019t own a business; you own a high-pressure job. Your personal involvement is the primary bottleneck.',
    yellow:
      'You\u2019re partially dependent. The system works — until it doesn\u2019t. One departure or spike in demand reveals the gap.',
    green: 'Strong. Your business has genuine leverage at the founder layer.',
  },
  'Revenue Velocity': {
    red: 'You are burning cash. Your \u2018Speed to Lead\u2019 and follow-up gaps are allowing competitors to steal market share.',
    yellow:
      'Revenue is moving, but leaving money in the pipeline. Consistency and automation will compound results.',
    green: 'Revenue engine is operational. Focus shifts to volume and conversion optimization.',
  },
  'Admin Friction': {
    red: 'Your team is drowning in \u2018Data Gymnastics.\u2019 You are paying for intelligence but receiving manual labor.',
    yellow:
      'Friction exists but isn\u2019t fatal — yet. As you scale, these gaps compound into real cost.',
    green: 'Lean operations. AI and automation are doing the heavy lifting where it counts.',
  },
  'Operational Integrity': {
    red: 'Your \u2018Delivery\u2019 is a manual grind. Every new client creates more stress, not more momentum.',
    yellow:
      'Delivery works, but depends on individual effort rather than system reliability.',
    green: 'Delivery is systematized. New clients create predictable workload, not chaos.',
  },
}

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUS_HEX = {
  red: '#d9534f',
  yellow: '#f0ad4e',
  green: '#5cb85c',
}

const STATUS_LABEL = {
  red: 'Critical',
  yellow: 'Warning',
  green: 'Efficient',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getCategoryStatus(answers, categoryIndex) {
  const catAnswers = answers.filter(
    (_, i) => QUESTIONS[i] && QUESTIONS[i].categoryIndex === categoryIndex
  )
  if (catAnswers.some((s) => s === 'red')) return 'red'
  if (catAnswers.some((s) => s === 'yellow')) return 'yellow'
  if (catAnswers.every((s) => s === 'green')) return 'green'
  return null
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function HeatmapCell({ status, questionNumber, isActive, justSet }) {
  return (
    <div
      className={[
        'relative flex items-center justify-center transition-all duration-500',
        isActive && !status ? 'border-ink ring-1 ring-ink' : '',
        !status && !isActive ? 'border-rule' : '',
        status ? 'border-transparent' : '',
        justSet ? 'animate-bloom' : '',
      ].join(' ')}
      style={{
        backgroundColor: status ? STATUS_HEX[status] : '#F5F5F5',
        aspectRatio: '1',
        opacity: status ? 1 : isActive ? 1 : 0.45,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isActive && !status ? '#000' : status ? 'transparent' : '#E5E5E5',
      }}
    >
      <span
        className={[
          'text-eyebrow font-semibold',
          status ? 'text-white' : isActive ? 'text-ink' : 'text-ink-faint',
        ].join(' ')}
      >
        {questionNumber}
      </span>
      {isActive && !status && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2">
          <span className="block w-1 h-1 rounded-full bg-ink animate-pulse" />
        </span>
      )}
    </div>
  )
}

function StatusButton({ value, label, selected, onClick }) {
  const configs = {
    red: {
      color: '#d9534f',
      icon: <XCircle className="w-4 h-4 shrink-0" />,
    },
    yellow: {
      color: '#f0ad4e',
      icon: <AlertCircle className="w-4 h-4 shrink-0" />,
    },
    green: {
      color: '#5cb85c',
      icon: <CheckCircle2 className="w-4 h-4 shrink-0" />,
    },
  }

  const config = configs[value]

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-5 py-3 text-small font-medium transition-all duration-200 text-left border-2"
      style={{
        borderColor: config.color,
        backgroundColor: selected ? config.color : '#FFFFFF',
        color: selected ? '#FFFFFF' : config.color,
      }}
    >
      {config.icon}
      <span>{label}</span>
    </button>
  )
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function MapPage() {
  const [answers, setAnswers] = useState(Array(12).fill(null))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [tempSelection, setTempSelection] = useState(null)
  const [justSetCell, setJustSetCell] = useState(null)
  const [fadeKey, setFadeKey] = useState(0)

  const progress = answers.filter((a) => a !== null).length
  const question = QUESTIONS[currentQuestion]

  // Trigger fade animation on question change
  useEffect(() => {
    setFadeKey((k) => k + 1)
  }, [currentQuestion])

  // Clear bloom animation after it plays
  useEffect(() => {
    if (justSetCell !== null) {
      const t = setTimeout(() => setJustSetCell(null), 600)
      return () => clearTimeout(t)
    }
  }, [justSetCell])

  const handleSelect = (status) => {
    setTempSelection(status)
  }

  const commitAnswer = () => {
    if (tempSelection === null) return
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = tempSelection
    setAnswers(newAnswers)
    setJustSetCell(currentQuestion)
    setTempSelection(null)
    return newAnswers
  }

  const handleNext = () => {
    commitAnswer()
    if (currentQuestion < 11) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleReveal = () => {
    const final = commitAnswer()
    if (final && final.every((a) => a !== null)) {
      setRevealed(true)
    }
  }

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1)
    setTempSelection(answers[currentQuestion - 1])
  }

  const handleReset = () => {
    setAnswers(Array(12).fill(null))
    setCurrentQuestion(0)
    setRevealed(false)
    setTempSelection(null)
    setJustSetCell(null)
  }

  const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answers, i))

  return (
    <>
      {/* Bloom keyframe — injected once */}
      <style jsx global>{`
        @keyframes bloom {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
          }
          40% {
            transform: scale(1.12);
            box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.08);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
        .animate-bloom {
          animation: bloom 0.5s ease-out;
        }
      `}</style>

      {/* Header — matches site Header.js */}
      <header className="border-b border-rule bg-paper">
        <div className="max-w-wide mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight hover:text-accent transition-colors"
          >
            Rev Vaughn
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-small">
            <Link href="/#programs" className="text-ink-muted hover:text-ink transition-colors">
              Programs
            </Link>
            <Link href="/ai-inner-circle" className="text-ink-muted hover:text-ink transition-colors">
              AI Inner Circle
            </Link>
            <Link href="/#about" className="text-ink-muted hover:text-ink transition-colors">
              About
            </Link>
            <Link href="/#briefings" className="text-ink-muted hover:text-ink transition-colors">
              Briefings
            </Link>
            <Link href="/resources" className="text-ink-muted hover:text-ink transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-ink hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="bg-paper">
        {/* ─── Hero (only before first answer) ─────────────────────────── */}
        {currentQuestion === 0 && progress === 0 && !revealed && (
          <section className="bg-paper py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">10-Minute Diagnostic</p>
                  <h1 className="font-sans font-semibold text-display text-ink mb-6">
                    AI Priority Map
                  </h1>
                  <p className="text-lead text-ink-muted">
                    12 symptom-based questions. Four operational categories. One clear picture
                    of where AI gives you real leverage — and where you have a systems problem
                    first.
                  </p>
                </div>
                <div className="hidden md:flex items-start justify-center pt-4">
                  <Image
                    src="/ai-inner-circle-logo.jpg"
                    alt="AI Inner Circle"
                    width={200}
                    height={200}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── Assessment ──────────────────────────────────────────────── */}
        {!revealed && (
          <section className="bg-paper-grey py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
                {/* Question Panel */}
                <div className="md:col-span-3">
                  {/* Progress bar */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                        Question {currentQuestion + 1} of 12
                      </span>
                      <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                        {progress} answered
                      </span>
                    </div>
                    <div className="w-full h-px bg-rule overflow-hidden">
                      <div
                        className="h-full bg-ink transition-all duration-500"
                        style={{ width: `${(progress / 12) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question content — fades on change */}
                  <div key={fadeKey} className="fade-up">
                    <p className="eyebrow mb-3">{question.category}</p>
                    <h2 className="font-sans font-semibold text-h1 text-ink mb-3">
                      {question.label}
                    </h2>
                    <p className="text-body text-ink-muted mb-10">{question.symptom}</p>

                    {/* Options */}
                    <div className="flex flex-col gap-3 mb-10">
                      <StatusButton
                        value="red"
                        label={question.redLabel}
                        selected={tempSelection === 'red'}
                        onClick={() => handleSelect('red')}
                      />
                      <StatusButton
                        value="yellow"
                        label={question.yellowLabel}
                        selected={tempSelection === 'yellow'}
                        onClick={() => handleSelect('yellow')}
                      />
                      <StatusButton
                        value="green"
                        label={question.greenLabel}
                        selected={tempSelection === 'green'}
                        onClick={() => handleSelect('green')}
                      />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3">
                    {currentQuestion > 0 && (
                      <button
                        onClick={handleBack}
                        className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-ink hover:bg-ink hover:text-paper"
                      >
                        &larr; Back
                      </button>
                    )}

                    {currentQuestion < 11 ? (
                      <button
                        onClick={handleNext}
                        disabled={tempSelection === null}
                        className={[
                          'inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border',
                          tempSelection !== null
                            ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent'
                            : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed',
                        ].join(' ')}
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleReveal}
                        disabled={tempSelection === null}
                        className={[
                          'inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border',
                          tempSelection !== null
                            ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent'
                            : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed',
                        ].join(' ')}
                      >
                        Reveal My Map <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* ─── Heatmap ───────────────────────────────────────────── */}
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">Live Priority Map</p>

                  <div className="flex flex-col gap-5">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">
                          {cat}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return (
                              <HeatmapCell
                                key={q.id}
                                status={answers[qIndex]}
                                questionNumber={q.id}
                                isActive={currentQuestion === qIndex}
                                justSet={justSetCell === qIndex}
                              />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 flex gap-5">
                    {['red', 'yellow', 'green'].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: STATUS_HEX[s] }}
                        />
                        <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                          {STATUS_LABEL[s]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── Diagnostic Reveal ──────────────────────────────────────── */}
        {revealed && (
          <>
            {/* Headline */}
            <section className="bg-paper py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose fade-up">
                  <p className="eyebrow mb-6">Your Diagnostic</p>
                  <h2 className="font-sans font-semibold text-display text-ink mb-6">
                    Your AI Priority Map
                  </h2>
                  <p className="text-lead text-ink-muted">
                    Based on your answers, here&rsquo;s where your leverage is — and where the
                    leaks are.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Heatmap + Diagnostics */}
            <section className="bg-paper-grey py-section">
              <div className="max-w-content mx-auto px-6">
                {/* Final Map */}
                <div className="mb-14">
                  <p className="eyebrow mb-6">Priority Map</p>
                  <div className="flex flex-col gap-5 max-w-sm">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">
                          {cat}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return (
                              <HeatmapCell
                                key={q.id}
                                status={answers[qIndex]}
                                questionNumber={q.id}
                                isActive={false}
                                justSet={false}
                              />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Breakdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CATEGORIES.map((cat, catIdx) => {
                    const catStatus = categoryStatuses[catIdx]
                    const diagnostic = DIAGNOSTICS[cat]
                    const message =
                      catStatus === 'red'
                        ? diagnostic.red
                        : catStatus === 'yellow'
                          ? diagnostic.yellow
                          : diagnostic.green

                    return (
                      <div
                        key={cat}
                        className="p-6 bg-paper border border-rule fade-up"
                        style={{
                          animationDelay: `${catIdx * 0.1}s`,
                          borderLeftWidth: '3px',
                          borderLeftColor: catStatus ? STATUS_HEX[catStatus] : '#E5E5E5',
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">
                              {cat}
                            </p>
                            <span
                              className="text-eyebrow uppercase font-bold tracking-widest"
                              style={{ color: catStatus ? STATUS_HEX[catStatus] : '#8a8a8a' }}
                            >
                              {catStatus ? STATUS_LABEL[catStatus] : '\u2014'}
                            </span>
                          </div>
                          <span
                            className="w-3 h-3 rounded-full mt-1 shrink-0"
                            style={{
                              backgroundColor: catStatus ? STATUS_HEX[catStatus] : '#E5E5E5',
                            }}
                          />
                        </div>
                        <p className="text-body text-ink-muted">{message}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-ink py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose">
                  <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-6">
                    Next Step
                  </p>
                  <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                    A Map is only useful if you take the first step.
                  </h3>
                  <p className="text-lead text-ink-faint mb-10">
                    Book a Pressure Test with Rev. Sixty minutes to identify the real bottleneck,
                    confirm where AI gives you leverage, and get a clear prioritized action plan.
                  </p>
                  <Link
                    href="/quick-win"
                    className="inline-flex items-center gap-3 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-paper hover:bg-accent hover:text-paper hover:border-accent"
                  >
                    Book Your Pressure Test <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Restart */}
            <section className="bg-paper py-10">
              <div className="max-w-content mx-auto px-6 text-center">
                <button
                  onClick={handleReset}
                  className="text-small text-ink-muted hover:text-ink transition-colors underline underline-offset-4"
                >
                  Start over
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer — matches site Footer.js */}
      <footer className="border-t border-rule bg-paper-grey">
        <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-ink-muted">
          <div>&copy; {new Date().getFullYear()} Rev Vaughn. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="hover:text-ink transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-ink transition-colors">
              Contact
            </Link>
            <Link href="/privacy-terms" className="hover:text-ink transition-colors">
              Privacy &amp; Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

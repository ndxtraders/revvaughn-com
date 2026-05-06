'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ChevronRight,
  Download,
  AlertTriangle,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  // Pillar 1: Founder Freedom
  {
    id: 1,
    category: 'Founder Freedom',
    categoryIndex: 0,
    label: 'The Vacation Test',
    symptom:
      'If you left for 2 weeks with no phone, would your business revenue stop or decline?',
    implication: 'Your business is a \u201Cjob\u201D you can\u2019t leave.',
    solution: 'Build \u201CAI Agentic Workflows\u201D to handle routine decisions.',
  },
  {
    id: 2,
    category: 'Founder Freedom',
    categoryIndex: 0,
    label: 'The Brain Trap',
    symptom:
      'Does every process live in your head instead of a written guide?',
    implication: 'You are the single point of failure.',
    solution:
      'Use AI voice-to-text tools to document your \u201CBrain\u201D into a searchable Team Knowledge Base.',
  },
  {
    id: 3,
    category: 'Founder Freedom',
    categoryIndex: 0,
    label: 'The Decision Tax',
    symptom:
      'Does your team need to ask you \u201CWhat\u2019s next?\u201D multiple times a day?',
    implication:
      'You are overpaying for your own time to manage small tasks.',
    solution:
      'Implement a \u201CFirst-Line AI Assistant\u201D to answer team questions based on your style.',
  },
  // Pillar 2: Growth Engine
  {
    id: 4,
    category: 'Growth Engine',
    categoryIndex: 1,
    label: 'Lead Speed',
    symptom:
      'Do new leads ever wait longer than 5 minutes for a response?',
    implication:
      'You are losing hot leads to faster competitors every hour.',
    solution: 'An AI Lead Responder that qualifies leads 24/7.',
  },
  {
    id: 5,
    category: 'Growth Engine',
    categoryIndex: 1,
    label: 'The Follow-Up Gap',
    symptom:
      'Do old leads sit in your database without getting regular check-ins?',
    implication:
      'You have a \u201CGhost Database\u201D of money left on the table.',
    solution: 'An automated AI Reactivation Campaign for old leads.',
  },
  {
    id: 6,
    category: 'Growth Engine',
    categoryIndex: 1,
    label: 'Content Grind',
    symptom:
      'Do you spend hours manually creating content instead of using an automated system?',
    implication: 'Your best marketing ideas are dying in production.',
    solution:
      'A Content Multiplier workflow to turn one raw video into 10+ assets.',
  },
  // Pillar 3: Team Work
  {
    id: 7,
    category: 'Team Work',
    categoryIndex: 2,
    label: 'Copy-Paste Pain',
    symptom:
      'Does your team spend time manually moving info from one app to another?',
    implication: 'You are paying for strategy but getting data entry.',
    solution:
      'Use \u201CSystem Bridges\u201D (Make/Zapier) to move data automatically.',
  },
  {
    id: 8,
    category: 'Team Work',
    categoryIndex: 2,
    label: 'High-Value Work',
    symptom:
      'Does your team spend hours on low-level, repetitive data entry instead of high-value work?',
    implication:
      'Your profit margins are being drained by repetitive tasks.',
    solution:
      'Replace the top 5 repetitive team tasks with custom AI Agents.',
  },
  {
    id: 9,
    category: 'Team Work',
    categoryIndex: 2,
    label: 'The Status Tax',
    symptom:
      'Do you have to ask \u201CWhere are we on this?\u201D to know what\u2019s happening?',
    implication:
      'You are losing hours every week just asking what is happening.',
    solution:
      'An automated \u201CProject Pulse\u201D dashboard for daily status.',
  },
  // Pillar 4: Client Experience
  {
    id: 10,
    category: 'Client Experience',
    categoryIndex: 3,
    label: 'New Client Welcome',
    symptom:
      'Does your client onboarding process require manual work or suffer from inconsistencies?',
    implication:
      'Your first impression is inconsistent and risks churn.',
    solution:
      'A 100% automated onboarding sequence for contracts and intake.',
  },
  {
    id: 11,
    category: 'Client Experience',
    categoryIndex: 3,
    label: 'Meeting Waste',
    symptom:
      'Are notes and tasks from your client meetings often lost or forgotten?',
    implication: 'You\u2019re having the same conversations twice.',
    solution:
      'AI Meeting Intelligence synced directly to your CRM/Project Manager.',
  },
  {
    id: 12,
    category: 'Client Experience',
    categoryIndex: 3,
    label: 'The Reporting Grind',
    symptom:
      'Do you manually compile reports from different systems instead of having them generated automatically?',
    implication:
      'You are making decisions based on old, manual data.',
    solution:
      'A live \u201CBusiness Health Dashboard\u201D pulling automated data from all apps.',
  },
]

const CATEGORIES = [
  'Founder Freedom',
  'Growth Engine',
  'Team Work',
  'Client Experience',
]

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUS_HEX = {
  red: '#d9534f',
  yellow: '#f0ad4e',
  green: '#5cb85c',
}

const STATUS_LABEL = {
  red: 'Breaking Point',
  yellow: 'Caution',
  green: 'Under Control',
}

const POINTS = { red: 10, yellow: 5, green: 0 }
const MAX_TOTAL = 120
const MAX_PER_CATEGORY = 30

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getCategoryFriction(answers, categoryIndex) {
  let sum = 0
  answers.forEach((a, i) => {
    if (QUESTIONS[i] && QUESTIONS[i].categoryIndex === categoryIndex && a) {
      sum += POINTS[a]
    }
  })
  return Math.round((sum / MAX_PER_CATEGORY) * 100)
}

function getTotalFriction(answers) {
  let sum = 0
  answers.forEach((a) => {
    if (a) sum += POINTS[a]
  })
  return Math.round((sum / MAX_TOTAL) * 100)
}

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
        isActive && !status ? 'ring-1 ring-ink' : '',
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

function StatusButton({ label, icon, selected, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-5 py-3 text-small font-medium transition-all duration-200 text-left border-2"
      style={{
        borderColor: color,
        backgroundColor: selected ? color : '#FFFFFF',
        color: selected ? '#FFFFFF' : color,
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function FrictionBar({ percentage, status }) {
  const color = status ? STATUS_HEX[status] : '#E5E5E5'
  return (
    <div className="w-full">
      <div className="w-full h-2 bg-paper-greyDark overflow-hidden">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <span
          className="text-eyebrow font-bold tracking-widest uppercase"
          style={{ color }}
        >
          {status ? STATUS_LABEL[status] : '\u2014'}
        </span>
        <span className="text-eyebrow font-semibold tracking-widest text-ink-faint">
          {percentage}% friction
        </span>
      </div>
    </div>
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
  const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answers, i))
  const categoryFrictions = CATEGORIES.map((_, i) => getCategoryFriction(answers, i))
  const totalFriction = getTotalFriction(answers)
  const redCount = answers.filter((a) => a === 'red').length
  const hasRed = redCount > 0
  const redQuestions = QUESTIONS.filter((_, i) => answers[i] === 'red')

  // Download results as PDF (programmatic — includes all content)
  const handleDownload = useCallback(async () => {
    try {
      const { default: jsPDF } = await import('jspdf')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = 210
      const pageHeight = 297
      const margin = 20
      const contentWidth = pageWidth - margin * 2
      let y = margin

      const checkPage = (needed) => {
        if (y + needed > pageHeight - margin) {
          pdf.addPage()
          y = margin
        }
      }

      // Colors
      const ink = [26, 26, 26]
      const muted = [120, 120, 120]
      const faint = [170, 170, 170]
      const red = [217, 83, 79]
      const yellow = [240, 173, 78]
      const green = [92, 184, 92]
      const statusColors = { red, yellow, green }

      // ── Header
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(10)
      pdf.setTextColor(...faint)
      pdf.text('AI PRIORITY MAP RESULTS', margin, y)
      y += 6
      pdf.setTextColor(...muted)
      pdf.setFontSize(8)
      pdf.text('revvaughn.com/map', margin, y)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 12

      // ── Total Friction Score
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(28)
      pdf.setTextColor(...ink)
      pdf.text(`${totalFriction}%`, margin, y)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(11)
      pdf.setTextColor(...muted)
      pdf.text('Total Business Friction', margin + 30, y)
      y += 6

      // Friction bar
      const barWidth = contentWidth
      const barHeight = 3
      pdf.setFillColor(230, 230, 230)
      pdf.rect(margin, y, barWidth, barHeight, 'F')
      const barColor = totalFriction >= 50 ? red : totalFriction >= 25 ? yellow : green
      pdf.setFillColor(...barColor)
      pdf.rect(margin, y, barWidth * (totalFriction / 100), barHeight, 'F')
      y += 12

      // ── Warning
      if (hasRed) {
        pdf.setFillColor(255, 245, 245)
        pdf.rect(margin, y, contentWidth, 10, 'F')
        pdf.setFillColor(...red)
        pdf.rect(margin, y, 1, 10, 'F')
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(9)
        pdf.setTextColor(...red)
        pdf.text(
          'Your business is at a breaking point that might be improved with AI.',
          margin + 5,
          y + 6.5
        )
        y += 16
      }

      // ── Pillar Breakdown
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(8)
      pdf.setTextColor(...faint)
      pdf.text('PILLAR BREAKDOWN', margin, y)
      y += 8

      CATEGORIES.forEach((cat, catIdx) => {
        checkPage(18)
        const catStatus = categoryStatuses[catIdx]
        const friction = categoryFrictions[catIdx]
        const color = catStatus ? statusColors[catStatus] : faint

        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(9)
        pdf.setTextColor(...ink)
        pdf.text(cat, margin, y)

        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(8)
        pdf.setTextColor(...color)
        const statusText = catStatus ? `${STATUS_LABEL[catStatus]} · ${friction}%` : `${friction}%`
        pdf.text(statusText, pageWidth - margin, y, { align: 'right' })
        y += 4

        // Mini friction bar
        pdf.setFillColor(230, 230, 230)
        pdf.rect(margin, y, contentWidth, 2, 'F')
        pdf.setFillColor(...color)
        pdf.rect(margin, y, contentWidth * (friction / 100), 2, 'F')
        y += 8
      })

      y += 4

      // ── Heatmap Grid
      checkPage(50)
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(8)
      pdf.setTextColor(...faint)
      pdf.text('PRIORITY MAP', margin, y)
      y += 6

      CATEGORIES.forEach((cat, catIdx) => {
        checkPage(18)
        pdf.setFont('helvetica', 'normal')
        pdf.setFontSize(7)
        pdf.setTextColor(...faint)
        pdf.text(cat.toUpperCase(), margin, y)
        y += 4

        const catQuestions = QUESTIONS.filter((q) => q.categoryIndex === catIdx)
        const cellSize = 12
        const cellGap = 3

        catQuestions.forEach((q, qi) => {
          const qIndex = q.id - 1
          const status = answers[qIndex]
          const x = margin + qi * (cellSize + cellGap)
          const color = status ? statusColors[status] : [240, 240, 240]

          pdf.setFillColor(...color)
          pdf.rect(x, y, cellSize, cellSize, 'F')

          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(status ? 255 : 180, status ? 255 : 180, status ? 255 : 180)
          pdf.text(String(q.id), x + cellSize / 2, y + cellSize / 2 + 1.5, {
            align: 'center',
          })
        })
        y += cellSize + 5
      })

      y += 6

      // ── Red Zone Results
      if (hasRed) {
        checkPage(12)
        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(8)
        pdf.setTextColor(...faint)
        pdf.text('BREAKING POINTS — IMMEDIATE ATTENTION REQUIRED', margin, y)
        y += 8

        redQuestions.forEach((q) => {
          // Estimate card height (label + implication + solution)
          const implLines = pdf.splitTextToSize(q.implication, contentWidth - 10)
          const solLines = pdf.splitTextToSize(q.solution, contentWidth - 10)
          const cardHeight = 30 + implLines.length * 4 + solLines.length * 4
          checkPage(cardHeight)

          // Left red border
          pdf.setFillColor(...red)
          pdf.rect(margin, y, 1.5, cardHeight - 4, 'F')

          // Category + status
          const xContent = margin + 5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text(q.category.toUpperCase(), xContent, y + 4)
          pdf.setTextColor(...red)
          pdf.text('BREAKING POINT', pageWidth - margin, y + 4, { align: 'right' })

          // Label
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(11)
          pdf.setTextColor(...ink)
          pdf.text(q.label, xContent, y + 11)

          // Implication
          let innerY = y + 17
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('IMPLICATION', xContent, innerY)
          innerY += 4
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(9)
          pdf.setTextColor(...muted)
          implLines.forEach((line) => {
            pdf.text(line, xContent, innerY)
            innerY += 4
          })

          // Solution
          innerY += 2
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('POTENTIAL SOLUTION', xContent, innerY)
          innerY += 4
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(9)
          pdf.setTextColor(...ink)
          solLines.forEach((line) => {
            pdf.text(line, xContent, innerY)
            innerY += 4
          })

          y = innerY + 6
        })
      }

      // ── Footer
      checkPage(16)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 6
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8)
      pdf.setTextColor(...muted)
      pdf.text(
        'Next step: Book your AI Systems Audit at revvaughn.com',
        margin,
        y
      )

      pdf.save('ai-priority-map-results.pdf')
    } catch (err) {
      console.error('Download failed:', err)
    }
  }, [answers, totalFriction, hasRed, categoryStatuses, categoryFrictions, redQuestions])

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

      // Send results to MailerLite (fire and forget — don't block the reveal)
      try {
        const email = sessionStorage.getItem('map_email')
        if (email) {
          const friction = getTotalFriction(final)
          const reds = final.filter((a) => a === 'red').length
          fetch('/api/save-results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              answers: final,
              totalFriction: friction,
              redCount: reds,
            }),
          }).catch(() => {}) // Silent fail — results page still shows
        }
      } catch (e) {
        // sessionStorage might not be available — don't break the experience
      }
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

  return (
    <>
      {/* Bloom keyframe */}
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

      {/* Header */}
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
        {/* ─── Hero (before first answer) ──────────────────────────────── */}
        {currentQuestion === 0 && progress === 0 && !revealed && (
          <section className="bg-paper py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">5-Minute Diagnostic</p>
                  <h1 className="font-sans font-semibold text-display text-ink mb-6">
                    AI Priority Map
                  </h1>
                  <p className="text-lead text-ink-muted">
                    Find the real bottleneck. See exactly where your
                    business is leaking time and money and the exact AI fix for each one.
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

                  {/* Question content */}
                  <div key={fadeKey} className="fade-up">
                    <p className="eyebrow mb-3">{question.category}</p>
                    <h2 className="font-sans font-semibold text-h1 text-ink mb-3">
                      {question.label}
                    </h2>
                    <p className="text-body text-ink-muted mb-10">{question.symptom}</p>

                    {/* Unified button labels */}
                    <div className="flex flex-col gap-3 mb-10">
                      <StatusButton
                        label="Yes, often"
                        icon={<XCircle className="w-4 h-4 shrink-0" />}
                        selected={tempSelection === 'red'}
                        onClick={() => handleSelect('red')}
                        color="#d9534f"
                      />
                      <StatusButton
                        label="Sometimes"
                        icon={<AlertCircle className="w-4 h-4 shrink-0" />}
                        selected={tempSelection === 'yellow'}
                        onClick={() => handleSelect('yellow')}
                        color="#f0ad4e"
                      />
                      <StatusButton
                        label="No, never"
                        icon={<CheckCircle2 className="w-4 h-4 shrink-0" />}
                        selected={tempSelection === 'green'}
                        onClick={() => handleSelect('green')}
                        color="#5cb85c"
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

        {/* ─── Results Reveal ─────────────────────────────────────────── */}
        {revealed && (
          <>
            {/* Headline + Total Score */}
            <section className="bg-paper py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose fade-up">
                  <p className="eyebrow mb-6">Your Diagnostic</p>
                  <h2 className="font-sans font-semibold text-display text-ink mb-6">
                    Your AI Priority Map
                  </h2>

                  {/* Total Friction Score */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-sans font-semibold text-display text-ink">
                        {totalFriction}%
                      </span>
                      <span className="text-body text-ink-muted">
                        Total Business Friction
                      </span>
                    </div>
                    <div className="w-full h-3 bg-paper-greyDark overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${totalFriction}%`,
                          backgroundColor:
                            totalFriction >= 50
                              ? STATUS_HEX.red
                              : totalFriction >= 25
                                ? STATUS_HEX.yellow
                                : STATUS_HEX.green,
                        }}
                      />
                    </div>
                  </div>

                  {/* Warning */}
                  {hasRed && (
                    <div
                      className="flex items-start gap-3 p-4 border-l-[3px] bg-paper fade-up"
                      style={{ borderLeftColor: STATUS_HEX.red }}
                    >
                      <AlertTriangle
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: STATUS_HEX.red }}
                      />
                      <p className="text-body text-ink">
                        Your business is at a breaking point that might be improved with AI.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Downloadable Results Section */}
            <section className="bg-paper-grey py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="pb-8">
                  {/* Pillar Friction Cards */}
                  <p className="eyebrow mb-6">Pillar Breakdown</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                    {CATEGORIES.map((cat, catIdx) => {
                      const catStatus = categoryStatuses[catIdx]
                      const friction = categoryFrictions[catIdx]

                      return (
                        <div
                          key={cat}
                          className="p-6 bg-paper border border-rule fade-up"
                          style={{ animationDelay: `${catIdx * 0.1}s` }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                              {cat}
                            </p>
                            <span
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{
                                backgroundColor: catStatus
                                  ? STATUS_HEX[catStatus]
                                  : '#E5E5E5',
                              }}
                            />
                          </div>
                          <FrictionBar percentage={friction} status={catStatus} />
                        </div>
                      )
                    })}
                  </div>

                  {/* Heatmap Recap */}
                  <p className="eyebrow mb-6">Priority Map</p>
                  <div className="flex flex-col gap-5 max-w-sm mb-14">
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

                  {/* Red-Only Triage Results */}
                  {hasRed && (
                    <>
                      <p className="eyebrow mb-6">
                        Breaking Points &mdash; Immediate Attention Required
                      </p>
                      <div className="flex flex-col gap-4">
                        {redQuestions.map((q, idx) => (
                          <div
                            key={q.id}
                            className="p-6 bg-paper border border-rule fade-up"
                            style={{
                              animationDelay: `${idx * 0.08}s`,
                              borderLeftWidth: '3px',
                              borderLeftColor: STATUS_HEX.red,
                            }}
                          >
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">
                                {q.category}
                              </p>
                              <span
                                className="text-eyebrow uppercase font-bold tracking-widest"
                                style={{ color: STATUS_HEX.red }}
                              >
                                Breaking Point
                              </span>
                            </div>
                            <h3 className="font-sans font-semibold text-h3 text-ink mb-3">
                              {q.label}
                            </h3>
                            <div className="mb-3">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">
                                Implication
                              </p>
                              <p className="text-body text-ink-muted">{q.implication}</p>
                            </div>
                            <div>
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">
                                Potential Solution
                              </p>
                              <p className="text-body text-ink">{q.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Download Button */}
                <div className="mt-8">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-ink hover:bg-ink hover:text-paper"
                  >
                    <Download className="w-4 h-4" />
                    Download Results as PDF
                  </button>
                </div>
              </div>
            </section>

            {/* ─── Dynamic CTA ────────────────────────────────────────── */}
            <section className="bg-ink py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose">
                  <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-6">
                    Next Step
                  </p>

                  {hasRed ? (
                    <>
                      <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                        You have {redCount} Red Zone{redCount > 1 ? 's' : ''} that need
                        immediate attention.
                      </h3>
                      <p className="text-lead text-ink-faint mb-10">
                        In an AI Systems Audit, I provide the exact tech stack and roadmap to
                        flip these to Green. The details are in the offer document below.
                      </p>
                      <a
                        href="https://docs.google.com/document/d/1QU5izjT6wg1j1V5iEmNcaMUpyJiZNUwfk4p3MQwYt98/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-paper hover:bg-accent hover:text-paper hover:border-accent"
                      >
                        Book Your Full Systems Diagnostic <ArrowRight className="w-4 h-4" />
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                        You&rsquo;ve avoided critical breaking points.
                      </h3>
                      <p className="text-lead text-ink-faint mb-10">
                        You have scale risks, but no fires. To keep optimizing and stay ahead of
                        the curve, join a community of founders mastering these systems.
                      </p>
                      <Link
                        href="/ai-inner-circle"
                        className="inline-flex items-center gap-3 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-paper hover:bg-accent hover:text-paper hover:border-accent"
                      >
                        Join the AI Inner Circle <ArrowRight className="w-4 h-4" />
                      </Link>
                    </>
                  )}
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

      {/* Footer */}
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

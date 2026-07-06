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
  // Pillar 1: Authority Engine (get noticed and trusted) - 3 questions
  {
    id: 1,
    category: 'Authority Engine',
    categoryIndex: 0,
    label: 'The Lookalike',
    symptom:
      "When a buyer compares you to your competitors, do you sound basically the same?",
    pain:
      "Nothing makes you the obvious choice, so you end up competing on price.",
    solution:
      "Hire your Unique Mechanism Builder and Sales Council. They name what only you do and pressure-test the pitch. Both start in Month 1.",
    fieldKey: 'lookalike',
  },
  {
    id: 2,
    category: 'Authority Engine',
    categoryIndex: 0,
    label: 'Content Grind',
    symptom:
      "Does creating content eat time you don't have, so you end up not publishing?",
    pain:
      "You disappear from the feed. Out of sight, you fall out of the buying conversation.",
    solution:
      "Hire your Recording to Content Engine and Content Repurposer. Record 30 minutes and they turn it into a month of content. Both start in Month 3.",
    fieldKey: 'content_grind',
  },
  {
    id: 3,
    category: 'Authority Engine',
    categoryIndex: 0,
    label: 'Invisible Online',
    symptom:
      "When people search for what you offer (on search, social media, AI, etc.), are you virtually invisible?",
    pain:
      "Buyers find your competitors instead of you. You're absent where decisions start.",
    solution:
      "Hire your SEO / GEO Citation Optimizer and LinkedIn Ghostwriter. They get you found by Google and cited by AI. Both start in Month 3.",
    fieldKey: 'invisible_online',
  },
  // Pillar 2: Pipeline Engine (fill the calendar) - 3 questions
  {
    id: 4,
    category: 'Pipeline Engine',
    categoryIndex: 1,
    label: 'Empty Calendar',
    symptom:
      "Do you lack a reliable way to find new qualified buyers every week?",
    pain:
      "Pipeline runs on referrals and luck. When they dry up, so does revenue.",
    solution:
      "Hire your LinkedIn Signal Scraper and ICP Match & Prioritizer. They surface real buyers showing intent and score them for you. Both start in Month 2.",
    fieldKey: 'empty_calendar',
  },
  {
    id: 5,
    category: 'Pipeline Engine',
    categoryIndex: 1,
    label: 'Ignored Outreach',
    symptom:
      "Do your DMs or emails get ignored because they sound generic or like spam?",
    pain:
      "Wasted outreach. Your message reads like everyone else's, so it starts no conversations.",
    solution:
      "Hire your Surgical DM Writer and AI Slop Killer. They write one-to-one messages in your voice that actually get replies. Both start in Month 2.",
    fieldKey: 'ignored_outreach',
  },
  {
    id: 6,
    category: 'Pipeline Engine',
    categoryIndex: 1,
    label: 'Feast or Famine',
    symptom:
      "Does your lead flow swing between slammed and dead, with no system you can switch on?",
    pain:
      "Unpredictable revenue. You can't plan, hire, or grow on a pipeline you can't control.",
    solution:
      "Hire your LinkedIn Signal Scraper and ICP Match & Prioritizer. They turn lead-gen into a repeatable weekly engine. Both start in Month 2.",
    fieldKey: 'feast_or_famine',
  },
  // Pillar 3: Conversion Engine (turn interest into revenue) - 3 questions
  {
    id: 7,
    category: 'Conversion Engine',
    categoryIndex: 2,
    label: 'Price Objection',
    symptom:
      "Do prospects go quiet after you send a quote or tell you you're too expensive?",
    pain:
      "Price becomes the objection. You lose deals you should win, or discount to save them.",
    solution:
      "Hire your Offer & Pricing Architect and Objection Tester. They rebuild your offer and pricing so the right buyers stop flinching at the number. Both start in Month 1.",
    fieldKey: 'price_objection',
  },
  {
    id: 8,
    category: 'Conversion Engine',
    categoryIndex: 2,
    label: 'Cold Fast',
    symptom:
      "Do leads go cold fast because follow-up is slow or inconsistent?",
    pain:
      "Interested buyers slip away through neglect. You sit on revenue you already earned.",
    solution:
      "Hire your Reply Classifier and Follow-up & Reactivation. They sort hot replies and keep every lead warm. Both start in Month 4.",
    fieldKey: 'cold_fast',
  },
  {
    id: 9,
    category: 'Conversion Engine',
    categoryIndex: 2,
    label: 'Slow Quotes',
    symptom:
      "Do proposals and quotes take too long and buyers go with someone else?",
    pain:
      "The #1 deal killer in B2B. Speed loses to slower, and you were slower.",
    solution:
      "Hire your Proposal & Quote Generator and Discovery Call-Prep. They put a branded proposal in front of the buyer while the deal is warm. Both start in Month 4.",
    fieldKey: 'slow_quotes',
  },
  // Pillar 4: Founder Freedom (stop being the bottleneck) - 3 questions
  {
    id: 10,
    category: 'Founder Freedom',
    categoryIndex: 3,
    label: 'The Vacation Test',
    symptom:
      "If you leave for 2 weeks, does revenue drop or operations slow down?",
    pain:
      "You own a job, not an asset. You are the ceiling everything waits on.",
    solution:
      "Hire your Inbox Triage and Decision & Delegation Memo. They handle the routine so the business runs without you in the loop. Both start in Month 5.",
    fieldKey: 'vacation_test',
  },
  {
    id: 11,
    category: 'Founder Freedom',
    categoryIndex: 3,
    label: 'The Brain Trap',
    symptom:
      "Do your core processes live only in your head because you “don’t have time” to write them down?",
    pain:
      "Key-person risk. Nothing can be delegated, so everything routes back to you.",
    solution:
      "Hire your Transcription to SOP and Team Knowledge Base. They pull the process out of your head into something your team can run. Both start in Month 5.",
    fieldKey: 'brain_trap',
  },
  {
    id: 12,
    category: 'Founder Freedom',
    categoryIndex: 3,
    label: 'The Bottleneck',
    symptom:
      "Does every important decision have to run through you before anything moves?",
    pain:
      "You are the single point of failure. The business only moves as fast as your attention.",
    solution:
      "Hire Maestro, your Command Center, and your Decision & Delegation Memo. Maestro routes the routine and turns your calls into briefs the team runs without you. Your Command Center is where the whole system starts.",
    fieldKey: 'bottleneck',
  },
]

const CATEGORIES = [
  'Authority Engine',
  'Pipeline Engine',
  'Conversion Engine',
  'Founder Freedom',
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

const POINTS = { red: 5, yellow: 2, green: 0 }
const MAX_TOTAL = QUESTIONS.length * 5 // 12 questions × 5 max each

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Denominator is per-category so pillar friction stays correct if counts ever differ.
function getCategoryMax(categoryIndex) {
  return QUESTIONS.filter((q) => q.categoryIndex === categoryIndex).length * 5
}

function getCategoryFriction(answers, categoryIndex) {
  let sum = 0
  answers.forEach((a, i) => {
    if (QUESTIONS[i] && QUESTIONS[i].categoryIndex === categoryIndex && a) {
      sum += POINTS[a]
    }
  })
  const max = getCategoryMax(categoryIndex) || 1
  return Math.round((sum / max) * 100)
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
          {status ? STATUS_LABEL[status] : '—'}
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
  const [email, setEmail] = useState('')
  const [emailSaved, setEmailSaved] = useState(false)

  const progress = answers.filter((a) => a !== null).length
  const question = QUESTIONS[currentQuestion]
  const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answers, i))
  const categoryFrictions = CATEGORIES.map((_, i) => getCategoryFriction(answers, i))
  const totalFriction = getTotalFriction(answers)
  const redCount = answers.filter((a) => a === 'red').length
  const hasRed = redCount > 0
  const redQuestions = QUESTIONS.filter((_, i) => answers[i] === 'red')
  // Worst pillar = highest friction (ties resolve to the earliest / earliest-month pillar)
  const worstPillarIndex = categoryFrictions.reduce(
    (best, f, i, arr) => (f > arr[best] ? i : best),
    0
  )
  const worstPillar = CATEGORIES[worstPillarIndex]

  // Build the results PDF from an answers array. Derives every value from the
  // array, so it works at reveal time (before React state settles) and on download.
  const buildPdf = useCallback(async (answersArr) => {
      const { default: jsPDF } = await import('jspdf')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const totalFriction = getTotalFriction(answersArr)
      const categoryStatuses = CATEGORIES.map((_, i) => getCategoryStatus(answersArr, i))
      const categoryFrictions = CATEGORIES.map((_, i) => getCategoryFriction(answersArr, i))
      const hasRed = answersArr.some((a) => a === 'red')
      const redQuestions = QUESTIONS.filter((_, i) => answersArr[i] === 'red')
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

      const ink = [26, 26, 26]
      const muted = [120, 120, 120]
      const faint = [170, 170, 170]
      const red = [217, 83, 79]
      const yellow = [240, 173, 78]
      const green = [92, 184, 92]
      const statusColors = { red, yellow, green }

      // Header
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(10)
      pdf.setTextColor(...faint)
      pdf.text('AI PRIORITY MAP RESULTS', margin, y)
      y += 6
      pdf.setTextColor(...muted)
      pdf.setFontSize(8)
      pdf.text('revvaughn.com/ai', margin, y)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 12

      // Total Friction
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(28)
      pdf.setTextColor(...ink)
      pdf.text(`${totalFriction}%`, margin, y)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(11)
      pdf.setTextColor(...muted)
      pdf.text('Total Business Friction', margin + 30, y)
      y += 6

      const barColor = totalFriction >= 50 ? red : totalFriction >= 25 ? yellow : green
      pdf.setFillColor(230, 230, 230)
      pdf.rect(margin, y, contentWidth, 3, 'F')
      pdf.setFillColor(...barColor)
      pdf.rect(margin, y, contentWidth * (totalFriction / 100), 3, 'F')
      y += 12

      // Warning
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

      // Pillar Breakdown
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
        pdf.text(
          catStatus ? `${STATUS_LABEL[catStatus]} · ${friction}%` : `${friction}%`,
          pageWidth - margin, y, { align: 'right' }
        )
        y += 4
        pdf.setFillColor(230, 230, 230)
        pdf.rect(margin, y, contentWidth, 2, 'F')
        pdf.setFillColor(...color)
        pdf.rect(margin, y, contentWidth * (friction / 100), 2, 'F')
        y += 8
      })

      y += 4

      // Heatmap
      checkPage(60)
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
          const status = answersArr[qIndex]
          const x = margin + qi * (cellSize + cellGap)
          const color = status ? statusColors[status] : [240, 240, 240]
          pdf.setFillColor(...color)
          pdf.rect(x, y, cellSize, cellSize, 'F')
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(status ? 255 : 180, status ? 255 : 180, status ? 255 : 180)
          pdf.text(String(q.id), x + cellSize / 2, y + cellSize / 2 + 1.5, { align: 'center' })
        })
        y += cellSize + 5
      })

      y += 6

      // Red Zone Results
      if (hasRed) {
        checkPage(12)
        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(8)
        pdf.setTextColor(...faint)
        pdf.text('BREAKING POINTS — IMMEDIATE ATTENTION REQUIRED', margin, y)
        y += 8

        redQuestions.forEach((q) => {
          const painLines = pdf.splitTextToSize(q.pain, contentWidth - 10)
          const solLines = pdf.splitTextToSize(q.solution, contentWidth - 10)
          const cardHeight = 30 + painLines.length * 4 + solLines.length * 4
          checkPage(cardHeight)

          pdf.setFillColor(...red)
          pdf.rect(margin, y, 1.5, cardHeight - 4, 'F')

          const xContent = margin + 5
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text(q.category.toUpperCase(), xContent, y + 4)
          pdf.setTextColor(...red)
          pdf.text('BREAKING POINT', pageWidth - margin, y + 4, { align: 'right' })

          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(11)
          pdf.setTextColor(...ink)
          pdf.text(q.label, xContent, y + 11)

          let innerY = y + 17
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('THE PAIN', xContent, innerY)
          innerY += 4
          pdf.setFont('helvetica', 'normal')
          pdf.setFontSize(9)
          pdf.setTextColor(...muted)
          painLines.forEach((line) => {
            pdf.text(line, xContent, innerY)
            innerY += 4
          })

          innerY += 2
          pdf.setFont('helvetica', 'bold')
          pdf.setFontSize(7)
          pdf.setTextColor(...faint)
          pdf.text('YOUR AI HIRE', xContent, innerY)
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

      // Footer
      checkPage(16)
      y += 4
      pdf.setDrawColor(...faint)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 6
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8)
      pdf.setTextColor(...muted)
      pdf.text('Next step: Hire your first Assistant. Start at revvaughn.com/ai-inner-circle', margin, y)

      return pdf
  }, [])

  // Download results as PDF (manual button, used once email has been captured)
  const handleDownload = useCallback(async () => {
    try {
      const pdf = await buildPdf(answers)
      pdf.save('ai-priority-map-results.pdf')
    } catch (err) {
      console.error('Download failed:', err)
    }
  }, [answers, buildPdf])

  // Animations
  useEffect(() => {
    setFadeKey((k) => k + 1)
  }, [currentQuestion])

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

  // Inline email capture on the results screen — replaces the old upstream
  // gate page. Saves results, archives the PDF, and downloads it in one step.
  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setEmailSaved(true)

    const friction = getTotalFriction(answers)

    fetch('/api/save-results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, answers, totalFriction: friction }),
    }).catch(() => {})

    try {
      const pdf = await buildPdf(answers)
      const fd = new FormData()
      fd.append('email', email)
      fd.append('answers', JSON.stringify(answers))
      fd.append('totalFriction', String(friction))
      fd.append('pdf', pdf.output('blob'), 'results.pdf')
      fetch('/api/save-pdf', { method: 'POST', body: fd }).catch(() => {})
      pdf.save('ai-priority-map-results.pdf')
    } catch (err) {
      console.error('Save/download failed:', err)
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
    setEmail('')
    setEmailSaved(false)
  }

  return (
    <>
      <style jsx global>{`
        @keyframes bloom {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0.15); }
          40% { transform: scale(1.12); box-shadow: 0 0 12px 4px rgba(0,0,0,0.08); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }
        .animate-bloom { animation: bloom 0.5s ease-out; }
      `}</style>

      {/* Header */}
      <header className="border-b border-rule bg-paper">
        <div className="max-w-wide mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
            Rev Vaughn
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-small">
            <Link href="/resources" className="text-ink-muted hover:text-ink transition-colors">Resources</Link>
            <Link href="/contact" className="text-ink hover:text-accent transition-colors font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="bg-paper">
        {/* Hero */}
        {currentQuestion === 0 && progress === 0 && !revealed && (
          <section className="bg-paper py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">5-Minute Assessment</p>
                  <h1 className="font-sans font-semibold text-display text-ink mb-6">
                    AI Assessment
                  </h1>
                  <p className="text-lead text-ink-muted">
                    Find the real bottleneck. See exactly where your business is leaking time
                    and money, and the exact AI Assistant that fixes each one.
                  </p>
                </div>
                <div className="hidden md:flex items-start justify-center pt-4">
                  <Image src="/ai-inner-circle-logo.jpg" alt="AI Inner Circle" width={200} height={200} className="opacity-80" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Assessment */}
        {!revealed && (
          <section className="bg-paper-grey py-section">
            <div className="max-w-content mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
                <div className="md:col-span-3">
                  {/* Progress */}
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
                      <div className="h-full bg-ink transition-all duration-500" style={{ width: `${(progress / 12) * 100}%` }} />
                    </div>
                  </div>

                  {/* Question */}
                  <div key={fadeKey} className="fade-up">
                    <p className="eyebrow mb-3">{question.category}</p>
                    <h2 className="font-sans font-semibold text-h1 text-ink mb-3">{question.label}</h2>
                    <p className="text-body text-ink-muted mb-10">{question.symptom}</p>

                    <div className="flex flex-col gap-3 mb-10">
                      <StatusButton label="Yes, often" icon={<XCircle className="w-4 h-4 shrink-0" />} selected={tempSelection === 'red'} onClick={() => handleSelect('red')} color="#d9534f" />
                      <StatusButton label="Sometimes" icon={<AlertCircle className="w-4 h-4 shrink-0" />} selected={tempSelection === 'yellow'} onClick={() => handleSelect('yellow')} color="#f0ad4e" />
                      <StatusButton label="No, never" icon={<CheckCircle2 className="w-4 h-4 shrink-0" />} selected={tempSelection === 'green'} onClick={() => handleSelect('green')} color="#5cb85c" />
                    </div>
                  </div>

                  {/* Nav */}
                  <div className="flex gap-3">
                    {currentQuestion > 0 && (
                      <button onClick={handleBack} className="inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-paper text-ink border border-ink hover:bg-ink hover:text-paper">
                        &larr; Back
                      </button>
                    )}
                    {currentQuestion < 11 ? (
                      <button onClick={handleNext} disabled={tempSelection === null} className={['inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border', tempSelection !== null ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent' : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed'].join(' ')}>
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button onClick={handleReveal} disabled={tempSelection === null} className={['inline-flex items-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 border', tempSelection !== null ? 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent' : 'bg-paper-greyDark text-ink-faint border-rule cursor-not-allowed'].join(' ')}>
                        Reveal My Map <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Heatmap */}
                <div className="md:col-span-2">
                  <p className="eyebrow mb-6">Live Priority Map</p>
                  <div className="flex flex-col gap-5">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">{cat}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return (
                              <HeatmapCell key={q.id} status={answers[qIndex]} questionNumber={q.id} isActive={currentQuestion === qIndex} justSet={justSetCell === qIndex} />
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-5">
                    {['red', 'yellow', 'green'].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: STATUS_HEX[s] }} />
                        <span className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{STATUS_LABEL[s]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {revealed && (
          <>
            {/* Score */}
            <section className="bg-paper py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="max-w-prose fade-up">
                  <p className="eyebrow mb-6">Your Assessment</p>
                  <h2 className="font-sans font-semibold text-display text-ink mb-6">Your AI Priority Map</h2>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-sans font-semibold text-display text-ink">{totalFriction}%</span>
                      <span className="text-body text-ink-muted">Total Business Friction</span>
                    </div>
                    <div className="w-full h-3 bg-paper-greyDark overflow-hidden">
                      <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${totalFriction}%`, backgroundColor: totalFriction >= 50 ? STATUS_HEX.red : totalFriction >= 25 ? STATUS_HEX.yellow : STATUS_HEX.green }} />
                    </div>
                  </div>
                  {hasRed && (
                    <div className="flex items-start gap-3 p-4 border-l-[3px] bg-paper fade-up" style={{ borderLeftColor: STATUS_HEX.red }}>
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: STATUS_HEX.red }} />
                      <p className="text-body text-ink">Your business is at a breaking point that might be improved with AI.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Breakdown + Red Results */}
            <section className="bg-paper-grey py-section">
              <div className="max-w-content mx-auto px-6">
                <div className="pb-8">
                  {/* Pillar Cards */}
                  <p className="eyebrow mb-6">Pillar Breakdown</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {CATEGORIES.map((cat, catIdx) => {
                      const catStatus = categoryStatuses[catIdx]
                      const friction = categoryFrictions[catIdx]
                      return (
                        <div key={cat} className="p-6 bg-paper border border-rule fade-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
                          <div className="flex items-start justify-between mb-4">
                            <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{cat}</p>
                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: catStatus ? STATUS_HEX[catStatus] : '#E5E5E5' }} />
                          </div>
                          <FrictionBar percentage={friction} status={catStatus} />
                        </div>
                      )
                    })}
                  </div>

                  {/* Heatmap */}
                  <p className="eyebrow mb-6">Priority Map</p>
                  <div className="flex flex-col gap-5 max-w-sm mb-14">
                    {CATEGORIES.map((cat, catIdx) => (
                      <div key={cat}>
                        <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-2">{cat}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {QUESTIONS.filter((q) => q.categoryIndex === catIdx).map((q) => {
                            const qIndex = q.id - 1
                            return <HeatmapCell key={q.id} status={answers[qIndex]} questionNumber={q.id} isActive={false} justSet={false} />
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Red-Only */}
                  {hasRed && (
                    <>
                      <p className="eyebrow mb-6">Breaking Points &mdash; Immediate Attention Required</p>
                      <div className="flex flex-col gap-4">
                        {redQuestions.map((q, idx) => (
                          <div key={q.id} className="p-6 bg-paper border border-rule fade-up" style={{ animationDelay: `${idx * 0.08}s`, borderLeftWidth: '3px', borderLeftColor: STATUS_HEX.red }}>
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint">{q.category}</p>
                              <span className="text-eyebrow uppercase font-bold tracking-widest" style={{ color: STATUS_HEX.red }}>Breaking Point</span>
                            </div>
                            <h3 className="font-sans font-semibold text-h3 text-ink mb-3">{q.label}</h3>
                            <div className="mb-3">
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">The Pain</p>
                              <p className="text-body text-ink-muted">{q.pain}</p>
                            </div>
                            <div>
                              <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-1">Your AI Hire</p>
                              <p className="text-body text-ink">{q.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Download */}
                <div className="mt-8">
                  <p className="text-body text-ink-muted mb-4">
                    Get every breaking point and the AI Assistant that fixes it, plus your full AI Priority Map in one shareable PDF.
                  </p>
                  {emailSaved ? (
                    <button onClick={handleDownload} className="inline-flex items-center gap-3 px-8 py-4 text-body font-semibold tracking-wide transition-all duration-200 text-white border border-transparent hover:opacity-90" style={{ backgroundColor: '#83B14E' }}>
                      <Download className="w-5 h-5" />
                      Download My Results as PDF
                    </button>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-5 py-3 bg-paper border border-rule text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-semibold tracking-wide transition-all duration-200 text-white border border-transparent hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: '#83B14E' }}
                      >
                        <Download className="w-4 h-4" />
                        Get My Results as PDF
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

            {/* Dynamic CTA */}
            <section className="py-section" style={{ backgroundColor: '#83B14E' }}>
              <div className="max-w-content mx-auto px-6">
                <p className="text-eyebrow uppercase font-semibold tracking-widest text-paper opacity-70 mb-6">Next Step</p>
                {hasRed ? (
                  <>
                    <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                      Your biggest breaking point is your {worstPillar}.
                    </h3>
                    <p className="text-lead text-paper opacity-80 mb-12">
                      Good news: the membership starts you exactly here. Hire the AI Assistants that fix it, a department a month.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-sans font-semibold text-h1 text-paper mb-4">
                      You&rsquo;ve avoided the critical breaking points.
                    </h3>
                    <p className="text-lead text-paper opacity-80 mb-12">
                      You have scale risks, not fires. Two ways to stay ahead — pick the one that fits where you are.
                    </p>
                  </>
                )}
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                  {/* Option 1 — Membership */}
                  <div className="bg-paper p-8 flex flex-col">
                    <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-3">Your First Hire</p>
                    <h4 className="font-sans font-semibold text-h3 text-ink mb-3">Join AI Inner Circle</h4>
                    <p className="text-body text-ink-muted mb-8 flex-1">
                      Set up your Command Center, then hire one AI Assistant a week. A full system in six months, starting with the department this map flagged reddest.
                    </p>
                    <Link href="/ai-inner-circle" className="inline-flex items-center gap-2 px-5 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent">
                      See AI Inner Circle <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {/* Option 2 — AI Audit */}
                  <div className="bg-paper p-8 flex flex-col">
                    <p className="text-eyebrow uppercase font-semibold tracking-widest text-ink-faint mb-3">Done With You</p>
                    <h4 className="font-sans font-semibold text-h3 text-ink mb-3">Full AI Implementation Roadmap</h4>
                    <p className="text-body text-ink-muted mb-8 flex-1">
                      A complete diagnostic of your business. Every system audited, every bottleneck mapped, and a full AI roadmap built for your specific operation.
                    </p>
                    <Link href="/ai-audit" className="inline-flex items-center gap-2 px-5 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent">
                      Book Your AI Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Restart */}
            <section className="bg-paper py-10">
              <div className="max-w-content mx-auto px-6 text-center">
                <button onClick={handleReset} className="text-small text-ink-muted hover:text-ink transition-colors underline underline-offset-4">Start over</button>
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
            <Link href="/resources" className="hover:text-ink transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
            <Link href="/privacy-terms" className="hover:text-ink transition-colors">Privacy &amp; Terms</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

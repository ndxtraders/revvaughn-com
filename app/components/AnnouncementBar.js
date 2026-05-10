'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const STORAGE_KEY = 'announcement_bar_dismissed_v1'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="w-full py-2 px-6" style={{ backgroundColor: '#83B14E' }}>
      <div className="max-w-wide mx-auto flex items-center justify-between gap-4">
        <div className="flex-1" />
        <p className="text-body font-medium text-white text-center">
          Not sure where AI fits in your business?{' '}
          <Link
            href="/ai-priority-map"
            className="underline underline-offset-2 hover:no-underline font-semibold whitespace-nowrap"
          >
            Take the 5-Minute AI Priority Map →
          </Link>
        </p>
        <div className="flex-1 flex justify-end">
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="text-white opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

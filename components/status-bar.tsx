"use client"

import { useState, useEffect } from "react"

export default function StatusBar() {
  const [progress, setProgress] = useState(27)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-mono text-xs text-cyan-400 flex items-center">
          <span>STATUS: REVELATION_LOADING {loading ? "█" : " "}</span>
          <div className="ml-2 w-24 bg-gray-800 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-500" style={{ width: `${progress}%` }} />
          </div>
          <span className="ml-2">{progress}%</span>
        </div>

        <div className="font-mono text-xs text-gray-500">KRONOS::v0.1.27::ALPHA</div>
      </div>
    </div>
  )
}

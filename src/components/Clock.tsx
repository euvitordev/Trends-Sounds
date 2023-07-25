"use client"

import React, { useState, useEffect } from "react"

const Clock: React.FC = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      const hours = date.getHours().toString().padStart(2, "0")
      const minutes = date.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex items-center p-12">
      <h2 className="text-6xl font-bold">{time}</h2>
    </div>
  )
}

export default Clock

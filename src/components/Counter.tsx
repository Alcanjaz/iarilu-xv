import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-02-21T21:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-bold text-cyan-800 mb-4">Cuenta regresiva para la gran noche!</h2>
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-cyan-100 p-4 rounded-lg">
            <div className="text-3xl font-bold text-cyan-800">{value}</div>
            <div className="text-cyan-600 capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
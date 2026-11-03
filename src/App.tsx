import { useState } from 'react'

function App() {
  const [activeUsers] = useState(1000)
  const [planPrice] = useState(29)
  const [conversionRate] = useState(5)

  // Derived metrics
  const trialUsers = Math.round((activeUsers * conversionRate) / 100)
  const payingUsers = Math.round(trialUsers * 0.2)
  const monthlyRevenue = payingUsers * planPrice
  const annualRevenue = monthlyRevenue * 12
  const customerLtv = annualRevenue / payingUsers

  return (
    <>
      {/* SaaS Calculator Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SaaS Pricing & ROI Calculator</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Adjust the sliders below to see how different parameters affect your revenue and growth potential.
          </p>
        </div>
      </section>

      {/* Calculator Card */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="card p-6"><p>MRR: ${monthlyRevenue}</p></div>
        <div className="card p-6"><p>ARR: ${annualRevenue}</p></div>
        <div className="card p-6"><p>LTV: ${customerLtv}</p></div>
        <div className="card p-6"><p>Users: {payingUsers}</p></div>
      </div>

      {/* Metrics Dashboard */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 max-w-6xl mx-auto shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">Real-Time Metrics Dashboard</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* MRR Card */}
          <div className="card p-6">
            <p className="text-muted-foreground mb-2">Monthly Recurring Revenue</p>
            <p className="text-3xl font-bold text-primary">${monthlyRevenue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground per-month">per month</p>
          </div>
          {/* ARR Card */}
          <div className="card p-6">
            <p className="text-muted-foreground mb-2">Annual Recurring Revenue</p>
            <p className="text-3xl font-bold text-primary">${annualRevenue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground per-year">per year</p>
          </div>
          {/* LTV Card */}
          <div className="card p-6">
            <p className="text-muted-foreground mb-2">Customer LTV Estimate</p>
            <p className="text-3xl font-bold text-accent">${customerLtv.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Based on average margin</p>
          </div>
          {/* Paying Users Card */}
          <div className="card p-6">
            <p className="text-muted-foreground mb-2">Paying Users</p>
            <p className="text-3xl font-bold">${payingUsers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">20% conversion rate</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={() => navigator.clipboard.writeText(`SaaS Pricing & ROI Calculator Summary\n=======================================\nActive Users: ${activeUsers.toLocaleString()}\nConversion Rate: ${conversionRate}%\nAvg Plan Price: $${planPrice}\nTrial Users: ${trialUsers.toLocaleString()}\nPaying Users: ${payingUsers.toLocaleString()}\nMonthly Revenue: $${monthlyRevenue.toLocale.String()}\nAnnual Revenue: $${annualRevenue.toLocale.String()}\nCustomer LTV: $${customerLtv.toLocale.String()}\n\nKey Metrics:\n- MRR: $${monthlyRevenue.toLocale.String()}\n- ARR: $${annualRevenue.toLocale.String()}\n- LTV: $${customerLtv.toLocale.String()}\n`).then(() => alert('Summary copied to clipboard!'))}
          className="btn btn-primary"
        >
          Copy Summary
        </button>
        <button
          onClick={() => {
            const headers = ['Metric', 'Value']
            const rows = [
              ['Active Users', activeUsers.toLocaleString()],
              ['Conversion Rate', `${conversionRate}%`],
              ['Avg Plan Price', `$${planPrice}`],
              ['Trial Users', trialUsers.toLocaleString()],
              ['Paying Users', payingUsers.toLocaleString()],
              ['Monthly Revenue', `$${monthlyRevenue.toLocaleString()}`],
              ['Annual Revenue', `$${annualRevenue.toLocaleString()}`],
              ['Customer LTV', `$${customerLtv.toLocaleString()}`],
            ]
            let csv = headers.join(',') + '\n'
            rows.forEach((row) => {
              csv += row.map((cell) => `"${cell}"`).join(',') + '\n'
            })
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = 'saas-metrics.csv'
            link.click()
          }}
          className="btn btn-accent"
        >
          Download CSV
        </button>
      </div>
    </>
  )
}

export default App

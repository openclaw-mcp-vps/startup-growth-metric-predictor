export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Growth Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Next Month&apos;s<br />
          <span className="text-[#58a6ff]">Growth Metrics</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Feed in your current MRR, churn, and acquisition data. Our time-series engine returns next-month forecasts with confidence intervals — ready to paste into your investor update.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $49/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Metric preview cards */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-left">
          {[
            { label: 'Predicted MRR', value: '$42,800', delta: '+12.4%', conf: '±3%' },
            { label: 'Churn Rate', value: '2.1%', delta: '-0.4pp', conf: '±0.3pp' },
            { label: 'New Users', value: '1,340', delta: '+18%', conf: '±5%' },
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-xs text-[#8b949e] mb-1">{m.label}</p>
              <p className="text-2xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-[#3fb950] mt-1">{m.delta} <span className="text-[#484f58]">conf {m.conf}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Growth Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to forecast with confidence</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'MRR, churn & acquisition forecasts',
              'Confidence intervals on every prediction',
              'Exportable PDF investor reports',
              'Unlimited metric history upload',
              'Slack & email alerts on anomalies',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#484f58]">7-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the prediction engine work?',
              a: 'We use time-series analysis (ARIMA + exponential smoothing) on your historical metrics. The more data you provide, the tighter the confidence intervals become.',
            },
            {
              q: 'What data do I need to get started?',
              a: 'At minimum, 3 months of MRR, monthly churn count, and new user signups. You can upload a CSV or connect via our API.',
            },
            {
              q: 'Can I export reports for investors?',
              a: 'Yes. Every forecast dashboard has a one-click PDF export formatted for investor updates, including charts and confidence bands.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} GrowthPredict. All rights reserved.
      </footer>
    </main>
  )
}

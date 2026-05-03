import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrowthPredict — Predict Next Month\'s Startup Metrics',
  description: 'Analyzes current growth patterns to predict next month\'s key metrics like MRR, churn, and user acquisition with confidence intervals.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69b7e131-1e50-402b-9f87-f95375a4621f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

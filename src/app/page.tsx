import { Sidebar } from '@/components/Sidebar'
import { MainContent } from '@/components/MainContent'
import { SpotlightEffect } from '@/components/SpotlightEffect'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <SpotlightEffect />
      <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}
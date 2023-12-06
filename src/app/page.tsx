import Image from 'next/image'
import InfoCard from '@/components/card'

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-slate-50">
      <InfoCard/>
    </main>
  )
}
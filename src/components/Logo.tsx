import { Space_Grotesk } from 'next/font/google'

const wordmark = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'] })

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-11 w-11 flex-shrink-0 overflow-hidden mt-2">
        <img
          src="/favicon.png"
          alt=""
          className="h-[182%] w-[182%] object-cover -translate-x-[21%] -translate-y-[21%]"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className={`${wordmark.className} flex flex-col items-center leading-none whitespace-nowrap`}>
        <span className="text-slate-900 font-bold text-base tracking-tight">Seven Gen</span>
        <span className="text-slate-500 font-semibold text-[10px] tracking-[0.18em] uppercase mt-[3px]">Systems</span>
      </div>
    </div>
  )
}

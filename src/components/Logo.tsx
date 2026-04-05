export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-11 w-11 flex-shrink-0 overflow-hidden mt-2">
        <img
          src="/Seven Gen Leaf Favicon.png"
          alt=""
          className="h-[170%] w-[170%] object-cover -translate-x-[20%] -translate-y-[20%]"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className="flex flex-col items-center leading-none whitespace-nowrap">
        <span className="text-slate-900 font-bold text-base tracking-tight">Seven Gen</span>
        <span className="text-slate-500 font-semibold text-[10px] tracking-[0.18em] uppercase mt-[3px]">Systems</span>
      </div>
    </div>
  )
}

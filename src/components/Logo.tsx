export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/wordmark-mark.svg"
        alt="Seven Gen Systems"
        className="h-9 w-auto flex-shrink-0"
      />
      <div className="flex flex-col justify-center leading-none whitespace-nowrap">
        <span className="font-sans text-[19px] font-extrabold tracking-tight text-slate-900">
          Seven Gen
        </span>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 mt-[3px]">
          Systems
        </span>
      </div>
    </div>
  )
}

export function Logo({ height = 48 }: { height?: number; showTagline?: boolean }) {
  return (
    <img
      src="/Seven Gen Leaf Logo.png"
      alt="Seven Gen Systems"
      style={{ height: `${height}px`, width: 'auto', mixBlendMode: 'multiply' }}
    />
  )
}

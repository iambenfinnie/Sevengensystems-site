export function Logo({ height = 48, zoom = 1 }: { height?: number; showTagline?: boolean; zoom?: number }) {
  return (
    <img
      src="/Seven Gen Leaf Logo.png"
      alt="Seven Gen Systems"
      style={{ height: `${height}px`, width: 'auto', transform: `scale(${zoom})`, transformOrigin: 'center center', mixBlendMode: 'multiply' }}
    />
  )
}

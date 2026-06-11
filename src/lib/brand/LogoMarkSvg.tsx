import { BRAND_COLORS, GRADUATION_CAP_SVG } from './logoAssets';

interface LogoMarkSvgProps {
  size?: number;
  capSize?: number;
  showStatusDot?: boolean;
  dotSize?: number;
  borderRadius?: number;
}

/** Icon mark from Logo.tsx — navy tile, red cap, green online dot */
export function LogoMarkSvg({
  size = 48,
  capSize = 28,
  showStatusDot = true,
  dotSize = 16,
  borderRadius = 12,
}: LogoMarkSvgProps) {
  const dotOffset = dotSize * 0.25;

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          background: BRAND_COLORS.navy,
          borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        }}
      >
        <svg
          viewBox={GRADUATION_CAP_SVG.viewBox}
          width={capSize}
          height={capSize}
          fill={BRAND_COLORS.primary}
        >
          {GRADUATION_CAP_SVG.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </div>
      {showStatusDot && (
        <div
          style={{
            position: 'absolute',
            bottom: -dotOffset,
            right: -dotOffset,
            width: dotSize,
            height: dotSize,
            background: BRAND_COLORS.whatsapp,
            borderRadius: '50%',
            border: `${Math.max(2, dotSize * 0.125)}px solid ${BRAND_COLORS.white}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
          }}
        />
      )}
    </div>
  );
}

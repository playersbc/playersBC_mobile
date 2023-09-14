import Svg, { Rect, Path } from "react-native-svg"

export function AddIcon() {
  return (
    <Svg
      width={56}
      height={32}
      viewBox="0 0 56 32"
      fill="none"
    >
      <Rect width={56} height={32} rx={4} fill="#0EDA82" />
      <Path
        d="M17 16h22M28 5v22"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
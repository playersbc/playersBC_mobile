import { StyleProp, ViewStyle } from "react-native"
import Svg, { Rect, Path } from "react-native-svg"

export function LupaFull({ style }: { style: StyleProp<ViewStyle> }) {
  return (
    <Svg
      style={style}
      width={26}
      height={25}
      viewBox="0 0 26 25"
      fill="none"
    >
      <Rect width={26} height={25} rx={4} fill="#0EDA82" />
      <Path
        d="M18.56 17.793L15.82 14.86a5.355 5.355 0 001.117-3.296c0-2.844-2.16-5.157-4.813-5.157-2.653 0-4.812 2.313-4.812 5.157 0 2.843 2.159 5.156 4.812 5.156a4.6 4.6 0 003.077-1.197l2.739 2.934a.422.422 0 00.309.138.42.42 0 00.309-.138.492.492 0 000-.663zm-10.372-6.23c0-2.327 1.766-4.22 3.937-4.22s3.938 1.893 3.938 4.22c0 2.326-1.767 4.218-3.938 4.218-2.17 0-3.937-1.892-3.937-4.219z"
        fill="#fff"
      />
    </Svg>
  )
}
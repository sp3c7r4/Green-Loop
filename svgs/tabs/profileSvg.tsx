import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ProfileSvg({ state, size }: { state: boolean; size: number }) {
  return (
    <Svg
      viewBox="0 0 318.52 398.55"
      width={size}
      height={size}
    >
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path
            d="M248.94 100.89c0 63.67-38.46 118.31-89.67 118.31s-89.68-54.64-89.68-118.33S102.67 0 159.27 0s89.67 37.2 89.67 100.89z"
            fillRule="evenodd"
          />
          <Path
            d="M1.88 361.52c7.67 9.13 40.71 37 157.39 37s149.69-27.9 157.38-37a8.33 8.33 0 001.8-6.32c-1.76-17.57-17.58-96.17-159.18-96.17S1.84 337.65.07 355.22a8.3 8.3 0 001.81 6.32z"
            fill={state ? "#3cc687" : "#C7C7C8"}
            fillRule="evenodd"
          />
        </G>
      </G>
    </Svg>
  )
}

export default ProfileSvg

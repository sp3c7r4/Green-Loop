import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function HomeSvg({state, size}:{size: number, state: boolean}) {
  return (
    <Svg
      viewBox="0 0 398.55 398.55"
      width={size}
      height={size}
    >
      {/* {console.log(size)} */}
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path d="M0 203.34c0-45.61 0-68.41 10.35-87.34S39.59 85.4 77.4 61.94l39.85-24.74c40-24.8 59.95-37.2 82-37.2s42.06 12.4 82 37.2l39.86 24.74C359 85.4 377.85 97.13 388.2 116s10.35 41.7 10.35 87.31v30.31c0 77.73 0 116.6-23.35 140.75s-60.92 24.15-136.07 24.15h-79.71c-75.15 0-112.73 0-136.07-24.15S0 311.38 0 233.65z" />
          <Path
            d="M139.49 303.89a14.95 14.95 0 000 29.89h119.56a14.95 14.95 0 100-29.89z"
            fill={state ? "#3cc687" : "#C7C7C8"}
          />
        </G>
      </G>
    </Svg>
  )
}

export default HomeSvg;
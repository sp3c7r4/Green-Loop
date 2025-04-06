import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

function CatalogueSVG({ state, size }: { state: boolean; size: number }) {
  return (
    <Svg
      viewBox="0 0 398.54 398.55"
      width={size}
      height={size}
    >
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path d="M128 371c35 18.36 52.47 27.54 71.29 27.54V199.27L12.71 101.09l-.81 1.33C0 122.64 0 147.8 0 198.11v2.33c0 50.31 0 75.47 11.9 95.69s33.35 31.46 76.22 54z" />
          <Path
            d="M310.41 48.45l-39.85-20.91C235.58 9.18 218.08 0 199.27 0S163 9.18 128 27.54L88.12 48.45c-41.92 22-63.35 33.25-75.41 52.63l186.56 98.19 186.55-98.19c-12.06-19.38-33.49-30.63-75.41-52.63z"
            fill={state ? "#3cc687" : "#C7C7C8"}
          />
          <Path d="M386.64 102.42l-.81-1.33-186.56 98.18v199.28c18.82 0 36.31-9.18 71.3-27.54l39.85-20.92c42.88-22.5 64.31-33.75 76.22-54s11.9-45.38 11.9-95.69v-2.33c0-50.27 0-75.43-11.9-95.65z" />
          <Rect
            x={183.78}
            y={50.26}
            width={118.37}
            height={25.53}
            rx={11.67}
            transform="rotate(27.1 242.984 63.031)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default CatalogueSVG

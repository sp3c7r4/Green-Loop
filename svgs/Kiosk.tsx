import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Kiosk = ({ state, size }: { state: boolean; size: number }) => (
  <Svg
    width={size} // Apply the size prop to width
    height={size} // Apply the size prop to height
    viewBox="0 0 16 16" // Ensure the viewBox matches the SVG's original dimensions
    fill="none"
  >
    <Path
      d="M2 0 0 3c0 1.042.23 2 1.75 2S3.497 4 3.5 3l1.25-3H2zm4 0-.75 3c0 1.017.16 2 1.75 2s1.747-1.023 1.75-2L8 0H6zm3.25 0 1.25 3c0 1.023.324 2 1.75 2S14 3.983 14 3l-2-3H9.25zM1 6v8h12V6H1zm3 2h6c.565 0 1 .505 1 1v2H3V9c0-.542.505-1 1-1z"
      fill={color} // Use the color prop for the fill
    />
  </Svg>
);
export default Kiosk
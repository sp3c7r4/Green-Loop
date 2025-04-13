import * as React from "react";
import Svg, { Defs, G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const AuctionSvg = ({ state, size }: { state: boolean; size: number }) => (
  <Svg
    viewBox="0 0 560.14 466.66"
    width={size}
    height={size}
  >
    <Defs></Defs>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path d="M166.67,266.66v200h-100A66.66,66.66,0,0,1,0,400V333.33a66.67,66.67,0,0,1,66.67-66.67Z" />
        <Path d="M560.14,233.33V400a66.65,66.65,0,0,1-66.66,66.66h-100v-300h100A66.66,66.66,0,0,1,560.14,233.33Z" />
        <Path
          fill={state ? "#3cc687" : "#C7C7C8"}
          d="M363.41,66.66v400H196.74v-400A66.67,66.67,0,0,1,263.41,0h33.33A66.67,66.67,0,0,1,363.41,66.66Z"
        />
      </G>
    </G>
  </Svg>
);
export default AuctionSvg;

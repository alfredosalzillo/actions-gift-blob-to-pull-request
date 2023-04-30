import outdent from "outdent";
import spline from "./spline";
import {BlobDescriptor} from "./blob";

const toSvg = (blob: BlobDescriptor) => {
  const { width, height, body, eyes, colors } = blob;
  return outdent`
    <svg
      viewBox="0 0 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="${spline(body as any[], 1, true)}"
        stroke-width="2"
        stroke="${colors.dark}"
        fill="${colors.primary}"
      />
      <g>
        ${eyes.map((eye) => {
          const { x, y, size } = eye;
          return outdent`
            <g
              transform="${`matrix(1,0,0,1,${x},${y})`}"
            >
              <circle
                r="${size}"
                cx="0"
                cy="0"
                stroke-width="2"
                stroke="${colors.dark}"
                fill="${colors.light}"
              />
              <circle
                r="${size / 2}"
                cx="0"
                cy="0"
                fill="${colors.dark}"
              />
            </g>
          `;
        }).join('')}
      </g>
    </svg>
   `;
}

export default toSvg;
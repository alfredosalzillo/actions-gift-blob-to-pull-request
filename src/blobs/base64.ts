import {BlobDescriptor} from "./blob";
import toSvg from "./svg";

const toBase64 = (blob: BlobDescriptor) => {
  return `data:image/svg+xml;base64,${Buffer.from(toSvg(blob)).toString('base64')}`
}

export default toBase64;

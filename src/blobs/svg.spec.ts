import toSvg from "./svg";
import {createDescriptor} from "./blob";
import {XMLParser, XMLValidator} from 'fast-xml-parser';

const isSvg = (value: any) => {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof value}\``);
  }

  if (value.trim().length === 0) {
    return false;
  }

  // Has to be `!==` as it can also return an object with error info.
  if (XMLValidator.validate(value) !== true) {
    return false;
  }

  const parser = new XMLParser();

  try {
    const jsonObject = parser.parse(value);
    if (!jsonObject) {
      return false;
    }
    if (!('svg' in jsonObject)) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
};

const descriptor = createDescriptor(512, 512);
describe("blobs/toSvg", () => {
  it("should generate a valid svg", () => {
    const blob = toSvg(descriptor)
    expect(isSvg(blob)).toBe(true);
  });
})
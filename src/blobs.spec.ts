import {generateBlobUri} from "./blobs";

describe('blobs/generateBlobUri', () => {
  it('should return a uri', async () => {
    const uri = await generateBlobUri(100, 100);
    expect(uri).not.toBeNull()
  })
  it('should return a valid uri', async () => {
    const uri = await generateBlobUri(100, 100);
    expect(() => new URL(uri)).not.toThrow()
  })
})
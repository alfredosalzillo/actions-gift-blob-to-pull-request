import fetch from 'node-fetch';
export const generateBlobUri = async (width: number, height: number) => {
    const response = await fetch(`https://blobs-six.vercel.app/api/blob?width=${width}&height=${height}`, {
        redirect: 'manual',
    });
    if (response.status !== 302) {
        throw new Error(`Blob API returned ${response.status}`);
    }
    const location = response.headers.get('location');
    if (!location) {
        throw new Error(`Blob API returned no location header`);
    }
    return location;
}

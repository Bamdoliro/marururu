const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

interface PixelCrop {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const getCropImg = async (
  imageSrc: string,
  pixelCrop: PixelCrop,
  outputWidth = 117,
  outputHeight = 156
) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = outputWidth * 2;
  canvas.height = outputHeight * 2;

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputWidth * 2,
    outputHeight * 2
  );

  const downscaledCanvas = document.createElement('canvas');
  const downscaledCtx = downscaledCanvas.getContext('2d');

  downscaledCanvas.width = outputWidth;
  downscaledCanvas.height = outputHeight;

  if (!downscaledCtx) {
    throw new Error('Canvas 2D context not available');
  }

  downscaledCtx.drawImage(canvas, 0, 0, outputWidth, outputHeight);

  return new Promise((resolve) => {
    downscaledCanvas.toBlob((blob) => {
      if (blob) {
        resolve(URL.createObjectURL(blob));
      }
    }, 'image/jpeg');
  });
};

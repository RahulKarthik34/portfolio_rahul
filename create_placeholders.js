import fs from 'fs';
import zlib from 'zlib';

function createPNG(width, height, r, g, b, textLabel) {
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 2; // Color type: 2 (RGB)
  ihdrData[10] = 0; // Compression: deflate
  ihdrData[11] = 0; // Filter: standard
  ihdrData[12] = 0; // Interlace: none
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // Scanlines (Filter byte 0 + RGB bytes per line)
  const rawScanlines = Buffer.alloc(height * (1 + width * 3));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawScanlines[offset++] = 0; // Filter byte: None
    const gradientFactor = y / height;
    const curR = Math.min(255, Math.floor(r * (0.6 + 0.4 * gradientFactor)));
    const curG = Math.min(255, Math.floor(g * (0.6 + 0.4 * gradientFactor)));
    const curB = Math.min(255, Math.floor(b * (0.6 + 0.4 * gradientFactor)));

    for (let x = 0; x < width; x++) {
      rawScanlines[offset++] = curR;
      rawScanlines[offset++] = curG;
      rawScanlines[offset++] = curB;
    }
  }

  const compressed = zlib.deflateSync(rawScanlines);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4);
  data.copy(chunk, 8);
  const crc = crc32(Buffer.concat([Buffer.from(type), data]));
  chunk.writeUInt32BE(crc >>> 0, 8 + len);
  return chunk;
}

// Standard CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1));
}

// Generate the 3 project preview PNGs and the OG image
fs.writeFileSync('public/images/projects/id-card-attendance.png', createPNG(640, 360, 20, 35, 60, "Attendance System"));
fs.writeFileSync('public/images/projects/dev-os.png', createPNG(640, 360, 30, 40, 75, "DEV OS"));
fs.writeFileSync('public/images/projects/ai-mock-interview.png', createPNG(640, 360, 15, 45, 55, "AI Interview"));
fs.writeFileSync('public/images/og-image.png', createPNG(1200, 630, 15, 23, 42, "Rahul Karthik Portfolio"));

console.log("All project placeholder images generated successfully!");

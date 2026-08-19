'use client';

import { useState, useRef, useEffect } from 'react';
import { textToMorse, CHAR_TO_MORSE } from '@/lib/morse';

type TattooStyle = 'linear' | 'dots-only' | 'vertical';

export default function TattooGenerator() {
  const [text, setText] = useState('I Love You');
  const [style, setStyle] = useState<TattooStyle>('linear');
  const [dotSize, setDotSize] = useState(6);
  const [spacing, setSpacing] = useState(4);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const morse = textToMorse(text);

  useEffect(() => {
    drawTattoo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, style, dotSize, spacing]);

  function drawTattoo() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const padding = 40;

    // Calculate dimensions based on content
    const elements = parseMorseElements(text);
    const { width: contentWidth, height: contentHeight } = measureDesign(elements, style, dotSize, spacing);

    const canvasWidth = contentWidth + padding * 2;
    const canvasHeight = contentHeight + padding * 2;

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    ctx.scale(dpr, dpr);

    // Clear
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';

    if (style === 'linear') {
      drawLinear(ctx, elements, padding, canvasHeight / 2, dotSize, spacing);
    } else if (style === 'dots-only') {
      drawDotsOnly(ctx, elements, padding, canvasHeight / 2, dotSize, spacing);
    } else if (style === 'vertical') {
      drawVertical(ctx, elements, padding, padding, dotSize, spacing);
    }
  }

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `morse-tattoo-${text.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div>
      {/* Input */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Your text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your phrase..."
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={50}
        />
        <p className="text-xs text-gray-500 mt-1 font-mono">{morse}</p>
      </div>

      {/* Style Selector */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Style</label>
        <div className="flex gap-2">
          {([
            ['linear', 'Linear (Classic)'],
            ['dots-only', 'Dots & Circles'],
            ['vertical', 'Vertical'],
          ] as [TattooStyle, string][]).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setStyle(value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                style === value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Size Controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Element size: {dotSize}px</label>
          <input
            type="range"
            min={3}
            max={12}
            value={dotSize}
            onChange={(e) => setDotSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Spacing: {spacing}px</label>
          <input
            type="range"
            min={2}
            max={10}
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Canvas Preview */}
      <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center overflow-x-auto">
        <canvas ref={canvasRef} />
      </div>

      {/* Download Button */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          ⬇ Download PNG
        </button>
        <button
          onClick={() => setText('I Love You')}
          className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// --- Drawing helpers ---

interface MorseElement {
  type: 'dot' | 'dash' | 'letterGap' | 'wordGap';
}

function parseMorseElements(text: string): MorseElement[] {
  const elements: MorseElement[] = [];
  const upper = text.toUpperCase();
  const words = upper.split(' ');

  for (let wi = 0; wi < words.length; wi++) {
    const word = words[wi];
    for (let li = 0; li < word.length; li++) {
      const code = CHAR_TO_MORSE[word[li]];
      if (!code) continue;
      for (const ch of code) {
        if (ch === '.') elements.push({ type: 'dot' });
        else if (ch === '-') elements.push({ type: 'dash' });
      }
      if (li < word.length - 1) elements.push({ type: 'letterGap' });
    }
    if (wi < words.length - 1) elements.push({ type: 'wordGap' });
  }

  return elements;
}

function measureDesign(
  elements: MorseElement[],
  style: TattooStyle,
  dotSize: number,
  spacing: number
): { width: number; height: number } {
  if (style === 'vertical') {
    let h = 0;
    for (const el of elements) {
      if (el.type === 'dot') h += dotSize + spacing;
      else if (el.type === 'dash') h += dotSize * 3 + spacing;
      else if (el.type === 'letterGap') h += spacing * 3;
      else if (el.type === 'wordGap') h += spacing * 6;
    }
    return { width: dotSize * 4, height: Math.max(h, 20) };
  }

  let w = 0;
  for (const el of elements) {
    if (el.type === 'dot') w += dotSize + spacing;
    else if (el.type === 'dash') w += dotSize * 3 + spacing;
    else if (el.type === 'letterGap') w += spacing * 3;
    else if (el.type === 'wordGap') w += spacing * 6;
  }
  return { width: Math.max(w, 20), height: dotSize * 4 };
}

function drawLinear(
  ctx: CanvasRenderingContext2D,
  elements: MorseElement[],
  x: number,
  y: number,
  dotSize: number,
  spacing: number
) {
  let cx = x;
  for (const el of elements) {
    if (el.type === 'dot') {
      ctx.beginPath();
      ctx.arc(cx + dotSize / 2, y, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
      cx += dotSize + spacing;
    } else if (el.type === 'dash') {
      const dashWidth = dotSize * 3;
      ctx.beginPath();
      ctx.roundRect(cx, y - dotSize / 2, dashWidth, dotSize, dotSize / 2);
      ctx.fill();
      cx += dashWidth + spacing;
    } else if (el.type === 'letterGap') {
      cx += spacing * 3;
    } else if (el.type === 'wordGap') {
      cx += spacing * 6;
    }
  }
}

function drawDotsOnly(
  ctx: CanvasRenderingContext2D,
  elements: MorseElement[],
  x: number,
  y: number,
  dotSize: number,
  spacing: number
) {
  let cx = x;
  for (const el of elements) {
    if (el.type === 'dot') {
      ctx.beginPath();
      ctx.arc(cx + dotSize / 2, y, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
      cx += dotSize + spacing;
    } else if (el.type === 'dash') {
      // Draw dash as a larger circle (outline)
      ctx.beginPath();
      ctx.arc(cx + dotSize, y, dotSize, 0, Math.PI * 2);
      ctx.lineWidth = dotSize / 3;
      ctx.stroke();
      cx += dotSize * 2 + spacing;
    } else if (el.type === 'letterGap') {
      cx += spacing * 3;
    } else if (el.type === 'wordGap') {
      cx += spacing * 6;
    }
  }
}

function drawVertical(
  ctx: CanvasRenderingContext2D,
  elements: MorseElement[],
  x: number,
  y: number,
  dotSize: number,
  spacing: number
) {
  let cy = y;
  const centerX = x + dotSize * 2;
  for (const el of elements) {
    if (el.type === 'dot') {
      ctx.beginPath();
      ctx.arc(centerX, cy + dotSize / 2, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
      cy += dotSize + spacing;
    } else if (el.type === 'dash') {
      const dashHeight = dotSize * 3;
      ctx.beginPath();
      ctx.roundRect(centerX - dotSize / 2, cy, dotSize, dashHeight, dotSize / 2);
      ctx.fill();
      cy += dashHeight + spacing;
    } else if (el.type === 'letterGap') {
      cy += spacing * 3;
    } else if (el.type === 'wordGap') {
      cy += spacing * 6;
    }
  }
}

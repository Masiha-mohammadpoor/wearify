"use client";

import { useState } from "react";

const PriceRangeSlider = ({
  min = 0,
  max = 1000,
  step = 1,
  value,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(value?.[0] ?? min);
  const [maxVal, setMaxVal] = useState(value?.[1] ?? max);

  const handleMinChange = (val) => {
    setMinVal(Math.min(val, maxVal - step));
  };

  const handleMaxChange = (val) => {
    setMaxVal(Math.max(val, minVal + step));
  };

  const commit = () => {
    onChange?.([minVal, maxVal]);
  };

  const range = max - min || 1;
  const minPercent = ((minVal - min) / range) * 100;
  const maxPercent = ((maxVal - min) / range) * 100;

  const thumbStyles = `absolute w-full h-2 appearance-none bg-transparent pointer-events-none
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-5
    [&::-webkit-slider-thumb]:h-5
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:border-2
    [&::-webkit-slider-thumb]:border-red-900
    [&::-webkit-slider-thumb]:pointer-events-auto
    [&::-webkit-slider-thumb]:cursor-pointer
    [&::-moz-range-thumb]:w-5
    [&::-moz-range-thumb]:h-5
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-white
    [&::-moz-range-thumb]:border-2
    [&::-moz-range-thumb]:border-red-900
    [&::-moz-range-thumb]:pointer-events-auto
    [&::-moz-range-thumb]:cursor-pointer`;

  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
        <span>${minVal}</span>
        <span>${maxVal}</span>
      </div>

      <div className="relative h-2">
        <div className="absolute w-full h-1 bg-gray-200 rounded-full top-1/2 -translate-y-1/2" />

        <div
          className="absolute h-1 bg-red-900 rounded-full top-1/2 -translate-y-1/2"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          onMouseUp={commit}
          onTouchEnd={commit}
          onKeyUp={commit}
          className={thumbStyles}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          onMouseUp={commit}
          onTouchEnd={commit}
          onKeyUp={commit}
          className={thumbStyles}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;

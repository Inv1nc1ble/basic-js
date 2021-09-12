import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample( sampleActivity ) {

  if (typeof +sampleActivity !== 'number' || typeof sampleActivity !=='string' || isNaN(sampleActivity) || +sampleActivity < 0 ) {
    return false;
  }
  
  let time = 0;

  let radio = 0.693 / HALF_LIFE_PERIOD;

  time += (Math.log(MODERN_ACTIVITY / +sampleActivity)) / radio;

  if (time == Infinity || time < 0) return false;

  return Math.ceil(time);
}


import { wordsPerMinute } from '../config';

function timeToRead(content) {
  const contentWords = content.trim().split(/\s+/);
  const wordsNumber = contentWords.length;
  return Math.ceil(wordsNumber / wordsPerMinute);
}

export { timeToRead };

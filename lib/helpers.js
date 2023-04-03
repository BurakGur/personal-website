const WORDS_PER_MINUTE = 225;

function timeToRead(content) {
  const contentWords = content.trim().split(/\s+/);
  const wordsNumber = contentWords.length;
  return Math.ceil(wordsNumber / WORDS_PER_MINUTE);
}

export { timeToRead };

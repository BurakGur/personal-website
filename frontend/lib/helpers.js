function timeToRead(content) {
  const wordsPerMinute = process.env.NEXT_PUBLIC_WORDS_PER_MINUTE;
  const contentWords = content.trim().split(/\s+/);
  const wordsNumber = contentWords.length;
  return Math.ceil(wordsNumber / wordsPerMinute);
}

export { timeToRead };

export function calculateReadTime(markdownContent:string, wordsPerMinute = 200) {
  const wordCount = markdownContent.split(/\s+/).length;

  const readTimeMinutes = wordCount / wordsPerMinute;

  return Math.ceil(readTimeMinutes);
}

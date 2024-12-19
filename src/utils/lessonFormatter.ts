export function formatLessonContent(content: string): string {
  // Удаляем маркеры markdown
  let formatted = content.replace(/###\s/g, '<h3 class="text-xl font-semibold my-4">');
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Добавляем стили для параграфов
  formatted = formatted.split('\n\n').map(paragraph => {
    if (!paragraph.startsWith('<h3') && paragraph.trim()) {
      return `<p class="text-gray-300 leading-relaxed mb-4">${paragraph}</p>`;
    }
    return paragraph;
  }).join('\n');

  return formatted;
}
export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  variables: { key: string; label: string; hint: string }[];
  promptPreview: string;
}

export const TEMPLATES: PromptTemplate[] = [
  { id: 't1', name: 'Служебная записка', description: 'Шаблон оформления служебной записки по ГОСТ', category: 'Документооборот', variables: [{ key: 'topic', label: 'Тема', hint: 'Кратко сформулируйте тему' }, { key: 'body', label: 'Суть', hint: 'Основной текст без персональных данных' }], promptPreview: 'Составить служебную записку. Тема: {{topic}}. Содержание: {{body}}.' },
  { id: 't2', name: 'Суммаризация документов', description: 'Краткое изложение объёмного документа', category: 'Аналитика', variables: [{ key: 'doc_type', label: 'Тип документа', hint: 'Отчёт, приказ, регламент' }, { key: 'max_length', label: 'Объём выжимки', hint: 'Количество предложений или абзацев' }], promptPreview: 'Суммаризировать документ ({{doc_type}}). Выжимка не более {{max_length}}.' },
  { id: 't3', name: 'Ответ гражданину', description: 'Подготовка ответа на обращение гражданина', category: 'Госуслуги', variables: [{ key: 'theme', label: 'Тема обращения', hint: 'Без персональных данных' }, { key: 'position', label: 'Позиция ведомства', hint: 'Утверждённая позиция или ссылка на регламент' }], promptPreview: 'Подготовить ответ гражданину. Тема: {{theme}}. Позиция: {{position}}.' },
  { id: 't4', name: 'Риск-анализ', description: 'Оценка рисков по тексту или решению', category: 'Управление', variables: [{ key: 'object', label: 'Объект анализа', hint: 'Решение, проект, процесс' }, { key: 'criteria', label: 'Критерии риска', hint: 'Финансовые, репутационные, ИБ' }], promptPreview: 'Провести риск-анализ: {{object}}. Критерии: {{criteria}}.' },
];

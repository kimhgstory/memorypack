import { TemplateSchema } from './templateD.js';

export const templateE: TemplateSchema = {
  id: 'templateE',
  fields: [
    { key: 'question', label: 'Question', type: 'string' },
    { key: 'answer', label: 'Answer', type: 'string' },
    { key: 'tags', label: 'Tags', type: 'string[]' }
  ]
};

export const templateEUI = {
  question: { widget: 'text' },
  answer: { widget: 'textarea' },
  tags: { widget: 'text' }
};

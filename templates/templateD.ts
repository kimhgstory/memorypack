export interface TemplateField {
  key: string;
  label: string;
  type: string;
}

export interface TemplateSchema {
  id: string;
  fields: TemplateField[];
}

export const templateD: TemplateSchema = {
  id: 'templateD',
  fields: [
    { key: 'title', label: 'Title', type: 'string' },
    { key: 'description', label: 'Description', type: 'string' }
  ]
};

export const templateDUI = {
  title: { widget: 'text' },
  description: { widget: 'textarea' }
};

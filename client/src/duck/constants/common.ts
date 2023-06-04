export const VALIDATION_MESSAGES = {
  required: (field: string) => `${field} is required`,
  wrongFormat: (field: string) => `${field} has a wrong format`,
  equalTo: (field: string) => `Field should be equal to ${field}`,
};

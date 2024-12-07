function validateTaskData(title, description) {
    if (!title || !description) {
      throw new Error('title and description are required');
    }
    return true;
  }
  
  describe('createTaskLogic unit tests', () => {
    it('debería lanzar error si falta title', () => {
      expect(() => validateTaskData('', 'desc')).toThrow();
    });
  
    it('debería lanzar error si falta description', () => {
      expect(() => validateTaskData('Titulo', '')).toThrow();
    });
  
    it('debería retornar true si title y description están presentes', () => {
      expect(validateTaskData('Titulo', 'desc')).toBe(true);
    });
  });
function validateTaskId(id) {
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid task ID');
    }
    return true;
  }
  
  describe('deleteTaskLogic unit tests', () => {
    it('debería lanzar error si el ID es inválido', () => {
      expect(() => validateTaskId('')).toThrow();
      expect(() => validateTaskId(null)).toThrow();
    });
  
    it('debería retornar true si el ID es un string válido', () => {
      expect(validateTaskId('someidstring')).toBe(true);
    });
  });
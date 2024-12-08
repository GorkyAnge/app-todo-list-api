function validateCompletedStatus(completed) {
    if (typeof completed !== 'boolean') {
      throw new Error('completed must be a boolean');
    }
    return true;
  }
  
  describe('updateTaskLogic unit tests', () => {
    it('debería lanzar error si completed no es boolean', () => {
      expect(() => validateCompletedStatus('yes')).toThrow();
    });
  
    it('debería retornar true si completed es boolean', () => {
      expect(validateCompletedStatus(true)).toBe(true);
      expect(validateCompletedStatus(false)).toBe(true);
    });
  });
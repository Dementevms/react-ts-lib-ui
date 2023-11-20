import { useCheckbox } from '../useCheckbox';

describe('useCheckbox', () => {
  it('Simple test', () => {
    expect(useCheckbox('One')).toBe('ValueOne');
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Timer from 'src/components/layout/Footer/components/Timer';

describe('Timer component', () => {
  it('should be rendered properly', () => {
    render(<Timer />);
    expect(screen.getByTestId('timer'));
  });
  it('should be showing current hour', () => {
    const currentHour = new Date().toLocaleString('pl', {
      hour: 'numeric',
      minute: 'numeric'
    });
    render(<Timer />);
    expect(screen.getAllByText(currentHour));
  });
});

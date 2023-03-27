import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from 'src/components';

describe('Button component', () => {
  it('should renders button with title', () => {
    render(<Button title='Test' />);
    expect(screen.getAllByText('Test')).toHaveLength(1);
  });

  it('should call onclick fuction', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} title='Test2' />);
    screen.getByText('Test2').click();
    expect(onClick).toHaveBeenCalled();
  });
});

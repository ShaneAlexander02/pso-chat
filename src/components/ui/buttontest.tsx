import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

test('renders button component', () => {
    render(<Button>Hello</Button>);
  });

  test('renders button with different variants and sizes', () => {
    render(<Button variant="default" size="default">Default Button</Button>);
    render(<Button variant="destructive" size="sm">Destructive Button</Button>);
    // tambahkan test case lain sesuai dengan variant dan size yang ingin diuji
  });

  test('forwards ref to button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button with ref</Button>);
    expect(ref.current).toBeInTheDocument();
  });

  test('renders as Slot when asChild is true', () => {
    render(<Button asChild>Child Button</Button>);
    // tambahkan assertion sesuai kebutuhan, misalnya expect(SlotComponent).toBeInTheDocument();
  });
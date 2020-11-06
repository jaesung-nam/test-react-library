import * as React from 'react';
import { MyComp } from './MyComp';
import { cleanup, fireEvent, render } from '@testing-library/react';

afterEach(cleanup);

test('테스트', () => {
  const { getByDisplayValue } = render(
    <MyComp
      value="Qq"
      onChange={() => {
        console.log('ew');
      }}
    />
  );

  const input = getByDisplayValue('Qq') as HTMLInputElement;

  expect(input.value).toBe('Qq');

  fireEvent.change(input, {
    target: {
      value: '111',
    },
  });

  expect(input.value).toBe('Qq');
});

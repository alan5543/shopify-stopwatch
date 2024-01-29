import React from 'react';
import { render } from '@testing-library/react-native';
import Stopwatch from '../src/Stopwatch';
import { formatTime } from '../src/utils';

describe('Stopwatch', () => {
  test('renders initial state correctly', () => {
    const { getByText } = render(<Stopwatch timeElapsed={0} />);
    expect(getByText('00:00:00')).toBeTruthy();
  });

  test('displays time correctly for 1 minute', () => {
    const oneMinuteMs = 60000; // 1 minute in milliseconds
    const { getByText } = render(<Stopwatch timeElapsed={oneMinuteMs} />);
    expect(getByText('01:00:00')).toBeTruthy();
  });

  test('displays time correctly for 1 minute and 30 seconds', () => {
    const oneAndHalfMinuteMs = 90000; // 1 minute and 30 seconds in milliseconds
    const { getByText } = render(<Stopwatch timeElapsed={oneAndHalfMinuteMs} />);
    expect(getByText('01:30:00')).toBeTruthy();
  });

  test('displays time correctly for 2 minutes, 45 seconds, and 50 milliseconds', () => {
    const timeMs = 2 * 60000 + 45 * 1000 + 50; // 2 minutes, 45 seconds, and 50 milliseconds
    const { getByText } = render(<Stopwatch timeElapsed={timeMs} />);
    expect(getByText('02:45:05')).toBeTruthy();
  });

  test('formats time correctly for less than an hour', () => {
    // 45 minutes, 30 seconds, and 25 milliseconds
    const time = 45 * 60000 + 30 * 1000 + 25;
    expect(formatTime(time)).toBe('45:30:02');
  });

  test('formats time correctly for exactly one hour', () => {
    // Exactly 1 hour
    const time = 60 * 60000;
    expect(formatTime(time)).toBe('01:00:00:00');
  });

  test('formats time correctly for more than an hour', () => {
    // 1 hour, 15 minutes, 45 seconds, and 50 milliseconds
    const time = 1 * 3600000 + 15 * 60000 + 45 * 1000 + 50;
    expect(formatTime(time)).toBe('01:15:45:05');
  });
});

'use client';
import { useState, useEffect } from 'react';
import Button from './Button';

export default function Nav() {
  const [current, setCurrent] = useState(0);
  const tryAlertplus = () => setCurrent(current + 1);
  const tryAlertminus = () => current > 0 && setCurrent(current - 1);
  return (
    <>
      <div>
        <h1>Countdown Timer</h1>
        <p>{current}</p>
        <Button onclick={tryAlertplus} text='Aumentar' />
        <Button onclick={tryAlertminus} text='Reducir' />
      </div>
    </>
  );
}

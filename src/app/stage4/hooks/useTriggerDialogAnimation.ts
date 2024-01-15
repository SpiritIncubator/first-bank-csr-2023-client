import { useEffect, useState } from 'react';

export default function useTriggerDialogAnimation({
  disabled = false,
  delay = 0
}: {
  disabled?: boolean;
  delay?: number;
} = {}) {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (disabled) return;
      setTriggerAnimation(true)
    }, delay)
  }, [delay, disabled])

  return {
    triggerAnimation: triggerAnimation
  }
}
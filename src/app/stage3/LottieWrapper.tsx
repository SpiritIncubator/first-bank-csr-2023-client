'use client';

import React from 'react';
import { useLottie } from 'lottie-react';

type AnimationOptions = {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
};

interface LottieWrapperProps {
  options: AnimationOptions;
  onLoad?: (View: any, getDuration: () => number | undefined) => void;
}

const LottieWrapper: React.FC<LottieWrapperProps> = ({ options, onLoad }) => {
  const { View, getDuration } = useLottie(options);

  React.useEffect(() => {
    if (onLoad) {
      onLoad(View, getDuration);
    }
  }, [View, getDuration, onLoad]);

  return View;
};

export default LottieWrapper;
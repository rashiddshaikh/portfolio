'use client';

import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import './style.scss';
import { reveal } from './reveal';

type RevealWrapperType = {
  children: React.ReactNode;
  className?: string;
  origin?: string;
  distance?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  opacity?: number;
  rotate?: { x: number; y: number; z: number };
  scale?: number;
  cleanup?: boolean;
  desktop?: boolean;
  mobile?: boolean;
  reset?: boolean;
  useDelay?: string;
  viewFactor?: number;
  viewOffset?: { top: number; right: number; bottom: number; left: number };
};

const RevealWrapper: React.FC<RevealWrapperType> = (props) => {
  const {
    children,
    className,
    origin,
    distance,
    duration,
    delay,
    reset,
    easing,
    opacity,
    rotate,
    scale,
    cleanup,
    desktop,
    mobile,
    useDelay,
    viewFactor,
    viewOffset,
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const Origin = origin ?? reveal.origin;
  const Distance = distance ?? reveal.distance;
  const Duration = duration ?? reveal.duration;
  const Delay = delay ?? reveal.delay;
  const Reset = reset ?? reveal.reset;
  const Easing = easing ?? reveal.easing;
  const Opacity = opacity ?? reveal.opacity;
  const Rotate = rotate ?? reveal.rotate;
  const Scale = scale ?? reveal.scale;
  const Cleanup = cleanup ?? reveal.cleanup;
  const Desktop = desktop ?? reveal.desktop;
  const Mobile = mobile ?? reveal.mobile;
  const UseDelay = useDelay ?? reveal.useDelay;
  const ViewFactor = viewFactor ?? reveal.viewFactor;
  const ViewOffset = viewOffset ?? reveal.viewOffset;

  useEffect(() => {
    const revealOptionProps = {
      origin: Origin,
      distance: Distance,
      duration: Duration,
      delay: Delay,
      reset: Reset,
      easing: Easing,
      opacity: Opacity,
      rotate: Rotate,
      scale: Scale,
      cleanup: Cleanup,
      desktop: Desktop,
      mobile: Mobile,
      useDelay: UseDelay,
      viewFactor: ViewFactor,
      viewOffset: ViewOffset,
    };

    async function revElement() {
      const sr = (await require('scrollreveal')).default(reveal);

      if (ref.current) {
        sr.reveal(ref.current, revealOptionProps);
      }
    }

    revElement();
  }, [
    Origin,
    Distance,
    Duration,
    Delay,
    Reset,
    Easing,
    Opacity,
    Rotate,
    Scale,
    Cleanup,
    Desktop,
    Mobile,
    UseDelay,
    ViewFactor,
    ViewOffset,
  ]);

  return (
    <div ref={ref} className={twMerge(className, 'sr-hidden')}>
      {children}
    </div>
  );
};

export default RevealWrapper;

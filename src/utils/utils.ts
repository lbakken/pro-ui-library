export const SIZE_TO_MEDIA: any = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
};

export function matchBreakpoint(win: Window, breakpoint: string | undefined) {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  if ((win as any).matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
  }
  return false;
}

export function now(ev: UIEvent) {
  return ev.timeStamp || Date.now();
}


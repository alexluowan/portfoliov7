export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export interface UseTouchInput {
  value: boolean;
}

export function createHoverState(
  selector: string,
  {
    onMouseEnter = (_target: HTMLElement) => {},
    onMouseLeave = (_target: HTMLElement) => {},
  },
  isUsingTouch: UseTouchInput
) {
  const allText: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

  function handlePointerEnter(e: PointerEvent) {
    if (isUsingTouch.value) return;
    // Use currentTarget to get the element the listener is attached to, not the child
    const target = (e.currentTarget as HTMLElement) || (e.target as HTMLElement);
    onMouseEnter(target);
  }
  function handlePointerLeave(e: PointerEvent) {
    if (isUsingTouch.value) return;
    // handle pointer leave
    // Use currentTarget to get the element the listener is attached to, not the child
    const target = (e.currentTarget as HTMLElement) || (e.target as HTMLElement);
    onMouseLeave(target);
  }

  allText.forEach((elm) => {
    elm.addEventListener("pointerover", handlePointerEnter, true);
    elm.addEventListener("pointerout", handlePointerLeave, true);
  });

  return () => {
    // cleanup
    allText.forEach((elm) => {
      elm.removeEventListener("pointerover", handlePointerEnter, true);
      elm.removeEventListener("pointerout", handlePointerLeave, true);
    });
  };
}

export function detectOffscreen(
  {
    onEnterScreen = (_e: MouseEvent) => {},
    onExitScreen = () => {},
  },
  isUsingTouch: UseTouchInput
) {
  const handlePointerEnter = (e: MouseEvent) => {
    if (isUsingTouch.value) return;
    onEnterScreen(e);
  };
  const handlePointerLeave = () => {
    if (isUsingTouch.value) return;
    onExitScreen();
  };

  document.addEventListener("pointerenter", handlePointerEnter);
  document.addEventListener("pointerleave", handlePointerLeave);

  return () => {
    document.removeEventListener("pointerenter", handlePointerEnter);
    document.removeEventListener("pointerleave", handlePointerLeave);
  };
}

export function debounce(callback: () => void, millisec: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  function triggerDebounce() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, millisec);
  }

  return triggerDebounce;
}

export function observeMouseMove(
  { onMouseMove = (_e: MouseEvent) => {}, onMouseStop = () => {} },
  isUsingTouch: UseTouchInput
) {
  const MOUSE_STOP_DELAY = 50;
  const mouseStopCallback = debounce(() => {
    onMouseStop();
  }, MOUSE_STOP_DELAY);

  function handleMouseMove(e: MouseEvent) {
    if (isUsingTouch.value) return;
    onMouseMove(e);
    // add a debouncer for timeout
    mouseStopCallback();
  }

  // Add mouse event
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}

export function setupIsMouseDown(
  { onMouseDown = () => {}, onMouseUp = () => {} },
  _isUsingTouch: UseTouchInput
): () => void {
  // _isUsingTouch parameter kept for API consistency but not used
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  return () => {
    window.removeEventListener("mousedown", onMouseDown);
    window.removeEventListener("mosueup", onMouseUp);
  };
}


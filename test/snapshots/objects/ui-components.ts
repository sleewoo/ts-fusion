import { assert, type Equals } from "tsafe";

import type {
  UIComponentTest1,
  UIComponentTest2,
  UIComponentTest3,
  UIComponentTest4,
  UIComponentTest5,
  UIComponentTest6,
  UIComponentTest7,
  UIComponentTest8,
  UIComponentTest9,
  UIComponentTest10,
  UIComponentTest11,
  UIComponentTest12,
  UIComponentTest13,
  UIComponentTest14,
  UIComponentTest15,
  UIComponentTest16,
  UIComponentTest17,
  UIComponentTest18,
  UIComponentTest19,
  UIComponentTest20,
  UIComponentTest21,
  UIComponentTest22,
  UIComponentTest23,
  UIComponentTest24,
  UIComponentTest25,
} from "@/fixtures/objects/ui-components.ts";

// 1. Basic button props
type UIComponentTest1Flat = {
  variant: ("primary" | "secondary" | "ghost");
  size: ("sm" | "md" | "lg");
  onClick: ((e: {
    target: {
      tagName: "BUTTON";
      disabled: boolean;
      focus: (() => void)
    };
    preventDefault: (() => void);
    stopPropagation: (() => void)
  }) => void);
  children: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  disabled?: boolean
};

// 2. Form input props
type UIComponentTest2Flat<T> = {
  name: string;
  value: T;
  onChange: ((value: T) => void);
  validate?: ((value: T) => (string | null));
  label?: string;
  required?: boolean
};

// 3. Modal/dialog props
type UIComponentTest3Flat = {
  isOpen: boolean;
  onClose: (() => void);
  title: string;
  children: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  overlayStyles?: {
    [k: string]: (string | number)
  };
  portalTarget?: string
};

// 4. List virtualization props
type UIComponentTest4Flat<T> = {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: ((item: T, index: number) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>));
  overscan?: number
};

// 5. Grid layout props
type UIComponentTest5Flat = {
  columns: (number | {
    sm: number;
    md: number;
    lg: number
  });
  spacing: number;
  children: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>)[];
  breakpoints?: Record<string, number>
};

// 6. CSS-in-JS props
type UIComponentTest6Flat = {
  sx?: {
    [k: string]: (string | number)
  };
  css?: Record<string, {
    [k: string]: (string | number)
  }>;
  variants?: {
    size: Record<("sm" | "md" | "lg"), {
      [k: string]: (string | number)
    }>;
    variant: Record<("primary" | "secondary"), {
      [k: string]: (string | number)
    }>
  }
};

// 7. Drag-and-drop props
type UIComponentTest7Flat<T> = {
  items: T[];
  onReorder: ((newOrder: T[]) => void);
  renderDraggable: ((item: T, index: number) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>));
  dragHandle?: boolean;
  axis?: ("x" | "y")
};

// 8. Render props pattern
type UIComponentTest8Flat<T> = {
  data: T[];
  children: ((item: T, index: number) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>));
  fallback?: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>)
};

// 9. Compound component props
type UIComponentTest9Flat = {
  children: ((string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>) | [
    Header: ((props: {
      title: string
    }) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>)),
    Body: ((props: {
      scrollable?: boolean
    }) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>)),
    Footer?: ((props: never) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>))
  ]);
  orientation?: ("vertical" | "horizontal")
};

// 10. Headless controller props
type UIComponentTest10Flat<T> = {
  options: T[];
  selected: T[];
  onChange: ((selected: T[]) => void);
  render: ((props: {
    isOpen: boolean;
    toggle: (() => void);
    selectedItems: T[]
  }) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>))
};

// 11. Animation config props
type UIComponentTest11Flat = {
  enterFrom: {
    [k: string]: (string | number)
  };
  enterTo: {
    [k: string]: (string | number)
  };
  leaveFrom: {
    [k: string]: (string | number)
  };
  leaveTo: {
    [k: string]: (string | number)
  };
  duration?: number;
  easing?: string;
  onTransitionEnd?: (() => void)
};

// 12. Responsive props
type UIComponentTest12Flat<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  apply: ((value: T) => {
    [k: string]: (string | number)
  })
};

// 13. Slot-based component
type UIComponentTest13Flat = {
  slots?: {
    header?: ((props: never) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>));
    body?: ((props: {
      scrollable: boolean
    }) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>));
    footer?: ((props: {
      align: ("left" | "right")
    }) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>))
  };
  classNames?: {
    container?: string;
    header?: string;
    body?: string
  }
};

// 14. Icon component props
type UIComponentTest14Flat = {
  name: ("check" | "chevron-right" | "user" | "search" | "settings" | (string & {}));
  size?: (number | string);
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: (() => void)
};

// 15. Data table props
type UIComponentTest15Flat<T> = {
  columns: Array<{
    header: string;
    accessor: keyof T;
    render?: ((value: (T)[keyof T], row: T) => (string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>))
  }>;
  data: T[];
  pagination?: {
    pageSize: number;
    currentPage: number;
    onChange: ((page: number) => void)
  }
};

// 16. Layout component props
type UIComponentTest16Flat = {
  direction: ("row" | "column");
  align?: ("start" | "center" | "end");
  justify?: ("start" | "center" | "between" | "around");
  wrap?: boolean;
  gap?: (number | string)
};

// 17. Theme-aware props
type UIComponentTest17Flat = {
  colorScheme?: ("light" | "dark");
  theme?: {
    colors: Record<string, string>;
    spacing: Record<string, string>;
    breakpoints: Record<string, number>
  };
  useSystemTheme?: boolean
};

// 18. Error boundary props
type UIComponentTest18Flat = {
  fallback: ((error: Error, reset: (() => void)) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>));
  onError?: ((error: Error, info: {
    componentStack: string
  }) => void);
  children: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>)
};

// 19. Portal component props
type UIComponentTest19Flat = {
  target?: (string | Element);
  children: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  wrapperStyles?: {
    [k: string]: (string | number)
  };
  preserveDOM?: boolean
};

// 20. Tooltip/popover props
type UIComponentTest20Flat = {
  content: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  placement?: ("top" | "right" | "bottom" | "left");
  offset?: number;
  showArrow?: boolean;
  interactive?: boolean;
  trigger?: ("hover" | "click")
};

// 21. Transition props
type UIComponentTest21Flat = {
  in: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  timeout?: (number | {
    enter: number;
    exit: number
  });
  onEnter?: (() => void);
  onExited?: (() => void)
};

// 22. Accessibility props
type UIComponentTest22Flat = {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  role?: string;
  tabIndex?: number;
  keyboardNavigation?: boolean
};

// 23. Infinite scroll props
type UIComponentTest23Flat<T> = {
  items: T[];
  loadMore: (() => void);
  hasMore: boolean;
  loader: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  threshold?: number;
  scrollContainer?: string
};

// 24. Resizable props
type UIComponentTest24Flat = {
  initialSize: {
    width: number;
    height: number
  };
  minSize?: {
    width: number;
    height: number
  };
  maxSize?: {
    width: number;
    height: number
  };
  directions?: (("left" | "right" | "top" | "bottom"))[];
  onResize?: ((size: {
    width: number;
    height: number
  }) => void);
  handles?: (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>)[]
};

// 25. HOC props
type UIComponentTest25Flat<TOuter, TInner> = {
  component: ((props: TInner) => (string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>));
  transformProps: ((props: TOuter) => TInner);
  forwardRef?: boolean;
  displayName?: string
};


assert<
  Equals<
    UIComponentTest1,
    UIComponentTest1Flat
  >
>;
assert<
  Equals<
    UIComponentTest2<never>,
    UIComponentTest2Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest3,
    UIComponentTest3Flat
  >
>;
assert<
  Equals<
    UIComponentTest4<never>,
    UIComponentTest4Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest5,
    UIComponentTest5Flat
  >
>;
assert<
  Equals<
    UIComponentTest6,
    UIComponentTest6Flat
  >
>;
assert<
  Equals<
    UIComponentTest7<never>,
    UIComponentTest7Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest8<never>,
    UIComponentTest8Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest9,
    UIComponentTest9Flat
  >
>;
assert<
  Equals<
    UIComponentTest10<never>,
    UIComponentTest10Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest11,
    UIComponentTest11Flat
  >
>;
assert<
  Equals<
    UIComponentTest12<never>,
    UIComponentTest12Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest13,
    UIComponentTest13Flat
  >
>;
assert<
  Equals<
    UIComponentTest14,
    UIComponentTest14Flat
  >
>;
assert<
  Equals<
    UIComponentTest15<never>,
    UIComponentTest15Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest16,
    UIComponentTest16Flat
  >
>;
assert<
  Equals<
    UIComponentTest17,
    UIComponentTest17Flat
  >
>;
assert<
  Equals<
    UIComponentTest18,
    UIComponentTest18Flat
  >
>;
assert<
  Equals<
    UIComponentTest19,
    UIComponentTest19Flat
  >
>;
assert<
  Equals<
    UIComponentTest20,
    UIComponentTest20Flat
  >
>;
assert<
  Equals<
    UIComponentTest21,
    UIComponentTest21Flat
  >
>;
assert<
  Equals<
    UIComponentTest22,
    UIComponentTest22Flat
  >
>;
assert<
  Equals<
    UIComponentTest23<never>,
    UIComponentTest23Flat<never>
  >
>;
assert<
  Equals<
    UIComponentTest24,
    UIComponentTest24Flat
  >
>;
assert<
  Equals<
    UIComponentTest25<never, never>,
    UIComponentTest25Flat<never, never>
  >
>;

import type { SyntheticEvent, CSSProperties, Dimension } from "./object-types";

// 1. Basic button props
export type UIComponentTest1 = {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
};

// 2. Form input props
export type UIComponentTest2<T = string> = {
  name: string;
  value: T;
  onChange: (value: T) => void;
  validate?: (value: T) => string | null;
  label?: string;
  required?: boolean;
};

// 3. Modal/dialog props
export type UIComponentTest3 = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  overlayStyles?: CSSProperties;
  portalTarget?: string;
};

// 4. List virtualization props
export type UIComponentTest4<T> = {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => ReactNode;
  overscan?: number;
};

// 5. Grid layout props
export type UIComponentTest5 = {
  columns: number | { sm: number; md: number; lg: number };
  spacing: number;
  children: ReactNode[];
  breakpoints?: Record<string, number>;
};

// 6. CSS-in-JS props
export type UIComponentTest6 = {
  sx?: CSSProperties;
  css?: Record<string, CSSProperties>;
  variants?: {
    size: Record<"sm" | "md" | "lg", CSSProperties>;
    variant: Record<"primary" | "secondary", CSSProperties>;
  };
};

// 7. Drag-and-drop props
export type UIComponentTest7<T> = {
  items: T[];
  onReorder: (newOrder: T[]) => void;
  renderDraggable: (item: T, index: number) => ReactNode;
  dragHandle?: boolean;
  axis?: "x" | "y";
};

// 8. Render props pattern
export type UIComponentTest8<T> = {
  data: T[];
  children: (item: T, index: number) => ReactNode;
  fallback?: ReactNode;
};

// 9. Compound component props
export type UIComponentTest9 = {
  children:
    | ReactNode
    | [
        Header: ReactComponent<{ title: string }>,
        Body: ReactComponent<{ scrollable?: boolean }>,
        Footer?: ReactComponent<never>,
      ];
  orientation?: "vertical" | "horizontal";
};

// 10. Headless controller props
export type UIComponentTest10<T> = {
  options: T[];
  selected: T[];
  onChange: (selected: T[]) => void;
  render: (props: {
    isOpen: boolean;
    toggle: () => void;
    selectedItems: T[];
  }) => ReactNode;
};

// 11. Animation config props
export type UIComponentTest11 = {
  enterFrom: CSSProperties;
  enterTo: CSSProperties;
  leaveFrom: CSSProperties;
  leaveTo: CSSProperties;
  duration?: number;
  easing?: string;
  onTransitionEnd?: () => void;
};

// 12. Responsive props
export type UIComponentTest12<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  apply: (value: T) => CSSProperties;
};

// 13. Slot-based component
export type UIComponentTest13 = {
  slots?: {
    header?: ReactComponent<never>;
    body?: ReactComponent<{ scrollable: boolean }>;
    footer?: ReactComponent<{ align: "left" | "right" }>;
  };
  classNames?: {
    container?: string;
    header?: string;
    body?: string;
  };
};

// 14. Icon component props
export type UIComponentTest14 = {
  name: IconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
};

// 15. Data table props
export type UIComponentTest15<T> = {
  columns: Array<{
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T], row: T) => ReactNode;
  }>;
  data: T[];
  pagination?: {
    pageSize: number;
    currentPage: number;
    onChange: (page: number) => void;
  };
};

// 16. Layout component props
export type UIComponentTest16 = {
  direction: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "around";
  wrap?: boolean;
  gap?: number | string;
};

// 17. Theme-aware props
export type UIComponentTest17 = {
  colorScheme?: "light" | "dark";
  theme?: {
    colors: Record<string, string>;
    spacing: Record<string, string>;
    breakpoints: Record<string, number>;
  };
  useSystemTheme?: boolean;
};

// 18. Error boundary props
export type UIComponentTest18 = {
  fallback: (error: Error, reset: () => void) => ReactNode;
  onError?: (error: Error, info: { componentStack: string }) => void;
  children: ReactNode;
};

// 19. Portal component props
export type UIComponentTest19 = {
  target?: string | Element;
  children: ReactNode;
  wrapperStyles?: CSSProperties;
  preserveDOM?: boolean;
};

// 20. Tooltip/popover props
export type UIComponentTest20 = {
  content: ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  offset?: number;
  showArrow?: boolean;
  interactive?: boolean;
  trigger?: "hover" | "click";
};

// 21. Transition props
export type UIComponentTest21 = {
  in: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  timeout?: number | { enter: number; exit: number };
  onEnter?: () => void;
  onExited?: () => void;
};

// 22. Accessibility props
export type UIComponentTest22 = {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  role?: string;
  tabIndex?: number;
  keyboardNavigation?: boolean;
};

// 23. Infinite scroll props
export type UIComponentTest23<T> = {
  items: T[];
  loadMore: () => void;
  hasMore: boolean;
  loader: ReactNode;
  threshold?: number;
  scrollContainer?: string;
};

// 24. Resizable props
export type UIComponentTest24 = {
  initialSize: Dimension;
  minSize?: Dimension;
  maxSize?: Dimension;
  directions?: ("left" | "right" | "top" | "bottom")[];
  onResize?: (size: Dimension) => void;
  handles?: ReactNode[];
};

// 25. HOC props
export type UIComponentTest25<TOuter, TInner> = {
  component: ReactComponent<TInner>;
  transformProps: (props: TOuter) => TInner;
  forwardRef?: boolean;
  displayName?: string;
};

// Supporting internal types
type ReactNode = string | ElementNode | Array<ElementNode>;
type ReactComponent<T> = (props: T) => ReactNode;
type ElementNode = { type: string; props: Record<string, unknown> };

type IconName =
  | "check"
  | "chevron-right"
  | "user"
  | "search"
  | "settings"
  | (string & {});

type HTMLButtonElement = {
  tagName: "BUTTON";
  disabled: boolean;
  focus: () => void;
};

export type UIComponentTest1 = {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  onClick: ((e: {
    target: {
      tagName: "BUTTON";
      disabled: boolean;
      focus: (() => void)
    };
    preventDefault: (() => void);
    stopPropagation: (() => void)
  }) => void);
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>;
  disabled?: boolean
};

export type UIComponentTest2<T> = {
  name: string;
  value: T;
  onChange: ((value: T) => void);
  validate?: ((value: T) => string | null);
  label?: string;
  required?: boolean
};

export type UIComponentTest3 = {
  isOpen: boolean;
  onClose: (() => void);
  title: string;
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>;
  overlayStyles?: {
    [k: string]: string | number
  };
  portalTarget?: string
};

export type UIComponentTest4<T> = {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: ((item: T, index: number) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  overscan?: number
};

export type UIComponentTest5 = {
  columns: number | {
    sm: number;
    md: number;
    lg: number
  };
  spacing: number;
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>[];
  breakpoints?: Record<string, number>
};

export type UIComponentTest6 = {
  sx?: {
    [k: string]: string | number
  };
  css?: Record<string, {
    [k: string]: string | number
  }>;
  variants?: {
    size: Record<"sm" | "md" | "lg", {
      [k: string]: string | number
    }>;
    variant: Record<"primary" | "secondary", {
      [k: string]: string | number
    }>
  }
};

export type UIComponentTest7<T> = {
  items: T[];
  onReorder: ((newOrder: T[]) => void);
  renderDraggable: ((item: T, index: number) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  dragHandle?: boolean;
  axis?: "x" | "y"
};

export type UIComponentTest8<T> = {
  data: T[];
  children: ((item: T, index: number) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  fallback?: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>
};

export type UIComponentTest9 = {
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }> | [
    Header: ((props: {
      title: string
    }) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>),
    Body: ((props: {
      scrollable?: boolean
    }) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>),
    Footer?: ((props: never) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>)
  ];
  orientation?: "vertical" | "horizontal"
};

export type UIComponentTest10<T> = {
  options: T[];
  selected: T[];
  onChange: ((selected: T[]) => void);
  render: ((props: {
    isOpen: boolean;
    toggle: (() => void);
    selectedItems: T[]
  }) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>)
};

export type UIComponentTest11 = {
  enterFrom: {
    [k: string]: string | number
  };
  enterTo: {
    [k: string]: string | number
  };
  leaveFrom: {
    [k: string]: string | number
  };
  leaveTo: {
    [k: string]: string | number
  };
  duration?: number;
  easing?: string;
  onTransitionEnd?: (() => void)
};

export type UIComponentTest12<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  apply: ((value: T) => {
    [k: string]: string | number
  })
};

export type UIComponentTest13 = {
  slots?: {
    header?: ((props: never) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>);
    body?: ((props: {
      scrollable: boolean
    }) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>);
    footer?: ((props: {
      align: "left" | "right"
    }) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>)
  };
  classNames?: {
    container?: string;
    header?: string;
    body?: string
  }
};

export type UIComponentTest14 = {
  name: "check" | "chevron-right" | "user" | "search" | "settings" | string & {};
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: (() => void)
};

export type UIComponentTest15<T> = {
  columns: Array<{
    header: string;
    accessor: keyof T /** unresolved */;
    render?: ((value: T /** unresolved */[keyof T /** unresolved */], row: T /** unresolved */) => string | {
      type: string;
      props: Record<string, unknown>
    } | Array<{
      type: string;
      props: Record<string, unknown>
    }>)
  }>;
  data: T[];
  pagination?: {
    pageSize: number;
    currentPage: number;
    onChange: ((page: number) => void)
  }
};

export type UIComponentTest16 = {
  direction: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "around";
  wrap?: boolean;
  gap?: number | string
};

export type UIComponentTest17 = {
  colorScheme?: "light" | "dark";
  theme?: {
    colors: Record<string, string>;
    spacing: Record<string, string>;
    breakpoints: Record<string, number>
  };
  useSystemTheme?: boolean
};

export type UIComponentTest18 = {
  fallback: ((error: Error, reset: (() => void)) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  onError?: ((error: Error, info: {
    componentStack: string
  }) => void);
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>
};

export type UIComponentTest19 = {
  target?: string | Element;
  children: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>;
  wrapperStyles?: {
    [k: string]: string | number
  };
  preserveDOM?: boolean
};

export type UIComponentTest20 = {
  content: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>;
  placement?: "top" | "right" | "bottom" | "left";
  offset?: number;
  showArrow?: boolean;
  interactive?: boolean;
  trigger?: "hover" | "click"
};

export type UIComponentTest21 = {
  in: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  timeout?: number | {
    enter: number;
    exit: number
  };
  onEnter?: (() => void);
  onExited?: (() => void)
};

export type UIComponentTest22 = {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  role?: string;
  tabIndex?: number;
  keyboardNavigation?: boolean
};

export type UIComponentTest23<T> = {
  items: T[];
  loadMore: (() => void);
  hasMore: boolean;
  loader: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>;
  threshold?: number;
  scrollContainer?: string
};

export type UIComponentTest24 = {
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
  directions?: ("left" | "right" | "top" | "bottom")[];
  onResize?: ((size: {
    width: number;
    height: number
  }) => void);
  handles?: string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>[]
};

export type UIComponentTest25<TOuter, TInner> = {
  component: ((props: TInner /** unresolved */) => string | {
    type: string;
    props: Record<string, unknown>
  } | Array<{
    type: string;
    props: Record<string, unknown>
  }>);
  transformProps: ((props: TOuter) => TInner);
  forwardRef?: boolean;
  displayName?: string
};

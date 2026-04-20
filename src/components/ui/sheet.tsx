import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type SheetSide = "top" | "right" | "bottom" | "left";

interface SheetContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheetContext() {
  const ctx = React.useContext(SheetContext);
  if (!ctx) {
    throw new Error("Sheet components must be used inside <Sheet>");
  }
  return ctx;
}

function mergeHandlers<T extends React.SyntheticEvent>(
  existing: ((event: T) => void) | undefined,
  incoming: (event: T) => void
) {
  return (event: T) => {
    existing?.(event);
    if (!event.defaultPrevented) incoming(event);
  };
}

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Sheet({ children, open: controlledOpen, defaultOpen = false, onOpenChange }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (value) => {
      const nextOpen = typeof value === "function" ? value(open) : value;
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange, open]
  );

  const value = React.useMemo(() => ({ open, setOpen }), [open, setOpen]);

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

interface SheetTriggerProps {
  asChild?: boolean;
  children: React.ReactElement;
}

function SheetTrigger({ asChild = false, children }: SheetTriggerProps) {
  const { setOpen } = useSheetContext();

  if (!React.isValidElement(children)) {
    return null;
  }

  const childProps = children.props as { onClick?: (event: React.MouseEvent) => void };

  const triggerProps = {
    onClick: mergeHandlers(childProps.onClick, () => setOpen(true)),
  };

  if (asChild) {
    return React.cloneElement(children, triggerProps);
  }

  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  );
}

interface SheetContentProps {
  className?: string;
  children: React.ReactNode;
  side?: SheetSide;
}

function getSideClasses(side: SheetSide) {
  switch (side) {
    case "left":
      return "left-0 top-0 h-full w-3/4 max-w-sm";
    case "top":
      return "left-0 top-0 w-full";
    case "bottom":
      return "left-0 bottom-0 w-full";
    case "right":
    default:
      return "right-0 top-0 h-full w-3/4 max-w-sm";
  }
}

function getMotionVariants(side: SheetSide) {
  switch (side) {
    case "left":
      return { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } };
    case "top":
      return { initial: { y: "-100%" }, animate: { y: 0 }, exit: { y: "-100%" } };
    case "bottom":
      return { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } };
    case "right":
    default:
      return { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } };
  }
}

function SheetContent({ className, children, side = "right" }: SheetContentProps) {
  const { open, setOpen } = useSheetContext();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open, setOpen]);

  if (!mounted) return null;

  const panelMotion = getMotionVariants(side);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className={cn(
              "fixed z-50 border bg-background p-6 shadow-lg",
              getSideClasses(side),
              className
            )}
            initial={panelMotion.initial}
            animate={panelMotion.animate}
            exit={panelMotion.exit}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export { Sheet, SheetTrigger, SheetContent };

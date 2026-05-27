// Side-effect import so Vite emits dist/styles.css.
// Consumers should also explicitly `import "@chipmo-sentry/ui-kit/styles.css"`
// to keep CSS loading order deterministic — `sideEffects` in package.json
// prevents tree-shaking from dropping it.
import "./styles.css";

// === Primitives ===
export { Avatar, AvatarFallback, AvatarImage } from "./components/Avatar";
export { Badge, badgeVariants, type BadgeProps } from "./components/Badge";
export {
  Button,
  buttonVariants,
  type ButtonProps,
} from "./components/Button";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
export {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubTrigger,
  DropdownTrigger,
} from "./components/Dropdown";
export { EmptyState, type EmptyStateProps } from "./components/EmptyState";
export { Input, type InputProps } from "./components/Input";
export { Logo, type LogoProps } from "./components/Logo";
export {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "./components/Modal";
export { Spinner, type SpinnerProps } from "./components/Spinner";
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/Table";
export {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastProps,
} from "./components/Toast";

// === Utilities ===
export { cn } from "./lib/cn";

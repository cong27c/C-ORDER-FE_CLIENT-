export type TToastVariant =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info";

export type TToastItem = {
  id: number;
  title: string;
  description?: string;
  variant: TToastVariant;
  duration?: number;
  dismissible?: boolean;
};

export type TToastOptions = {
  title: string;
  description?: string;
  variant?: TToastVariant;
  duration?: number;
  dismissible?: boolean;
};

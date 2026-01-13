"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { TToastOptions, TToastVariant, TToastItem } from "../types/toast";

// Toast manager instance (singleton pattern)
class ToastManager {
  private static instance: ToastManager;
  private listeners: Set<(toasts: TToastItem[]) => void> = new Set();
  private toasts: TToastItem[] = [];
  private nextId = 0;

  private constructor() {}

  static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  subscribe(listener: (toasts: TToastItem[]) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    const visibleToasts = this.toasts.slice(-3); // Max 3 toasts
    this.listeners.forEach((listener) => listener(visibleToasts));
  }

  addToast(options: TToastOptions): number {
    const id = ++this.nextId;
    const toast: TToastItem = {
      id,
      title: options.title,
      description: options.description,
      variant: options.variant || "default",
      duration: options.duration ?? 4000,
      dismissible: options.dismissible ?? true,
    };

    this.toasts.push(toast);
    this.notify();

    // Auto remove
    setTimeout(() => {
      this.removeToast(id);
    }, toast.duration);

    return id;
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.notify();
  }

  clearAll() {
    this.toasts = [];
    this.notify();
  }
}

// Hook chính
export const useToast = () => {
  const managerRef = useRef(ToastManager.getInstance());

  const toast = useCallback((options: TToastOptions) => {
    return managerRef.current.addToast(options);
  }, []);

  const success = useCallback(
    (title: string, description?: string) => {
      return toast({ title, description, variant: "success" });
    },
    [toast]
  );

  const error = useCallback(
    (title: string, description?: string) => {
      return toast({ title, description, variant: "error" });
    },
    [toast]
  );

  const warning = useCallback(
    (title: string, description?: string) => {
      return toast({ title, description, variant: "warning" });
    },
    [toast]
  );

  const info = useCallback(
    (title: string, description?: string) => {
      return toast({ title, description, variant: "info" });
    },
    [toast]
  );

  const dismiss = useCallback((id: number) => {
    managerRef.current.removeToast(id);
  }, []);

  const clear = useCallback(() => {
    managerRef.current.clearAll();
  }, []);

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    clear,
  };
};

// Component hiển thị toast
export const ToastRoot = () => {
  const [toasts, setToasts] = useState<TToastItem[]>([]);

  useEffect(() => {
    const manager = ToastManager.getInstance();
    return manager.subscribe(setToasts);
  }, []);

  const handleDismiss = (id: number) => {
    ToastManager.getInstance().removeToast(id);
  };

  const getVariantStyles = (variant: TToastVariant) => {
    switch (variant) {
      case "success":
        return "bg-green-50 border-green-200 text-green-900 shadow-green-100";
      case "error":
        return "bg-red-50 border-red-200 text-red-900 shadow-red-100";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-900 shadow-yellow-100";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-900 shadow-blue-100";
      default:
        return "bg-white border-gray-200 text-gray-900 shadow-gray-100";
    }
  };

  const getIcon = (variant: TToastVariant) => {
    switch (variant) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-600" />;
      default:
        return <Info className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map((t) => (
        <ToastItem
          key={t.id}
          toast={t}
          onDismiss={handleDismiss}
          variantStyles={getVariantStyles(t.variant)}
          icon={getIcon(t.variant)}
        />
      ))}
    </div>
  );
};

// Component Toast Item riêng biệt
interface ToastItemProps {
  toast: TToastItem;
  onDismiss: (id: number) => void;
  variantStyles: string;
  icon: React.ReactNode;
}

const ToastItem = ({
  toast,
  onDismiss,
  variantStyles,
  icon,
}: ToastItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Animation in
    const timer = setTimeout(() => setIsVisible(true), 10);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          handleClose();
          return 0;
        }
        return prev - (100 / toast.duration!) * 16.67; // 60fps
      });
    }, 16.67);

    return () => clearInterval(interval);
  }, [isPaused, toast.duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onDismiss(toast.id), 300);
  };

  return (
    <div
      className={`
        relative w-full max-w-sm
        transform transition-all duration-300 ease-in-out
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
        rounded-lg border shadow-lg overflow-hidden
        ${variantStyles}
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-start p-4">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{toast.title}</p>
          {toast.description && (
            <p className="mt-1 text-sm opacity-90">{toast.description}</p>
          )}
        </div>
        {toast.dismissible && (
          <button
            onClick={handleClose}
            className="ml-4 flex-shrink-0 rounded-md opacity-70 hover:opacity-100 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full overflow-hidden">
        <div
          className="h-full transition-all duration-100 bg-current opacity-20"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

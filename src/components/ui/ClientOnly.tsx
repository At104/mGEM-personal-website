import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/** Renders children only after mount — avoids SSR/client mismatches for browser-only UI. */
export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const mounted = useMounted();
  if (!mounted) return fallback;
  return children;
}

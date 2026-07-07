
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/** Renders children only after mount — avoids SSR/client mismatches for browser-only UI. */
export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const mounted = useMounted();
  if (!mounted) return fallback;
  return children;
}

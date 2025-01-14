import { createContext, PropsWithChildren } from "react";

export const ValueContext = createContext({});

export function ValueProvider({ children }: PropsWithChildren) {
  return <ValueContext.Provider value={0}>
    {children}
  </ValueContext.Provider>;
}

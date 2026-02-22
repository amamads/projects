import { type PropsWithChildren } from "react";
import { ThemeProvider } from "./thme-provider/theme.provider";

export default function MainProvider({ children }: PropsWithChildren) {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
  );
}

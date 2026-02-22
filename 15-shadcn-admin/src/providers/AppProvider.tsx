import { type PropsWithChildren } from 'react';
import { AppSidebarProvider } from './Sidebar.provider';

export default function AppProvider({children}:PropsWithChildren) {
  return (
      <AppSidebarProvider>{children}</AppSidebarProvider>

  )
}

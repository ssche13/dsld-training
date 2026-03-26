"use client";

import { EditModeProvider } from "./EditModeContext";
import EditToggle from "./EditToggle";
import AdminBar from "./AdminBar";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <EditModeProvider>
      {children}
      <AdminBar />
      <EditToggle />
    </EditModeProvider>
  );
}

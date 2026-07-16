import { Providers } from "@/app/providers";
import { MinimaDashboard } from "@/components/layouts/minimal.layout";
import { Toast } from "@heroui/react";
export default function DashboardLayout({
  children,
}) {
  return (
    <Providers>
      <Toast.Provider />
      <MinimaDashboard>{children}</MinimaDashboard>
    </Providers>
  );
}

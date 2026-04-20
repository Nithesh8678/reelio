import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";
export const metadata = {
    title: "Reelio Agency",
    description: "Data-driven creative agency website",
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>);
}

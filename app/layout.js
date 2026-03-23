import { Syne } from "next/font/google";
import "./globals.css";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
// Custom fonts
const syne = Syne({
  subsets: ["latin"],  
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Putita Portfolio Website",
  description: "Student in UX/UI Design Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

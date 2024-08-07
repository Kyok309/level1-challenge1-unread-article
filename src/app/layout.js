import "./globals.css";
export const metadata = {
  title: "Unread",
  description: "Unread Articles",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sfProDisplay">{children}</body>
    </html>
  );
}

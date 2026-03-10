export const metadata = {
  title: "PW E-Commerce",
  description: "Proyecto base",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

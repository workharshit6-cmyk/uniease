export const metadata = {
  title: "Uniease",
  description: "Uniease Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

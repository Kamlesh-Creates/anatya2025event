import AdminInitializer from '@/components/AdminInitializer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminInitializer />
      {children}
    </>
  );
}

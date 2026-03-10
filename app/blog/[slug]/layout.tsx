export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-40 mb-80 grid w-full max-w-3xl grid-cols-1 px-6">
      {children}
    </div>
  );
}

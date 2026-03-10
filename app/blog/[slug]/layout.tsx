export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-40 mb-80 grid w-full max-w-7xl grid-cols-[1fr] px-6 xl:grid-cols-[200px_minmax(0,768px)_1fr] xl:gap-8 xl:px-8 justify-items-center">
      {children}
    </div>
  );
}

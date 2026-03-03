export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full  max-w-3xl mt-40">
      <div className="prose max-w-none prose-headings:font-normal prose-headings:text-gray-12 prose-headings:text-base prose-p:text-gray-11 prose-strong:text-gray-12 prose-strong:font-semibold prose-ul:text-gray-11 prose-ol:text-gray-11 prose-hr:bg-gray-6 prose-hr:border-0 prose-hr:mt-10 prose-hr:h-px prose-blockquote:border-l-2 prose-blockquote:text-gray-1 prose-blockquote:border-gray-6 prose-img:rounded-2xl prose-pre:bg-gray-2 prose-pre:text-gray-11  marker:text-gray-9">
        {children}
      </div>
    </div>
  );
}

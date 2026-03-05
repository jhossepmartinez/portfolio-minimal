export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl mt-40 mb-80">
      <div
        className={`
          prose max-w-none 
          prose-base md:prose-lg
          prose-headings:font-semibold prose-headings:text-gray-12 prose-headings:text-base md:prose-headings:text-lg
          prose-p:text-gray-11 prose-p:font-semibold
          prose-strong:text-gray-12 prose-strong:font-semibold 
          prose-ul:text-gray-11 prose-ul:font-semibold prose-ol:text-gray-11 
          prose-hr:bg-gray-6 prose-hr:border-0 prose-hr:mt-10 prose-hr:h-px 
          prose-blockquote:border-l-2 prose-blockquote:text-gray-1 prose-blockquote:border-gray-6 
          prose-img:rounded-2xl 
          prose-a:text-gray-12 marker:text-gray-9

          /* 1. CODE BLOCKS (<pre> and <pre><code>) */
          prose-pre:bg-gray-2 prose-pre:text-gray-11
          [&_pre_code]:bg-transparent

          /* 2. INLINE CODE (<code> without <pre>) */
          [&_:not(pre)>code]:bg-gray-3 
          [&_:not(pre)>code]:text-gray-12 
          [&_:not(pre)>code]:px-1.5 
          [&_:not(pre)>code]:py-0.5 
          [&_:not(pre)>code]:rounded-md 
          [&_:not(pre)>code]:font-mono

          /* 3. OPTIONAL: Remove default Tailwind backticks from inline code */
          prose-code:before:content-none 
          prose-code:after:content-none
        `}
      >
        {children}
      </div>
    </div>
  );
}

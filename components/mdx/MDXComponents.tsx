import Link from 'next/link';

/**
 * MDX Custom Components
 * Styling for markdown elements when rendered via MDX
 */
export const MDXComponents = {
  h1: ({ ...props }: any) => (
    <h1
      className="mb-6 mt-8 text-4xl font-bold text-gray-900"
      {...props}
    />
  ),
  h2: ({ ...props }: any) => (
    <h2
      className="mb-4 mt-6 text-3xl font-bold text-gray-900"
      {...props}
    />
  ),
  h3: ({ ...props }: any) => (
    <h3
      className="mb-3 mt-5 text-2xl font-bold text-gray-800"
      {...props}
    />
  ),
  h4: ({ ...props }: any) => (
    <h4
      className="mb-2 mt-4 text-xl font-semibold text-gray-800"
      {...props}
    />
  ),
  p: ({ ...props }: any) => (
    <p className="mb-4 leading-relaxed text-gray-700" {...props} />
  ),
  ul: ({ ...props }: any) => (
    <ul
      className="mb-4 list-inside list-disc space-y-2 text-gray-700"
      {...props}
    />
  ),
  ol: ({ ...props }: any) => (
    <ol
      className="mb-4 list-inside list-decimal space-y-2 text-gray-700"
      {...props}
    />
  ),
  li: ({ ...props }: any) => (
    <li className="text-gray-700" {...props} />
  ),
  a: ({ href, ...props }: any) => (
    <Link
      href={href}
      className="text-[#1A63AB] underline hover:text-[#093C7D]"
      {...props}
    />
  ),
  img: (props: any) => (
    <img
      className="my-6 h-auto w-full rounded-lg"
      {...props}
      alt={props.alt || 'Article image'}
    />
  ),
  blockquote: ({ ...props }: any) => (
    <blockquote
      className="my-6 border-l-4 border-[#1A63AB] bg-[#F0F9FF] py-3 pl-6 italic text-gray-700"
      {...props}
    />
  ),
  code: ({ ...props }: any) => (
    <code
      className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-900"
      {...props}
    />
  ),
  pre: ({ ...props }: any) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100"
      {...props}
    />
  ),
  table: ({ ...props }: any) => (
    <table
      className="mb-4 w-full border-collapse border border-gray-300"
      {...props}
    />
  ),
  th: ({ ...props }: any) => (
    <th
      className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: ({ ...props }: any) => (
    <td className="border border-gray-300 px-4 py-2" {...props} />
  ),
  hr: ({ ...props }: any) => (
    <hr className="my-8 border-t border-gray-300" {...props} />
  ),
};

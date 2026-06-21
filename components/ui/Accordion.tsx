'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
      <button
        type="button"
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-900">{title}</span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-blue-50 text-[#1A63AB]' : ''
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

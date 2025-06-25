import { ReactNode } from "react";
import Image from "next/image";

interface CardsGridProps<T extends { id: string }> {
  items: T[];
  children: (item: T) => ReactNode;
}

export function CardsGrid<T extends { id: string }>({
  items,
  children,
}: CardsGridProps<T>) {
  if (items.length === 0) {
    return (
      <>
        <div className="w-full text-center text-muted py-8">
          No cards found.
        </div>
      </>
    );
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((item) => children(item))}
    </div>
  );
}

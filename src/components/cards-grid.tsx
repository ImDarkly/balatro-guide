import { ReactNode } from "react";

interface CardsGridProps<T extends { id: string }> {
  items: T[];
  children: (item: T) => ReactNode;
}

export function CardsGrid<T extends { id: string }>({
  items,
  children,
}: CardsGridProps<T>) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {items.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </div>
  );
}

export default CardsGrid;

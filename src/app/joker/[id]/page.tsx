import { JokerDetails } from "@/src/components/joker/joker-details";

export default function JokerPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center p-4">
      <JokerDetails id={params.id} />
    </div>
  );
}

import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="h-[calc(100vh-116px)] flex flex-col justify-center items-center gap-4">
      <h1>
        Even <span className="text-destructive">Chicot</span> can’t save this
        lost page.
      </h1>
      <Link href="/">
        <Button>Go Back to Deck</Button>
      </Link>
    </div>
  );
}

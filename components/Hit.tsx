import { Hit as AlgoliaHit } from 'instantsearch.js';
import { Highlight } from "react-instantsearch";

type HitProps = {
  hit: AlgoliaHit<{
    description: string;
    name: string;
  }>;
};

export function Hit({ hit }: HitProps) {
  return (
    <article className="border p-4 mb-4">
      <div>
        <h1>
          <Highlight attribute="name" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="description" hit={hit} />
        </p>
      </div>
    </article>
  );
}
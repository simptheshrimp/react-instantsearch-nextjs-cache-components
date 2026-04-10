"use client"
import { client } from "@/lib/client";
import { useActivityKey } from "@/hooks/useActivityKey";
import { Hits, SearchBox } from "react-instantsearch";
import { InstantSearchNext, createInstantSearchNextInstance } from "react-instantsearch-nextjs";

import { Hit } from "./Hit";

const instance = createInstantSearchNextInstance()

export default function SearchActivityKey() {
  const activityKey = useActivityKey();

  return (
    <InstantSearchNext
      key={activityKey}
      searchClient={client}
      instance={instance}
      indexName="instant_search"
      routing
      insights={false}
    >
      <SearchBox
        classNames={{
          input: 'border-2 border-gray-300 rounded-l-md p-2 w-full',
          root: "my-6",
          form: "flex items-center",
          submit: "bg-blue-500 text-white px-4 py-2 rounded-r-md h-[inherit] self-stretch",
        }}
        placeholder="Search..."
      />
      <Hits hitComponent={Hit} />
    </InstantSearchNext>
  );
}
import SearchInstance from "@/components/SearchInstance";

export default function SearchInstancePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Search Instance Page</h1>
      <p className="text-lg mb-2">On this page, instantsearch uses a single instance created with <strong>`createInstantSearchNextInstance`</strong> and passed to the <strong>InstantSearchNext</strong> component.</p>
      <p className="text-lg">The main difference with how /search works is that the ui remains on navigating back, however it is unresponsive making it seem like the search is broken. Like described on /search, the requests are made and we get a response, but since the <strong>InstantSearchNext</strong> components are not properly remounted they don't handle the response.</p>
      <SearchInstance />
    </>
  );
}
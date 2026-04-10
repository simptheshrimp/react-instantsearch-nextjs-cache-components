import Search from "@/components/Search";

export default function SearchPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <p className="text-lg mb-2">On this page <strong>InstantSearchNext</strong> is rendered as barebone as possible, and here you get an odd behaviour since sometimes when navigating away and back, all <strong>InstantSearch</strong> components are gone, nothing is displayed. And sometimes they are still shown, yet unresponsive. Typing anything in the search box yields requests to Algolia however since the components are not properly remounted they don't handle the response.</p>
      <Search />
    </>
  );
}
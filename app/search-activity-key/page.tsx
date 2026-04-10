import SearchActivityKey from "@/components/SearchActivityKey";

export default function SearchActivityKeyPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Search Activity Key Page</h1>
      <p className="text-lg mb-2">On this page, <strong>InstantSearchNext</strong> is rendered with a <strong>key</strong> prop that is updated when the component is hidden and shown again. This is a way to force a full remount of the component. It is rather hacky and not a proper solution but it makes <strong>InstantSearchNext</strong> somewhat work with Cache Components, but there are some fallbacks.</p>
      <p className="text-lg mb-2">Like e.g. searching for anything, e.g. Google, and then navigating away and then returning through the back button, the url is up-to date with the proper search params etc. However, since it is a new instance, it doesn't perform the request automatically, you need to figure out how to manually initialize the instance with those params.</p>
      <p className="text-lg">The proper fix will be submited in a PR to the <strong>react-instantsearch-nextjs</strong> package.</p>
      <SearchActivityKey />
    </>
  );
}
import {
  createSerializer,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

const searchParamsSchema = {
  search: parseAsString,
  count: parseAsInteger.withDefault(10),
  sortBy: parseAsStringLiteral(["asc", "desc"] as const),
};
const serialize = createSerializer(searchParamsSchema);

export default function Page() {
  const searchParams = new URLSearchParams("search=q&others=mistake");
  return (
    <div className="px-40 py-20">
      {serialize({ search: "foo", count: 10, sortBy: "asc" })}
    </div>
  );
}

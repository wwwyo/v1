"use client";

import { Input } from "@v1/ui/input";
import { Label } from "@v1/ui/label";
import { parseAsString, useQueryState } from "nuqs";

export function Client() {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: false }),
  );

  return (
    <div className="py-5 w-80">
      <Label>Search</Label>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

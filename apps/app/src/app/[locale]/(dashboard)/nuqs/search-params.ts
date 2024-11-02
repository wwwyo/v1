import { parseAsString } from "nuqs";
import { createSearchParamsCache } from "nuqs/parsers";

export const searchParamsCache = createSearchParamsCache({
  search: parseAsString.withDefault(""),
});

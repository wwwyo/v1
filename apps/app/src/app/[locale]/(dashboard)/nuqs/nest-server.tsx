import { searchParamsCache } from "./search-params";

export const NestServer = () => {
  // 末端の server component でも取得できる
  const searchParams = searchParamsCache.all();
  return <div>{searchParams.search}</div>;
};

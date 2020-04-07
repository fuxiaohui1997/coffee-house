import myrequest from '@/utils/myrequest'

export function fetchList(query) {
  return myrequest({
    url: "/goods/applist",
    method: "get",
    params: query,
  });
}

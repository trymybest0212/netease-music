import request from "./index";

export function getTopList() {
  return request({
    url: "/toplist"
  })
}

export function getRankingDetailInfo(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
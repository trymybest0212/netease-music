import request from "./index";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommend() {
  return request({
    url: "/personalized?limit=8",
  });
}

export function getNewAlbum() {
  return request({
    url: "/album/new",
    params: {
      limit: 10,
      offset: 0,
    },
  });
}

export function getRecommendRank(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit,
    },
  });
}

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

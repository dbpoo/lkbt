import { get } from "axios";

export function loadNews() {
  return get('//api.lkbt.pro/wp-json/wp/v2/posts?categories=4&page=1');
}
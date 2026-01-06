import  { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotAlbumsAction } from "@/store/album-store/actionCreator";

import AlbumCover from "@/pages/components/album-cover";
import AlbumHeader from "@/pages/components/theme-header-recommend";
import { HotAlbumWrapper } from "./style";

export default memo(function HYHotAlbum() {
  const { hotAlbums } = useSelector(
    (state) => ({
      hotAlbums: state.getIn(["album", "hotAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <AlbumHeader title="热门新碟" />
      <div className="album-list">
        {hotAlbums.slice(0, 10).map((item, index) => {
          return (
            <AlbumCover
              size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item}
            />
          );
        })}
      </div>
    </HotAlbumWrapper>
  );
});

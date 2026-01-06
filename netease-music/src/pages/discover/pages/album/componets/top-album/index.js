import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopAlbumsAction } from "@/store/album-store/actionCreator";

import AlbumHeader from "@/pages/components/theme-header-recommend";
import AlbumCover from "@/pages/components/album-cover";
import CommonPagination from "@/pages/components/pagination";
import { TopAlbumWrapper } from "./style";

export default memo(function HYTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1);

  const { topAlbums, total } = useSelector(
    (state) => ({
      topAlbums: state.getIn(["album", "topAlbums"]),
      total: state.getIn(["album", "topTotal"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <AlbumHeader title="全部新碟" />
      <div className="album-list">
        {topAlbums.map((item, index) => {
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
      <CommonPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AlbumWrapper } from "./style";
import { getNewAlbumActions } from "@/store/recommend-store/actionCreator";

import ThemeHeaderRecommend from "@/pages/components/theme-header-recommend";
import AlbumCover from "@/pages/components/album-cover";
import { Carousel } from "antd";

export default function NewAlbum() {
  const CarouseArr = [0, 1];
  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.getIn(["recommend", "newAlbum"]),
  }));
  const dispatch = useDispatch();
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumActions());
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <ThemeHeaderRecommend title="新碟上架"></ThemeHeaderRecommend>
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {CarouseArr.map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumCover key={item.id} info={item} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
}

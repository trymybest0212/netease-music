import { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerActions } from "@/store/recommend-store/actionCreator.js";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { Carousel } from "antd";

export default function TopBanner() {
  // 不使用hooks
  // function Recommend(props) {
  //   const { getBanners, topBanners } = props;
  //   useEffect(() => {
  //     getBanners();
  //   }, [getBanners]);
  //   console.log(topBanners, "topBanners");

  //   return <div>Recommend</div>;
  // }

  // const mapStateToProps = (state) => ({
  //   topBanners: state.recommend.topBanners,
  // });
  // const mapDispatchToProps = (dispatch) => ({
  //   getBanners: () => {
  //     dispatch(getTopBannerActions());
  //   },
  // });
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      //   topBanners: state.get('recommend').get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerActions());
  }, [dispatch]);
  const handleChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  const bgImage =
    topBanners?.[currentIndex]?.imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={carouselRef}
            beforeChange={handleChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl}></img>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => carouselRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => carouselRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

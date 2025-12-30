import { memo, useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  changeCurrentIndex,
  changeRankingDetailAction,
} from "@/store/ranking-store/actionCreator";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

const TopRanking = memo(() => {
  const dispatch = useDispatch();
  const { topList, currentIndex } = useSelector(
    (state) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual
  );

  const handleItemClick = (index) => {
    if (index === currentIndex) return;
    dispatch(changeCurrentIndex(index));
  };
  useEffect(() => {
    const id = topList?.[currentIndex]?.id;
    id && dispatch(changeRankingDetailAction(id));
  }, [dispatch, currentIndex,topList]);
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});

export default TopRanking;

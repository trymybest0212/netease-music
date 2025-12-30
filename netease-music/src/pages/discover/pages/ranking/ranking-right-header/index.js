import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format-utils";
import { RankingHeaderWrapper } from "./style";

import SongOperationBar from "@/pages/components/song-operation-bar";

const RankingRightHeader = memo(() => {
  const { rankingDetail } = useSelector(
    (state) => ({
      rankingDetail: state.getIn(["ranking", "rankingDetail"]),
    }),
    shallowEqual
  );
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={rankingDetail.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{rankingDetail.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(rankingDetail.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <SongOperationBar
          favorTitle={`(${rankingDetail.subscribedCount})`}
          shareTitle={`(${rankingDetail.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${rankingDetail.commentCount})`}
        ></SongOperationBar>
      </div>
    </RankingHeaderWrapper>
  );
});

export default RankingRightHeader;

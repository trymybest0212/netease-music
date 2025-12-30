import { useSelector, shallowEqual } from "react-redux";
import { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function SongHeader() {
  // redux
  const { rankingDetail } = useSelector(
    (state) => ({
      rankingDetail: state.getIn(["ranking", "rankingDetail"]),
    }),
    shallowEqual
  );

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{rankingDetail.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{rankingDetail.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  );
});

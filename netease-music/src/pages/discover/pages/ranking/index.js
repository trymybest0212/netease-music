import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { RankingWrapper, RankingLeft, RankingRight } from "./style";
import { changeTopListAction } from "@/store/ranking-store/actionCreator";

import TopRanking from "./top-ranking";
import RankingRightHeader from "./ranking-right-header";
import RankList from "./rank-list";

export default memo(function Ranking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTopListAction());
  }, [dispatch]);
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingRightHeader />
        <RankList></RankList>
      </RankingRight>
    </RankingWrapper>
  );
});

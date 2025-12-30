import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { RankingWrapper, RankingLeft } from "./style";
import { changeTopListAction } from "@/store/ranking-store/actionCreator";

import TopRanking from "./top-ranking";

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
    </RankingWrapper>
  );
});

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";

import {
  UP_RANK,
  ORIGIN_RANK,
  NEW_RANK,
} from "@/store/recommend-store/constant";
import { RankingWrapper } from "./style";
import { geRecommendRankActions } from "@/store/recommend-store/actionCreator";

import ThemeHeaderRecommend from "@/pages/components/theme-header-recommend";
import RankList from "@/pages/components/rank-list";

export default function RecommendRanking() {
  const { upRank, newRank, originRank } = useSelector(
    (state) => ({
      newRank: state.getIn(["recommend", "newRank"]),
      upRank: state.getIn(["recommend", "upRank"]),
      originRank: state.getIn(["recommend", "originRank"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(geRecommendRankActions(NEW_RANK));
    dispatch(geRecommendRankActions(UP_RANK));
    dispatch(geRecommendRankActions(ORIGIN_RANK));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
      <div className="tops">
        <RankList info={upRank} />
        <RankList info={newRank} />
        <RankList info={originRank} />
      </div>
    </RankingWrapper>
  );
}

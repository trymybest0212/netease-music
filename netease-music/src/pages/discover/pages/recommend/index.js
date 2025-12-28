import { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./components/top-banner";

// 使用hooks
function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content>
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}
export default memo(Recommend);

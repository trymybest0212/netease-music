import { memo } from "react";
import { connect } from "react-redux";

import { getTopBannerActions } from "@/store/recommend-store/actionCreator.js";
import { useEffect } from "react";

function Recommend(props) {
  const { getBanners } = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return <div>Recommend</div>;
}

const mapStateToProps = (state) => ({
  topBanners: state,
});
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerActions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

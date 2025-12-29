import  { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from "./style";

const RecommendRightHead = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})


RecommendRightHead.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default RecommendRightHead;

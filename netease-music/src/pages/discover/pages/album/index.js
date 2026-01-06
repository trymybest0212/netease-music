import  { memo } from 'react';

import TopAlbum from './componets/top-album';
import HotAlbum from './componets/hot-album';
import {
  AblumWrapper
} from './style';

export default memo(function HYAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <HotAlbum></HotAlbum>
      <TopAlbum/>
    </AblumWrapper>
  )
})

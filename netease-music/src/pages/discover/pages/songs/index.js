import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "@/store/song-store/actionCreator";

import SongsHeader from "./components/header";
import SongsList from './components/song-list';
import {
  SongsWrapper
} from "./style"

export default memo(function HYSongs() {
  // redux
  const dispatch = useDispatch();
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader/>
      <SongsList/>
    </SongsWrapper>
  )
})

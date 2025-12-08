import React from "react";
import Discover from "../pages/discover";
import Friend from "../pages/friend";
import MyMusic from "../pages/my-music";
import Recommend from "../pages/discover/pages/recommend";
import Song from "../pages/discover/pages/songs";
import Ranking from "../pages/discover/pages/ranking";
import DjRadio from "../pages/discover/pages/djRadio";
import Artist from "../pages/discover/pages/artist";
import Album from "../pages/discover/pages/album";

import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover" />;
    },
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/songs",
        component: Song,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/dj-radio",
        component: DjRadio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
       {
        path: "/discover/album",
        component: Album,
      },
    ],
  },
  {
    path: "/my",
    component: MyMusic,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;

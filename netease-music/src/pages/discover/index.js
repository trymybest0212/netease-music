import {renderRoutes} from 'react-router-config'

import { DiscoverWrapper, TopMenu } from "./style";
import { discoverMenu } from "./const";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Discover(props) {
  const {route} = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
}

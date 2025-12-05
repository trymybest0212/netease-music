import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/my">我的音乐</NavLink>
      <NavLink to="/friend">关注</NavLink>
    </div>
  );
}

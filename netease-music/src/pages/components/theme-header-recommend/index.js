import { HeaderWrapper } from "./style";
export default function ThemeHeaderRecommend(props) {
  const { title, keyword = [] } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keyword.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="#">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
}

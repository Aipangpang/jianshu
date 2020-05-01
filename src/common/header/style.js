import styled from 'styled-components'
import logoPic from "./../../statics/logo.png";

export const HeaderWrapper = styled.div` /*div标签*/
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({  //添加属性
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0px auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0px 15px;
  font-size: 17px;
  color: #333333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    color: #969696;
    &.focused {
      background: #777777;
      color: #ffffff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  margin: 9px 0px 0px 20px;
  padding: 0px 30px 0px 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eeeeee;
  font-size: 14px;
  color: #666666;
  &::placeholder {
    color: #999999;
  }
  &.focused {
    width: 240px;
  }
  /* 前缀名必须要和CSSTransition组件的classNames的值一致 */
  &.slide-enter {
    /* 入场动画执行第一刻 */
    transition: all 400ms ease-out;
  }
  &.slide-enter-active {
    /* 入场动画时执行第二时刻到入场动画执行完 */
    width: 240px;
  }
  &.slide-exit {
    /* 出场动画执行第一刻 */
    transition: all 400ms ease-out;
  }
  &.slide-exit-active {
    /* 出场动画时执行第二时刻到入场动画执行完 */
    width: 160px
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0px 0px;
  padding: 0px 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    background: #ec6149;
    color: #ffffff;
  }
`;
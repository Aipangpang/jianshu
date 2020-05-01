import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style.js'
import {CSSTransition} from 'react-transition-group'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        let { focused } = this.state;
        let { handleInputFocus , handleInputBlur } = this;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active' >首页</NavItem>
                    <NavItem className='left' >下载App</NavItem>
                    <NavItem className='right' >登录</NavItem>
                    <NavItem className='right' >Aa</NavItem>
                        {/* <span className='iconfont'>&#xe636;</span> */}
                    <SearchWrapper>
                        <CSSTransition timeout={400} in={focused} classNames="slide">
                            <NavSearch 
                                className = { focused?"focused":"" }
                                onFocus = { handleInputFocus }
                                onBlur = { handleInputBlur }
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span 
                            className = { focused?"focused iconfont":"iconfont" }
                        >
                            &#xe60c;
                        </span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='reg'>
                        <span className="iconfont">&#xe6e5;</span>
                        写文章
                    </Button>
                    <Button className='warting'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState( { focused: true } )
    }
    handleInputBlur() {
        this.setState( { focused: false } )
    }

}

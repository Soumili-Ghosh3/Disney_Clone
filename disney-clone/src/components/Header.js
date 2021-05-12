import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="Not available"/>
                    <span> HOME </span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" alt="Not available"/>
                    <span> SEARCH </span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" alt="Not available"/>
                    <span> WATCHLIST </span>
                </a>

                <a>
                    <img src="/images/original-icon.svg" alt="Not available"/>
                    <span> ORIGINAL </span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg" alt="Not available"/>
                    <span> MOVIES </span>
                </a>

                <a>
                    <img src="/images/series-icon.svg" alt="Not available"/>
                    <span> SERIES </span>
                </a>
            </NavMenu>
            <UserImg src="https://previews.123rf.com/images/pandavector/pandavector1607/pandavector160700056/60025039-business-woman-icon-flat-single-avatar-people-icon-from-the-big-avatar-collection-stock-vector.jpg"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
   height: 70px;
   background-color: #090b13;
   display: flex;
   align-items: center;
   overflow-x: hidden;
   padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;

`
import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/Captain-America-the-first-avengers-howling-commandos.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://razor.games/wp-content/uploads/2021/01/msedge_UWI4UC3Rzw.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span> PLAY </span>
                 </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span> TRAILER </span>
                </TrailerButton>

                <AddButton>
                    <span> + </span>
                </AddButton>

                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    

    img{
        width: 100%;
        height: 120%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vh;
    min-height: 170px;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 24px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    width: 45px;
    height: 45px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
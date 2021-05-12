import React from 'react'
import styled from 'styled-components'
 
function Movies() {
    return (
        <Container>
            <h2>
                Recommended For You
            </h2>
            <Content>
                <Wrap>
                    <img src="https://i.pinimg.com/originals/57/bf/4d/57bf4d350e06bf735bd386c426dd0681.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://resizing.flixster.com/U_be0EesHZtFjTipJYAEIaVeDXo=/206x305/v2/https://flxt.tmsimg.com/assets/p9895254_p_v10_ak.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRza5Vkg-AbVSLBWopuO0mXapjFrVhQ77UR_g&usqp=CAU" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://i.pinimg.com/originals/57/bf/4d/57bf4d350e06bf735bd386c426dd0681.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://i.pinimg.com/originals/57/bf/4d/57bf4d350e06bf735bd386c426dd0681.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://i.pinimg.com/originals/57/bf/4d/57bf4d350e06bf735bd386c426dd0681.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://i.pinimg.com/originals/57/bf/4d/57bf4d350e06bf735bd386c426dd0681.jpg" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    margin-top: 30px;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: rgba(0 0 0 / 80%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
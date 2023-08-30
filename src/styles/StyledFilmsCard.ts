import styled from "styled-components"

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  width: 280px;

  &:hover {
    transition: 0.3s;
    background-color: #D2D0DC;
  }
`

export const Title = styled.h1`
  font-size: 1.2rem;
  margin: 8px 0;
`

export const PosterImage = styled.img`
  max-width: 100%;
  height: auto;
  display: flex;
  margin-top: 8px;
`
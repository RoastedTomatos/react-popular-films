// import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: white;
  padding: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  width: 30%;
`

export const FavoritesLink = styled.a`
  text-decoration: none;
  width: 10%;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`

export const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

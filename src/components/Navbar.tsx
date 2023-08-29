import {
  NavFooter,
  NavContainer,
  Title,
  SearchBar,
  FavoritesLink,
} from '../styles/StyledNavbar'

export const Navbar = () => {
  return (
    <NavContainer>
      <Title>Popular Now</Title>
      <NavFooter>
        <SearchBar type='text' placeholder='Search films...' />
        <FavoritesLink>Favorites</FavoritesLink>
      </NavFooter>
    </NavContainer>
  )
}

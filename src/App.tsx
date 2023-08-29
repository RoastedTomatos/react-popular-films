import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Wrapper } from "./styles/StyledLayout";

export const App = () => {
  return (
    <Wrapper>  
      <Navbar />
      <Footer />
    </Wrapper>
  );
}
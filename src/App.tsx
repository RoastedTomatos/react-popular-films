import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer';
import { Wrapper } from './styles/StyledLayout';
import './index.css';
import { FilmsHolder } from './components/FilmsHolder';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Navbar />
        <FilmsHolder />
        <Footer />
      </Wrapper>
    </Provider>
  );
};

import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>welcome to proshop</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Card from './components/Card/card';
import cardImg from '/card_img.png';

function App() {
  return (
    <Card
      title="Vite + React"
      description="Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.."
      imageUrl={cardImg}
    />
  );
}

export default App;

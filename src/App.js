import './App.css';
import Navbar from '../src/components/navbar';
import MiddleSection from './components/middleSection';
import TrendAnalysis from './components/trendAnalysis';

function App() {
  return (
    <div className='box'>
      <Navbar />
      <br/>
      <MiddleSection />
      <br/>
      <br/>
      <TrendAnalysis />
    </div>
  );
}

export default App;

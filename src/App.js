import Row from './components/Row';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumantaries}/>
    </div> 
  );
}

export default App;

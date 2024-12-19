import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/navbar';
import ContentBox from './components/content-box/contentBox';
import { DocumentProvider } from './context/documentContext';

function App() {

  return (
    <DocumentProvider>
      <div className="App vh-100 scrollable">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <NavBar />
            <ContentBox />
          </div>
        </div>
      </div>
    </DocumentProvider>
  );
}

export default App;

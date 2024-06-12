import "./App.css";
import Header from "./components/Header";
import SendMessageForm from "./components/SendMessageForm";
import Trending from "./components/Trending";
import TwittContainer from "./components/TwittContainer";
import backgroundImage from "./images/_98e2204d-bc5f-459a-968f-f051a4ebbc07.jpeg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Trending />
      <SendMessageForm />
      <TwittContainer />
    </div>
  );
}

export default App;

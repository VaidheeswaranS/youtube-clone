import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/appStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />

        {/**
         * Header
         * Body
         *  SideBar
         *    MenuItems
         *  MainContainer
         *    Buttons List(filter buttons)
         *    VideContainer
         *      VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;

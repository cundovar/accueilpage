import "./index.css";
import Header from "./component/0header/Header";
import Main from "./component/1main/Main";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <div className="principal ">
        <Header />

        <Main />
      </div>
      <div className=" bas">
        <Footer />
      </div>
    </>
  );
}

export default App;

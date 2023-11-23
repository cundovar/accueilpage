import './index.css'
import Header from './component/0header/Header';
import Main from './component/1main/Main';
import Footer from './component/footer/Footer';

function App() {
  return (
<>
      <div className='g '>
      <Header/>
      {/* <div className=" col-6  imageLogo position-absolute">
            <div className=" ff position-relative">
              <img
                className="position-absolute img"
                src="/images/image-mockups.png"
              />
              <img src="/images/bg-intro-desktop.svg" />
            </div>
          </div> */}
      <Main/>

      </div>
      <div className=' h'>
      <Footer/>

   


    </div>
</>
  );
}

export default App;

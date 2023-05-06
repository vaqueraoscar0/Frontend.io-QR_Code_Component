import './App.css';
import barCode from './images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className={'qr'}>
          <div className={'qr_body'}>
              <div className={'qr_code'}><img src={barCode}/></div>
              <div className={'qr_body_text'}>
                  <div className={'qr_title'}><h1>Improve your front-end skills by building projects</h1></div>
                  <div className={'qr_p'}>
                      <p>Scan the QR code to visit Frontend
                      Mentor and take your coding skills to the next level</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;

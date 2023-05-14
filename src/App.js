import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [img,setImg] = useState();


  const url = "https://meme-api.com/gimme";
    const getMeme =() => {
    axios.get(url).then((response) =>{
      console.log(response.data.url);
      let data = response.data;
      setImg(data.url);
    });
  }

  // function handlePrevMeme() {
  //    history.go(-1);
  // }
  useEffect(() => getMeme(), [])


  return (
    <>
      <section className='main'>
        <header>
          <div className='head'>
            <h1 className='heading'>Memes Generator</h1>
            <button className='heading'>About</button>
          </div>
        </header>
        <hr></hr>
        <section className='container'>
          <h3>Memes</h3>
          <img src={img} alt=""/>
        </section>
        <div className="btn-container">
        <button className='next'  >Share</button>
          <button className='Next' onClick={getMeme}>Next</button>
          </div>
        <hr></hr>
        <footer>
          <p>&#169; Memes Generator App. All rigths are reserved by Md Zulqarnain</p>
        </footer>
      </section>
    </>
  );
}

export default App;

import React, { useRef } from 'react'
import './App.css'
import AI from './components/assets/AI.jpeg'
import AI_Act from './components/assets/AI_Act.jpeg'
import AI_Chip from './components/assets/AI_Chip.jpeg'
import AI_Optimal from './components/assets/AI_Optimal.jpg'
import AI_Research from './components/assets/AI_Research.jpeg'
import AI_Teach from './components/assets/AI_Teach.jpeg'
import AI_Thinks from './components/assets/AI_Thinks.jpeg'
import Quadrant from './components/assets/Quadrant_AI.png'
const App = () => {

  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);
  const content6 = useRef(null);
  const content7 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  const handleButtonClick = () => {
    window.open('https://www.quadranttechnologies.com/', '_blank');
  };
  return (
    <div className='main'>
      <div>
        <header>

          <nav className='nav'>
            <div>
              <img className='Quadrant_AI_logo' src={Quadrant} alt='' onClick={handleButtonClick} />
            </div>

            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
          </nav>
        </header>
      </div>
      <div className='Video Container'>Video Container</div>
      <div>

        <div>

          <div className='sidenav'>
            <a onClick={() => scrollToSection(content1)} className='link'>AI</a>
            <a onClick={() => scrollToSection(content3)} className='link'>AI_Chip</a>
            <a onClick={() => scrollToSection(content4)} className='link'>AI_Optimal</a>
            <a onClick={() => scrollToSection(content5)} className='link'>AI_Research</a>
            <a onClick={() => scrollToSection(content6)} className='link'>AI_Teach</a>
            <a onClick={() => scrollToSection(content7)} className='link'>AI_Thinks</a>

          </div>


          <div ref={content1} className='content_Image'>
            <h3>
              <img src={AI} alt='' />
            </h3>
          </div>

          <div ref={content2} className='content_Image'>
            <h3>
              <img src={AI_Act} alt='' />
            </h3>
          </div>
          <div ref={content3} className='content_Image'>
            <h3>
              <img src={AI_Chip} alt='' />
            </h3>
          </div>
          <div ref={content4} className='content_Image'>
            <h3>
              <img src={AI_Optimal} alt='' />
            </h3>
          </div>

          <div ref={content5} className='content_Image'>
            <h3>
              <img src={AI_Research} alt='' />
            </h3>
          </div>
          <div ref={content6} className='content_Image'>
            <h3>
              <img src={AI_Teach} alt='' />
            </h3>
          </div>
          <div ref={content7} className='content_Image'>
            <h3>
              <img src={AI_Thinks} alt='' />
            </h3>
          </div>





        </div>

      </div>
    </div>
  )
}

export default App

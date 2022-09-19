import React from 'react'
import Slider from 'react-touch-drag-slider'
import images from "../src/Image"
import './App.css'


function App() {
  return (
        <div className='app'>
          <Slider
          onSlideComplete={(i) => {
            console.log('finished dragging, current slide is', i)
          }}
          onSlideStart={(i) => {
            console.log('started dragging on slide', i)
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
        </div>
  )
}

export default App

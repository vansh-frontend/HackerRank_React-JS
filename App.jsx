// import React from 'react'

import FeedbackSystemm from "./CodeReviewFeedBack/Revieww.jsx"
import Form from "./ContactForm/Form.jsx"
import List from "./itemlistmanger/List.jsx"
import Slides from "./SlideShow/Slide.jsx"
// import './index.css'

const App = () => {
  return (
    <div className="App">
      <div>Hacker Rank React Js Problems</div>
      <List />
      <Form />
      <FeedbackSystemm/>
      <Slides/>
    </div>
    
  )
}

export default App
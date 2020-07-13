import { useState } from 'react';

import Layout from '../layouts';
import Block from '../components/Block';
import Modal from '../components/Modal'

function Home() {
  const [emotion, setEmotion] = useState();

  const emotions = [
    'Anger',
    'Anticipation',
    'Joy',
    'Trust',
    'Fear',
    'Surprise',
    'Sadness',
    'Disgust'
  ];
  
  const onClick = (e) => {
    setEmotion(e)
  }
  
  const onClose = () => {
    setEmotion(undefined)
  }

  return (
    <Layout>
      <h2>What are you feeling?</h2>
      <div className="emotions">
        {
          emotions.map((emotion, idx) => {
            return (
              <Block key={idx} text={emotion} onClick={onClick}/>
            )
          })
        }
      </div>
      
      <Modal show={emotion} onClose={onClose}>
        <div>{emotion}</div>
      </Modal>
    </Layout>
  );
}

export default Home;

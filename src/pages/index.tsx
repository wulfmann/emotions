import Layout from '../layouts';
import Block from '../components/Block';

function Home() {
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

  return (
    <Layout>
      <h2>What are you feeling?</h2>
      <div className="emotions">
        {
          emotions.map((emotion, idx) => {
            return (
              <Block key={idx} text={emotion} />
            )
          })
        }
      </div>
    </Layout>
  );
}

export default Home;

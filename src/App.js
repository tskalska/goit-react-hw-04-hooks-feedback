import {useState} from 'react';
import './App.css'; 
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';
import Notification from './components/notification/Notification';

export default function App(){
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good'){setGood(good+1)}
    if (option === 'bad'){setBad(bad+1)}
    if (option === 'neutral'){setNeutral(neutral+1)}
  }

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions 
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {good+bad+neutral>0 &&
        <Section title={'Statistics'}>
          <Statistics
              good={good} 
              neutral={neutral}
              bad={bad}
              />
        </Section>
      }
      {good+bad+neutral===0 &&
        <Section title={'Statistics'}>
          <Notification 
            message={'No feedback given'}
            />
        </Section>
      }
    </div>
  )



        
     
}
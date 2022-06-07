import React, {useState, useRef, useEffect} from 'react';
import './CountdownTimer.css';

const CountdownTimer = (props) => { 
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(props.countdownDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <div>
      <section className='timerContainer'>
        {/* <h2 className='headerTimer'>Live upcomming checks</h2> */}
        <section className='timer'>
          <div className='firstTimer'>
            <section className='counter'>
              <p>{timerDays}</p>
              <p><small>d</small></p>
            </section>
            <span>:</span>
            <section className='counter'>
              <p>{timerHours}</p>
              <p><small>h</small></p>
            </section>
            <span>:</span>
            <section className='counter'>
              <p>{timerMinutes}</p>
              <p><small>m</small></p>
            </section>
            <span>:</span>
            <section className='counter'>
              <p>{timerSeconds}</p>
              <p><small>s</small></p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default CountdownTimer;

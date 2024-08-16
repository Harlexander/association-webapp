import { useState, useEffect} from 'react'

export const useCountdown = (date) => {
    const [state, setState] = useState({
        days : 0,
        hours  : 0,
        minutes : 0,
        seconds : 0
    });

    const UpdateTimer = () => {
        const countDownDate = new Date(date).getTime();

            const currentDate = new Date().getTime();
            const diff = countDownDate - currentDate;
     
            if(countDownDate > currentDate){
                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                let sec = Math.floor(diff % (1000 * 60) / (1000));
                
                setState({
                    days : days,
                    hours  : hrs,
                    minutes : mins,
                    seconds : sec
                });
            }
    }

    useEffect(() => {
        setInterval(() => {
            UpdateTimer();
        }, 1000);
    }, []);

  return state;
  
}
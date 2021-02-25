import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {

   const {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
   } = useContext(CountdownContext)
   const [minutLeaft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeaft, secondRight] = String(seconds).padStart(2, '0').split('');


   return (
      <div>

         <div className={styles.countdownContainer}>
            <div>
               <span>{minutLeaft}</span>
               <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeaft}</span>
               <span>{secondRight}</span>
            </div>
         </div>

         {hasFinished ? (
            <button disabled className={styles.countdownButton} >
               Ciclo encerrado
            </button>
         ) : (
               <>
                  {isActive ? (
                     <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar ciclo
                     </button>
                  ) : (
                        <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                           Iniciar um ciclo
                        </button>
                     )}
               </>
            )}

      </div>
   );
}
import { FC, memo, useEffect, useState } from "react";

import WakatimeService from "@/services/wakatime.service";
import { HOUR } from "@/constants";
import useFetch from "@/hooks/useFetch";

import styles from "@/components/baselineFooter/style.module.scss";


interface IProps {
  displayTalks : boolean;
};


const BaselineFooter: FC<IProps> = ({ displayTalks }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let count = 0;

  const wakatimeService = new WakatimeService();

  if (isLoading) {
    data.map((day: any) => {
      count += (day.total / HOUR);
      return count;
    })
  }

  useEffect(() => {
    wakatimeService.getData(setData, setIsLoading);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.time}>{Math.round(count)}h of developement this year</p>
      {displayTalks ? <>
        <a href="" className={styles.talksButton} id={styles.mobileLink}>
        My last talk
      </a>
      <div id={styles.desktopLink}>
        <button className={styles.talksButton}>My last talk</button>
        <a href={'https://www.youtube.com/watch?v=r_JTTswNdIs'} target={'_blank'} className={styles.meetupLink} rel="noreferrer">
          Tech Ctrl - How design token will change our life as designer / developper ?  
        </a>
      </div>
      </> : null}
    </div>
  );
};

export default memo(BaselineFooter);

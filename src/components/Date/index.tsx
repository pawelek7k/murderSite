import { useEffect, useState } from "react";
import { Container } from "./Styles";

interface TimeComponentProps {
  res: boolean;
}

export const TimeComponent = ({ res }: TimeComponentProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Container $res={res}>{currentTime.toLocaleTimeString()}</Container>;
};

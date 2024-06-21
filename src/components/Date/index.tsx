import { useEffect, useState } from "react";
import { Container } from "./Styles";

export const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Container>{currentTime.toLocaleTimeString()}</Container>;
};

import { useEffect, useState } from "react";

const BarProgressStat = ({ stat }) => {
  const MAX_STAT_VALUE = 255;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = (stat.value * 100) / MAX_STAT_VALUE;

    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < targetPercentage) {
          return prevPercentage + 0.4;
        } else {
          clearInterval(interval);
          return prevPercentage;
        }
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [stat.value]);

  return (
    <article>
      <section className="flex justify-between px-1">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-slate-300 rounded-md">
        <div
          style={{
            width: `${percentage}%`,
            transition: "width 0.3s ease-in-out",
          }}
          className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-md"
        ></div>
      </div>
    </article>
  );
};

export default BarProgressStat;

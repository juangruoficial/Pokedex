const BarProgressStat = ({ stat }) => {
  const getpercentageProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percentage = (statValue * 100) / MAX_STAT_VALUE;
    return `${percentage}%`;
  };
  return (
    <article>
      <section className="flex justify-between px-1">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div
        style={{
          width: getpercentageProgress(stat.value),
        }}
        className="h-6 bg-slate-300 rounded-md"
      >
        <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-md"></div>
      </div>
    </article>
  );
};
export default BarProgressStat;

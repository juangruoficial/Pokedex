import StatInfo from "./StatInfo";

const StatList = ({ stats }) => {
  return (
    <ul className="grid gap-2 grid-cols-3 text-xs p-2">
      {stats?.map((stat) => (
        <StatInfo key={stat.name} stat={stat} />
      ))}
    </ul>
  );
};
export default StatList;

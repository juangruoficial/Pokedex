const StatInfo = ({ stat }) => {
  return (
    <li key={stat.name}>
      <h4 className="capitalize line-clamp-1">{stat.name}</h4>
      <span className="font-bold">{stat.value}</span>
    </li>
  );
};
export default StatInfo;

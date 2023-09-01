import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="grid mt-6 sm:w-[40%]">
      <h2 className="text-xl font-semibold mb-2">Stats</h2>
      <section className="space-y-4">
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};

export default StatBarList;

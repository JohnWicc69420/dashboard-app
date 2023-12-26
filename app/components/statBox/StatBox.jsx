export default function StatBox({
  icon,
  quantity,
  percentage,
  title,
  profit,
  color,
  bg,
}) {
  const sign = profit ? "+" : "-";
  const signCol = profit ? "text-[#00CC00]" : "text-[#FF6666]";
  return (
    <>
      <div
        className="bg-[#fff] flex flex-col items-start gap-2 p-4
       rounded-xl h-[150px] xl:h-[170px] w-[150px] xl:w-[200px] shadow-lg"
      >
        <span className={`p-5 ${bg} rounded-full`}>
          <span className={`${color}`}>{icon}</span>
        </span>
        <div className="flex gap-2 items-center">
          <span className=" text-md font-semibold">{quantity}</span>
          <span className={`text-sm ${signCol}`}>
            {sign}
            {percentage}
          </span>
        </div>
        <span className="text-[#b1b1b1]">{title}</span>
      </div>
    </>
  );
}

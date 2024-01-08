export default function Title({ title }) {
  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-[#B1B1B1]">Page</span>
        <span className=" text-3xl font-bold">{title}</span>
      </div>
    </>
  );
}

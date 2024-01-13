export default function Title({ title, page }) {
  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-[#B1B1B1]">{page}</span>
        <span className=" text-3xl font-bold">{title}</span>
      </div>
    </>
  );
}

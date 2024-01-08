import data from "./data";

export default function Container() {
  const getBgColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#FC9D78]";
      case "Complete":
        return "bg-[#88D68B]";
      case "Active":
        return "bg-[#04B3D9]";
      case "Canceled":
        return "bg-[#FD6F8F]";
      case "Rejected":
        return "bg-[#FD1B06]";
      default:
        return "bg-[#04B3D9]";
    }
  };

  return (
    <>
      <div className="container overflow-x-scroll">
        <table className="w-full ">
          <thead>
            <tr className="border text-[#b1b1b1] text-sm w-full">
              <th className="p-4 font-medium">Image</th>
              <th className="p-4 font-medium">Item</th>
              <th className="p-4 font-medium">Customer Name</th>
              <th className="p-4 font-medium">Total Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border text-sm text-center hover:bg-[#eee] dark:hover:bg-[#1E2228] w-full"
              >
                <td className="p-4">{item.img}</td>
                <td className="p-4">{item.item}</td>
                <td className="p-4">{item.customerName}</td>
                <td className="p-4">{item.totalAmount}</td>
                <td className="p-4">
                  <span
                    className={`${getBgColor(
                      item.status
                    )} py-2 px-3 rounded-3xl text-[#fff]`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4">{item.orderId}</td>
                <td className="p-4">{item.location}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border text-center">
              <td className="p-3">prevv</td>
              <td className="p-3">prev</td>
              <td className="p-3">1</td>
              <td className="p-3">2</td>
              <td className="p-3">3</td>
              <td className="p-3">4</td>
              <td className="p-3">next</td>
              <td className="p-3">nextt</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

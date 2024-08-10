import { BsThreeDotsVertical } from "react-icons/bs";

const VendorTable = ({dataValue, singleDataClickHandler}) => {
  // console.log(value);

  const paymentStatus = (status) => {
    switch (status) {
      case "Paid":
        return "text-green-500  border-green-400 bg-green-100";
        break;
      case "Pending":
        return "text-yellow-500  border-yellow-400 bg-yellow-100";
        break;
      case "Failed":
        return "text-red-500  border-red-400 bg-red-100";
        break
    default:
        return "text-grey-500  border-grey-400 bg-grey-100"
    }
  };

  return (
    <>
      <tr className="bg-white border-b-2 hover:bg-gray-50 -600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
              name={`checkbox ${Math.random() * 1000}`}
            />
          </div>
        </td>

        <td
          scope="row"
          className=" text-gray-900 whitespace-nowrap font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px]">
              <img
                className="w-full h-full rounded-full object-cover"
                src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${dataValue.website}&size=64`}
                alt=""
              />
            </div>
            <div className="">
              <p className="font-semibold text-[1rem]">
                {dataValue.companyName || "Unknown"}
              </p>
              <p className="text-slate-500">
                {dataValue.website || "Unknown"}
              </p>
            </div>
          </div>
        </td>

        <td className="py-4 pe-7 flex items-center gap-2 font-semibold text-[1rem]">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="px-3 bg-[#4c44e2] h-2.5 rounded-full"
              style={{ width: `${dataValue.performance || 0}%` }}
            ></div>
          </div>
          <p className="font-bold">{dataValue.performance || 0}%</p>
        </td>
        <td className="">
          <p className="text-[1rem] text-slate-700 font-bold">
            {dataValue.description || "Unknown"}
          </p>
          <p className="text-slate-500 font-medium text-md">
            {dataValue.details || "Unknown"}
          </p>
        </td>
        <td className="">{dataValue.lastChecked || "Unknown"}</td>

        <td className="flex items-center">
          <div className={`border px-3 py-1 font-bold rounded-full ${paymentStatus(dataValue.status)}`}>
            {dataValue.status}
          </div>
        </td>

        <td className="">
          <button onClick={(e)=>singleDataClickHandler(e)}>
            <BsThreeDotsVertical className="text-xl" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default VendorTable;

import { IoFilterSharp, IoCloseSharp } from "react-icons/io5";
import { FaPlus, FaSearch } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";
import { TbCurrencyDollar, TbTriangleSquareCircle } from "react-icons/tb";
import VendorTable from "./VendorTable";
import useDataFetcher from "../../hooks/useDataFetcher";
import { useEffect, useState } from "react";

const VendorLists = () => {
  const { fetchedData } = useDataFetcher(
    "https://demo-backend.durbin.co.in/get-all-dashboard-data"
  );

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    let updatedData = fetchedData?.data || [];

    const searchQueryFormated = searchQuery.toLowerCase();

    if (searchQuery) {
      updatedData = updatedData.filter((item) => {
        console.log(item);
        const normalizedPerformance = (item.performance || "").toString();

        return (
          item.companyName.toLowerCase().includes(searchQueryFormated) ||
          item.website.toLowerCase().includes(searchQueryFormated) ||
          item.description.toLowerCase().includes(searchQueryFormated) ||
          item.lastChecked.toLowerCase().includes(searchQueryFormated) ||
          normalizedPerformance.includes(searchQueryFormated)
        );
      });
    }

    if (statusFilter) {
      updatedData = updatedData.filter(
        (item) => item.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    switch (categoryFilter) {
      case "Company Name":
        updatedData = updatedData.sort((a, b) => a.companyName.localeCompare(b.companyName));
        break;
      case "Performance":
        updatedData = updatedData.sort((a, b) => {
          const performanceA = parseFloat((a.performance || "0").toString());
          const performanceB = parseFloat((b.performance || "0").toString());
          return performanceB - performanceA;
        });
        break;
      case "Description":
        updatedData = updatedData.sort((a, b) => a.description.localeCompare(b.description));
        break;
      case "Last Checked":
        updatedData = updatedData.sort(
          (a, b) => new Date(b.lastChecked) - new Date(a.lastChecked)
        );
        break;
      default:
        break;
    }

    setFilteredData(updatedData);
  }, [fetchedData, searchQuery, statusFilter, categoryFilter]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const clearDataFilter = () => {
    setFilteredData(fetchedData?.data || []);
    setSearchQuery("");
    setStatusFilter("");
    setCategoryFilter("");
  };

  const singleDataClickHandler = (e)=>{
    console.log("there is no event on this btn");
  }

  return (
    <div className="mt-7 rounded-xl h-[400px] shadow-md">
      <div className="flex justify-between items-center border-2 p-5 rounded-t-xl">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">Vendor Activity History</p>
            <p className="bg-[#eaf0fb] text-[#4c44e2] px-2 py-1 rounded-full text-sm font-semibold">
              {(filteredData && filteredData?.length) || 0} Total
            </p>
          </div>
          <p className="mt-2 font-semibold text-slate-600">
            Here you can track your vendor's performance every day.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center border-2 gap-2 px-4 py-2 rounded-full font-semibold">
            <IoFilterSharp />
            Filter
          </button>

          <button className="flex items-center gap-2 bg-[#4c44e2] text-white px-4 py-2 rounded-full font-semibold">
            <FaPlus /> Add Customer
          </button>
        </div>
      </div>

      <div className="flex justify-between border-x-2 items-center p-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-3">
            <div className="border flex items-center overflow-hidden rounded-full cursor-pointer h-12">
              <input
                className="w-full outline-none text-lg py-2 px-4"
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                id="searchBox"
                placeholder="Search by Company Name, Website, Description, Performance, or Last Checked"
              />
              <button
                type="submit"
                className="text-xl cursor-pointer w-10 hover:text-[#4c44e2]"
              >
                <FaSearch />
              </button>
            </div>

            <div className="border px-5 py-3 rounded-full flex items-center font-semibold ">
              <label htmlFor="dataStatus">
                <TbCurrencyDollar className="text-2xl text-slate-700" />
              </label>
              <select
                id="dataStatus"
                className="outline-none w-32 text-slate-700 cursor-pointer"
                onChange={(e) => handleStatusFilter(e.target.value)}
                value={statusFilter}
              >
                <option value="">Default</option>
                <option>Paid</option>
                <option>Failed</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="border px-5 py-3 rounded-full flex items-center font-semibold ">
              <TbTriangleSquareCircle className="text-2xl text-slate-700" />
              <select
                id="categories"
                className="outline-none w-32 text-slate-700 cursor-pointer"
                onChange={(e) => handleCategoryFilter(e.target.value)}
                value={categoryFilter}
              >
                <option value="">All Categories</option>
                <option>Company Name</option>
                {/* <option>Performance</option> */}
                <option>Description</option>
                <option>Last Checked</option>
              </select>
            </div>
          </div>
        </form>

        <div>
          <button
            className="flex items-center border-2 px-4 py-2 rounded-full gap-1 font-semibold text-slate-700 hover:bg-[#4c44e2] hover:border-[#4c44e2] hover:text-white transition-all"
            onClick={clearDataFilter}
          >
            Clear All <IoCloseSharp className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="relative  border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs border-b-2 text-gray-700 bg-[#f4fafa] text-left">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-10 rounded-full"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="pe-6 py-3 flex items-center text-[1rem] gap-2 cursor-pointer"
              >
                Company Name
                <button className="text-2xl">
                  <RiExpandUpDownFill />
                </button>
              </th>
              <th scope="col" className="pe-6 py-3 text-[1rem]">
                Performance
              </th>
              <th scope="col" className="pe-6 py-3 text-[1rem]">
                Description
              </th>
              <th scope="col" className="pe-6 py-3 text-[1rem]">
                Last Checked
              </th>
              <th scope="col" className="pe-2 py-3 text-[1rem]">
                Status
              </th>
              <th scope="col" className="pe-2 py-3 text-[1rem]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((value, key) => (
              <VendorTable key={key} dataValue={value} singleDataClickHandler={singleDataClickHandler} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorLists;

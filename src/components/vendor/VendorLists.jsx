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
    let data = fetchedData?.data || [];

    // Apply search filter
    if (searchQuery) {
      data = data.filter(
        (item) =>
          item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.lastChecked.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.performance.toString().includes(searchQuery)
      );
    }

    // Apply status filter
    if (statusFilter) {
      data = data.filter(
        (item) => item.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // Apply category filter
    switch (categoryFilter) {
      case "Company Name":
        data = data.sort((a, b) => a.companyName.localeCompare(b.companyName));
        break;
      case "Performance":
        data = data.sort(
          (a, b) => parseFloat(b.performance) - parseFloat(a.performance)
        );
        break;
      case "Description":
        data = data.sort((a, b) => a.description.localeCompare(b.description));
        break;
      case "Last Checked":
        data = data.sort(
          (a, b) => new Date(b.lastChecked) - new Date(a.lastChecked)
        );
        break;
      default:
        break;
    }

    setFilteredData(data);
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

  return (
    <div className="mt-7 border-2 rounded-xl h-[400px] shadow-md">
      <div className="flex justify-between items-center border-b-2 p-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">Vendor Activity History</p>
            <p className="bg-[#eaf0fb] text-[#4c44e2] px-2 py-1 rounded-full text-sm font-semibold">
              {fetchedData && fetchedData?.data.length} Total
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

      <div className="flex justify-between items-center p-5">
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
              <TbCurrencyDollar className="text-2xl text-slate-700" />
              <select
                id="countries"
                className="outline-none w-32 text-slate-700"
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
                className="outline-none w-32 text-slate-700"
                onChange={(e) => handleCategoryFilter(e.target.value)}
                value={categoryFilter}
              >
                <option value="">All Categories</option>
                <option>Company Name</option>
                <option>Performance</option>
                <option>Description</option>
                <option>Last Checked</option>
              </select>
            </div>
          </div>
        </form>

        <div>
          <button
            className="flex items-center border-2 px-4 py-2 rounded-full gap-1 font-semibold text-slate-700 hover:bg-[#4c44e2] hover:border-[#4c44e2] hover:text-white transition-all"
            onClick={() => {
              setFilteredData(fetchedData?.data || []);
              setSearchQuery("");
              setStatusFilter("");
              setCategoryFilter("");
            }}
          >
            Clear All <IoCloseSharp className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-[#f4fafa] text-left">
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
              <VendorTable key={key} dataValue={value} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorLists;

import React from "react";

const RecomandatonLists = ({ fetchedData, searchQuery, recomandSetQueryData }) => {
  return (
    <>
      {fetchedData &&
        fetchedData.data
          .filter((item) => {
            const query = searchQuery.toLowerCase();

            const companyNameMatch = item.companyName
              .toLowerCase()
              .includes(query);
            const descriptionMatch = item.description
              .toLowerCase()
              .includes(query);
            const dateMatch = item.lastChecked.toLowerCase().includes(query);

            return companyNameMatch || descriptionMatch || dateMatch;
          })
          .reduce(
            (acc, value, index) => {
              const query = searchQuery.toLowerCase();

              const companyNameIndex = value.companyName
                .toLowerCase()
                .indexOf(query);
              const descriptionIndex = value.description
                .toLowerCase()
                .indexOf(query);
              const dateIndex = value.lastChecked.toLowerCase().indexOf(query);

              const selectedText =
                companyNameIndex !== -1
                  ? value.companyName
                  : descriptionIndex !== -1
                  ? value.description
                  : value.lastChecked;

              if (!acc.seen.has(selectedText)) {
                acc.seen.add(selectedText);
                acc.list.push(
                  <li
                    onClick={() => recomandSetQueryData(selectedText)}
                    className="cursor-pointer hover:bg-gray-200 p-1 mt-1 font-semibold px-4"
                    key={index}
                  >
                    <span>
                      {companyNameIndex !== -1 ? (
                        <>
                          {value.companyName.slice(0, companyNameIndex)}
                          <span className="bg-yellow-200">
                            {value.companyName.slice(
                              companyNameIndex,
                              companyNameIndex + query.length
                            )}
                          </span>
                          {value.companyName.slice(
                            companyNameIndex + query.length
                          )}
                        </>
                      ) : (
                        value.companyName
                      )}
                    </span>
                    <br />
                    {descriptionIndex !== -1 && (
                      <span className="text-gray-600">
                        {value.description.slice(0, descriptionIndex)}
                        <span className="bg-yellow-200">
                          {value.description.slice(
                            descriptionIndex,
                            descriptionIndex + query.length
                          )}
                        </span>
                        {value.description.slice(
                          descriptionIndex + query.length
                        )}
                      </span>
                    )}
                    {dateIndex !== -1 && (
                      <span className="text-gray-400">
                        {value.lastChecked.slice(0, dateIndex)}
                        <span className="bg-yellow-200">
                          {value.lastChecked.slice(
                            dateIndex,
                            dateIndex + query.length
                          )}
                        </span>
                        {value.lastChecked.slice(dateIndex + query.length)}
                      </span>
                    )}
                  </li>
                );
              }

              return acc;
            },
            { seen: new Set(), list: [] }
          ).list}
    </>
  );
};

export default RecomandatonLists;

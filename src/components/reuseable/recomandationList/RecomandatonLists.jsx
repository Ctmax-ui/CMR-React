import React from 'react'

const RecomandatonLists = (fetchedData) => {
  return (<>
   {fetchedData &&
                    fetchedData?.data
                      ?.filter(
                        (item) =>
                          item.companyName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          item.description
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                      )
                      .map((value, index) => {
                        const query = searchQuery.toLowerCase();
                        const companyNameIndex = value.companyName
                          .toLowerCase()
                          .indexOf(query);
                        const descriptionIndex = value.description
                          .toLowerCase()
                          .indexOf(query);

                        return (
                          <li
                            onClick={() =>
                              recomandSetQueryData(value.companyName)
                            }
                            className="cursor-pointer hover:bg-gray-200 p-1 mt-1 font-semibold px-4"
                            key={index}
                          >
                            
                          </li>
                        );
                      })}
  
  </>)
}

export default RecomandatonLists
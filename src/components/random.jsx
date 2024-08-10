const sortData = (dataClone) => {
    if (!data) return [];
    const sortedData = [...dataClone];
    if (sortPrice === "toHigh") {
        return sortedData.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "toLow") {
        return sortedData.sort((a, b) => b.price - a.price);
    }
    return sortedData;
};

const memoizedData = useMemo(() => sortData(data), [data, sortPrice, sortData]);
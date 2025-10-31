const GetTableData = async (
  searchKey = "",
  PerPage = 50,
  crntPage = 1,
  activeCatId
) => {
  try {
    // console.log("for api", crntPage, searchKey, PerPage);
    const results = await MasterApi(
      !activeCatId ? Categories.MEDICINE.catID : activeCatId,

      crntPage,
      searchKey,
      PerPage
    );
    if (!results) {
      // console.log("result", results);
    } else {
      // totalElements: 1056;
      // totalPages: 106;

      setMedicines(results.content);

      setPageable({
        pageable: results?.pageable,
        totalElements: results?.totalElements,
        totalPages: results?.totalPages,
        last: results?.last,
        size: results?.size,
        number: results?.number,
        sort: results?.sort,
        numberOfElements: results.numberOfElements,
      });
    }
    //  console.log("result", results);
  } catch (error) {
    console.error("Error fetching API data:", error);
  } finally {
    setLoading(false);
  }
};

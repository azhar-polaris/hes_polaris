import { FC, useCallback, useEffect, useState } from "react";
import DataTable from "@/components/customUI/DataTable";
import Spinner from "@/components/customUI/Loaders/Spinner";
import useGetTableColumns from "@/hooks/useGetTableColumns";
import CaretLeft from "@/components/svg/CaretLeft";
import CaretRight from "@/components/svg/CaretRight";
import  Button  from "@/components/ui/button";
import BoxContainer from "@/components/customUI/BoxContainer";
import { useGetScheduledReportsQuery } from "@/store/hes/hesApi";
import { CommandRecord } from "@/store/hes/types/records/reports";

interface TableProps {
    search: string,
}

const ListReports: FC<TableProps> = ({  search }) => {
    const [query, setQuery] = useState(search);

    const { data: response, isLoading, isFetching, isError, refetch:refresh } = useGetScheduledReportsQuery({
        searchQuery: `?${query}`
    });


    useEffect(() => {
        setQuery(search);
    }, [search]);

    const tableData: CommandRecord[] = response?.originalData?.records || [];

    const columns = useGetTableColumns({
        cols: tableData,
        query: ["statusBreakup"],
      });

    if (isLoading) return (
        <BoxContainer> 
            <Spinner />
        </BoxContainer>
    );

    if (isError) return (
        <BoxContainer>
            <strong>Something went wrong, please refresh the page! </strong>
        </BoxContainer>
    );

    return (
        <div className="flex-1 flex flex-col w-full px-2">
          <div className="flex flex-1 min-h-[50vh] items-center justify-center">
            {!isFetching ? (
              <DataTable
                refresh
                refreshFn={refresh}
                columns={columns}
                data={tableData}
              />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      );
    };
    
    export default ListReports;
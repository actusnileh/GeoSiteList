import { HeaderSearch, DataTable } from "../../components";
import { FetchDomains } from "./api/fetchDomains";
import { useEffect, useState } from "react";
import { ApiResponseType } from "./api/apiResponseType";
import { ModalLoader } from "../../shared/ui/modalLoader";

export const HomePage = () => {
    const [data, setData] = useState<ApiResponseType | undefined>({ items: [] });

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await FetchDomains();
            if (fetchedData) {
                setData(fetchedData);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <HeaderSearch />
            {
                data && <DataTable data={data} />
            }
        </>
    );
};

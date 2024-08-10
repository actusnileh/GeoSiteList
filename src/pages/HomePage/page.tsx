import { HeaderSearch, DataTable, ScrollToTop, CopyPlace } from "../../components";
import { FetchDomains } from "./api/fetchDomains";
import { useEffect, useState } from "react";
import { ApiResponseType } from "./api/apiResponseType";
import { Skeleton } from "@mantine/core";

export const HomePage = () => {
    const [data, setData] = useState<ApiResponseType | undefined>({ items: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const [domens, setDomenItem] = useState<string[]>([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const fetchedData = await FetchDomains();
            if (fetchedData) {
                setData(fetchedData);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const setDomen = (domen: string) => {
        setDomenItem((prevDomens) => {
            if (!prevDomens.includes(domen)) {
                return [...prevDomens, domen];
            }
            return prevDomens;
        });
    };

    return (
        <>
            <HeaderSearch />
            <Skeleton visible={loading} height="100vh">
                {
                    data && <>
                        <CopyPlace domens={domens} />
                        <DataTable data={data} setDomen={setDomen} />
                    </>
                }
            </Skeleton>
            <ScrollToTop />
        </>
    );
};

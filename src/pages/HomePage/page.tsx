import { HeaderSearch, DataTable, ScrollToTop } from "../../components";
import { FetchDomains } from "./api/fetchDomains";
import { useEffect, useState } from "react";
import { ApiResponseType } from "./api/apiResponseType";
import { Skeleton } from "@mantine/core";

export const HomePage = () => {
    const [data, setData] = useState<ApiResponseType | undefined>({
        items: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await FetchDomains();
                if (fetchedData) {
                    setData(fetchedData);
                }
            } catch (err) {
                setError("Error");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <HeaderSearch />
            <Skeleton visible={loading} height="100vh">
                {error ? (
                    <div>{error}</div>
                ) : (
                    data && (
                        <>
                            <DataTable data={data} />
                        </>
                    )
                )}
            </Skeleton>
            <ScrollToTop />
        </>
    );
};

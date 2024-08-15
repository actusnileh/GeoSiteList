import {
    HeaderSearch,
    DataTable,
    ScrollToTop,
    CopyTable,
} from "../../components";

import { FetchDomains } from "./api/fetchDomains";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ApiResponseType } from "./api/apiResponseType";
import { Skeleton } from "@mantine/core";

export const HomePage = () => {
    const [data, setData] = useState<ApiResponseType | undefined>({
        items: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

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

    const handleCheckboxChange = useCallback(
        (key: string, checked: boolean) => {
            setSelectedKeys((prevSelectedKeys) => {
                const newSelectedKeys = new Set(prevSelectedKeys);
                if (checked) {
                    newSelectedKeys.add(key);
                } else {
                    newSelectedKeys.delete(key);
                }
                return newSelectedKeys;
            });
        },
        []
    );

    const selectedData = useMemo(
        () =>
            Array.from(selectedKeys)
                .map((key) => `geosite:${key}`)
                .join("\n"),
        [selectedKeys]
    );

    return (
        <>
            <HeaderSearch />
            <CopyTable data={selectedData} />
            <Skeleton visible={loading} height="100vh">
                {error ? (
                    <div>{error}</div>
                ) : (
                    data && (
                        <DataTable
                            data={data}
                            onCheckboxChange={handleCheckboxChange}
                            selectedKeys={selectedKeys}
                        />
                    )
                )}
            </Skeleton>
            <ScrollToTop />
        </>
    );
};

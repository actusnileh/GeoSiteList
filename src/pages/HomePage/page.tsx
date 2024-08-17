import {
    HeaderSearch,
    DataTable,
    ScrollToTop,
    CopyTable,
} from "../../components";

import { FetchDomains } from "./api/fetchDomains";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ApiResponseType } from "./api/apiResponseType";

export const HomePage = () => {
    const [data, setData] = useState<ApiResponseType | undefined>({
        items: [],
    });
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
            <ScrollToTop />
        </>
    );
};

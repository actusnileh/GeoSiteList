import { FC } from "react";
import { ApiResponseType } from "../../pages/HomePage/api/apiResponseType";
import { Grid } from "@mantine/core";
import { DomenCard } from "./DomenCard";


interface DataTable {
    data: ApiResponseType;
    setDomen: (arg: string) => void;
}

export const DataTable: FC<DataTable> = ({ data, setDomen }) => {

    return (
        <Grid grow gutter="xs" m={20} mt={70}>
            {Object.entries(data).map(([key, values]) => (
                <DomenCard keyElement={key} values={values} setDomen={setDomen} />
            ))}
        </Grid>
    );
};

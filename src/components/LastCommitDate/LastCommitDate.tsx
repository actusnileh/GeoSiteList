import { Title } from "@mantine/core";
import { useEffect, useState } from "react";

const LastCommitDate = () => {
    const [commitDate, setCommitDate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommitDate = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/repos/actusnileh/geoip-geosite-list/commits?per_page=1"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const lastCommit = data[0];
                setCommitDate(lastCommit.commit.committer.date);
            } finally {
                setLoading(false);
            }
        };

        fetchCommitDate();
    }, []);

    if (loading) return <Title order={6}>Loading...</Title>;

    return (
        <div>
            {commitDate ? (
                <Title order={6}>Last data update: {new Date(commitDate).toLocaleString()}</Title>
            ) : (
                <Title order={6}>No data available</Title>
            )}
        </div>
    );
};

export default LastCommitDate;

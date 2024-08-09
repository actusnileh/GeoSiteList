import { FC } from "react";
import { ApiResponseType } from "../../pages/HomePage/api/apiResponseType";
import { Grid, Tree, Text, Card, Title, RenderTreeNodePayload, Group, Checkbox } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';

const renderTreeNode = ({
    node,
    expanded,
    hasChildren,
    elementProps,
    tree,
}: RenderTreeNodePayload) => {
    const checked = tree.isNodeChecked(node.value);
    const indeterminate = tree.isNodeIndeterminate(node.value);

    return (
        <Group gap="xs" {...elementProps}>
            <Checkbox.Indicator
                checked={checked}
                indeterminate={indeterminate}
                onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
            />

            <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
                <span>{node.label}</span>

                {hasChildren && (
                    <IconChevronDown
                        size={14}
                        style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                )}
            </Group>
        </Group>
    );
};


export const DataTable: FC<{ data: ApiResponseType }> = ({ data }) => {

    const transformDataToTree = (data: ApiResponseType) => {
        return Object.entries(data).map(([key, values]) => ({
            label: key,
            value: key,
            children: values.map((value) => ({
                label: value,
                value,
            })),
        }));
    };

    const readyForTreeData = transformDataToTree(data);
    console.log(readyForTreeData);
    return (
        <Grid grow>
            <Grid.Col span={5} >
                <Card>
                    <Tree data={readyForTreeData} levelOffset={23} expandOnClick={false} renderNode={renderTreeNode} />
                </Card>
            </Grid.Col>
        </Grid>
    );
};
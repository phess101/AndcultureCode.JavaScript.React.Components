import React, { useState } from "react";
import { DragAndDropListBox } from "./drag-and-drop-list-box";
import { ListBoxItem } from "../list-box/list-box";
import { Paragraph } from "../../atoms/paragraph/paragraph";

export default {
    title: "Molecules | Drag And Drop List Box",
    component: DragAndDropListBox,
};

export const DragAndDropListBoxDefault = () => {
    const [items, setItems] = useState<Array<ListBoxItem<number>>>([
        {
            id: 0,
            label: "0",
            text: "Item Number 0",
        },
        {
            id: 1,
            label: "1",
            text: "Item Number 1",
        },
        {
            id: 2,
            label: "2",
            text: "Item Number 2",
        },
        {
            id: 3,
            label: "3",
            text: "Item Number 3",
        },
    ]);

    return (
        <React.Fragment>
            <Paragraph>Drag and drop items to reorder them.</Paragraph>
            <DragAndDropListBox
                droppableId="drag-and-drop-list-box.tsx"
                items={items}
                onReordered={setItems}
            />
        </React.Fragment>
    );
};

import {
    Page,
    LegacyCard,
    DataTable,
    LegacyTabs,
    TextField,
    Button,
    Tag,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import PopoverMenu from "./PopoverMenu1";
import PopoverMenuSecond from "./PopoverMenu2";

function DataTableExample({
    data,
    handleFilterCheckBoxChange,
    filter,
    setFilter,
    search,
    setSearch,
    setSidePanel
}) {
    // helper states and functions
    const [selected, setSelected] = useState(0);

    const [filterOneTags, setFilterOneTags] = useState([]);

    const [filterTwoTags, setFilterTwoTags] = useState([]);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        []
    );

    const tabs = [
        {
            id: "all",
            content: "All",
        },
        {
            id: "active",
            content: "Active",
        },
        {
            id: "draft",
            content: "Draft",
        },
        {
            id: "archieved",
            content: "Archieved",
        },
    ];

    // filter tags display
    useEffect(() => {
        setFilterOneTags([]);
        setFilterTwoTags([]);
        if (filter.online) setFilterOneTags((v) => [...v, "Online Store"]);
        if (filter.sale) setFilterOneTags((v) => [...v, "Point of Sale"]);
        if (filter.buy) setFilterOneTags((v) => [...v, "Buy Button"]);
        if (filter.tshirt) setFilterTwoTags((v) => [...v, "T-Shirt"]);
        if (filter.accessory) setFilterTwoTags((v) => [...v, "Accessory"]);
        if (filter.gift) setFilterTwoTags((v) => [...v, "Gift Card"]);
    }, [filter]);

    return (
        <Page
            title={"Products"}
            primaryAction={<Button primary>Add Product</Button>}
            secondaryActions={
                <div className="navigation">
                    <Button>Export</Button>
                    <Button>Import</Button>
                    <Button disclosure>More Options</Button>
                </div>
            }
        >
            <LegacyCard>
                <LegacyTabs
                    tabs={tabs}
                    selected={selected}
                    onSelect={handleTabChange}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 10,
                            gap: 10,
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <TextField
                                label=""
                                value={search}
                                onChange={(t) => setSearch(t)}
                                autoComplete="off"
                                placeholder="Search..."
                            />
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PopoverMenu
                                handleFilterCheckBoxChange={
                                    handleFilterCheckBoxChange
                                }
                                filter={filter}
                            />
                            <PopoverMenuSecond
                                handleFilterCheckBoxChange={
                                    handleFilterCheckBoxChange
                                }
                                filter={filter}
                            />
                            <Button onClick={()=>setSidePanel(t=>!t)}>More Filters</Button>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 10,
                            gap: 10,
                        }}
                    >
                        {filterOneTags.length > 0 ? (
                            <Tag
                                onRemove={() =>
                                    setFilter({
                                        ...filter,
                                        online: false,
                                        sale: false,
                                        buy: false,
                                    })
                                }
                            >
                                <p>Available on {filterOneTags.join(", ")}</p>
                            </Tag>
                        ) : null}
                        {filterTwoTags.length > 0 ? (
                            <Tag
                                onRemove={() =>
                                    setFilter({
                                        ...filter,
                                        tshirt: false,
                                        accessory: false,
                                        gift: false,
                                    })
                                }
                            >
                                <p>{filterTwoTags.join(", ")}</p>
                            </Tag>
                        ) : null}
                    </div>
                    <LegacyCard.Section>
                        <DataTable
                            columnContentTypes={[
                                "text",
                                "text",
                                "text",
                                "numeric",
                                "numeric",
                                "numeric",
                            ]}
                            headings={[
                                "",
                                "Title",
                                "Status",
                                "Price",
                                "Category",
                                "Rate",
                            ]}
                            verticalAlign="middle"
                            rows={
                                tabs[selected].id === "all"
                                    ? data
                                    : data.filter(
                                          (t) =>
                                              t[2].props.children ===
                                              tabs[selected].id
                                      )
                            }
                        />
                    </LegacyCard.Section>
                </LegacyTabs>
            </LegacyCard>
        </Page>
    );
}

export default DataTableExample;

import {
    Button,
    Page,
    Sheet,
    Scrollable,
    Text,
    Checkbox,
} from "@shopify/polaris";
import { MobileCancelMajor } from "@shopify/polaris-icons";

function SideFilters({
    sidePanel,
    setSidePanel,
    handleFilterCheckBoxChange,
    filter,
    setFilter,
}) {
    return (
        <Page narrowWidth>
            <Sheet
                open={sidePanel}
                onClose={t=>setSidePanel(t)}
                accessibilityLabel="More Filters"
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            alignItems: "center",
                            borderBottom: "1px solid #DFE3E8",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                            width: "100%",
                        }}
                    >
                        <Text variant="headingMd" as="h2">
                            Manage sales channels
                        </Text>
                        <Button
                            accessibilityLabel="Cancel"
                            icon={MobileCancelMajor}
                            onClick={()=>setSidePanel(false)}
                            plain
                        />
                    </div>
                    <Scrollable style={{ padding: "1rem", height: "100%" }}>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="Online Store"
                                checked={filter.online}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "online")
                                }
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="Point of Sale"
                                checked={filter.sale}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "sale")
                                }
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="Buy Button"
                                checked={filter.buy}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "buy")
                                }
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="T Shirt"
                                checked={filter.tshirt}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "tshirt")
                                }
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="Accessory"
                                checked={filter.accessory}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "accessory")
                                }
                            />
                        </div>
                        <div style={{ width: "100%" }}>
                            <Checkbox
                                label="Gift Card"
                                checked={filter.gift}
                                onChange={(t) =>
                                    handleFilterCheckBoxChange(t, "gift")
                                }
                            />
                        </div>
                    </Scrollable>
                    <div
                        style={{
                            alignItems: "center",
                            borderTop: "1px solid #DFE3E8",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                            width: "100%",
                        }}
                    >
                        <Button
                            onClick={() =>
                                setFilter({
                                    online: false,
                                    sale: false,
                                    buy: false,
                                    tshirt: false,
                                    accessory: false,
                                    gift: false
                                })
                            }
                        >
                            Clear All Filters
                        </Button>
                        <Button primary onClick={()=>setSidePanel(false)}>
                            Done
                        </Button>
                    </div>
                </div>
            </Sheet>
        </Page>
    );
}

export default SideFilters;

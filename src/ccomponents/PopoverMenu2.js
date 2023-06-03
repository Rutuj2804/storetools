import { Button, Popover, Checkbox, VerticalStack } from "@shopify/polaris";
import { useState, useCallback } from "react";

function PopoverMenuSecond({ handleFilterCheckBoxChange, filter }) {
    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        []
    );

    const activator = (
        <Button onClick={togglePopoverActive} disclosure>
            Product Type
        </Button>
    );

    return (
        <div>
            <Popover
                active={popoverActive}
                activator={activator}
                autofocusTarget="first-node"
                onClose={togglePopoverActive}
            >
                <div style={{ padding: 20 }}>
                    <VerticalStack gap="2">
                        <Checkbox
                            label="T-Shirt"
                            checked={filter.tshirt}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "tshirt")
                            }
                        />
                        <Checkbox
                            label="Accessory"
                            checked={filter.accessory}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "accessory")
                            }
                        />
                        <Checkbox
                            label="Gift Card"
                            checked={filter.gift}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "gift")
                            }
                        />
                    </VerticalStack>
                </div>
            </Popover>
        </div>
    );
}

export default PopoverMenuSecond;

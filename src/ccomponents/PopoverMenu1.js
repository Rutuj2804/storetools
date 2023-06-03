import { Button, Popover, Checkbox, VerticalStack } from "@shopify/polaris";
import { useState, useCallback } from "react";

function PopoverMenu({ handleFilterCheckBoxChange, filter }) {
    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        []
    );

    const activator = (
        <Button onClick={togglePopoverActive} disclosure>
            More actions
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
                            label="Online Store"
                            checked={filter.online}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "online")
                            }
                        />
                        <Checkbox
                            label="Point of Sale"
                            checked={filter.sale}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "sale")
                            }
                        />
                        <Checkbox
                            label="Buy Button"
                            checked={filter.buy}
                            onChange={(t) =>
                                handleFilterCheckBoxChange(t, "buy")
                            }
                        />
                    </VerticalStack>
                </div>
            </Popover>
        </div>
    );
}

export default PopoverMenu;

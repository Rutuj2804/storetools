export const PURCHASE_AVAILABLITY = {
    ONLINE_STORE: "ONLINE_STORE",
    POINT_OF_SALE: "POINT_OF_SALE",
    BUY_BUTTON: "BUY_BUTTON",
};

export const PRODUCT_TYPE = {
    T_SHIRT: "T_SHIRT",
    ACCESSORY: "ACCESSORY",
    GIFT_CARD: "GIFT_CARD",
};

export const STATUS_TYPE = {
    ARCHIEVED: "ARCHIEVED",
    ACTIVE: "ACTIVE",
    DRAFT: "DRAFT",
};

export const returnPurchase = () => {
    const r = Math.random();
    if (r < 0.33) return PURCHASE_AVAILABLITY.ONLINE_STORE;
    else if (r < 0.66) return PURCHASE_AVAILABLITY.POINT_OF_SALE;
    else return PURCHASE_AVAILABLITY.BUY_BUTTON;
};

export const returnProduct = () => {
    const r = Math.random();
    if (r < 0.33) return PRODUCT_TYPE.T_SHIRT;
    else if (r < 0.66) return PRODUCT_TYPE.ACCESSORY;
    else return PRODUCT_TYPE.GIFT_CARD;
};

export const returnStatus = () => {
    const r = Math.random();
    if (r < 0.33) return STATUS_TYPE.ACTIVE;
    else if (r < 0.66) return STATUS_TYPE.ARCHIEVED;
    else return STATUS_TYPE.DRAFT;
};

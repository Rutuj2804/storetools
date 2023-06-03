import React, { useEffect, useState } from "react";
import DataTableExample from "./ccomponents/DataFrame";
import axios from "axios";
import { Thumbnail } from "@shopify/polaris";
import ProductModel from "./ccomponents/ProductModal";
import {
    PRODUCT_TYPE,
    PURCHASE_AVAILABLITY,
    returnProduct,
    returnPurchase,
    returnStatus,
} from "./utils/functions";
import SideFilters from "./ccomponents/SideFilters";

const App = () => {
    // helper states and functions
    const [filter, setFilter] = useState({
        online: false,
        sale: false,
        buy: false,
        tshirt: false,
        accessory: false,
        gift: false,
    });

    const handleFilterCheckBoxChange = (newChecked, name) =>
        setFilter({ ...filter, [name]: newChecked });

    const [data, setData] = useState([]);
    const [globalData, setGlobalData] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    const [search, setSearch] = useState("");

    const [selected, setSelected] = useState(null);
    const [activeModel, setActiveModel] = useState(false);
    const [sidePanel, setSidePanel] = useState(false);

    const handleRowClick = (data, state = true) => {
        setSelected(data);
        setActiveModel(state);
    };

    // filter
    useEffect(() => {
        let gD = globalData;
        if (filter.online) {
            gD = gD.filter(
                (t) => t.purchase === PURCHASE_AVAILABLITY.ONLINE_STORE
            );
        }
        if (filter.sale) {
            gD = gD.filter(
                (t) => t.purchase === PURCHASE_AVAILABLITY.POINT_OF_SALE
            );
        }
        if (filter.buy) {
            gD = gD.filter(
                (t) => t.purchase === PURCHASE_AVAILABLITY.ONLINE_STORE
            );
        }
        if (filter.tshirt) {
            gD = gD.filter((t) => t.product === PRODUCT_TYPE.T_SHIRT);
        }
        if (filter.accessory) {
            gD = gD.filter((t) => t.product === PRODUCT_TYPE.ACCESSORY);
        }
        if (filter.gift) {
            gD = gD.filter((t) => t.product === PRODUCT_TYPE.GIFT_CARD);
        }
        if (search) {
            gD = gD.filter((t) =>
                t.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setData(gD);
    }, [filter, search, globalData]);

    // data fetch
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );

            let tempData = [];

            for (let i = 0; i < data.length; i++) {
                let x = {};
                x["title"] = data[i].title;
                x["description"] = data[i].description;
                x["image"] = data[i].image;
                x["price"] = data[i].price;
                x["category"] = data[i].category;
                x["rate"] = data[i].rating.rate;
                x["count"] = data[i].rating.count;
                x["purchase"] = returnPurchase();
                x["product"] = returnProduct();
                x["status"] = returnStatus();

                tempData.push(x);
            }

            setData(tempData);
            setGlobalData(tempData);
        };
        fetchData();
    }, []);

    // display ready data
    useEffect(() => {
        let dD = [];

        for (let i = 0; i < data.length; i++) {
            const t = [
                <div className="cursor" onClick={() => handleRowClick(data[i])}>
                    <Thumbnail source={data[i].image} alt={data[i].image} />
                </div>,
                <div className="cursor" onClick={() => handleRowClick(data[i])}>
                    {data[i].title.slice(0, 20) + "..."}
                </div>,
                <div className="tag cursor" onClick={() => handleRowClick(data[i])}>
                    {data[i].status.toLowerCase()}
                </div>,
                <div className="cursor" onClick={() => handleRowClick(data[i])}>
                    {data[i].price}
                </div>,
                <div className="cursor" onClick={() => handleRowClick(data[i])}>
                    {data[i].category}
                </div>,
                <div className="cursor" onClick={() => handleRowClick(data[i])}>
                    {data[i].rate},
                </div>,
            ];

            dD.push(t);
        }

        setDisplayData(dD);
    }, [data]);

    return (
        <div>
            <DataTableExample
                data={displayData}
                handleFilterCheckBoxChange={handleFilterCheckBoxChange}
                filter={filter}
                setFilter={setFilter}
                setSearch={setSearch}
                search={search}
                setSidePanel={setSidePanel}
            />
            {selected ? (
                <ProductModel
                    active={activeModel}
                    handleChange={handleRowClick}
                    data={selected}
                />
            ) : null}
            <SideFilters
                sidePanel={sidePanel}
                setSidePanel={setSidePanel}
                handleFilterCheckBoxChange={handleFilterCheckBoxChange}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default App;

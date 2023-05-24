import Cover from "../../Shared/Cover/Cover";
import foodCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";



const Order = () => {
    const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
    const {category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover
                img={foodCoverImg}
                title={"Order Now"}
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList classID="uppercase">
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={desserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                        <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;
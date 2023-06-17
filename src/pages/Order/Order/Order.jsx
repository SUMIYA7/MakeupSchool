import { useState } from 'react';
// import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['Face', 'Eye', 'Hair', 'skin', 'Cosmetics'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const face = menu.filter(item => item.category === 'Face');
    const eye = menu.filter(item => item.category === 'Eye');
    const hair = menu.filter(item => item.category === 'Hair');
    const skin = menu.filter(item => item.category === 'Skin');
    const cosmetics = menu.filter(item => item.category === 'Cosmetics');

    return (
        <div>
            <Helmet>
                <title>Makeup School | Select Course</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Select Course"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Face</Tab>
                    <Tab>Eye</Tab>
                    <Tab>Hair</Tab>
                    <Tab>Skin</Tab>
                    <Tab>Cosmetics</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={face}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={eye}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={hair}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={skin}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={cosmetics}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
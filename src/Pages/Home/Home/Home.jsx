import { Helmet } from "react-helmet-async";
import CallNumber from "../../../Components/callNumber/CallNumber";
import Banner from "../Banner/Banner";
import SingleBanner from "../Banner/SingleBanner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import MenuItems from "../MenuItems/MenuItems";
import Testimonials from "../Testmonials/Testimonials";
import ChefRecommends from "./ChefRecommends/ChefRecommends";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SingleBanner></SingleBanner>
            <MenuItems></MenuItems>
            <CallNumber></CallNumber>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
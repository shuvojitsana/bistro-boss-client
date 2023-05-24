import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import imgMenu from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
  
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={imgMenu} title='our menu'></Cover>
            {/* offered menu items */}
            <SectionTitle
            subHeading="Don't miss"
            heading="Today's offer"
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
                items={desserts}
                img={dessertImg}
                title="desserts"
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                img={pizzaImg}
                title="pizza"
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                img={saladImg}
                title="salad"
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soup}
                img={soupImg}
                title="soup"
            ></MenuCategory>

        </div>
    );
};

export default Menu;
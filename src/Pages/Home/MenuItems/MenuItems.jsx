
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuItems = () => {
    const [menu]  = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularMenu = data.filter(item => item.category === 'popular')
    //         setMenu(popularMenu)
    //     })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Popular MenuItems"
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default MenuItems;
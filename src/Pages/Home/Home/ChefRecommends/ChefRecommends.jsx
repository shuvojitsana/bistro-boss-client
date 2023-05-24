import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import FoodCard from "../../../../Components/FoodCard/FoodCard";


const ChefRecommends = () => {
    const [menu, setMenu] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])
    return (
        <div className="my-10">
            <SectionTitle
            subHeading='Should Try'
            heading='CHEF RECOMMENDS'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    menu.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>

        </div>
    );
};

export default ChefRecommends;
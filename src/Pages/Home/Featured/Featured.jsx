import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import "./Featured.css"


const Featured = () => {
    return (
        <div className="featured bg-fixed  text-white pt-8 my-20">
            <SectionTitle
            subHeading='Check it out'
            heading='From our Menu'
            ></SectionTitle>

            <div className="flex justify-center items-center gap-7 pt-12 pb-20 px-36">
                <div>
                    <img  src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 29, 2023</p>
                    <h3 className="my-2">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
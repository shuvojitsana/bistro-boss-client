

const FoodCard = ({ item }) => {
    const {image, price, recipe, name} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className= "absolute right-0 mr-4 mt-4 px-4 rounded py-1 bg-slate-950 text-white ">${price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-orange-500  border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
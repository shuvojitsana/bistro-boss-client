import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    // add to cart 
    const handleAddToCart = item => {
        console.log(item);
        
        if (user && user.email) {
            const orderItem = {menuItemId: _id, name, price, image, email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();  // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food cart items saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded py-1 bg-slate-950 text-white ">${price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-500  border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
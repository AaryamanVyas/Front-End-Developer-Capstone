const specialsData = [
    {
      id: 1,
      name: 'Greek Salad',
      description: 'A fresh mix of lettuce, tomatoes, and cucumbers.',
      price: '$12.99',
      image: 'path-to-image1.jpg', // Replace with actual path
    },
    {
      id: 2,
      name: 'Bruschetta',
      description: 'Grilled bread with garlic, tomatoes, and basil.',
      price: '$9.99',
      image: 'path-to-image2.jpg', // Replace with actual path
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      description: 'A tangy and sweet lemon dessert with a graham crust.',
      price: '$5.00',
      image: 'path-to-image3.jpg', // Replace with actual path
    },
  ];
  
function Specials() {
    return(
        <div className="specials">
            <h2>This week's Specials</h2>
            <div className="specials-list">
                {specialsData.map((special,index) => (
                    <div key={index} className="special">
                        <img src={special.imgUrl} alt={special.name}/>
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                        <span>{special.price}</span>
                        <button>Order Delivery</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Specials;
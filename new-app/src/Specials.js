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
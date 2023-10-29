import samsung from '/img/SAMSUNG-GALAXY-S23-ULTRA.jpeg';

const CartBuy = () => {
    return (
        <div className='container'>
            <h1>
                carts and buy
            </h1>

            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={samsung} className="img-fluid rounded-start" alt="Samsung Galaxy" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            {/* increment and decrement buttons */}
                            
                            {/* add to cart and  buy button */}
                            <div className="justify-content-evenly"> 
                                <button type="button" class="btn btn-outline-warning mx-3" id='add-cart'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                    </svg></span> 
                                    Add to cart
                                </button>
                                <button type="button" class="btn btn-outline-warning mx-3">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default CartBuy;
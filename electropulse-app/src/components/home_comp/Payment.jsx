


const Payment = () => {
    return(
        <>
            <div className="container bg-p mt-5 "> 
                {/* <div className="bg-warning text text-center rounded-3 my-3 ">
                    <h1 className="py-2 ">Payments</h1>
                </div> */}
               
                {/* <div className=" container-sm d-flex justify-content-between my-5">
                    <div>
                        <h4 className="mx-3">Address for delivery</h4>
                        
                        <button type="button" className="btn btn-outline-warning mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                            Add Address
                        </button>
                    </div>
                </div> */}

                <div className=" bg-white border border-warning-subtle border border-2 rounded-2">
                    <div>

                    </div>
                    <div className="bg-warning text-center">
                        <h3 className="py-3">Payment Methords</h3>
                    </div>
                    <div className="container-sm d-flex flex-column flex-sm-row justify-content-around my-5">
                        <h4 className="mx-3">Address for delivery</h4>
                        <button type="button" className="btn btn-outline-warning btn-sm my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                            Add Address
                        </button>
                    </div>

                    <div className=" d-flex justify-content-center align-items-center my-4">
                    <button type="button" className="btn btn-outline-warning ">                   
                        M-pesa
                    </button>
                    <button type="button" className="btn btn-outline-warning mx-5">                    
                        paypal
                    </button>  
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="border border-warning-subtle text-dark p-2 w-75">
                            <p className="mx-3">Confirm Phone No. then click 'Place Order' to generate payment request to your phone.</p>
                            <p className="mx-3">Enter your MPESA PIN on prompt pop-up on your phone to complete the payment.</p>
                        </div>
                    </div>

                    <div className="container-sm my-5 d-flex justify-content-center align-items-center">
                        <div className="">
                        <label htmlFor="" className="form-label text-dark mx-5">M-pesa no:</label>
                        <input type="text" className=" mx-5border border-warning border-2 rounded-2 mx-5" placeholder="0712345678" id="phone-num"/>
                        </div>
                    </div>

                    <div className="container-sm d-flex flex-column flex-sm-row justify-content-around">
                        <p className="my-3 fs-5">Total Ksh: </p>
                        <button type="button" className="btn btn-outline-warning btn-sm my-3">
                            Place Order
                        </button>
                    </div>


                    
                    
                </div>


                
                
            </div>
        </>
    )
}

export default Payment
import React from "react";

const Newsletter = () => {
    return (
        <section className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <p className="h4">New to ElectroPulse?</p>
                        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    </div>
                    <form className="d-flex mt-3">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Newsletter;
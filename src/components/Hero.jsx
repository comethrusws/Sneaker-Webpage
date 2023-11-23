const Hero = () =>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <p>BUY THE NEWEST  Nike SB Dunks! AND ELEVATE YOUR SNEAKER COLLECTION </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>

                    <div className="shop">
                        <p>Also Available on:</p>

                        <div className="brand-logo">
                            <img style={{ width: 32, height: 32}} src="/amz.png" alt="Amazon-logo" />
                        </div>

                    </div>

                 </div>
            </div>
            <div className="hero-image">
                <img src="public/shoe.png" alt="shoe" />
            </div>
        </main>
    );
};

export default Hero;
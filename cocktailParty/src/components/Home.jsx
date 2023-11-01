const Home = () => {
    return (
    <>
        <div className="home-container">
            <div className="about-container">
                <h2 className="about-header">About Us</h2>
                <p className="about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla a recusandae nisi, fuga quam ipsam minima quos praesentium corporis non. Vel quam, provident asperiores eveniet aperiam qui iste corporis! Sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum vel dicta doloribus, obcaecati eligendi voluptates impedit, dolor praesentium nobis itaque quia modi quidem ipsam? Doloremque nesciunt saepe illo dignissimos.</p>
            </div>
            <div className="pic-container">
                <img className="home-img" src='src/assets/photo-1514362545857-3bc16c4c7d1b.avif'/>
            </div>
        </div>
        <div className="about-cards">
            <div className="tuhmid">
                <h2>Tschlime</h2>
                <img className="card-img" src="src/assets/tahmid.avif"></img>
                <div className="card-p">
                    <ul>
                        <li><strong>Favorite Drink:</strong> Mint Julep</li>
                        <li><strong>Ingredients:</strong> Mint, Bourbon, Sugar, Water</li>
                    </ul>
                </div>
            </div>
            <div className="tk">
                <h2>TigerKing 'TK'</h2>
                <img className="card-img" src="src/assets/sage.webp"></img>
                <div className="card-p">
                    <ul>
                        <li><strong>Favorite Drink:</strong> The Tiger King</li>
                        <li><strong>Ingredients:</strong> Jager, Orange RedBull</li>
                    </ul>
                </div>
            </div>
            <div className="rogers">
                <h2>Mr. Rogers</h2>
                <img className="card-img" src="src/assets/billy.jpg"></img>
                <div className="card-p">
                    <ul>
                        <li><strong>Favorite Drink:</strong> Negroni</li>
                        <li><strong>Ingredients:</strong> Gin, Campari, Dry Vermouth</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home
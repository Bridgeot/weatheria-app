import '../../styles/Home.css';

function Home() {
    return (
        <section className='home-section'>
            <div className='about-container'>
                <div className='about-align'>
                    <h1 className='about-title'>About Weatheria</h1>
                    <div className='about-statement'>
                        <p>
                        Want to know what the weather is going to be like today? 
                        Just open the Weatheria app to get quick insights on current weather conditions and forecasts for your local area or other cities located around the world. 
                        You can also get a head start on the weather by using the app's checklist feature to ensure you start off your morning always well-prepared.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
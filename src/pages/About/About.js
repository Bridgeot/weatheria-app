import './About.css';

function About(props) {
    return (
        <section className='about-section'>
            <div className='about-container'>
                <div className='about-align'>
                    <h1 className='about-title'>About Weatheria</h1>
                    <div className='about-statement'>
                        <p>
                            Want to know what the weather is going to be like today? 
                            Just open the Weatheria app to get a quick forecast of your local area. 
                            You can also search weather conditions in cities to see what the weather is like there and get a heads-up before you make plans to travel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
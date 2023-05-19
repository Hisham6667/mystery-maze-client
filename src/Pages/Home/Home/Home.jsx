import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <div className='w-full h-96 bg-red-500 border-4 border-black' data-aos="flip-up">

            </div>
        </div>
    );
};

export default Home;
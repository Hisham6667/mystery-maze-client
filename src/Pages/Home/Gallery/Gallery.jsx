import slide1 from '../../../assets/images/slide1.jpg'
import slide2 from '../../../assets/images/slide2.jpg'
import slide3 from '../../../assets/images/slide3.jpg'
import slide4 from '../../../assets/images/slide4.jpg'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const Gallery = () => {
    return (
        <div className='mb-20'>
            <div className='mb-8'>
                <p className='text-2xl lg:text-5xl font-bold text-center'>Featured <span className='text-red-500'>P</span>uzzles & <span className='text-red-500'>B</span>oard games</p>
            </div>
            <div className="carousel w-5/6 h-96 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full" />
                    <div className="absolute flex justify-between left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowLeft /></a>
                        <a href="#slide2" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowRight /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full" />
                    <div className="absolute flex justify-between left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowLeft /></a>
                        <a href="#slide3" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full" />
                    <div className="absolute flex justify-between left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowLeft /></a>
                        <a href="#slide4" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full" />
                    <div className="absolute flex justify-between left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowLeft /></a>
                        <a href="#slide1" className="text-white hover:text-red-200 text-4xl shadow-2xl bg-red-900 rounded-full"><MdOutlineArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
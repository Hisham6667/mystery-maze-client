import { FaRegStar, FaStar } from 'react-icons/fa';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTabs = () => {
    return (
        <div className='w-full mb-20'>
            <Tabs className='w-4/6 mx-auto border-y-2 border-red-400 rounded-xl py-7'>

                <div className='flex justify-center items-center text-xl font-semibold'>
                    <TabList>
                        <Tab>Jigsaw Puzzles</Tab>
                        <Tab>Board Games</Tab>
                        <Tab>Mechanical Puzzles</Tab>
                    </TabList>
                </div>

                <TabPanel className='mx-auto'>
                    <div className='grid grid-cols-2 gap-10' data-aos="zoom-in">
                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/B3pGW0G/wildlife-Adventure.png" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Wildlife Adventure</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />14.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4.5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/Hq2jGj6/historical-Masterpieces.jpg" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Historical Masterpieces</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />19.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel className='mx-auto'>
                    <div className='grid grid-cols-2 gap-10' data-aos="zoom-in">
                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/FKwNQWf/classic-Wooden-Chess-Set.png" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Classic Chess Set</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />24.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/7WQ6xrw/settlers-Of-Catan.jpg" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Settlers of Catan</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />17.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4.5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel className='mx-auto'>
                    <div className='grid grid-cols-2 gap-10' data-aos="zoom-in">
                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/DDMwZ6r/secret-Lock-Box.png" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Secret Lock Box</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />21.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4.5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center py-5">
                            <div className='mb-5'>
                                <img src="https://i.ibb.co/2q61TLH/GearMaze.png" className="rounded-full w-64 h-64 p-2" />
                            </div>
                            <div>

                                <p className='text-center text-red-500 text-4xl font-semibold mb-3'>Gear Maze</p>

                                <div className='text-lg flex items-center justify-around mb-4'>
                                    <p className='flex items-center'><RiMoneyDollarCircleLine className="mr-2 text-green-400" />29.99</p>
                                    <p>
                                        <Rating className="text-yellow-300"
                                            placeholderRating={4}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                        />
                                    </p>
                                </div>

                                <p className='text-center'>
                                    <Link to='/alltoys'>
                                        <button className="btn btn-outline btn-error">View All Toys<HiArrowSmallRight /></button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ToyTabs;
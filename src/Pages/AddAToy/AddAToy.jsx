

const AddAToy = () => {
    const handleToyAddition = event => {
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stock = form.stock.value;
        const url = form.url.value;
        const newToy = {toyName, seller, email, category, price, rating, stock, url}
        console.log(newToy);

        fetch('http://localhost:5000/usertoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="w-full">
            <form onSubmit={handleToyAddition} className="w-2/3  mx-auto py-10 px-5 shadow-md border-t-red-500 border-t rounded-xl" data-aos="zoom-in">

                <div className='w-full mb-5'>
                    <p className='text-red-500 text-4xl text-center font-medium'>Add Your Toys</p>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' placeholder="Type a toy name like puzzle/board/chess" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Username</span>
                        </label>
                        <input type="text" name='seller' placeholder="Type Your Name" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type Your Email" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Type a category" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Type Your Demand" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder="Type the product rating" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">IN Stock</span>
                        </label>
                        <input type="number" name='stock' placeholder="Type how much in stock" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text text-xl">Picture URL</span>
                        </label>
                        <input type="url" name='url' placeholder="Type picture url" className="input focus:outline-none focus:bg-red-100/30 border border-red-100" required />
                    </div>
                </div>

                {/* {error && <div className='text-center text-error mb-4 flex justify-center items-center'>
                    <FcHighPriority className='mr-3 text-xl' />{error}
                </div>} */}

                <div className="form-control mb-5">
                    <button type='submit' className="border border-red-500 p-3 rounded-xl text-xl hover:border-white hover:bg-red-500 hover:text-white transition-all active:border-red-500 active:bg-white active:text-black">Proceed</button>
                </div>

            </form>
        </div>
    );
};

export default AddAToy;
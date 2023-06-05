const View = () => {

    return (
        <div className='rounded-md p-36' >
            <h1 className='text-3xl font-semibold text-center pb-10 text-orange-500'>POSTS</h1>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                <a href="/" aria-label="Article">
                    <img
                        src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        className="object-cover w-full items-center justify-center h-72 rounded"
                        alt=""
                    />
                </a>
                <div className="py-5">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-2xl font-bold leading-5">Title is here</p>
                    </a>
                    <p className="mb-4 text-gray-700">
                        'As an eCommerce business owner, your ultimate goal is to convert website visitors into paying customers. To achieve this, you need to have an optimized website that caters to the needs of your customers. In this article, we will explore five eCommerce features that can help boost your conversion rate and improve the overall shopping experience for your customers. Easy and Intuitive NavigationThe first feature that can help boost your conversion rate is easy and intuitive navigation. Your website should be easy to use and navigate, allowing customers to find the products they are looking for quickly and easily. Use clear and concise labels, categories, and filters to help customers find what they want. Also, make sure your website is mobile-responsive to cater to the growing number of customers who use their smartphones to shop online.Product Reviews and RatingsProduct reviews and ratings are other features that can help increase your conversion rate. According to a study, 90% of customers read online reviews before making a purchase. Including reviews and ratings on your product pages can help customers make informed decisions and increase trust in your brand. Encourage customers to leave reviews by offering incentives such as discounts or free shipping.',
                    </p>
                    <div className='flex gap-6'>
                        <img
                            src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            className="object-cover rounded-full h-8"
                            alt=""
                        />
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase text-center" >
                            Author Name here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
import Image from "next/image";

const Images = () => {
    return (
        <div>
            <Image
                src="/single_product/main.png"
                alt='product Image'
                width={410}
                height={400}
                className='rounded-lg object-cover mx-auto'
            />
            {/* Aditto niche 4 ta imag diye slider banaba */}
            <div className="flex items-center justify-between px-3 gap-3">
                <Image
                    src="/single_product/1.png"
                    alt='product Image'
                    width={150}
                    height={100} />
                <Image
                    src="/single_product/2.png"
                    alt='product Image'
                    width={150}
                    height={100} />
                <Image
                    src="/single_product/3.png"
                    alt='product Image'
                    width={150}
                    height={100} />
                <Image
                    src="/single_product/4.png"
                    alt='product Image'
                    width={150}
                    height={100} />
            </div>

            <div className="bg-[#F5F5F5] p-4 rounded-lg shadow-lg mt-5 flex justify-around items-center h-[120px]">
                <div className="">
                    <p className="text-2xl font-medium text-[#38311F]">Have a Question?</p>
                    <p className="text-sm mt-2 text-[#837F74]">Start Conversation with Seller</p>
                </div>
                <button className="bg-[#9ED2FF] text-[#38311F] px-6 py-2 rounded-full font-semibold">Chat Now</button>
            </div>

        </div>
    );
};

export default Images;
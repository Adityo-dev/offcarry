
import Images from './Images';
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';

const ImageAndDetails = () => {
    return (
        <div className='container mx-auto px-4 pt-6 mb-20'>
            <div className='grid grid-cols-12 gap-14'>
                <div className='col-span-6'>
                    <Images />
                </div>
                <div className='col-span-6'>
                    <ProductDetails />
                </div>
            </div>
            <ProductTabs />

            {/* todo : past Related Products component  */}
            
        </div>
    );
};

export default ImageAndDetails;

import { formatPrice } from './helpers';
import { Product } from './types';

 type Props = {
     product: Product;
     onSelectProduct: (product: Product) => void;
     isSelected: boolean;
 }


function ProductsCard({product, onSelectProduct, isSelected}:Props){
    return (
       <div onClick={() => onSelectProduct(product)} className= {`orders-card-container ${isSelected ? 'selected' : ''}`}>
           <h3 className="orders-card-title">
               {product.name}
           </h3>
            < img src={product.imageUri}className="order-card-image" alt={product.name}/>
            <h3 className="orders-card-price"> {formatPrice(product.price)}</h3>

            <div className="orders-card-description">
                <h3>Descrição</h3>
                <p>
                   {product.description}
                </p>
            </div>

       </div>
    )
    }
    
    
    export default ProductsCard;
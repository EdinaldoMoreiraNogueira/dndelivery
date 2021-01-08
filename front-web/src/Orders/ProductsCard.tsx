
import { Product } from './types';

 type Props = {
     product: Product;
 }

function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
       
    });

    return formatter.format(price)
}

function ProductsCard({product}:Props){
    return (
       <div className="orders-card-container">
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
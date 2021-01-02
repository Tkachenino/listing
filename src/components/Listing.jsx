import PropTypes from 'prop-types';

const Listing = ({items}) => {
  return (
    <div className="item-list">
  
      {items.filter(({state}) => state === 'active').map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt='Фото товара'/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {`${item.title.slice(0, 50)}${item.title.length <= 50 ? '' : '...'}`}
              </p>
            <p className="item-price">
              {item.currency_code === 'USD' ? `$${item.price}` 
              : item.currency_code === 'EUR' ? `€${item.price}` 
              : `${item.price} ${item.currency_code}`}
              </p>
            <p 
            className={`item-quantity 
             ${item.quantity <= 10 ? 'level-low' 
            : item.quantity <= 20 ? 'level-medium'
            : 'level-high'}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
     
    </div>
  )
};

Listing.defaultProps = {
  items: []
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN:  PropTypes.string
    }),
    title: PropTypes.string,
    price: PropTypes.string,
    currency_code: PropTypes.string,
    quantity: PropTypes.number
  }))
};

export default Listing;
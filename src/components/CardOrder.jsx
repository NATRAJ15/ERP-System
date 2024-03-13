import css from './CardOrder.module.css'

export default function CardOrder({mock}) {
  return (
    <div className={css.main}>
        <div className={css.header}>
            <div className={css.dpCtn}>
              <img className={css.isVisible} src='https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png' alt=""/> 
            </div>
        </div>
        <div className={css.body}>
            <h3 className={css.name}>{mock.customer_name}</h3>
            <h5 className={css.location}>Date : {mock.order_date}</h5>
            <div className={css.tagCtn}>
              <div className={css.tagCtnInner}>
                <span>{mock.status}</span>
              </div>
            </div>
            <h5 className={css.bio}>Order ID: #{mock.orderId.id}</h5>
        </div>
    </div>
  );
}
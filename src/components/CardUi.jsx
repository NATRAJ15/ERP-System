import css from './CardUi.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardUi({mock, onDelete}) {
  return (
    <div className={css.main}>
        <DeleteIcon onClick={()=>onDelete(mock.name)} color='primary' style={{position: 'absolute', top: '10', right: '10',cursor: 'pointer'}}/>
        <div className={css.header}>
            <div className={css.dpCtn}>
              <img className={css.isVisible} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0h_Lh1ymAfDEBdxNm4DkKvYjcx4T2rvu8h2ennHvnQ&s' alt=""/> 
            </div>
        </div>
        <div className={css.body}>
            <h3 className={css.name}>Rs. {mock.price}</h3>
            <h5 className={css.location}>Available : {mock.quantity}</h5>
            <div className={css.tagCtn}>
              <div className={css.tagCtnInner}>
                {mock.category.map((c) =>(
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <h5 className={css.bio}>{mock.name}</h5>
        </div>
    </div>
  );
}
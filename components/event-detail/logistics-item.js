import style from './logistics-item.module.css';

function LogisticsItem(props) {
   const { icon: Icon } = props;

   return (
      <li className={style.item}>
         <span className={style.icon}>
            <Icon />
         </span>
         <span className={style.content}>{props.children}</span>
      </li>
   );
}

export default LogisticsItem;

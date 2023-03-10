import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import style from './event-logistics.module.css';

function EventLogistics(props) {
   const { date, address, image, imageAlt } = props;

   const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   });
   const addressText = address.replace(', ', '\n');

   return (
      <section className={style.logistics}>
         <div className={style.image}>
            <img src={`/${image}`} alt={imageAlt} />
         </div>
         <ul className={style.list}>
            <LogisticsItem icon={DateIcon}>
               <time>{humanReadableDate}</time>
            </LogisticsItem>
            <LogisticsItem icon={AddressIcon}>
               <address>{addressText}</address>
            </LogisticsItem>
         </ul>
      </section>
   );
}

export default EventLogistics;

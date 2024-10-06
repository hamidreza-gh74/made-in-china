import "./More_Card_Zone.scss";

const More_Card_Zone = ({ item }) => {
  return (
    <div className="zone_more_card_h">
      <a href="#" className="zone_more_pic_h">
        <img src={item.src} alt="" width="100%" height="100%" />
      </a>

      <a href="#" className="zone_more_titr_h">{item.titr}</a>
      <div className="zone_more_coment_h">
        {item.coment.map((part,index) => {
          return <div key={index} className="coment_part_h">{part}</div>;
        })}
      </div>

      <div className="zone_more_icon_h">
        {item.icon.map((part,index) => {
          return <img key={index} src={part} width="14px" height="14px" />;
        })}
      </div>
    </div>
  );
};

export default More_Card_Zone;

import Title from "../../Title/Title";
import "./Section.scss";

const Section = ({ part }) => {
  return (
    <div className="section_containar_h">
      <Title>{part.title}</Title>
      {/* ....line start ..... */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#eeee",
        }}
      ></div>

      {/* .... line end .... */}

      <div className="popular_section_containar_h">
        {part.list.map((item) => {
          return (
            <a href="#"  key={item.id} className="popular_section_item_h">
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Section;

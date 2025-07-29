import { useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ backgroundColor: "#f0f0f0", height: "60vh" }}>
      <h1>Detalle del contacto: {id}</h1>
    </div>
  );
};

export default ContactDetail;

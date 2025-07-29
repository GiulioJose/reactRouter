import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#ffebcd", height: "60vh" }}>
      <h1>Contact Page</h1>
      <p>
        Ver contacto específico: <Link to="/contact/42">Contacto #42</Link>
      </p>
    </div>
  );
};

export default Contact;

import {
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaSolarPanel,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ServiceCards.css";

const services = [
  {
    icon: <FaTools />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
    path: "/Installation_&_Commissioning_(INC)",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
    path: "/Engineering_Procurement_and_Construction_(EPC)",
  },
  {
    icon: <FaCog />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
    path: "/Operations_&_Maintenance_(O&M)",
  },
  {
    icon: <FaRecycle />,
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Divy Power provides AMC services for diesel generators, solar systems, and other equipment to ensure long-term reliability.",
    path: "/Annual_Maintenance_Contracts(AMC)",
  },
  {
    icon: <FaSolarPanel />,
    title: "Health Check ups",
    description:
      "We provide complete care for your car, including expert advice, repairs, and preferred maintenance services.",
    path: "/Health_Check_ups",
  },
];

const ServiceCards = () => {
  const navigate = useNavigate();

  return (
    <div className="service-container mt-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="cardd"
          onClick={() => navigate(service.path)}
        >
          {/* Icon and Title */}
          <div className="cardd__front">
            <div className="cardd__icon">{service.icon}</div>
            <p className="cardd__title text-white">{service.title}</p>
          </div>

          {/* Hover Content */}
          <div className="cardd__content">
            <p className="cardd__title">{service.title}</p>
            <p className="cardd__description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

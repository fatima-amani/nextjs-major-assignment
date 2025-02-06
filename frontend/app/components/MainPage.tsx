import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Staff from "./Staff";
import Profile from "./Profile";
import Demo from "./Demo"; 

interface MainPageProps {
  activeSection: string;
}

export default function MainPage({ activeSection }: MainPageProps) {
  
  const renderComponent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Menu":
        return <Menu />;
      case "Staff":
        return <Staff />;
      case "Profile":
        return <Profile />;
      case "Inventory":
      case "Reports":
      case "Order/Table":
      case "Reservation":
        return <Demo sectionName={activeSection} />; // Use a generic demo page
      default:
        return <div className="text-white text-center p-10">Section Not Found</div>;
    }
  };

  return <div className="">{renderComponent()}</div>;
}

import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="flex items-center h-14 px-6">
      <div>
        <Link to={"/"}>
          <p className="text-3xl">
            Ho<span className="border-b-2 border-green-600">me</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;

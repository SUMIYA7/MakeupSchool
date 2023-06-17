import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
      <section className="mb-12">
        <SectionTitle
          heading="Best of the Week"
          subHeading="Popular Classes"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className=" btn-home">
          <Link to="/allclasses">
            <button className="btn  btn-abc mt-5">View Classes</button>
          </Link>
        </div>
      </section>
    );
};

export default PopularMenu;
import Popular from "../Products/Category/Popular";
import Trending from "../Products/Category/Trending";
import Banner from "./Banner";
import CategoryList from "./CategoryList";



const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <CategoryList/>
            <Popular/>
            <Trending/>
        </div>
    );
};

export default Home;
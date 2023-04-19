import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Result from "../Components/Result/Result";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

export default function Layout() {
  const getTheme = useSelector(
    (state) => state.rootReducer.themeState.currentTheme
  );
  return (
    <div className={`layout_main ${getTheme ? "darktheme" : ""}`}>
      <div className="layout_sub">
        <Header />
        <Search />
        <Result />
        <Footer />
      </div>
    </div>
  );
}

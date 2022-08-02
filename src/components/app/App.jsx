import "./App.css";
import { Products } from "../products/Products";
import { useEffect, useState } from "react";

// with v16.8 react introduced hooks
// useState
// useEffect
// useRef
// useContext
// useCallback
// useLayoutEffect
// useReducers

function App(props) {
  const [category, setCategory] = useState(""); // this.state = { category: '' }; this.setState({ category: 'avalue' });
  const [subCategory, setSubCategory] = useState("Initial subcat");
  // console.log("app props", props);

  // componentDidMount, componentWillUnmount, shouldComponentUpdate, updating phase
  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("unmounting");
    };
  }, [props.appTitle, category]);

  return (
    <div className="App">
      <Products subCategory={subCategory} category={category} />
      <form action="">
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          name="subcategory"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />
        <button type="submit" onClick={(e) => {e.preventDefault(); console.log(category, subCategory)}}>Submit</button>
      </form>
    </div>
  );
}

export default App;

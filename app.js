/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>h1 tag</h1>
 *          <h2>h2 tag</h2>
 *      </div>
 * <div id="child2">
 *          <h1>h1 tag</h1>
 *          <h2>h2 tag</h2>
 *      </div>
 * </div>
 */

/**
 * React.createElement(name of the tag, object of attribute, children)
 * children can be multiple so put that it in array[]
 */

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")])]);
// const heading = React.createElement("h1", { id: "heading", cstmAttr: "testattr" }, "Hello World from React!");
// console.log(heading); //return as js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

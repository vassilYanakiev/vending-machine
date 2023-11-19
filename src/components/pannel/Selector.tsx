import "./Pannel-styling.scss";

const Selector = () => {
  return (
    <form className="Selector">
      <h3>Select your item</h3>
      <input type="number" placeholder="Product" min={1} max={12} />
      <button type="submit">BUY</button>
    </form>
  );
};

export default Selector;

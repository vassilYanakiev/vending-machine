import "./Pannel-styling.scss";

const Display = ({ amount }: { amount: number }) => {
  return (
    <div className="Display">
      <div className="credit">
        <span>Credit:</span>
        <span>{amount}</span>
      </div>
      <div className="selection">
        <span>Selection:</span>
        <span>Apple</span>
      </div>
    </div>
  );
};

export default Display;

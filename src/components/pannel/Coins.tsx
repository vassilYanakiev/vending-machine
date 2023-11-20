import "./Pannel-styling.scss";

interface CoinsProps {
  handleAddCoin: (value: number) => void;
}

const Coins = ({ handleAddCoin }: CoinsProps) => {
  const coinValues = [0.05, 0.1, 0.2, 0.5, 1, 2];

  return (
    <>
      <h3>Insert coins here</h3>
      <div className="Coins">
        {coinValues.map((value, index) => (
          <button
            key={index}
            className="coin-button"
            onClick={() => handleAddCoin(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
};

export default Coins;

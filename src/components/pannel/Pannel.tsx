import { useState } from "react";
import Coins from "./Coins";
import Display from "./Display";
import Selector from "./Selector";

const Pannel = () => {
  const [amount, setAmount] = useState(0);

  const handleAddCoin = (value: number) => {
    setAmount((prev) => (prev * 10 + value * 10) / 10);
  };

  return (
    <div className="Pannel">
      <Coins handleAddCoin={handleAddCoin} />
      <Display amount={amount} />
      <Selector amount={amount} setAmount={setAmount} />
    </div>
  );
};

export default Pannel;

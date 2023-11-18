const Dispenser = () => {
  // const { state, dispatch } = useContext(VendingMachineContext);

  return (
    <div className="Dispenser">
      <button
        className="Dispenser__button"
        // onClick={() => dispatch({ type: "RESET" })}
      >
        Collect items
      </button>
    </div>
  );
};

export default Dispenser;

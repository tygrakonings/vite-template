import "./DrinkButtons.css";
import "./Buttons";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        <button className="button">{drinkOne}</button>
        <button className="button">{drinkTwo}</button>
      </div>
    </>
  );
};

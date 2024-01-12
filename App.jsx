import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = tea;

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={coffee.name} drinkTwo={tea.name} />
      <DrinkChoice drink={userDrink} />
    </div>
  );
};

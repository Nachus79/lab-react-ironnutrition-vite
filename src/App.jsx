import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => food.name !== foodName);
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foods.map((foodItem) => (
        <FoodBox
          key={foodItem.name}
          food={foodItem}
          onDelete={deleteFood}
        />
      ))}
    </div>
  );
}

export default App;


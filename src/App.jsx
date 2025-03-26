import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const mockFood = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1,
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsJson.map((foodItem, index) => (
        <FoodBox key={index} food={foodItem} />
      ))}
    </div>
  );
}

export default App;



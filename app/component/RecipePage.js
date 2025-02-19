"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Village Food", "Home made Food", "snakes", "Seafood"];
const cuisines = ["All", "Italian", "American", "Indian", "Japanese"];

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Village Food",
    cuisine: "Italian",
    image: "/itallian.jpg",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    time: "30 Mins",
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "Home made Food",
    cuisine: "American",
    image: "/amarican.jpg",
    description: "Toast topped with mashed avocado and seasonings.",
    time: "10 Mins",
  },
  {
    id: 3,
    title: "Chicken Biryani",
    category: "snakes",
    cuisine: "Indian",
    image: "/indian.jpg",
    description: "A fragrant rice dish made with spices and chicken.",
    time: "45 Mins",
  },
  {
    id: 4,
    title: "Sushi Rolls",
    category: "Seafood",
    cuisine: "Japanese",
    image: "/japan.jpg",
    description: "Japanese rolls made with vinegared rice and fillings.",
    time: "25 Mins",
  },
];

export default function RecipePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" || recipe.category === selectedCategory) &&
      (selectedCuisine === "All" || recipe.cuisine === selectedCuisine)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/6 p-6 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-500">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer ${
                selectedCategory === category ? "bg-green-500 text-white rounded-md" : "text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* Navbar */}
       

        {/* Page Content */}
        <div className="mt-0 ">
         

          
         

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative w-full h-56">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
                    <p className="text-gray-600">{recipe.category} | {recipe.cuisine}</p>
                    <p className="text-gray-500 mt-1">Total time: {recipe.time}</p>
                  </div>
                  <Link href={`/recipe/${recipe.id}`}>
                    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>


          {/* No Results Message */}
          {filteredRecipes.length === 0 && (
            <p className="text-center text-gray-600 mt-6">No recipes found. Try adjusting the filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
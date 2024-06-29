import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/images/recipes/pizza.jpeg",
            authorImg: "images/topchefs/chef1.jpeg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/recipes/spaghetti.jpeg",
            authorImg: "images/topchefs/chef2.jpeg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/recipes/burger.jpeg",
            authorImg: "images/topchefs/chef3.jpeg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/recipes/biryani.jpeg",
            authorImg: "images/topchefs/chef4.jpeg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/recipes/sushi.jpeg",
            authorImg: "images/topchefs/chef5.jpeg",
        },
        {
            title: "Choco-chip Cookies",
            image: "/images/recipes/cookies.jpeg",
            authorImg: "images/topchefs/chef6.jpeg",
        }, 
        {
            title: "Watermelon Slushie",
            image: "/images/recipes/juice.jpeg",
            authorImg: "images/topchefs/chef3.jpeg",
        },
        {
            title: "White-sauce Pasta",
            image: "/images/recipes/pasta.jpeg",
            authorImg: "images/topchefs/chef2.jpeg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/images/recipes/pizza.jpeg",
            authorImg: "images/topchefs/chef1.jpeg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/recipes/spaghetti.jpeg",
            authorImg: "images/topchefs/chef2.jpeg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/recipes/burger.jpeg",
            authorImg: "images/topchefs/chef3.jpeg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/recipes/biryani.jpeg",
            authorImg: "images/topchefs/chef4.jpeg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/recipes/sushi.jpeg",
            authorImg: "images/topchefs/chef5.jpeg",
        },
        {
            title: "Choco-chip Cookies",
            image: "/images/recipes/cookies.jpeg",
            authorImg: "images/topchefs/chef6.jpeg",
        }, 
        {
            title: "Watermelon Slushie",
            image: "/images/recipes/juice.jpeg",
            authorImg: "images/topchefs/chef3.jpeg",
        },
        {
            title: "White-sauce Pasta",
            image: "/images/recipes/pasta.jpeg",
            authorImg: "images/topchefs/chef2.jpeg",
        }        
    ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <PreviousSearches/>
      <div className="recipes-container">
        {/*<RecipeCard/>*/}
        {recipes.map((recipe,index) => (
           <RecipeCard key={index} recipe={recipe}/>
        ))}
      </div>
    </div>
  )
}

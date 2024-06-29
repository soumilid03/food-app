import ChefCard from "./ChefCard"
export default function ChefSection(){
    const chefs=[
        {
            name: "John Doe",
            img: "/images/topchefs/chef1.jpeg",
            recipeCount: "10",
            cuisine: "Mexican"
        },
        {
            name: "Jamie Oliver",
            img: "/images/topchefs/chef2.jpeg",
            recipeCount: "05",
            cuisine: "Japanese"
        },
        {
            name: "Emeril Lagasse",
            img: "/images/topchefs/chef3.jpeg",
            recipeCount: "14",
            cuisine: "Italian"
        },
        {
            name: "Ina Garten",
            img: "/images/topchefs/chef4.jpeg",
            recipeCount: "16",
            cuisine: "French"
        },
        {
            name: "Alain Ducasse",
            img: "/images/topchefs/chef5.jpeg",
            recipeCount: "11",
            cuisine: "American"
        },
        {
            name: "Clare Smyth",
            img: "/images/topchefs/chef6.jpeg",
            recipeCount: "09",
            cuisine: "Indian"
        }
    ]
    return(
        <div className="section chef">
            <h1 className="title">Our Culinary Masters</h1>
            <div className="top-chef-container">
             {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/> )}            
                
            </div>
        </div>
    )

}
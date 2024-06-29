export default function ImproveSkills(){
    const list = [
        "Experiment with food",
        "Learn new recipes",
        "Know nutrition facts",
        "Write your own recipes",
        "Get culinary tips",
        "Get ranked globally"

    ]


    return(
        <div className="section improve-skills">
            <div className="column img">
            <img src="/images/foodgallery/img10.jpeg" alt=""/>
        
         </div>
        <div className="column typography">
          <h1 className="title">Unleash Your Inner Chef</h1>
          {list.map((item, index) =>(
            <p className="skill-item" key={index}>{item}</p>
          ) ) }
          <button className="btn">Signup now</button>
        </div>
        
      </div>
    )
}
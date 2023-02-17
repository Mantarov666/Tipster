

export const About =()=> { 
    return (
        <div style={{width:'100vw', height:'100vh', backgroundColor:'lightgrey'}}>
        <div className="about-section" >
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the way.
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row" style={{display:'flex', justifyContent: 'space-around', }}>
          <div className="column" style={{width:'30%', height:'50%'}}>
            <div className="card" >
              <img src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=" style={{ width: "100%", height:'30%' }} alt='Vasil'/>
              <div className="container">
                <h2>Vasil Kaloyanov</h2>
                <p className="title">Tipster &amp; Founder</p>
                <p style={{fontStyle: 'italic'}}>Some text that describes me lorem ipsum ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corrupti quas molestias nisi tempore minima, voluptatum adipisci expedita quos eligendi maiores sapiente, esse deserunt! Eum, beatae? Maxime at atque natus.</p>
              
                <p>vasilK@example.com</p>
                
              </div>
            </div>
          </div>
          <div className="column" style={{width:'30%'}}>
            <div className="card">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="Mike" style={{ width: "100%" }} />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Tipster</p>
                <p style={{fontStyle: 'italic'}}>Some text that describes me lorem ipsum ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corrupti quas molestias nisi tempore minima, voluptatum adipisci expedita quos eligendi maiores sapiente, esse deserunt! Eum, beatae? Maxime at atque natus.</p>
              
                <p>mike@example.com</p>
                
              </div>
            </div>
          </div>
          <div className="column" style={{width:'30%'}}>
            <div className="card">
              <img src="https://img.freepik.com/premium-photo/cute-sad-bearded-man-looks-upset-gloomy-camera-isolated-white-background_262238-2855.jpg" alt="John" style={{ width: "100%" }} />
              <div className="container">
                <h2>Stanislav Dryanov</h2>
                <p className="title">Tipster</p>
                <p style={{fontStyle: 'italic'}}>Some text that describes me lorem ipsum ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corrupti quas molestias nisi tempore minima, voluptatum adipisci expedita quos eligendi maiores sapiente, esse deserunt! Eum, beatae? Maxime at atque natus.</p>
                <p>sDryanov@example.com</p>
               
              </div>
            </div>
          </div>
        </div>
        </div>
      
    )
}
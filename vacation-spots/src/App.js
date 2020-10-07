import React from "react"
import vacationData from "./VacationSpots"
import Vacay from "./Vacay"
// import Places from "./Places"

function App (){
    const vacationComponents = vacationData.map(vacation => <Vacay key={vacation.id} vacation={vacation} />)
    
    return(
        <div>
            {vacationComponents}
        </div>
    )
    }

export default App
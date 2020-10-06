import React from "react"
import vacationData from "./VacationSpots"
import Vacay from "./Vacay"

function App (){
    const vacationComponents = vacationData.map(vacation => <Vacay key={vacation.place} vacation={vacation} />)
    
    return(
        <div>
            {vacationComponents}
        </div>
    )

}

export default App
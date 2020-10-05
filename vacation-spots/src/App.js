import React from "react"
import vacationData from "./VacationSpots"
import Vacay from "./Vacay"

function App (){
    const vacationComponents = vacationData.map(vacation => <Vacay place={vacation.place} price={vacation.price} time={vacation.timeToGo} />)
    
    return(
        <div>
            {vacationComponents}
        </div>
    )
}

export default App
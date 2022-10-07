import { getRequests, getClowns, deleteRequest, saveCompletion } from "./DataAccess.js"

export const Requests = () => {
    const requests = getRequests() 
    const clowns = getClowns()
    let html = '<ul>'
    
     const listItemsArray = requests.map(req =>{
    return `<li>
    ${req.name} ${req.birthdayKid} ${req.description} ${req.length} ${req.date}
    <button class="request__delete"
            id="request--${req.id}">
            🗑️
    </button>
    <select class="clowns__selector" id="clowns">
        <option value="">Choose</option>
        ${
            clowns.map(
                clown => {
                    return `<option value="${req.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
        }
    </select>
    </li>`})
   
    html += listItemsArray.join("")
    
    html += '</ul>'
    
    return html
    


}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completion = { 
                requestId: `${parseInt(requestId)}`,
                plumberId: `${parseInt(clownId)}`,
                timestamp: Date.now()
            }
            saveCompletion(completion)


        }
    }
)
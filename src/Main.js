import { ButtonsClown } from "./ButtonsClown.js"
import { fetchClowns, fetchRequests, fetchCompletions } from "./DataAccess.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(() => {
            mainContainer.innerHTML = ButtonsClown()
        })
}



render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)
import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const ButtonsClown = () => {
    return `
        <h1>Buttons Clowntastic Services</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}
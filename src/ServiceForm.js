import { sendRequest } from "./DataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceClient">Name</label>
            <input type="text" name="serviceClient" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" />
        </div>        
        <div class="field">
            <label class="label" for="serviceBirthdayKid">BirthdayKid</label>
            <input type="text" name="serviceBirthdayKid" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChildren">Amount of Children</label>
            <input type="text" name="serviceChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLength">Amount of Time</label>
            <input type="text" name="serviceLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='serviceClient']").value
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userBirthdayKid = document.querySelector("input[name='serviceBirthdayKid']").value
        const userChildren = document.querySelector("input[name='serviceChildren']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userLength = document.querySelector("input[name='serviceLength']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userName,
            description: userDescription,
            birthdayKid: userBirthdayKid,
            children: userChildren,
            address: userAddress,
            length: userLength,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})
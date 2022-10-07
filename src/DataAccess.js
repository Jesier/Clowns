const applicationState = {
    clowns:[],
    requests:[],
    completions:[]

}

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch("http://localhost:8088/requests")
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const fetchClowns = () => {
    return fetch("http://localhost:8088/clowns")
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const fetchCompletions = () => {
    return fetch("http://localhost:8088/completions")
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.completions = data
        }
    )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
} 

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
} 

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        //thats my job
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch("http://localhost:8088/requests", fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`http://localhost:8088/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch("http://localhost:8088/completions", fetchOptions)
    .then(response => response.json())
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
    }
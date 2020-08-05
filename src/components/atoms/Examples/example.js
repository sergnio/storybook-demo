
    async function sendRequest(url, data) {
        const newlyFormattedData = formatData(data)

        const response = await fetch(url,
            {method: "POST",
                body: JSON.stringify(newlyFormattedData)}
        )

        return response.json();
    }

    function formatData(person) {
        console.log("This is a log message. " +
            "Here's your input:", person)
        person.age = 55
        return person
    }

    sendRequest("https://www.bobross.com/")



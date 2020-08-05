

    // @ts-ignore

    type Person = {
        name: string,
        age: number,
        children: Person[]
    }

    async function sendRequest(url: string, data: Person) {
        const newlyFormattedData: Person = formatData(data)

        const response = await fetch(url,
            {method: "POST",
                body: JSON.stringify(newlyFormattedData)}
        )

        return response.json();
    }

    function formatData(person: Person) {
        console.log("This is a log message. " +
            "Here's your input:", person)
        person.age = 55
        return person
    }

sendRequest("https://www.bobross.com/")


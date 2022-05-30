// Add your code here

function submitData (name, email) {
    const personalInfo = {
        "name" : "email",         
    }
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json',
            'Accept' : 'Application/json',
        },
        body: JSON.stringify(personalInfo)
    })
    .then (res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch (error => {
        alert("Something Wrong")
    });
}


submitData()
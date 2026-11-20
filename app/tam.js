async function Sam() {
    let opp = await fetch("https://jsonplaceholder.typicode.com/user")
    let data = await opp.json();
    console.log(data)
}
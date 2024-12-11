const h1 = document.createElement('h1')
const input = document.createElement('input')
const butt = document.createElement('button')
const body = document.querySelector('body')
h1.innerHTML = "🔍 Github Account [USERNAME]"
h1.style.fontFamily = "monospace"
h1.style.fontSize = "1.4rem"
h1.style.color = 'aliceblue'
input.type = 'text'
input.id = 'text'
input.style.padding = '15px'
input.style.marginTop = '5rem'
input.style.marginBottom = '3rem'
input.style.width = '70%'
input.style.fontSize = '2rem'
butt.appendChild(document.createTextNode("CLICK"))
butt.id = "btn"
butt.style.backgroundColor = "aliceblue"
butt.style.fontSize = '40px'
butt.style.padding = '15px'
butt.style.fontWeight = '800'
butt.style.cursor = 'pointer'
body.appendChild(h1)
body.appendChild(input)
body.appendChild(butt)
body.style.backgroundColor = 'black'
body.style.height = '100vh'
body.style.overflow = 'hidden'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.flexDirection = 'column'

const btn = document.getElementById("btn")
const text = document.querySelector('#text')
btn.addEventListener('click', () => {
    h1.remove()
    input.remove()
    butt.remove()
    const usrName = text.value
    console.log(usrName)
    const http = new XMLHttpRequest()
    const url = `https://api.github.com/users/${usrName}`
    const method = 'GET'
    http.open(method, url)
    http.onreadystatechange = function () {
        console.log(http.readyState)
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            const data = JSON.parse(http.responseText)
            function gitCard() {
                const div = document.createElement('div')
                const div1 = document.createElement('div')
                const div2 = document.createElement('div')
                const img = document.createElement('img')
                const body = document.querySelector('body')
                div.appendChild(div1)
                div.appendChild(div2)
                div1.appendChild(img)
                div2.appendChild(document.createTextNode(`${data.followers}`))
                img.src = `${data.avatar_url}`
                img.style.width = "150px"
                img.style.borderRadius = "50%"
                div.style.backgroundColor = "#212121"
                div.style.color = "aliceblue"
                div.style.fontSize = "50px"
                div.style.fontWeight = "800"
                div.style.fontFamily = "monospace"
                div.style.height = "400px"
                div.style.width = "300px"
                div.style.border = "6px solid aliceblue"
                div.style.display = "flex"
                div.style.flexDirection = "column"
                div.style.justifyContent = "space-evenly"
                div.style.alignItems = "center"
                div.className = "contain"
                body.appendChild(div)
                body.style.backgroundColor = "black"
                body.style.height = "100vh"
                body.style.overflow = "hidden"
                body.style.display = "flex"
                body.style.justifyContent = "center"
                body.style.alignItems = "center"
            }
            gitCard()
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            console.log('ERROR !')
            alert('Username not found !!')
        } else {
            console.log('SOMETHING WENT WRONG !')
        }
    }
    http.send()
})
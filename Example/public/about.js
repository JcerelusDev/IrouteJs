

const template = document.createElement("template")
template.innerHTML =`
<h3>About page component</h3>
<p>This is a web component based page rendering

</p>
`

class AboutPage extends HTMLElement{
constructor(){
super()

var shadow = this.attachShadow({mode:"open"})
shadow.appendChild(template.content.cloneNode(true))


}



}

customElements.define("about-page",AboutPage)

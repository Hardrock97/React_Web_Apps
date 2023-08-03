import React from "react"
import  ReactDOM  from "react-dom/client"


const JsxHeading = function() {

return (
<>
<h1 id="heading" className="MainHeading">Hello there I have started learning React</h1>
<h2>Make projects and learn more!</h2>
<a href="https://www.google.com/">
  <div>
    <h1>Way to Google</h1>
  </div>
</a>
</>
)
}
  

const para = (
  <h3>Also, a Jsx element</h3>
)


const HeadingComponent = function() {
  return (
    <>
    <h1>Heading Component</h1>
    {para}
    <JsxHeading/>
    <JsxHeading></JsxHeading>
    {JsxHeading()}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)

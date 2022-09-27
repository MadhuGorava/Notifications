const Notification = props => {
  //  Write your code here.
  const { className, imgEl, classImg, head, classHead} = props;
  return (
      <div className = {className}>
          <img src = {imgEl} className = {classImg} />
          <p className = {classHead}>{head}</p>
      </div>
  )
}

const element = (
  //  Write your code here.   
  <div className = "bgcontainer">
      <h1 className = "heading">Notifications</h1>
      <Notification className = "container" imgEl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" classImg = "image" head = "Inforamation Message" classHead = "inHeading" />
      <Notification className = "container" imgEl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" classImg = "image" head = "Success Message" classHead = "suHeading" />
      <Notification className = "container" imgEl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" classImg = "image" head = "Warning Message" classHead = "waHeading" />
      <Notification className = "container" imgEl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" classImg = "image" head = "Danger Message" classHead = "daHeading" />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

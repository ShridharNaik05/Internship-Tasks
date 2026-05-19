import './design2.css'

function Design2() {

  return (
    <>
      <div className="container">
        <header className="flexbox"><h1>FLEXBOX LAYOUT 1</h1></header>
        <header className="header"><h1>Header</h1></header>
        <div className="middle">
          <div className="sidebar"><h1>Side bar</h1></div>
          <div className="rightside">
            <div className="right-top"><h1>Content-1</h1></div>
            <div className="right-down">
              <div className="content-2"><h1>Content-2</h1></div>
              <div className="content-3"><h1>content-3</h1></div>
            </div>
          </div>
        </div>
        <footer className="footer"><h1>Footer</h1></footer>
      </div>
    </>
  )
}

export default Design2
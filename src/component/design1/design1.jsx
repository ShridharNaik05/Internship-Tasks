import './design1.css'

function Design1() {

  return (
    <>
      <div className="container">
        <header className="header"><h2>Header</h2></header>
        <div className="middle">
          <div className="left">
            <div className="hero"><h2>Hero</h2></div>
            <div className="sidebar"><h2>Sidebar</h2></div>
          </div>
          <div className="right">
            <div className="main-content"><h2>Main Content</h2></div>
            <div className="extra-content"><h2>Extra content</h2></div>
          </div>
        </div>
        <div className="last">
          <div className="last-left"><h2>Realated Images</h2></div>
          <div className="last-right"><h2>Related Posts</h2></div>
        </div>
        <footer className="footer"><h2>Footer</h2></footer>
      </div>
    </>
  )
}

export default Design1

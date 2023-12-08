import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value
      console.log(value)
      console.log(showContent)
      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="ln">
              <h1 className="p">Left Navbar menu</h1>
              <ul>
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Item 2</p>
                </li>
                <li>
                  <p>Item 2</p>
                </li>
                <li>
                  <p>Item 4</p>
                </li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="context">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="ln">
              <h1 className="p">Right Navbar</h1>
              <div className="ad">Ad 1</div>
              <div className="ad">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

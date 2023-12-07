import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value
      console.log(value)
      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="ln">
              <p className="p">Left Navbar menu</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          <div className="context">
            <h1>Context</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          {showRightNavbar && (
            <div className="ln">
              <p className="p">Right Navbar</p>
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

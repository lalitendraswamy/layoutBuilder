import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <nav>
          <h1>Layout</h1>

          <div>
            <ul>
              <li>
                <label>
                  <input
                    onChange={onToggleShowContent}
                    type="checkbox"
                    checked={showContent}
                  />
                  Content
                </label>
              </li>

              <li>
                <label>
                  <input
                    onChange={onToggleShowLeftNavbar}
                    type="checkbox"
                    checked={showLeftNavbar}
                  />
                  Left Navbar
                </label>
              </li>

              <li>
                <label>
                  <input
                    onChange={onToggleShowRightNavbar}
                    type="checkbox"
                    checked={showRightNavbar}
                  />
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

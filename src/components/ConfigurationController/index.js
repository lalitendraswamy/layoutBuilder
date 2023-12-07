import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  state = {showContent: false, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(this.state)

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <nav>
          <h1>Layout</h1>

          <div>
            <ul>
              <li>
                <label>
                  <input
                    onChange={this.onToggleShowContent}
                    type="checkbox"
                    checked={showContent}
                  />
                  Content
                </label>
              </li>

              <li>
                <label>
                  <input
                    onChange={this.onToggleShowLeftNavbar}
                    type="checkbox"
                    checked={showLeftNavbar}
                  />
                  Left Navbar
                </label>
              </li>

              <li>
                <label>
                  <input
                    onChange={this.onToggleShowRightNavbar}
                    type="checkbox"
                    checked={showRightNavbar}
                  />
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController

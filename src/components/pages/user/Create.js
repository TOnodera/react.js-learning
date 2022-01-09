import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'
import BasicTextInput from '../../molecules/BasicTextInput'
import { Label } from '../../atoms'

class CreateUser extends React.Component {
  constructor() {
    super()
    this.state = {
      username: 'user name',
    }
  }
  header() {
    return 'ユーザー作成'
  }
  content() {
    return (
      <>
        <div className="field">
          <Label content="name" />
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>

        <BasicTextInput
          label="username"
          placeholder="input username"
          leftIcon="fas fa-user"
          rightIcon="fas fa-check"
          onValueChange={(e) => {
            this.setState(() => {
              return { username: e.target.value }
            })
          }}
        />
        <div className="field">
          <Label content="e-mail" />
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Email input"
              value="hello@"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">
            This email is invalid
          </p>
        </div>

        <div className="field">
          <Label content="subject" />
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <Label content="message" />
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
            ></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to
              the{' '}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="question"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="question"
              />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">
              Cancel
            </button>
          </div>
        </div>
      </>
    )
  }
  render() {
    return (
      <>
        <BasicCard
          header={this.header()}
          content={this.content()}
        />
      </>
    )
  }
}

export default CreateUser

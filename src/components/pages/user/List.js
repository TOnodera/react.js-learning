import React from 'react'
import http from '../../../utilities/http'
import BasicCard from '../../organisms/card/BasicCard'
import { convertStorageUrl } from '../../../utilities/functions'
import { Link } from 'react-router-dom'

class ListUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usersList: [],
    }
  }

  header() {
    return 'ユーザー管理'
  }

  content() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th className="has-text-centered">ID</th>
              <th className="has-text-centered">画像</th>
              <th className="has-text-centered">E-mail</th>
              <th className="has-text-centered">登録日時</th>
              <th className="has-text-centered">更新日時</th>
              <th className="has-text-centered">詳細</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usersList.map((user, index) => (
              <tr key={index} className="users-table-tr">
                <td className="has-text-centered">{user.id}</td>
                <td className="has-text-centered">
                  <figure className="image is-64x64 is-inline-block">
                    <img
                      className="is-rounded"
                      src={convertStorageUrl(
                        user.paths[0]['storage_name'],
                        user.paths[0]['file_name']
                      )}
                    />
                  </figure>
                </td>
                <td className="has-text-centered">test@test.com</td>
                <td className="has-text-centered">2021年12月18日 12:30:00</td>
                <td className="has-text-centered">2021年12月15日 12:30:00</td>
                <td className="has-text-centered">
                  <div className="buttons is-centered">
                    <Link to={'/users/' + user.id}>
                      <button className="button is-link">詳細</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }

  async componentDidMount() {
    const { data } = await http.get('users/')
    this.setState(() => {
      return { usersList: data }
    })
  }

  render() {
    return (
      <>
        <BasicCard header={this.header()} content={this.content()} />
      </>
    )
  }
}

export default ListUsers

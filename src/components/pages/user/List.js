import React from 'react'
import BasicCard from '../../organisms/card/BasicCard'

class ListUsers extends React.Component {
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
            <tr className="users-table-tr">
              <td className="has-text-centered">19</td>
              <td className="has-text-centered">
                <figure className="image is-64x64 is-inline-block">
                  <img
                    className="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>
              </td>
              <td className="has-text-centered">test@test.com</td>
              <td className="has-text-centered">2021年12月18日 12:30:00</td>
              <td className="has-text-centered">2021年12月15日 12:30:00</td>
              <td className="has-text-centered">
                <div className="buttons is-centered">
                  <button className="button is-link">詳細</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
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

import * as React from 'react'
import Header from '../../components/header'
import UsersModule from '../../modules/users'
import { UserService } from '../../services'
import DefaultUserService from '../../services/users/default'
import { observable } from 'mobx'
import User from '../../models/user'

// TODO: Refactor this shit
export default class UsersPage extends React.Component {

	@observable
	private users: User.Model[] = []

	private userService: UserService = new DefaultUserService()

	componentDidMount() {
		this.users = this.userService.users()
	}

	render() {
		return (
			<main>
				<Header>Users</Header>
				<UsersModule/>
			</main>
		)
	}
}
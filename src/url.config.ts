const baseURL = (path: string) => `https://jsonplaceholder.typicode.com/${path}`

export default class Pathes {
	static Users = class {
		static all = baseURL('users')
	}
}

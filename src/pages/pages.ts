import HomePage from './home/index'
import BlogsPage from './blogs/index'

interface Props {
    readonly link: string
    readonly page: any
    readonly label: string
}

export class PageMarkup {
    readonly link: string
    readonly page: any
    readonly label: string

    constructor(props: Props) {
        this.link = props.link
        this.page = props.page
        this.label = props.label
    }
}

const Pages: PageMarkup[] = [
    {
        link: '/',
        page: HomePage,
        label: 'Home'
    },
    {
        link: '/blogs',
        page: BlogsPage,
        label: 'Articles'
    }
]

export default Pages

import * as React from 'react'
import { WithStyles } from '@material-ui/core'
import Header from '../../components/header'

import styles from './styles'

export interface Props extends WithStyles<typeof styles> {}

export default class HomePage extends React.Component<Props> {
    render() {
        return (
            <main>
                <Header>Home</Header>
            </main>
        )
    }
}

import * as React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

import { action, observable } from 'mobx'
import { observer } from 'mobx-react'

import styles from './styles'
import Pages, { PageMarkup } from '../../pages/pages'
import { Link } from 'react-router-dom'
import { AppBar, Drawer, IconButton, Toolbar, Typography, WithStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

@observer
class Header extends React.Component<Props, {}> {

  @observable
  private isMenuOpen: boolean = false;

  render() {
    const { children, classes } = this.props;

    const options = (
        <div className={classes.drawer}>
            <List>
                {Pages.map((p: PageMarkup, index: number) => (
                    <Link className={classes.link} to={p.link} key={p.link + index}>
                        <ListItem button>
                            <ListItemText>{p.label}</ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )

    return (
      <header>
        <AppBar position={'fixed'}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color={'inherit'}
              aria-label={'Menu'}
              onClick={this.toggleMenu}
            >
              <MenuIcon aria-label={'Menu'} />
            </IconButton>
            <Typography color={'inherit'}>{children}</Typography>
          </Toolbar>
        </AppBar>

          <Drawer
              open={this.isMenuOpen}
              onClose={this.toggleMenu}
          >
            <div tabIndex={0} role={'button'} onClick={this.toggleMenu}>
                {options}
            </div>
        </Drawer>
      </header>
    )
  }

  @action
  private toggleMenu = () => {

    this.isMenuOpen = !this.isMenuOpen;
  }
}

export default withStyles(styles)(Header);

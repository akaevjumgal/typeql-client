import * as React from 'react'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
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
import Divider from '@material-ui/core/Divider'

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

@observer
class Header extends React.Component<Props, {}> {

  @observable
  private isMenuOpen: boolean = false;

  render() {
    const { children, classes } = this.props;

    const options = (
        <div className={classes.drawer}>
			<div className={classes.drawerHeader}>
				<IconButton onClick={this.closeMenu}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
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
      <header className={classes.header}>
        <AppBar position={'fixed'} className={classNames(classes.appBar, {
          [classes.appBarShift]: this.isMenuOpen
        })}>
          <Toolbar disableGutters={!this.isMenuOpen}>
            <IconButton
              className={classes.menuButton}
              color={'inherit'}
              aria-label={'Menu'}
              onClick={this.openMenu}
            >
              <MenuIcon aria-label={'Menu'} />
            </IconButton>
            <Typography color={'inherit'}>{children}</Typography>
          </Toolbar>
        </AppBar>

          <Drawer
			  open={this.isMenuOpen}
			  onClose={this.closeMenu}
			  anchor={'left'}
              variant={'persistent'}
          >
            <div tabIndex={0} role={'button'}>
                {options}
            </div>
        </Drawer>
      </header>
    )
  }

  @action
  private openMenu = () => {
    this.isMenuOpen = true
  }

  @action
  private closeMenu = () => {
      this.isMenuOpen = false
  }
}

export default withStyles(styles)(Header)

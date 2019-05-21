import { createStyles } from '@material-ui/core/styles'

const DRAWER_WIDTH = 240

const styles = (theme: any) => createStyles({
    header: {
        display: 'flex'
    },
    appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
    appBarShift: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
    drawer: {
        minWidth: DRAWER_WIDTH,
        width: '100%',
        flexShrink: 0
	},
    drawerPaper: {
		width: DRAWER_WIDTH,
	},
    drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
    link: {
      textDecoration: 'none'
    },
    menuButton: {
		marginLeft: 12,
		marginRight: 20
    }
})

export default styles

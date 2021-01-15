import { Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 240;

export const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    hiddenMenu: {
        padding: '0!important',
        margin: '0!important',
        width: '100%',
        display: 'flex',
        ...theme.mixins.toolbar,
    },
    iconLink: {
        minWidth: 'auto',
        width: '100%',
    },
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            padding: '0!important',
        }
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0!important',
    },
    gridContainer: {
        padding: '0!important',
        margin: '0!important',
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    avatarTitle: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        paddingRight: theme.spacing(1),
        fontWeight: 400,
    },
    activeMenu: {
        backgroundColor: 'white',
        color: theme.palette.primary.main,
    },
});
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rootDrawerActions from '@redux/actions/root/drawerActions';

function mapState(state) {
    return {
        openDrawer: state.rootDrawerReducers,
        algorithms: state.pagesIndexAlgorithmsReducers,
        lang: state.rootLangReducers
    }
}

function mapDispatch(dispatch) {
    return {
        actions: {
            changeDrawer: bindActionCreators(rootDrawerActions.changeDrawer, dispatch),
        },
    }
}

export const connector = connect(mapState, mapDispatch)

export type TPropsFromRedux = ConnectedProps<typeof connector>


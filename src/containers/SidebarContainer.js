import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state, ownProps) => {
    return {
        start_pin: state.route_selection.start_pin,
        end_pin: state.route_selection.end_pin,
        route_lookup_response: state.route_selection.route_lookup_response,
        route_lookup_response_status: state.route_selection.route_lookup_response_status
    };
};

const mapDispatchToProps = (dispatch, ownProps) => { return {}; };

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default SidebarContainer
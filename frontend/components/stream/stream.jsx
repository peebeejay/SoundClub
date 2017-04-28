import React from 'react';
import Main from '../main.jsx';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import LeftTabsNavigation from '../modular/left_tabs_navigation.jsx';
import SongList from '../modular/song_list.jsx';
import { streamSongs, removeSongs } from '../../actions/song_actions';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { receivedResponse: false }
  }

  // componentWillMount() {
  //   this.props.removeSongs();
  // }

  componentDidMount() {
    this.props.streamSongs(this.props.currentUser.id).then(
      () => this.setState({ receivedResponse: true })
    )
  }

  render() {
    let _noFollows = ( this.state.receivedResponse && this.props.songs.length == 0 )
    const compelFollow = (<div className="left-tab-header">Get started by following your favorite artists</div>)

    return(
      <Main>
        <div className={"content-left-wrapper"}>
          <div className={"content-left"}>
            <LeftTabsNavigation />
            <div className="left-tab-header">Hear the latest songs from the people you follow:</div>
            { _noFollows && compelFollow }
            <SongList songs={this.props.songs}/>
          </div>
        </div>
        <div className={"content-right-wrapper"}>
          <div className={"content-right"}>

          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    songs: Object.keys(state.songs).map( id =>  state.songs[id] ),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    streamSongs: (id) => dispatch(streamSongs(id)),
    removeSongs: () => dispatch(removeSongs())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);

import React from "react";
import "./App2.css";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
// import SongsData from "./Components/SongsData/SongsData";
import AllSongs from "/home/pavanemon/audio-player-two/src/Components/SongsData/AllSongsData";
// import Searchbar from "./Components/Searchbar/Searchbar";
import { Tabs, Tab } from "react-bootstrap";
import Searchbar from "./Components/Searchbar/Searchbar";
import EachSong from "./Components/EachSong/EachSong";
import AddToPlaylist from "./Components/AddToPlaylist/AddToPlaylist";
import PlaylistSong from "./Components/PlaylistSong/PlaylistSong";
import "bootstrap/dist/css/bootstrap.min.css";
import FavouriteSongs from "./Components/Favourites/Favourites";

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSongs: [],
      data: AllSongs.items,
      // searchString: "",
      inputValue: "",
      mainCheckBox: false,
      individualCheckboxDisplay: "none",
      playlistSongs: [],
      songPlayingNow: [],
      songImage: "",
      favouriteSongs: [],
      isPlaying: false,
      songUri: "",
    };
  }

  handleOnInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAllCheckboxes = (e) => {
    this.setState(
      {
        mainCheckBox: e.target.checked,
      },
      () => {
        if (this.state.mainCheckBox === true) {
          const newSelectedSongs = this.state.data.map((item) => {
            return item.track.uri;
          });
          this.setState({ selectedSongs: newSelectedSongs }, () => {
            console.log(this.state.selectedSongs);
          });
        } else {
          this.setState({ selectedSongs: [] }, () => {
            this.handleTogglefilter();
            console.log(this.state.selectedSongs);
          });
        }
      }
    );
  };

  handleTogglefilter = (uri) => {
    if (this.state.selectedSongs.includes(uri)) {
      const newSelectedSongs = this.state.selectedSongs.filter((item) => {
        return item !== uri;
      });
      this.setState({ selectedSongs: newSelectedSongs }, () => {
        console.log(this.state.selectedSongs);
      });
    } else {
      const temp = [...this.state.selectedSongs, uri];
      this.setState({ selectedSongs: temp }, () => {
        console.log(this.state.selectedSongs);
      });
    }
    this.setState({ mainCheckBox: false }, () => {
      console.log(this.state.mainCheckBox);
    });
  };

  handleOnMenuClick = () => {
    this.state.individualCheckboxDisplay === "none"
      ? this.setState({ individualCheckboxDisplay: "initial" })
      : this.setState({ individualCheckboxDisplay: "none" });
  };

  handlePlayList = () => {
    const playlistSongs = [...this.state.playlistSongs];
    for (let i = 0; i < this.state.selectedSongs.length; i++) {
      for (let j = 0; j < this.state.data.length; j++) {
        if (this.state.data[j].track.uri === this.state.selectedSongs[i]) {
          // console.log("i am added ", this.state.selectedSongs[i]);
          playlistSongs.push(this.state.data[j]);
        }
      }
    }
    // console.log(this.state.data);
    this.setState(
      {
        playlistSongs,
      },
      () => {
        // console.log(this.state.playlistSongs);
      }
    );
  };

  handleSongPlaying = (uri) => {
    // console.log(this.state.playlistSongs);

    let songPlaying = this.state.playlistSongs.filter((item) => {
      return item.track.uri === uri;
    });
    this.setState(
      {
        isPlaying: !this.state.isPlaying,
        songPlayingNow: [...songPlaying],
      },
      () => {
        this.setState({
          songImage: this.state.songPlayingNow[0].track.album.images[1].url,
          isPlaying: !this.state.isPlaying,
        });
      }
    );
  };

  handleFavourites = (uri) => {
    let favouritesFiltered = this.state.playlistSongs.filter((item) => {
      return item.track.uri === uri;
    });
    this.setState({
      favouriteSongs: [...this.state.favouriteSongs, ...favouritesFiltered],
    });
  };

  handleplay = () => {
    let songlink = this.state.songPlayingNow[0].track.uri;
  };

  handleForward = () => {
    let songUri = this.state.songPlayingNow[0].track.uri;
    const index = this.state.playlistSongs.findIndex((obj) => {
      return obj.track.uri === songUri;
    });
    if (index === this.state.playlistSongs.length - 1) {
      let songplaying = this.state.playlistSongs[0];
      this.setState({ songPlayingNow: [songplaying] }, () => {
        console.log(this.state.songPlayingNow);
      });
    } else {
      let songplaying = this.state.playlistSongs[index + 1];
      this.setState({ songPlayingNow: [songplaying] }, () => {
        console.log(this.state.songPlayingNow);
      });
    }
  };

  handlePrevious = () => {
    let songUri = this.state.songPlayingNow[0].track.uri;
    const index = this.state.playlistSongs.findIndex((obj) => {
      return obj.track.uri === songUri;
    });
    if (index === 0) {
      let songplaying = this.state.playlistSongs[0];
      this.setState({ songPlayingNow: [songplaying] }, () => {
        console.log(this.state.songPlayingNow);
      });
    } else {
      let songplaying = this.state.playlistSongs[index - 1];
      this.setState({ songPlayingNow: [songplaying] }, () => {
        console.log(this.state.songPlayingNow);
      });
    }
  };

  handleDeleteFromPlaylists = (uri) => {
    let newPlaylist = this.state.playlistSongs.filter((item) => {
      return item.track.uri !== uri;
    });
    this.setState({ playlistSongs: [...newPlaylist] });
  };

  render() {
    let filtered = this.state.data.filter((item) => {
      return item.track.name
        .replace(/ /g, "")
        .toLocaleLowerCase()
        .includes(this.state.inputValue.replace(/ /g, "").toLowerCase());
    });
    return (
      <div className="musicApp">
        <div id="musicPlayer">
          <MusicPlayer
            handleplay={this.handleplay}
            // playSong={this.state.playSong[0]}
            songImage={this.state.songImage}
            songUri={this.state.songUri}
            isPlaying={this.state.isPlaying}
            handleForward={this.handleForward}
            handlePrevious={this.handlePrevious}
          />
        </div>
        <div id="songsData">
          <div
            style={{ display: "block", width: 500, padding: 40 }}
            className="receivedSongs"
          >
            <Tabs defaultActiveKey="first">
              <Tab eventKey="first" title="Library">
                <div>
                  <Searchbar
                    onChange={this.handleOnInputChange}
                    value={this.state.inputvalue}
                    onClick={this.handleAllCheckboxes}
                    mainCheckBox={this.state.mainCheckBox}
                    onhandleMenuClick={this.handleOnMenuClick}
                  />
                </div>
                <div>
                  <AddToPlaylist onClick={this.handlePlayList} />
                </div>
                <div className="scroller">
                  {filtered.map((item, index) => {
                    const checked = this.state.selectedSongs.includes(
                      item.track.uri
                    );
                    return (
                      <EachSong
                        trackName={item.track.name}
                        artistName={item.track.artists[0].name}
                        key={index}
                        individualCheckboxDisplay={
                          this.state.individualCheckboxDisplay
                        }
                        individualCheckbox={this.state.individualCheckbox}
                        checked={checked}
                        handleTogglefilter={() => {
                          this.handleTogglefilter(item.track.uri);
                        }}
                      />
                    );
                  })}
                </div>
              </Tab>
              <Tab eventKey="second" title="playlist">
                <div className="scroller">
                  {this.state.playlistSongs.map((item, index) => {
                    return (
                      <PlaylistSong
                        trackName={item.track.name}
                        artistName={item.track.artists[0].name}
                        key={index}
                        onClick={() => {
                          this.handleSongPlaying(item.track.uri);
                        }}
                        handleFavourites={() => {
                          this.handleFavourites(item.track.uri);
                        }}
                        handleDeleteFromPlaylists={() => {
                          this.handleDeleteFromPlaylists(item.track.uri);
                        }}
                        isPlaying={this.state.isPlaying}
                      />
                    );
                  })}
                </div>
              </Tab>
              <Tab eventKey="third" title="favourites">
                <div className="scroller">
                  {this.state.favouriteSongs.map((item, index) => {
                    return (
                      <FavouriteSongs
                        trackName={item.track.name}
                        artistName={item.track.artists[0].name}
                        key={index}
                      />
                    );
                  })}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default App2;

// BQCjkcDcIb71RjyYcKfFsDL8IZaDsu07zoo6DV3gMRMTaMskz51mROgbBULE64vWhuHAeqQQiPw2DRXPIOLEgFb2eC9-tLr9SzRaZYn572iCOnzZWuaBWpkK68HQRC4BCj415rhcoflU_LZ1pXffUxW1FNH-7NUibImlcFUPCpd8MlWVyES43kXGYun_KKzNXfliETwwitwcUDTem8LDnhr1K-uDBfUH4KKIEvGgcoWQzDy8aClBVM41OmqGObYo

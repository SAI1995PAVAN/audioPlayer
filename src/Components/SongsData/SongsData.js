import React from "react";
import "./SongsData.css";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import select2 from "./select2.png";
// import AllSongs from "./AllSongsData.json";
import EachSong from "../EachSong/EachSong";
import Searchbar from "../Searchbar/Searchbar";
import AddToPlaylist from "../AddToPlaylist/AddToPlaylist";
import PlaylistSong from "../PlaylistSong/PlaylistSong";

class SongsData extends React.Component {
  

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
          console.log("i am added ", this.state.selectedSongs[i]);
          playlistSongs.push(this.state.data[j]);
        }
      }
    }
    console.log(this.state.data);
    this.setState(
      {
        playlistSongs,
      },
      () => {
        console.log(this.state.playlistSongs);
      }
    );
  };

  render() {
    let filtered = this.state.data.filter((item) => {
      return item.track.name
        .replace(/ /g, "")
        .toLocaleLowerCase()
        .includes(this.state.inputValue.replace(/ /g, "").toLowerCase());
    });
    return (
      <div>
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
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="third" title="favourites">
              Favourite songs
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default SongsData;

import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";

// wrapper for items
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], avatar: "", profileLink: "" };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@LivelyVerse";


  async componentDidMount() {

    await axios
      .get(this.mediumURL)
      .then(async (res) => await res.data)
      .then((data) => {
        console.log("medium data", data);
        // create two-dimensional array with 3 elements per inner array
        {
          data.items.map((count) => {
            if (count.link == "https://medium.com/@LivelyVerse/livelyworld-the-new-program-dedicated-to-blockchain-technology-6751f0692f3e?source=rss-a117dad72655------2") {
              count.link = "https://medium.com/@LivelyVerse/lively-world-the-new-tv-show-dedicated-to-blockchain-technology-be2597df7945?source=rss-a117dad72655------2"
            }
          })
        }
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });

        this.setState({ itemRows: itemRows });
      });
  }
  render() {
    const { itemRows } = this.state;

    return (
      <Grid className="mediumSlider" container>
        {itemRows.map((row, id) =>
          row.map((item, key) => <PostCard {...item} key={key} />)
        )}
      </Grid>
    );
  }
}

export default Slider;
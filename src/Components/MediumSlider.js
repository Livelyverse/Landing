import React, { useEffect, useState } from "react";
import { getBlogData } from "../API/Blog";
import profile from './../img/prof.png'
import calender from './../img/calender.png'

const MediumSlider = () => {

  const [blogData, setBlogData] = useState([]);
  let date;
  let text;

  useEffect(() => {
    getBlogData().then(res => {
      console.log("log res blog data", res);
      console.log("data item", res.data.data)
      setBlogData(res.data.data);
      console.log("data in blogData", blogData);
      // setBlogData(res.data.data)
    }).catch(err => {
      console.log("log err blog data", err);
    })
  }, [])

  return (
    <div className="blogDiv">
      {blogData.map((item) => {
        date = item.item.pubDate.split(" ")
        text = item.item["content:encodedSnippet"]
        return (
          <div className="blogCard">
            <div className="blogCardPic">
              <img className="blogPic" alt={item.item.categories[0]} src={item.thumbnail}></img>
            </div>
            <div className="blogDataInfo">
              <a href={item.image.link} target="_blank">
                <img className="authorPic" alt={item.description} src={item.image.url}></img>
              </a>
              <a href={item.item.link} target="_blank">
                {item.item.title}
              </a>
              <p style={{ display: "inline-block", color: "black", marginTop: "25px" }}>
                {text.substring(0, 120) + "..."}
                {/* {console.log("log content", item.item)} */}
              </p>
            </div>
            <div className="blogDataFooter">
              <img alt="author" src={profile}></img>
              <p>
                Lively Verse
              </p>
              <img alt="calender" src={calender}></img>
              <p>
                {date[2] + " "}
                {date[1] + ", "}
                {date[3] + " "}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MediumSlider;











// import React from "react";
// import { Grid } from "@material-ui/core";
// import PostCard from "./PostCard";
// import axios from "axios";

// // wrapper for items
// class Slider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { itemRows: [], avatar: "", profileLink: "" };
//   }
//   mediumURL =
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@LivelyVerse";


//   async componentDidMount() {

//     getBlogData().then(res => {
//       console.log(res);
//     }).catch(err => {
//       console.log(err);
//     })

//     await axios
//       .get(this.mediumURL)
//       .then(async (res) => await res.data)
//       .then((data) => {
//         console.log("medium data", data);
//         // create two-dimensional array with 3 elements per inner array
//         const avatar = data.feed.image;
//         const profileLink = data.feed.link;
//         const res = data.items; //This is an array with the content. No feed, no info about author etc..
//         const posts = res.filter((item) => item.categories.length > 0);

//         this.setState({ avatar: avatar, profileLink: profileLink });
//         const itemRows = [];
//         posts.forEach((item, i) => {
//           item["avatar"] = this.state.avatar; // push avatar inside the json
//           item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
//           const row = Math.floor(i / 3);
//           if (!itemRows[row]) itemRows[row] = [];
//           itemRows[row].push(item);
//         });

//         this.setState({ itemRows: itemRows });
//       });
//   }
//   render() {
//     const { itemRows } = this.state;

//     return (
//       <Grid className="mediumSlider" container>
//         {itemRows.map((row, id) =>
//           row.map((item, key) => <PostCard {...item} key={key} />)
//         )}
//       </Grid>
//     );
//   }
// }

// export default Slider;
document.addEventListener("DOMContentLoaded", (event) => {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.meme.forEach((item) => {
        // Create the post div
        const post = document.createElement("div");
        post.className = "post";

        // Create and append the account image
        const accountImg = document.createElement("img");
        accountImg.className = "account_ico";
        accountImg.src = "account.png";
        accountImg.alt = "";
        post.appendChild(accountImg);

        // Create the img_box div
        const imgBox = document.createElement("div");
        imgBox.className = "img_box";
        imgBox.style.backgroundColor = "rgb(188, 247, 199)";

        // Create and append the poster name
        const posterName = document.createElement("p");
        posterName.className = "poster_name";
        posterName.textContent = item.name;
        imgBox.appendChild(posterName);

        // Create and append the meme image
        const memeImg = document.createElement("img");
        memeImg.className = "meme_img";
        memeImg.src = item.img;
        memeImg.alt = "";
        imgBox.appendChild(memeImg);

        // Create and append the post description
        const postDis = document.createElement("p");
        postDis.className = "post_dis";
        postDis.textContent = item.dis;
        imgBox.appendChild(postDis);

        // Append img_box to post
        post.appendChild(imgBox);

        // Append post to content
        content.appendChild(post);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

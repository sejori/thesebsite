let posts = Array.from(document.getElementsByClassName("blog-post"))
posts.forEach(post => {
  post.children[0].onclick = () => {
    post.children[0].children[1].classList.toggle("rotated")
    post.children[1].classList.toggle("displayed")
  }
})
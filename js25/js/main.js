// Higher Order Functions
import { posts } from "./posts.js";
// forEach()

posts.forEach(post => {
    console.log(post);
})

console.clear();


//filter results
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
})

console.log(filteredPosts);

// map

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
})
console.log(mappedPosts);

// Reduce

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
})
console.log(reducedPostsValue);
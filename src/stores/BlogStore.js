let Rx = require("rx");

module.exports = function (actions, initialState) {

    let createPost = actions.Post.create.map(newPost => allPosts => {
        allPosts.push(newPost);
        return allPosts;
    });

    let removePost = actions.Post.remove.map(index => allPosts => {
        allPosts.splice(index,1);
        return allPosts;
    });

    let posts = Rx.Observable
        .merge(createPost, removePost)
        .scan(initialState, (allPosts, mod) =>  mod(allPosts))
        .publishValue(initialState);

    //Since we want to store a current value in "posts" we must convert this to a hot observable
    //This is so it can respond to the events from the actions before it's subscribed to
    posts.connect();

    return posts;
};
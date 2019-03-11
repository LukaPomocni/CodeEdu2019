'use strict'

const serverUrl = `http://localhost:3000`

async function postComment(data) {
    let response
    try {
        response = await fetch(`${serverUrl}/comments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        let json = await response.json()
        return json;
    } catch (e) {
        console.log(e)
    }
}

async function getComments() {
    let response
    try {
        response = await fetch(`${serverUrl}/comments`)
        // console.log(response.status)
        let json = await response.json()
        return json
    } catch (e) {
        return new Error(e)
    }
}

async function getAuthorByName(name) {
    let response
    try {
        response = await fetch(`${serverUrl}/authors?name=${name}`)
        // console.log(response.status)
        let json = await response.json()
        return json
    } catch (e) {
        return new Error(e)
    }
}

(async function(){
    let comments = await getComments();
    console.log(comments)

    let author = await getAuthorByName("Luka");
    console.log(author)

    // await postComment({body:"Nas komentar", postId:1, authorId:author.id})

    comments = await getComments();
    console.log(comments)
})()

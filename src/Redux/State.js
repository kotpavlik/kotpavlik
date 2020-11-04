import { rerenderEntireTree } from "../rerender";

let state = {
    contentPage: {
        posts: [
            { id: 1, post: "fuck u", likesCount: 5 },
            { id: 2, post: "good luck", likesCount: 23 },
            { id: 3, post: "nice try", likesCount: 13 },
            { id: 4, post: "maybe", likesCount: 76 },
            { id: 5, post: "real talk", likesCount: 29 }
        ],
        newPostText: ''
    },

    messagesPage: {
        dialogs: [
            { id: 1, name: "Misha" },
            { id: 2, name: "Vika Nine 22" },
            { id: 3, name: "Sinfozatron" },
            { id: 4, name: "Dasha Nine 22" }
        ],

        messages: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Игорек,как дела?" },
            { id: 3, message: "В качалку гоним к 12.00" },
            { id: 4, message: "Молчишь-в жопе торчишь" }
        ],
        newMessageText:''
    },

    friendsPage: {
        photo: [
            { id: 1, photo: "../assets/img/avatar.jpg" },
            { id: 2, photo: "'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/117824893_1781095535363132_3658975765063940592_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=9dH4zBX0BgcAX-BTSJZ&_nc_ht=scontent-waw1-1.xx&oh=452ad944b9fa1baaca3f130b87e63115&oe=5FABD48A' " },
            { id: 3, photo: " 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/86651970_963575340705579_1801774055238402048_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=c2Q7n3gQucUAX85kM2A&_nc_ht=scontent-waw1-1.xx&oh=206cd460fc6ae97d1617fa365eba0542&oe=5FADD765' " }
        ]
    },
}

export let addPost = () => {
    let NewPost = {
        id: 5,
        post: state.contentPage.newPostText,
        likesCount: 0
    };
    state.contentPage.posts.push(NewPost);
    state.contentPage.newPostText='';
    rerenderEntireTree(state);   
}

export let updateNewPostText = (newText) => {
    state.contentPage.newPostText=newText;

    rerenderEntireTree(state);
}



export let sendMessage = () => {
    let NewMessage = {
        id: 5,
        message: state.messagesPage.newMessageText,
    };
    state.messagesPage.messages.push(NewMessage);
    state.messagesPage.newMessageText='';
    rerenderEntireTree(state); 
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText=newText;

    rerenderEntireTree(state);
}


export default state;
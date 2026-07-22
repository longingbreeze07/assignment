const readlinesync = require('readline-sync');

const user = {
    username: "Samyami Pun",
    numberOfLike: 700,
    comments: ["Good", "WOW", "Do Better next time"],
    friendName: ["Prapti", "Jonifa", "roshani"],
    bookMarks: true,

    like: () => {
        user.numberOfLike++;
    },
    profileEdit: (newUsername) => {
        user.username = newUsername;
    },
    commentAdd: (comment) => {
        user.comments.push(comment);
    },
    commentRemove: (comment) => {
        user.comments = user.comments.filter((name) => name !== comment);
    },
    friendsAdd: (friend) => {
        user.friendName.push(friend);
    },
    friendsRemove: (friend) => {
        user.friendName = user.friendName.filter((name) => name !== friend);
    },
    bookMarksfun: () => {
        user.bookMarks = !user.bookMarks;
    }
};

const igUpdate = (choice) => {
    switch (choice) {
        case "1":
            user.like();
            console.log("Liked your post. New Like count:", user.numberOfLike);
            break;

        case "2": {
            const newUsername = readlinesync.question("Enter new username: ");
            user.profileEdit(newUsername);
            console.log("New username:", user.username);
            break;
        }

        case "3": {
            const chooseComment = readlinesync.question("Enter 1 to add comment and any key to remove: ");
            if (chooseComment === "1") {
                const comment = readlinesync.question("Enter your comment: ");
                user.commentAdd(comment);
                console.log("Comment Section:", user.comments);
            } else {
                console.log("Which comment do you want to remove:", user.comments);
                const comment = readlinesync.question("Enter the comment to remove: ");
                user.commentRemove(comment);
                console.log("Present Comment Section:", user.comments);
            }
            break;
        }

        case "4": {
            const chooseFriend = readlinesync.question("Enter 1 to add friend and any key to remove: ");
            if (chooseFriend === "1") {
                const friend = readlinesync.question("Enter the name of friend you want to add: ");
                user.friendsAdd(friend);
                console.log("Present Friend List:", user.friendName);
            } else {
                console.log("Current Friend List:", user.friendName);
                const friend = readlinesync.question("Enter the name of friend you want to remove: ");
                user.friendsRemove(friend);
                console.log("Present Friend List:", user.friendName);
            }
            break;
        }

        case "5":
            user.bookMarksfun();
            console.log("Your current Bookmark status is", user.bookMarks);
            break;

        default:
            console.log("Invalid Choice");
    }
};

do {
    console.log("\nCONSOLE BASED INSTA FUNCTIONALITIES:");
    console.log("1. Like");
    console.log("2. Profile Edit");
    console.log("3. Add/Remove Comment");
    console.log("4. Add/Remove Friend");
    console.log("5. Toggle Bookmark");
    console.log("0. Exit");

    const choice = readlinesync.question("Enter your choice: ");
    if (choice === "0") {
        break;
    }
    igUpdate(choice);
} while (true);
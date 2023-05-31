// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    const user = {};
    user["id"] = this.currentID;
    user["name"] = name;
    this.follows[this.currentID] = new Set();
    this.users[this.currentID] = user;
    return this.currentID;
  }

  getUser(userID) {
    return this.users[userID] || null;
  }

  follow(userID1, userID2) {
    if (userID1 in this.users && userID2 in this.users) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    // let followers = []
    // if (userID in this.users) {
    //   this.follows[userID].forEach(id => followers.push(id))
    // }
    // return followers;
    return this.follows[userID];
  }

  getFollowers(userID) {
    let followers = new Set();

    for (const key in this.follows) {
      if (this.follows[key].has(userID)) {
        followers.add(Number(key));
      }
    }
    return followers;

    //1: {2, 3}
    //2: {1, 3}
    //3: {1, 2}
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;

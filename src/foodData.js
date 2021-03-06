import { db } from "./connection";

const foodData = {
  fruit: ["tomatoes", "bananas", "potatoes", "lettuce"],
  carbs: ["bread", "pasta"],
};

export function updateGenericFoodList() {
  return db
    .collection("foodAPI")
    .doc("testFoodData")
    .set(foodData)
    .then(() => {
      console.log("successfully updated generic food list");
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}

export function getGenericFoodList() {
  return db
    .collection("foodAPI")
    .doc("testFoodData")
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("no such document!");
      }
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}

export function getUserBoughtFoodList(userID) {
  return db
    .collection("users")
    .doc(userID)
    .collection("food")
    .doc("week1")
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log(doc.data());
        return doc.data();
      } else {
        console.log("no such document!");
      }
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}

export function updateUserBoughtList(userID, itemsChosen) {
  console.log(itemsChosen)
  return db
    .collection("users")
    .doc(userID)
    .collection("food")
    .doc("week1")
    .set(itemsChosen)
    .then(() => {
      console.log("successfully updated user food list");
      const wasteItems = Object.keys(itemsChosen);
      const wasteDataObject = {};
      wasteItems.forEach(item => {
        wasteDataObject[item] = 0;
      });
      db.collection("users").doc(userID).collection("food").doc("week1-waste").set(wasteDataObject);
    })
    .then(() => {
      console.log("successfully created initial user waste food list");
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}

export function getUserWasteFoodList(userID) {
  return db
    .collection("users")
    .doc(userID)
    .collection("food")
    .doc("week1-waste")
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log(doc.data());
        return doc.data();
      } else {
        console.log("no such document!");
      }
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}

export function updateUserWasteList(userID, updatedWasteList) {
  return db
    .collection("users")
    .doc(userID)
    .collection("food")
    .doc("week1-waste")
    .set(updatedWasteList)
    .then(() => {
      console.log("successfully updated user waste food list");
    })
    .catch(error => {
      console.log("Error writing document: ", error);
    });
}
export function addNewUser(username, doc) {
  return db.collection("users").doc(doc).set({ name: username });
}

import db from "./firebase";

useEffect(() => {
  db.collection("rooms")
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "asc")
    .onSnapshot((snapshot) =>
      setRoomMessages(snapshot.docs.map((doc) => doc.data()))
    );
}, []);

useEffect(() => {
  db.collection("rooms").onSnapshot((snapshot) =>
    setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))
    )
  );
}, []);

const sendMessage = (e) => {
  e.preventDefault();

  if (channelId) {
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      image: user.photoURL,
    });
    setInput("");
  }
};

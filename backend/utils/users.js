const users = [];

export function addUser({ id, username, room }) {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.username === username
  );

  if (existingUser) {
    return { error: 'Username is already taken in this room.' };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
}

export function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
}

export function getUser(id) {
  return users.find((user) => user.id === id);
}

export function getUsersInRoom(room) {
  return users.filter((user) => user.room === room);
}

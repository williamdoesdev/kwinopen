print("hello world")

const clients = workspace.clientList();

for (let i = 0; i < clients.length; i++) {
    print(clients[i].caption);
}
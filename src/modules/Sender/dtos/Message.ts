
interface Message {
    id: string,
    body: string,
    type: string,
    t: number,
    notifyName: string,
    from: string,
    to: string,
    isAvatar: false,
    chatId: string,
    sender: {
        id: string,
    },
    text: string,
}
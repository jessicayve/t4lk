export const initialMessages = [
    {
        id: `Fulano-${Math.ceil(Math.random()*1000000)}` ,
        sender: "Mark",
        content: "Hello",
        createdAt: new Date().toLocaleTimeString(
          "en-us",
          {
            hour: "numeric",
            minute:"numeric",
            hour12:true
          }
        )
      },
      {
        id: `Me-${Math.ceil(Math.random()*1000000)}` ,
        sender: "Me",
        content: "How are you?",
        createdAt: new Date().toLocaleTimeString(
          "en-us",
          {
            hour: "numeric",
            minute:"numeric",
            hour12:true
          }
        )
      }
]
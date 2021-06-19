<script>
  import Messages from "@/components/Messages.svelte";
  import InputArea from "@/components/InputArea.svelte";

  const sendMessage = (textInput) => {
    const newMessages = messages;
    newMessages.push({ bot: false, text: textInput });
    messages = newMessages;

    getResponse(textInput).then((responseFromBot) => {
      newMessages.push({ bot: true, text: responseFromBot });
      messages = newMessages;
    });
  };

  let messages = [
    {
      bot: true,
      text: "Guten Tag. Du kannst mir alle Fragen rund um Dein Studium an der DHBW stellen.",
    },
  ];

  async function getResponse(input) {
    const clientId = "1624142232599";
    const botRequestURL = `http://localhost:3010/process/input/${input}/languageCode/en/clientId/${clientId}`
    console.log(`getting the answer from ${botRequestURL}`)
    const r = await (await fetch(botRequestURL)).json()
   
    return r.nlpResult.answer
  }
</script>

<div class="basicScheme">
  <div class="contentArea">
    <Messages bind:messages />

    <InputArea {sendMessage} />
  </div>
</div>

<style>
  .contentArea {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10vh;
  }
  .basicScheme {
    background-color: black;
    min-height: 100vh;
    min-width: 100vw;
  }
</style>

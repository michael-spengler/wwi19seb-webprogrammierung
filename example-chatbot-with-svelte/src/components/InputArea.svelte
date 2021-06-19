<script>
    let userInput = "";

    export let sendMessage = () => {};
    
    function handleMessage() {
        sendMessage(userInput)
        userInput=""
    }
</script>

<div class="inputArea">
    <!-- svelte-ignore a11y-autofocus -->
    <input
        bind:value={userInput}
        on:keyup={e=>e.key==='Enter' && handleMessage(userInput)}
        type="text"
        name=""
        id=""
        style="width: 70vw"
        placeholder="Enter your question here..."
        autofocus
    />

    <button
        on:click={() => handleMessage()}>Send</button
    >
</div>

<style>
    .inputArea {
        position: absolute;
        bottom: 11px;
    }

    button {
        width: 15vw;
    }
</style>

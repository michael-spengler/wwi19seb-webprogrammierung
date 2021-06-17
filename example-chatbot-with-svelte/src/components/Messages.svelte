<script>
    let messages = [
        {
            bot: true,
            text: "Guten Tag. Du kannst mir alle Fragen rund um Dein Studium an der DHBW stellen.",
        },
    ];
</script>

<div class="messageBox">
    {#each messages as message}
        {#if message.bot}
            <div class="messageByBot">
                {message.text}
            </div>
        {:else}
            <div class="messageByUser">
                {message.text}
            </div>
        {/if}
    {/each}
</div>

<style>
    .messageBox {
        background-color: white;
        color: black;
        min-height: 70vh;
    }
    .messageByBot {
        padding-left: 0.2vw;
        padding-top: 2vh;
        text-align: left;
    }
    .messageByUser {
        padding-right: vw;
        padding-top: 2vh;
        text-align: right;
    }
</style>

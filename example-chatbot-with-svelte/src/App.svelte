<script>
  import Messages from "@/components/Messages.svelte";
  import InputArea from "@/components/InputArea.svelte";
</script>

<div class="basicScheme">
  <div class="contentArea">
    <Messages />

    <InputArea />
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

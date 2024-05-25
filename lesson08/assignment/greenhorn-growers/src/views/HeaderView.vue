<template>
<div class="fancy">
<slot name="header">Growers</slot>
</div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.fancy {
    font-size: 4em;
    color: #800020;
    font-family: "Lucida Handwriting", "Brush Script MT", cursive;
}
</style>
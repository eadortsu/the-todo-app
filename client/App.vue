<template>
    <div>
        <p>This is a Vue component and below is the current date:<br />{{date}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
            };
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>

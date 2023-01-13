<template>
    <div>
        <router-link to="/"></router-link>
        <router-link to="/addData"></router-link>
        <router-link to="/delData"></router-link>
        <router-link to="/updateData"></router-link>
        <router-link to="/viewData"></router-link>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    @import '../css/main.css'
</style>


<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Vue Router Demo</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- <a href="">About</a>
                    <a href="">Home</a> -->
                    <router-link to="/About">About</router-link>
                    <router-link to="/Home">Home</router-link>
                </div>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'App',

}
</script>



<template>
    <div class="sidebar">
        <div class="block">
            <a href="/" class="title">Invoice App</a>
        </div>

        <div class="block">
            <ul class="nav-menu">
                <li class="nav-link">
                    <a href="/" class="menu-link active">Dashboard</a>
                </li>
            </ul>

            <ul class="nav-menu">
                <li class="nav-link">
                    <a href="/addData" class="menu-link">Add Invoice</a>
                </li>
                <li class="nav-link">
                    <a href="/viewData" class="menu-link">View Invoice</a>
                </li>
                <li class="nav-link">
                    <a href="/updateData" class="menu-link">Update Invoice</a>
                </li>
                <li class="nav-link">
                    <a href="/delData" class="menu-link">Delete Invoice</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SideBar',
    }
</script>
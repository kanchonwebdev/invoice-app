<template>
    <div class="nav-container">
        <div class="menu-icon">
            <i class="ri-menu-line" @click="toggleSidebar()"></i>
        </div>
        <ul class="dropdown-menu">
            <li class="menu-link-block">
                <a href="/">Hello, Admin <i class="ri-arrow-drop-down-fill"></i></a>
                <ul class="menu-block">
                    <li class="nav-link">
                        <a href="#" class="menu-link">
                            <i class="ri-shield-user-line"></i>
                            Profile
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" class="menu-link">
                            <i class="ri-lock-line"></i>
                            Change Password
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" class="menu-link">
                            <i class="ri-logout-circle-line"></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>
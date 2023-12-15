<template>
    <header>
        <div>
            <router-link :to="{name: 'Home'}"> 
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            </router-link>
            
            <h1>{{ title  }}</h1>

            <nav>
                <ul>
                    <li v-for="item in navItems" :key="item.name">
                        <router-link :to="item.url">{{ item.name }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
    const title = "Nerd From Newark"
    const navItems = [
        {
            name: "Home",
            url: '/'
        },
        {
            name: "About",
            url: '/about'
        },
        {
            name: "Roles",
            url: '/roles'
        }
    ];
</script>
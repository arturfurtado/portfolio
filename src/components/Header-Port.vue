<script setup lang="ts">
</script>

<template>
    <header class="header">
        <a class="logo">FURTADO</a>
        <nav class="nav-links">
            <a class="nav-link">PROJETOS</a>
            <a class="nav-link">SOBRE</a>
        </nav>
    </header>
</template>


<style scoped>
.header {
    position: relative;
    padding: 1rem;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
}

.nav-link {
    font-size: 18px;
    text-decoration: none;
    color: #ffffff;
}
</style>
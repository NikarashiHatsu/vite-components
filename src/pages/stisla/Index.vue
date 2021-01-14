<template>
    <div class="max-w-6xl mx-auto px-6">

        <!-- Navigation -->
        <div class="flex flex-col my-6">
            <div class="flex justify-between">
                <router-link :to="'../'">Back</router-link>
                <span>Stisla Components</span>
            </div>
        </div>

        <!-- Menus -->
        <div class="flex flex-col">
            <h6 class="text-large font-bold my-2">
                Components
            </h6>
            <ol class="list-decimal">
                <li>
                    <router-link to="/stisla/articles">
                        Articles
                    </router-link>
                </li>
            </ol>
        </div>
    </div>
</template>
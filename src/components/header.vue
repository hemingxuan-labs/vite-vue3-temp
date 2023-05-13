/** * @file * @author 何明暄 */
<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute()
const store = useStore()
const menuList = [
    { title: 'Home', path: '/' },
    { title: 'Docs', path: '/docs' },
    { title: 'About us', path: '/about' }
]
const activeIndex = ref(route.path)
watch(
    () => route.path,
    (newPath, oldPath) => {
        activeIndex.value = newPath
    },
    { immediate: true }
)
const count = computed(() => store.state.count)
const userName = computed(() => store.state.persistence.userName)
</script>
<template>
    <el-menu :default-active="activeIndex" class="el-menu-temp" mode="horizontal">
        <div>LOGO</div>
        <div class="el-menu-item-box">
            <el-menu-item
                v-for="(item, index) in menuList"
                :index="item.path"
                @click="
                    () => {
                        router.push(item.path)
                    }
                ">
                {{ item.title }}
            </el-menu-item>
        </div>
        <div class="user-head-box">
            <span>{{ userName }}:</span>
            <div
                class="user-head"
                @click="
                    () => {
                        store.commit('addCount')
                    }
                ">
                {{ count }}
            </div>
        </div>
    </el-menu>
</template>
<style lang="scss">
.el-menu-temp {
    width: 100vw;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-menu-item-box {
        display: flex;
        .el-menu-item.is-active {
            border-bottom: 2px solid var(--el-menu-active-color);
        }
    }
    .user-head-box {
        display: flex;
        align-items: center;
        .user-head {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: aquamarine;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            user-select: none;
            margin-left: 10px;
        }
    }
}
</style>

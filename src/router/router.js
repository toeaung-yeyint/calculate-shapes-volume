import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import ShapeDetails from '../views/shapeDetails.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/:id',
        component: ShapeDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
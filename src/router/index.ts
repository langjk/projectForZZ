import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TeamIntroduction from '../views/TeamIntroduction.vue'
import ResearchResults from '../views/ResearchResults.vue'
import AcademicAchievements from '../views/AcademicAchievements.vue'
import CollaborationExchange from '../views/CollaborationExchange.vue'
import TeamBuildingActivities from '../views/TeamBuildingActivities.vue'
import ContactInformation from '../views/ContactInformation.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/team', component: TeamIntroduction },
    { path: '/research', component: ResearchResults },
    { path: '/academic', component: AcademicAchievements },
    { path: '/collaboration', component: CollaborationExchange },
    { path: '/activities', component: TeamBuildingActivities },
    { path: '/contact', component: ContactInformation }
]

const router = createRouter({
    history: createWebHashHistory(), // 使用 hash 模式
    routes
})

export default router

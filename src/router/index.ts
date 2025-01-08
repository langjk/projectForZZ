import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TeamIntroduction from '../views/TeamIntroduction.vue'
import ResearchResults from '../views/ResearchResults.vue'
import AcademicAchievements from '../views/academic/AcademicAchievements.vue'
import CollaborationExchange from '../views/CollaborationExchange.vue'
import TeamBuildingActivities from '../views/TeamBuildingActivities.vue'
import ContactInformation from '../views/ContactInformation.vue'

import CenterIntroduction from '../views/center/CenterIntroduction.vue';
import TeacherTeam from '../views/center/TeacherTeam.vue';
import GraduateStudents from '../views/center/GraduateStudents.vue';
import FullTimeResearch from '../views/center/FullTimeResearch.vue';
import JointTraining from '../views/center/JointTraining.vue';
import Alumni from '../views/center/Alumni.vue';

import NewsCenter from '../views/NewsCenter.vue';
import Notices from '../views/Notices.vue';

import EmbeddedComputing from '../views/research/EmbeddedComputing.vue';
import PowerDriveControl from '../views/research/PowerDriveControl.vue';
import WirelessPowerTransfer from '../views/research/WirelessPowerTransfer.vue';
import EnergyCoordinationControl from '../views/research/EnergyCoordinationControl.vue';

import LatestResults from '@/views/academic/LatestResults.vue'
import Monographs from '@/views/academic/Monographs.vue'
import PapersPatents from '@/views/academic/PapersPatents.vue'

const routes = [
    { path: '/', component: HomePage },

    {
        path: '/center',
        name: 'Center',
        children: [
            { path: 'introduction', name: 'CenterIntroduction', component: CenterIntroduction },
            { path: 'teachers', name: 'TeacherTeam', component: TeacherTeam },
            { path: 'graduates', name: 'GraduateStudents', component: GraduateStudents },
            { path: 'full-time-research', name: 'FullTimeResearch', component: FullTimeResearch },
            { path: 'joint-training', name: 'JointTraining', component: JointTraining },
            { path: 'alumni', name: 'Alumni', component: Alumni }
        ]
    },
    {
        path: '/news',
        name: 'News',
        children: [
            { path: 'center', name: 'NewsCenter', component: NewsCenter },
            { path: 'notices', name: 'Notices', component: Notices }
        ]
    },
    {
        path: '/research',
        name: 'Research',
        children: [
            { path: 'embedded-computing', name: 'EmbeddedComputing', component: EmbeddedComputing },
            { path: 'power-drive-control', name: 'PowerDriveControl', component: PowerDriveControl },
            { path: 'wireless-power-transfer', name: 'WirelessPowerTransfer', component: WirelessPowerTransfer },
            { path: 'energy-coordination-control', name: 'EnergyCoordinationControl', component: EnergyCoordinationControl }
        ]
    },
    { path: '/team', component: TeamIntroduction },
    { path: '/research', component: ResearchResults },
    {
        path: '/academic-results',
        name: 'AcademicResults',
        component: AcademicAchievements, // 父级容器组件（可以是一个布局组件）
        children: [
            {
                path: 'latest-results',
                name: 'LatestResults',
                component: LatestResults // 最新成果组件
            },
            {
                path: 'papers-patents',
                name: 'PapersPatents',
                component: PapersPatents // 论文专利组件
            },
            {
                path: 'monographs',
                name: 'Monographs',
                component: Monographs // 专著组件
            }
        ]
    },
    { path: '/collaboration', component: CollaborationExchange },
    { path: '/activities', component: TeamBuildingActivities },
    { path: '/contact', component: ContactInformation }
]

const router = createRouter({
    history: createWebHashHistory(), // 使用 hash 模式
    routes
})

export default router

<!-- <script lang="ts" setup>
import { ref } from 'vue'
import type { DrawerProps, TabsPaneContext } from 'element-plus'
const drawer = ref(false);
const direction = ref<DrawerProps['direction']>('ltr')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    if (tab.uid == 20) {
        drawer.value = true;
    }
    console.log(tab.uid, event);
}
const activeName = ref('first')
</script>
<template>
    <el-tabs class="tabsupr" tab-position="left" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="工作台">工作台</el-tab-pane>
        <el-tab-pane label="项目">项目</el-tab-pane>
        <el-tab-pane label="ai">ai</el-tab-pane>
        <el-tab-pane label="事项">事项</el-tab-pane>
        <el-tab-pane label="代码">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="最近访问" name="first">
                    <div class="dd1">
                        <img src="/src/static/images/4.png">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="全部仓库" name="second">
                    <div class="dd1"><svg width="168" height="128" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <rect id="e" x="0" y="0" width="136" height="96" rx="3" />
                                <rect id="a" x="24" y="21" width="90" height="10" rx="2" />
                                <rect id="b" x="24" y="35" width="90" height="15" rx="2" />
                                <rect id="c" x="24" y="7" width="50" height="10" rx="2" />
                                <rect id="l" x="0" y="0" width="36" height="36" rx="2" />
                                <mask id="f" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                                    width="90" height="10" fill="#fff">
                                    <use xlink:href="#a" />
                                </mask>
                                <mask id="g" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                                    width="90" height="15" fill="#fff">
                                    <use xlink:href="#b" />
                                </mask>
                                <mask id="h" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                                    width="50" height="10" fill="#fff">
                                    <use xlink:href="#c" />
                                </mask>
                                <filter x="-3.7%" y="-4.2%" width="107.4%" height="110.4%"
                                    filterUnits="objectBoundingBox" id="d">
                                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter x="-44.4%" y="-38.9%" width="188.9%" height="188.9%"
                                    filterUnits="objectBoundingBox" id="k">
                                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <path
                                    d="M4.104 1.465H.896c-.096 0-.15.101-.09.17l1.604 1.86a.122.122 0 00.18 0l1.604-1.86c.06-.069.006-.17-.09-.17z"
                                    id="i" />
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(16 16)">
                                    <use fill="#000" filter="url(#d)" xlink:href="#e" />
                                    <use fill="#F2F4F6" xlink:href="#e" />
                                </g>
                                <g transform="translate(16 16)">
                                    <path d="M3 0h130a3 3 0 013 3v6H0V3a3 3 0 013-3z" fill="#606C80" opacity=".2" />
                                    <circle fill="#FFF" opacity=".747" cx="5.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="11.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="17.5" cy="4.5" r="1.5" />
                                </g>
                                <g transform="translate(23 30)">
                                    <rect fill="#FFF" width="122" height="78" rx="2" />
                                    <use stroke="#DFE5F0" mask="url(#f)" stroke-width="2" fill-opacity=".25"
                                        fill="#E5EAEE" stroke-dasharray="2" xlink:href="#a" />
                                    <use stroke="#DFE5F0" mask="url(#g)" stroke-width="2" fill-opacity=".25"
                                        fill="#E5EAEE" stroke-dasharray="2" xlink:href="#b" />
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="8" y="39.5" width="12"
                                        height="4" rx="1" />
                                    <rect fill="#06F" fill-rule="nonzero" x="24" y="62" width="24" height="10" rx="1" />
                                    <rect fill="#E7EBF2" fill-rule="nonzero" x="50" y="62" width="24" height="10"
                                        rx="1" />
                                    <path stroke="#606C80" opacity=".072" stroke-linecap="square" d="M8 56h106" />
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="8" y="24" width="12"
                                        height="4" rx="1" />
                                    <use stroke="#DFE5F0" mask="url(#h)" stroke-width="2" fill-opacity=".25"
                                        fill="#E5EAEE" stroke-dasharray="2" xlink:href="#c" />
                                    <rect fill="#89D3EE" x="28" y="10" width="8" height="4" rx="1" />
                                    <g transform="translate(65 9.5)">
                                        <mask id="j" fill="#fff">
                                            <use xlink:href="#i" />
                                        </mask>
                                        <use fill="#000" xlink:href="#i" />
                                        <g mask="url(#j)" fill="#202D40">
                                            <path d="M0 0h5v5H0z" />
                                        </g>
                                    </g>
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="8" y="10.5" width="12"
                                        height="4" rx="1" />
                                </g>
                                <g transform="translate(122 25)">
                                    <use fill="#000" filter="url(#k)" xlink:href="#l" />
                                    <use fill="#FFF" xlink:href="#l" />
                                    <rect fill="#F5A623" opacity=".7" x="4" y="5" width="28" height="2" rx="1" />
                                    <rect fill="#F5A623" opacity=".401" x="4" y="9" width="20" height="2" rx="1" />
                                    <g transform="translate(4 16)">
                                        <rect fill="#51C48A" width="3" height="3" rx="1" />
                                        <rect fill="#DDE2F6" opacity=".5" x="5" y="1" width="15" height="1" rx=".5" />
                                        <rect fill="#DDE2F6" opacity=".5" x="25" y=".5" width="2" height="2" rx="1" />
                                        <rect fill="#DDE2F6" opacity=".5" x="25" y="6.5" width="2" height="2" rx="1" />
                                        <rect fill="#DDE2F6" opacity=".5" x="25" y="12.5" width="2" height="2" rx="1" />
                                        <rect fill="#DDE2F6" opacity=".5" x="5" y="7" width="15" height="1" rx=".5" />
                                        <rect fill="#DDE2F6" opacity=".5" x="5" y="13" width="15" height="1" rx=".5" />
                                        <rect fill="#F8C065" y="6" width="3" height="3" rx="1" />
                                        <rect fill="#5881FC" y="12" width="3" height="3" rx="1" />
                                    </g>
                                </g>
                            </g>
                        </svg><svg width="168" height="128" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <filter x="-3.7%" y="-4.2%" width="107.4%" height="110.4%"
                                    filterUnits="objectBoundingBox" id="a">
                                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter x="-14.3%" y="-37.8%" width="128.6%" height="186.5%"
                                    filterUnits="objectBoundingBox" id="c">
                                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter id="e">
                                    <feColorMatrix in="SourceGraphic"
                                        values="0 0 0 0 0.000000 0 0 0 0 0.670588 0 0 0 0 0.878431 0 0 0 1.000000 0" />
                                </filter>
                                <filter x="-34.6%" y="-45.7%" width="169.2%" height="217.4%"
                                    filterUnits="objectBoundingBox" id="f">
                                    <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                        in="shadowBlurOuter1" result="shadowMatrixOuter1" />
                                    <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter2" />
                                    <feGaussianBlur stdDeviation=".75" in="shadowOffsetOuter2"
                                        result="shadowBlurOuter2" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                        in="shadowBlurOuter2" result="shadowMatrixOuter2" />
                                    <feOffset dx="3" dy="3" in="SourceAlpha" result="shadowOffsetOuter3" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                                        in="shadowOffsetOuter3" result="shadowMatrixOuter3" />
                                    <feMerge>
                                        <feMergeNode in="shadowMatrixOuter1" />
                                        <feMergeNode in="shadowMatrixOuter2" />
                                        <feMergeNode in="shadowMatrixOuter3" />
                                    </feMerge>
                                </filter>
                                <circle id="h" cx="4.5" cy="4.5" r="4.5" />
                                <circle id="j" cx="4.5" cy="4.5" r="4.5" />
                                <circle id="l" cx="4.5" cy="4.5" r="4.5" />
                                <path d="M2 0h108a2 2 0 012 2v33a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z" id="d" />
                                <path d="M2 0h35a2 2 0 012 2v19a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z" id="g" />
                                <rect id="b" x="0" y="0" width="136" height="96" rx="3" />
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(16 16)">
                                    <use fill="#000" filter="url(#a)" xlink:href="#b" />
                                    <use fill="#F2F4F6" xlink:href="#b" />
                                </g>
                                <g transform="translate(16 16)">
                                    <path d="M3 0h130a3 3 0 013 3v6H0V3a3 3 0 013-3z" fill="#606C80" opacity=".2" />
                                    <circle fill="#FFF" opacity=".747" cx="5.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="11.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="17.5" cy="4.5" r="1.5" />
                                </g>
                                <g transform="translate(23 30)">
                                    <rect fill="#FFF" width="122" height="78" rx="2" />
                                    <g transform="translate(5 36)">
                                        <use fill="#000" filter="url(#c)" xlink:href="#d" />
                                        <use fill="#FFF" xlink:href="#d" />
                                        <rect fill="#E7EBF2" x="12" y="5" width="64" height="3" rx="1" />
                                        <rect fill="#1F85F4" fill-rule="nonzero" opacity=".604" x="101" y="5" width="8"
                                            height="3" rx="1" />
                                        <rect fill="#1F85F4" fill-rule="nonzero" opacity=".604" x="101" y="13" width="8"
                                            height="3" rx="1" />
                                        <rect fill="#1F85F4" fill-rule="nonzero" opacity=".604" x="101" y="21" width="8"
                                            height="3" rx="1" />
                                        <rect fill="#1F85F4" fill-rule="nonzero" opacity=".604" x="101" y="29" width="8"
                                            height="3" rx="1" />
                                        <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="91" y="5" width="6"
                                            height="3" rx="1" />
                                        <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="91" y="13" width="6"
                                            height="3" rx="1" />
                                        <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="91" y="21" width="6"
                                            height="3" rx="1" />
                                        <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".5" x="91" y="29" width="6"
                                            height="3" rx="1" />
                                        <rect fill="#E7EBF2" x="12" y="13" width="64" height="3" rx="1" />
                                        <rect fill="#E7EBF2" x="12" y="21" width="64" height="3" rx="1" />
                                        <rect fill="#E7EBF2" x="12" y="29" width="64" height="3" rx="1" />
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(4 4)" fill="#F24C3D" />
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(4 12)" fill="#FFAF58" />
                                        <circle cx="2.5" cy="2.5" r="2.5" transform="translate(4 20)" fill="#51C48A" />
                                        <g transform="translate(4 28)" fill="#5881FC">
                                            <circle cx="2.5" cy="2.5" r="2.5" />
                                        </g>
                                    </g>
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".7" x="5" y="28" width="16"
                                        height="3" rx="1" />
                                    <g transform="translate(5 5)">
                                        <rect fill="#09B1E5" fill-rule="nonzero" opacity=".146" width="12" height="12"
                                            rx="1.5" />
                                        <g transform="translate(2 2)" filter="url(#e)">
                                            <path
                                                d="M5.238.075a.05.05 0 01.012.032V.75H6.5a.5.5 0 01.5.5v3.836a1.5 1.5 0 11-1 0V1.75h-.75v.643a.05.05 0 01-.082.039L3.796 1.288a.05.05 0 01-.006-.07L5.168.068a.05.05 0 01.07.007zM2 0a1.5 1.5 0 01.5 2.914v2.172a1.5 1.5 0 11-1 0V2.914A1.5 1.5 0 012 0zm4.5 6a.5.5 0 100 1 .5.5 0 000-1zM2 6a.5.5 0 100 1 .5.5 0 000-1zm0-5a.5.5 0 100 1 .5.5 0 000-1z"
                                                fill="#202D40" fill-rule="nonzero" />
                                        </g>
                                    </g>
                                    <path fill="#F5F7FA" fill-rule="nonzero" d="M5 22h112v1H5z" />
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".7" x="22" y="5" width="24"
                                        height="4" rx="1" />
                                    <path d="M23 13h23v4H23a1 1 0 01-1-1v-2a1 1 0 011-1z" fill="#39C27D"
                                        opacity=".694" />
                                    <path d="M78 13h15a1 1 0 011 1v2a1 1 0 01-1 1H78v-4z" fill="#1F85F4" opacity=".5" />
                                    <path fill="#8FC2F9" d="M47 13h30v4H47z" />
                                </g>
                                <g transform="translate(122 26)">
                                    <use fill="#000" filter="url(#f)" xlink:href="#g" />
                                    <use fill="#FFF" xlink:href="#g" />
                                    <g transform="translate(23 4)">
                                        <mask id="i" fill="#fff">
                                            <use xlink:href="#h" />
                                        </mask>
                                        <circle stroke="#FFF" cx="4.5" cy="4.5" r="5" />
                                        <g mask="url(#i)" fill="#FFF" fill-rule="nonzero" opacity=".7">
                                            <path
                                                d="M4.5 6.375c-.786 0-1.429-.675-1.429-1.5V4.5c0-.825.643-1.5 1.429-1.5s1.429.675 1.429 1.5v.375c0 .825-.643 1.5-1.429 1.5zM5.214 7.125H3.786C2.786 7.125 2 7.95 2 9h5c0-1.05-.786-1.875-1.786-1.875z" />
                                        </g>
                                    </g>
                                    <g transform="translate(15 4)">
                                        <mask id="k" fill="#fff">
                                            <use xlink:href="#j" />
                                        </mask>
                                        <circle stroke="#FFF" cx="4.5" cy="4.5" r="5" />
                                        <g mask="url(#k)" fill="#FFF" fill-rule="nonzero" opacity=".7">
                                            <path
                                                d="M4.5 6.375c-.786 0-1.429-.675-1.429-1.5V4.5c0-.825.643-1.5 1.429-1.5s1.429.675 1.429 1.5v.375c0 .825-.643 1.5-1.429 1.5zM5.214 7.125H3.786C2.786 7.125 2 7.95 2 9h5c0-1.05-.786-1.875-1.786-1.875z" />
                                        </g>
                                    </g>
                                    <g transform="translate(7 4)">
                                        <mask id="m" fill="#fff">
                                            <use xlink:href="#l" />
                                        </mask>
                                        <circle stroke="#FFF" cx="4.5" cy="4.5" r="5" />
                                        <g mask="url(#m)" fill="#FFF" fill-rule="nonzero" opacity=".7">
                                            <path
                                                d="M4.5 6.375c-.786 0-1.429-.675-1.429-1.5V4.5c0-.825.643-1.5 1.429-1.5s1.429.675 1.429 1.5v.375c0 .825-.643 1.5-1.429 1.5zM5.214 7.125H3.786C2.786 7.125 2 7.95 2 9h5c0-1.05-.786-1.875-1.786-1.875z" />
                                        </g>
                                    </g>
                                    <g transform="translate(29 9)">
                                        <circle fill="#32BE77" cx="2.5" cy="2.5" r="2.5" />
                                        <path d="M.625 4.375h3.75V.625H.625z" />
                                        <path
                                            d="M4.096 1.363L1.92 3.78a.02.02 0 01-.032 0L.891 2.533A.02.02 0 01.908 2.5h.546a.02.02 0 01.016.008l.455.568L3.49 1.335a.02.02 0 01.016-.007h.574a.02.02 0 01.015.035z"
                                            fill="#FFF" fill-rule="nonzero" />
                                    </g>
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".7" x="7" y="17" width="16"
                                        height="2" rx="1" />
                                </g>
                            </g>
                        </svg><svg width="168" height="128" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <filter x="-3.7%" y="-4.2%" width="107.4%" height="110.4%"
                                    filterUnits="objectBoundingBox" id="b">
                                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter x="-70%" y="-50%" width="240%" height="240%" filterUnits="objectBoundingBox"
                                    id="d">
                                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix
                                        values="0 0 0 0 0.196078431 0 0 0 0 0.745098039 0 0 0 0 0.466666667 0 0 0 0.4 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter id="f">
                                    <feColorMatrix in="SourceGraphic"
                                        values="0 0 0 0 0.000000 0 0 0 0 0.439216 0 0 0 0 1.000000 0 0 0 1.000000 0" />
                                </filter>
                                <filter x="-70%" y="-50%" width="240%" height="240%" filterUnits="objectBoundingBox"
                                    id="g">
                                    <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                        result="shadowBlurOuter1" />
                                    <feColorMatrix
                                        values="0 0 0 0 0.196078431 0 0 0 0 0.745098039 0 0 0 0 0.466666667 0 0 0 0.4 0"
                                        in="shadowBlurOuter1" />
                                </filter>
                                <filter id="i">
                                    <feColorMatrix in="SourceGraphic"
                                        values="0 0 0 0 0.000000 0 0 0 0 0.439216 0 0 0 0 1.000000 0 0 0 1.000000 0" />
                                </filter>
                                <filter id="k">
                                    <feColorMatrix in="SourceGraphic"
                                        values="0 0 0 0 0.000000 0 0 0 0 0.439216 0 0 0 0 1.000000 0 0 0 1.000000 0" />
                                </filter>
                                <circle id="e" cx="5" cy="5" r="5" />
                                <circle id="h" cx="5" cy="5" r="5" />
                                <rect id="c" x="0" y="0" width="136" height="96" rx="3" />
                                <path d="M2 0h108a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z" id="a" />
                                <mask id="j" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                                    width="112" height="18" fill="#fff">
                                    <use xlink:href="#a" />
                                </mask>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(16 16)">
                                    <use fill="#000" filter="url(#b)" xlink:href="#c" />
                                    <use fill="#F2F4F6" xlink:href="#c" />
                                </g>
                                <g transform="translate(16 16)">
                                    <path d="M3 0h130a3 3 0 013 3v6H0V3a3 3 0 013-3z" fill="#606C80" opacity=".2" />
                                    <circle fill="#FFF" opacity=".747" cx="5.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="11.5" cy="4.5" r="1.5" />
                                    <circle fill="#FFF" opacity=".747" cx="17.5" cy="4.5" r="1.5" />
                                </g>
                                <g transform="translate(23 30)">
                                    <rect fill="#FFF" width="122" height="78" rx="2" />
                                    <path d="M7 11h108a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V13a2 2 0 012-2z"
                                        fill="#F4F6F8" />
                                    <g transform="translate(103 15)">
                                        <use fill="#000" filter="url(#d)" xlink:href="#e" />
                                        <use fill="#32BE77" xlink:href="#e" />
                                    </g>
                                    <path d="M104.25 23.75h7.5v-7.5h-7.5z" />
                                    <path
                                        d="M111.193 17.726l-4.353 4.837a.042.042 0 01-.064-.002l-1.993-2.493a.042.042 0 01.032-.068h1.093c.013 0 .025.006.033.016l.908 1.135 3.133-3.481a.042.042 0 01.031-.014h1.149a.042.042 0 01.03.07z"
                                        fill="#FFF" fill-rule="nonzero" />
                                    <path d="M26 16h63a1 1 0 011 1v1a1 1 0 01-1 1H26a1 1 0 01-1-1v-1a1 1 0 011-1z"
                                        fill="#CFD8E5" fill-rule="nonzero" />
                                    <path d="M26 22h47a1 1 0 010 2H26a1 1 0 010-2z" fill="#CFD8E5" fill-rule="nonzero"
                                        opacity=".5" />
                                    <g transform="translate(8 14)">
                                        <rect fill="#1A78FF" fill-rule="nonzero" opacity=".15" width="12" height="12"
                                            rx="1.5" />
                                        <g transform="translate(2 2)" filter="url(#f)">
                                            <path
                                                d="M5.59 1a.05.05 0 01.046.068L3.412 7H2.344l2.237-5.968A.05.05 0 014.628 1h.961zM2.488 2.073a.05.05 0 01.011.031v1.05a.05.05 0 01-.018.038l-.945.81.945.81a.05.05 0 01.018.038v1.046a.05.05 0 01-.081.04L.049 4.04a.05.05 0 01-.008-.07l.008-.008 2.37-1.898a.05.05 0 01.07.008zm3.022 0a.05.05 0 01.053-.017l.017.01L7.96 3.97a.05.05 0 01.005.055l-.013.015-2.37 1.894a.05.05 0 01-.077-.02L5.5 5.896V4.85c0-.01.003-.019.009-.027l.009-.01.945-.81-.945-.811a.05.05 0 01-.015-.024L5.5 3.154v-1.05a.05.05 0 01.011-.031z"
                                                fill="#202D40" fill-rule="nonzero" />
                                        </g>
                                    </g>
                                    <rect fill="#CFD8E5" fill-rule="nonzero" opacity=".7" x="5" y="5" width="20"
                                        height="4" rx="1" />
                                    <g>
                                        <path d="M7 33h108a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V35a2 2 0 012-2z"
                                            fill="#F4F6F8" />
                                        <g transform="translate(103 37)">
                                            <use fill="#000" filter="url(#g)" xlink:href="#h" />
                                            <use fill="#32BE77" xlink:href="#h" />
                                        </g>
                                        <path d="M104.25 45.75h7.5v-7.5h-7.5z" />
                                        <path
                                            d="M111.193 39.726l-4.353 4.837a.042.042 0 01-.064-.002l-1.993-2.493a.042.042 0 01.032-.068h1.093c.013 0 .025.006.033.016l.908 1.135 3.133-3.481a.042.042 0 01.031-.014h1.149a.042.042 0 01.03.07z"
                                            fill="#FFF" fill-rule="nonzero" />
                                        <path d="M26 38h63a1 1 0 011 1v1a1 1 0 01-1 1H26a1 1 0 01-1-1v-1a1 1 0 011-1z"
                                            fill="#CFD8E5" fill-rule="nonzero" />
                                        <path d="M26 44h47a1 1 0 010 2H26a1 1 0 010-2z" fill="#CFD8E5"
                                            fill-rule="nonzero" opacity=".5" />
                                        <g transform="translate(8 36)">
                                            <rect fill="#1A78FF" fill-rule="nonzero" opacity=".15" width="12"
                                                height="12" rx="1.5" />
                                            <g transform="translate(2 2)" filter="url(#i)">
                                                <path
                                                    d="M5.59 1a.05.05 0 01.046.068L3.412 7H2.344l2.237-5.968A.05.05 0 014.628 1h.961zM2.488 2.073a.05.05 0 01.011.031v1.05a.05.05 0 01-.018.038l-.945.81.945.81a.05.05 0 01.018.038v1.046a.05.05 0 01-.081.04L.049 4.04a.05.05 0 01-.008-.07l.008-.008 2.37-1.898a.05.05 0 01.07.008zm3.022 0a.05.05 0 01.053-.017l.017.01L7.96 3.97a.05.05 0 01.005.055l-.013.015-2.37 1.894a.05.05 0 01-.077-.02L5.5 5.896V4.85c0-.01.003-.019.009-.027l.009-.01.945-.81-.945-.811a.05.05 0 01-.015-.024L5.5 3.154v-1.05a.05.05 0 01.011-.031z"
                                                    fill="#202D40" fill-rule="nonzero" />
                                            </g>
                                        </g>
                                    </g>
                                    <g transform="translate(5 55)">
                                        <use stroke="#DFE5F0" mask="url(#j)" stroke-width="2" fill-opacity="0"
                                            fill="#F1F3F5" stroke-dasharray="2" xlink:href="#a" />
                                        <g opacity=".6">
                                            <path d="M21 5h63a1 1 0 011 1v1a1 1 0 01-1 1H21a1 1 0 01-1-1V6a1 1 0 011-1z"
                                                fill="#CFD8E5" fill-rule="nonzero" />
                                            <path d="M21 11h47a1 1 0 010 2H21a1 1 0 010-2z" fill="#CFD8E5"
                                                fill-rule="nonzero" opacity=".5" />
                                            <g transform="translate(3 3)">
                                                <rect fill="#1A78FF" fill-rule="nonzero" opacity=".15" width="12"
                                                    height="12" rx="1.5" />
                                                <g transform="translate(2 2)" filter="url(#k)">
                                                    <path
                                                        d="M5.59 1a.05.05 0 01.046.068L3.412 7H2.344l2.237-5.968A.05.05 0 014.628 1h.961zM2.488 2.073a.05.05 0 01.011.031v1.05a.05.05 0 01-.018.038l-.945.81.945.81a.05.05 0 01.018.038v1.046a.05.05 0 01-.081.04L.049 4.04a.05.05 0 01-.008-.07l.008-.008 2.37-1.898a.05.05 0 01.07.008zm3.022 0a.05.05 0 01.053-.017l.017.01L7.96 3.97a.05.05 0 01.005.055l-.013.015-2.37 1.894a.05.05 0 01-.077-.02L5.5 5.896V4.85c0-.01.003-.019.009-.027l.009-.01.945-.81-.945-.811a.05.05 0 01-.015-.024L5.5 3.154v-1.05a.05.05 0 01.011-.031z"
                                                        fill="#202D40" fill-rule="nonzero" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg></div>
                </el-tab-pane>
                <el-tab-pane label="开源仓库" name="third">
                    <div class="dd1"><img src="/src/static/images/4.png"></div>
                </el-tab-pane>
            </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="制品">制品</el-tab-pane>
        <el-tab-pane label="洞察">洞察</el-tab-pane>
        <el-tab-pane label="知识">知识</el-tab-pane>
        <el-tab-pane label="自动化">自动化</el-tab-pane>
        <el-tab-pane label="我的">我的</el-tab-pane>
    </el-tabs>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false" :direction="direction">
        <div class="flex flex-wrap gap-7">
            <el-card style="width: 480px" shadow="hover" margin-top:5px>个人账户设置</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>服务订购</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>邀请成员</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>切换语言</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>工单中心</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>更新日志</el-card>
            <el-card style="width: 480px" shadow="hover" margin-top:5px>退出</el-card>
        </div>
    </el-drawer>
</template>
<style scoped>
.tabsupr {
    width: 99.8vw;
    height: 75vh;
}

.demo-tabs {
    width: 50vw;
    height: 75vh;
}
</style> -->
<script setup></script>
<template>
    <div class="header"></div>
</template>
<style scoped></style>
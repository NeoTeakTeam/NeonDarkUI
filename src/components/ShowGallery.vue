<script setup lang="ts">
import LayoutExample from "./Examples/LayoutExample.vue";
import ComponentsExample from "./Examples/ComponentsExample.vue";
import ButtonExample from "./Examples/ButtonExample.vue";
import FormExample from "./Examples/FormExample.vue";
import TableExample from "./Examples/TableExample.vue";
import UtilitiesExample from "./Examples/UtilitiesExample.vue";
</script>

<template>
    <!-- 主要内容 -->
    <main class="container">
        <section id="galleryNavbar" class="section">
            <h2 class="section-title title">快速导航</h2>
            <div class="card">
                <div class="card-body">
                    <a href="#layout" class="btn btn-outline">排版</a> &nbsp;
                    <a href="#components" class="btn btn-outline">组件</a>
                    &nbsp;
                    <a href="#button" class="btn btn-outline">按钮</a> &nbsp;
                    <a href="#form" class="btn btn-outline">表单</a> &nbsp;
                    <a href="#table" class="btn btn-outline">表格</a> &nbsp;
                    <a href="#utilities" class="btn btn-outline">工具</a> &nbsp;
                </div>
            </div>
        </section>

        <!-- 排版部分 -->
        <LayoutExample id="layout" />

        <!-- 组件部分 -->
        <ComponentsExample id="components" />

        <!-- 按钮部分 -->
        <ButtonExample id="button" />

        <!-- 表单部分 -->
        <FormExample id="form" />

        <!-- 表格部分 -->
        <TableExample id="table" />

        <!-- 对话框部分 -->
        <!-- 对话框部分还没想好怎么做喵
             -- 2026/1/18 AImixAE Nya Mocha -->
        <!--
        <section id="dialogs" class="section">
            <h2 class="section-title title">对话框组件</h2>

            <div class="card">
                <div class="card-header">
                    <i class="fas fa-window-restore"></i> 对话框示例
                </div>
                <div class="card-body">
                    <p>对话框是重要的交互组件，用于显示重要信息、确认操作或收集用户输入。</p>

                    <div class="button-group">
                        <button class="btn btn-primary btn-ripple" id="openSimpleDialogBtn">
                            <i class="fas fa-info-circle"></i> 简单对话框
                        </button>
                        <button class="btn btn-success btn-ripple" id="openFormDialogBtn">
                            <i class="fas fa-edit"></i> 表单对话框
                        </button>
                        <button class="btn btn-warning btn-ripple" id="openWarningDialogBtn">
                            <i class="fas fa-exclamation-triangle"></i> 警告对话框
                        </button>
                        <button class="btn btn-danger btn-ripple" id="openDeleteDialogBtn">
                            <i class="fas fa-trash"></i> 删除对话框
                        </button>
                        <button class="btn btn-accent btn-ripple" id="openLargeDialogBtn">
                            <i class="fas fa-expand"></i> 大对话框
                        </button>
                    </div>

                    <div class="mt-4">
                        <h5>对话框特性：</h5>
                        <ul>
                            <li>平滑的淡入淡出动画</li>
                            <li>响应式设计，适配移动设备</li>
                            <li>按ESC键或点击外部区域可关闭</li>
                            <li>滚动锁定，防止背景滚动</li>
                            <li>支持不同大小和类型</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        -->

        <!-- 工具类部分 -->
        <UtilitiesExample id="utilities" />
    </main>
</template>

<style scoped></style>

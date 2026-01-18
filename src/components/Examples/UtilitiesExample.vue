<script setup lang="ts"></script>

<template>
    <section id="utilities" class="section">
        <h2 class="section-title title">工具类</h2>

        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-palette"></i> 颜色工具 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="color-grid">
                            <div class="color-item bg-primary">主要背景</div>
                            <div class="color-item bg-secondary">次要背景</div>
                            <div class="color-item bg-success">成功背景</div>
                            <div class="color-item bg-warning">警告背景</div>
                            <div class="color-item bg-danger">危险背景</div>
                            <div class="color-item bg-accent">特色背景</div>
                            <div class="color-item text-primary">主要文字</div>
                            <div class="color-item text-secondary">
                                次要文字
                            </div>
                            <div class="color-item text-success">成功文字</div>
                            <div class="color-item text-warning">警告文字</div>
                            <div class="color-item text-danger">危险文字</div>
                            <div class="color-item text-accent">特色文字</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-border-style"></i> 边距与填充 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="spacing-demo mb-3 p-3 border">
                            <code>.mb-3 .p-3 .border</code> -
                            下边距3，内边距3，边框
                        </div>
                        <div
                            class="spacing-demo mt-4 mx-auto px-4 py-2 border rounded"
                        >
                            <code
                                >.mt-4 .mx-auto .px-4 .py-2 .border
                                .rounded</code
                            >
                            -
                            上边距4，水平居中，水平内边距4，垂直内边距2，边框，圆角
                        </div>
                        <div class="spacing-demo my-5 p-5 bg-secondary">
                            <code>.my-5 .p-5 .bg-secondary</code> -
                            垂直边距5，内边距5，次要背景
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-eye"></i> 可见性 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="visible-example">
                            <div class="d-block p-2 bg-primary text-white">
                                .d-block 显示为块级
                            </div>
                            <div class="d-inline p-2 bg-success text-white">
                                .d-inline 显示为内联
                            </div>
                            <div class="d-inline p-2 bg-warning text-white">
                                .d-inline 显示为内联
                            </div>
                            <div class="d-flex p-2 bg-danger text-white mt-2">
                                <div class="mr-2">.d-flex 弹性布局</div>
                                <div>项目二</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-arrows-alt"></i> 浮动与定位 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div
                            class="position-relative border p-4"
                            style="height: 150px"
                        >
                            <div
                                class="position-absolute top-0 start-0 p-2 bg-primary"
                            >
                                左上
                            </div>
                            <div
                                class="position-absolute top-0 end-0 p-2 bg-success"
                            >
                                右上
                            </div>
                            <div
                                class="position-absolute bottom-0 start-0 p-2 bg-warning"
                            >
                                左下
                            </div>
                            <div
                                class="position-absolute bottom-0 end-0 p-2 bg-danger"
                            >
                                右下
                            </div>
                            <div
                                class="position-absolute top-50 start-50 translate-middle p-2 bg-accent"
                            >
                                居中
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="float-start p-2 bg-secondary">
                                左浮动
                            </div>
                            <div class="float-end p-2 bg-secondary">右浮动</div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

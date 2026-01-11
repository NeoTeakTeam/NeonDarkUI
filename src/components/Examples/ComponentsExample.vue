<script setup lang="ts"></script>

<template>
    <section class="section">
        <h2 class="section-title title">UI组件</h2>

        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-layer-group"></i> 卡片组件 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <p>
                            卡片是展示内容的绝佳方式，具有悬停效果和现代化阴影。
                        </p>
                        <div class="card card-subtle">
                            <div class="card-header">嵌套卡片</div>
                            <div class="card-body">这是一个嵌套卡片示例。</div>
                        </div>
                        <p class="mt-3">
                            使用 <code>.card</code> 类创建基础卡片，使用
                            <code>.card-header</code> 和
                            <code>.card-body</code> 定义结构。
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-exclamation-triangle"></i> 警告框组件
                        &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="alert alert-primary">
                            <i class="fas fa-info-circle"></i>
                            <strong>主要提示！</strong> 这是一个主要警告框。
                        </div>
                        <div class="alert alert-success">
                            <i class="fas fa-check-circle"></i>
                            <strong>成功！</strong> 操作已成功完成。
                        </div>
                        <div class="alert alert-warning">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>警告！</strong> 请检查您的输入。
                        </div>
                        <div class="alert alert-danger">
                            <i class="fas fa-times-circle"></i>
                            <strong>错误！</strong> 操作失败，请重试。
                        </div>
                        <div class="alert alert-accent">
                            <i class="fas fa-star"></i>
                            <strong>特色！</strong> 这是一个特色警告框。
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-chart-line"></i> 进度条组件 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <p>基础进度条：</p>
                        <div class="progress">
                            <div class="progress-bar" style="width: 25%">
                                25%
                            </div>
                        </div>

                        <p class="mt-3">彩色进度条：</p>
                        <div class="progress">
                            <div
                                class="progress-bar bg-primary"
                                style="width: 40%"
                            >
                                40%
                            </div>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar bg-success"
                                style="width: 60%"
                            >
                                60%
                            </div>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar bg-warning"
                                style="width: 75%"
                            >
                                75%
                            </div>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar bg-danger"
                                style="width: 90%"
                            >
                                90%
                            </div>
                        </div>

                        <p class="mt-3">条纹进度条：</p>
                        <div class="progress">
                            <div
                                class="progress-bar bg-accent progress-bar-striped"
                                style="width: 50%"
                            >
                                50%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-tags"></i> 徽章与标签 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <p>徽章示例：</p>
                        <p>
                            <span class="badge">默认徽章</span>
                            <span class="badge badge-primary">主要徽章</span>
                            <span class="badge badge-success">成功徽章</span>
                            <span class="badge badge-warning">警告徽章</span>
                            <span class="badge badge-danger">危险徽章</span>
                            <span class="badge badge-accent">特色徽章</span>
                        </p>

                        <p class="mt-3">不同大小徽章：</p>
                        <p>
                            <span class="badge badge-sm">小徽章</span>
                            <span class="badge">默认徽章</span>
                            <span class="badge badge-lg">大徽章</span>
                        </p>

                        <p class="mt-3">轮廓徽章：</p>
                        <p>
                            <span class="badge badge-outline">轮廓徽章</span>
                            <span class="badge badge-outline badge-primary"
                                >主要轮廓</span
                            >
                            <span class="badge badge-outline badge-success"
                                >成功轮廓</span
                            >
                        </p>

                        <p class="mt-3">工具提示：</p>
                        <p>
                            <span class="tooltip"
                                >悬停查看提示
                                <span class="tooltip-text"
                                    >这是一个工具提示内容</span
                                >
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>

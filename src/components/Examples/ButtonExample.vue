<script setup lang="ts"></script>

<template>
    <section id="buttons" class="section">
        <h2 class="section-title title">按钮组件</h2>

        <div class="card">
            <div class="card-header">
                <i class="fas fa-hand-pointer"></i> 按钮样式与状态 &nbsp;
                <a class="btn btn-outline btn-sm">
                    <i class="fas fa-code"></i> Source</a
                >
            </div>
            <div class="card-body">
                <p>基础按钮：</p>
                <div class="button-group">
                    <button class="btn btn-ripple">默认按钮</button>
                    <button class="btn btn-primary btn-ripple">主要按钮</button>
                    <button class="btn btn-success btn-ripple">成功按钮</button>
                    <button class="btn btn-warning btn-ripple">警告按钮</button>
                    <button class="btn btn-danger btn-ripple">危险按钮</button>
                    <button class="btn btn-accent btn-ripple">特色按钮</button>
                    <button class="btn btn-outline btn-ripple">轮廓按钮</button>
                </div>

                <p class="mt-4">不同尺寸按钮：</p>
                <div class="button-group">
                    <button class="btn btn-primary btn-sm btn-ripple">
                        小按钮
                    </button>
                    <button class="btn btn-primary btn-ripple">默认按钮</button>
                    <button class="btn btn-primary btn-lg btn-ripple">
                        大按钮
                    </button>
                    <button class="btn btn-primary btn-xl btn-ripple">
                        超大按钮
                    </button>
                </div>

                <p class="mt-4">圆角按钮：</p>
                <div class="button-group">
                    <button class="btn btn-primary btn-rounded btn-ripple">
                        圆角按钮
                    </button>
                    <button
                        class="btn btn-success btn-rounded btn-lg btn-ripple"
                    >
                        大圆角按钮
                    </button>
                    <button class="btn btn-outline btn-rounded btn-ripple">
                        轮廓圆角按钮
                    </button>
                </div>

                <p class="mt-4">禁用状态：</p>
                <div class="button-group">
                    <button class="btn btn-primary btn-ripple" disabled>
                        禁用按钮
                    </button>
                    <button class="btn btn-outline btn-ripple" disabled>
                        禁用轮廓按钮
                    </button>
                </div>

                <p class="mt-4">带图标按钮：</p>
                <div class="button-group">
                    <button class="btn btn-primary btn-ripple">
                        <i class="fas fa-rocket"></i> 发射
                    </button>
                    <button class="btn btn-success btn-ripple">
                        <i class="fas fa-check"></i> 确认
                    </button>
                    <button class="btn btn-danger btn-ripple">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <button class="btn btn-accent btn-ripple">
                        <i class="fas fa-star"></i> 收藏
                    </button>
                </div>

                <p class="mt-4">按钮组：</p>
                <div class="btn-group">
                    <button class="btn btn-outline btn-ripple">左侧</button>
                    <button class="btn btn-outline btn-ripple">中间</button>
                    <button class="btn btn-outline btn-ripple">右侧</button>
                </div>
            </div>
        </div>
    </section>
</template>

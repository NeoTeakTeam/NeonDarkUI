<script setup lang="ts"></script>

<template>
    <section class="section">
        <h2 class="section-title title">排版系统</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-font"></i> 标题示例 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <h1>h1. 一级标题</h1>
                        <h2>h2. 二级标题</h2>
                        <h3>h3. 三级标题</h3>
                        <h4>h4. 四级标题</h4>
                        <h5>h5. 五级标题</h5>
                        <h6>h6. 六级标题</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-paragraph"></i> 文本示例 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <p>
                            这是一个段落文本示例。暗黑风格设计减少了视觉疲劳，米白色文字提供了良好的可读性。
                        </p>
                        <p class="text-muted">
                            这是一个淡色文本，用于辅助内容。
                        </p>
                        <p class="text-primary">这是一个主要颜色文本。</p>
                        <p class="text-success">这是一个成功颜色文本。</p>
                        <p class="text-warning">这是一个警告颜色文本。</p>
                        <p class="text-danger">这是一个危险颜色文本。</p>
                        <p>
                            <strong>加粗文本</strong> 和 <em>斜体文本</em> 以及
                            <u>下划线文本</u>。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-list"></i> 列表示例 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <h5>无序列表</h5>
                                <ul>
                                    <li>列表项 1</li>
                                    <li>
                                        列表项 2
                                        <ul>
                                            <li>嵌套列表项 1</li>
                                            <li>嵌套列表项 2</li>
                                        </ul>
                                    </li>
                                    <li>列表项 3</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h5>有序列表</h5>
                                <ol>
                                    <li>第一步</li>
                                    <li>第二步</li>
                                    <li>第三步</li>
                                </ol>
                            </div>
                            <div class="col-md-4">
                                <h5>描述列表</h5>
                                <dl>
                                    <dt>术语 1</dt>
                                    <dd>术语 1 的描述内容</dd>
                                    <dt>术语 2</dt>
                                    <dd>术语 2 的描述内容</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.example-title {
    margin-bottom: 0;
}
</style>

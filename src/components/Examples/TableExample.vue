<script setup lang="ts"></script>

<template>
    <section id="tables" class="section">
        <h2 class="section-title title">表格组件</h2>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-table"></i> 基础表格 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>用户名</th>
                                        <th>邮箱</th>
                                        <th>角色</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>AImixAE Nya Mocha</td>
                                        <td>AImixAE@example.com</td>
                                        <td>
                                            <span class="badge badge-primary"
                                                >管理员</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="status-indicator status-active"
                                            ></span>
                                            活跃
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-sm btn-outline btn-ripple"
                                            >
                                                编辑
                                            </button>
                                            <button
                                                class="btn btn-sm btn-danger btn-ripple"
                                            >
                                                删除
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Zh1yee</td>
                                        <td>zh1yee@example.com</td>
                                        <td>
                                            <span class="badge badge-success"
                                                >编辑者</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="status-indicator status-inactive"
                                            ></span>
                                            停用
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-sm btn-outline btn-ripple"
                                            >
                                                编辑
                                            </button>
                                            <button
                                                class="btn btn-sm btn-danger btn-ripple"
                                            >
                                                删除
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Neko Cookies</td>
                                        <td>nekocookies@example.com</td>
                                        <td>
                                            <span class="badge badge-accent"
                                                >VIP</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="status-indicator status-pending"
                                            ></span>
                                            待定
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-sm btn-outline btn-ripple"
                                            >
                                                编辑
                                            </button>
                                            <button
                                                class="btn btn-sm btn-danger btn-ripple"
                                            >
                                                删除
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-th"></i> 条纹表格 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>产品</th>
                                        <th>价格</th>
                                        <th>库存</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>产品 A</td>
                                        <td>$19.99</td>
                                        <td>45</td>
                                    </tr>
                                    <tr>
                                        <td>产品 B</td>
                                        <td>$29.99</td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td>产品 C</td>
                                        <td>$9.99</td>
                                        <td>78</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-border-all"></i> 边框表格 &nbsp;
                        <a class="btn btn-outline btn-sm">
                            <i class="fas fa-code"></i> Source</a
                        >
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>日期</th>
                                        <th>项目</th>
                                        <th>进度</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2026-01-01</td>
                                        <td>项目 A</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-success"
                                                    style="width: 75%"
                                                >
                                                    75%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2026-01-02</td>
                                        <td>项目 B</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-warning"
                                                    style="width: 40%"
                                                >
                                                    40%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2026-01-03</td>
                                        <td>项目 C</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-danger"
                                                    style="width: 90%"
                                                >
                                                    90%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
